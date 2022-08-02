import { useNavigate } from "react-router-dom";
import { formatPrice } from "../helpers/formatters";

import styles from "./Coin.item.module.css";

const Coin = (props) => {
  const { img, name, symbol, price, high24, low24, idx, id } = props;
  const navigate = useNavigate();

  const handleClick = () => navigate(`/coin/${id}`);

  return (
    <tr className={styles.coin} onClick={handleClick}>
      <td>
        <div className={styles.cell}>{idx}</div>
      </td>
      <td>
        <div className={styles.cell}>
          <img src={img} alt={`Icon for ${symbol}`} />
          {name}
        </div>
      </td>
      <td>
        <div className={styles.cell}>{symbol.toUpperCase()}</div>
      </td>
      <td>
        <div className={styles.cell}>{formatPrice(price)}</div>
      </td>
      <td>
        <div className={styles.cell}>{formatPrice(high24)}</div>
      </td>
      <td>
        <div className={styles.cell}>{formatPrice(low24)}</div>
      </td>
    </tr>
  );
};

export default Coin;
