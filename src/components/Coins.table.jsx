import classnames from "classnames";

import Coin from "./Coin.item";

import styles from "./Coins.table.module.css";

const headers = [
  "#",
  "Name",
  "Symbol",
  "Price",
  "High 24 hour price",
  "Low 24 hour price",
];

const CoinsTable = ({ coins, className = "" }) => {
  return (
    <table className={classnames(styles.table, className)}>
      <thead>
        <tr>
          {headers.map((name, idx) => (
            <th key={idx}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {coins.map((c, idx) => (
          <Coin
            key={c.id}
            id={c.id}
            idx={idx + 1}
            img={c.image}
            price={c.current_price}
            high24={c.high_24h}
            low24={c.low_24h}
            name={c.name}
            symbol={c.symbol}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CoinsTable;
