import { formatPrice } from "../helpers/formatters";

import styles from "./Coin.info.module.css";

/* TODO: describe in this config how to treat each field,
    to not have so many code duplicates in jsx */
const propsToLabels = {
  name: "Name",
  symbol: "Symbol",
  hashingAlgo: "Hashing algorithm",
  description: "Description",
  marketCap: "Market cap in Euro",
  homepage: "Homepage",
  genesisDate: "Genesis Date",
};

const getLabel = (name) => propsToLabels[name];

const CoinInfo = (props) => {
  const {
    name,
    symbol,
    hashingAlgo,
    description,
    marketCap,
    homepage,
    genesisDate,
  } = props;

  return (
    <div className={styles.info}>
      <div className={styles.row}>
        <div className={styles?.label}>{getLabel("name")}</div>
        <div className={styles?.desc}>{name || "N/A"}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("symbol")}</div>
        <div className={styles.desc}>{symbol || "N/A"}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("hashingAlgo")}</div>
        <div className={styles.desc}>{hashingAlgo || "N/A"}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("description")}</div>
        <div
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: description || "N/A" }}
        />
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("marketCap")}</div>
        <div className={styles.desc}>
          {marketCap ? formatPrice(marketCap) : "N/A"}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("homepage")}</div>
        <div className={styles.desc}>
          {homepage ? (
            <a href={homepage} target="_blank">
              Open Link
            </a>
          ) : (
            "N/A"
          )}
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>{getLabel("genesisDate")}</div>
        <div className={styles.desc}>{genesisDate || "N/A"}</div>
      </div>
    </div>
  );
};

export default CoinInfo;
