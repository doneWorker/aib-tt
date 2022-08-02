import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchCoin } from "../api/coins";
import CoinInfo from "../components/Coin.info";
import { ERROR_CANT_LOAD } from "../constants";

/* Specific Coin Page */
const CoinPage = () => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const params = useParams();

  useEffect(() => {
    if (!params.id) return;

    const load = async () => {
      const [coin, err] = await fetchCoin(params.id); // I like golang ;-)

      setLoaded(true);
      err ? setError(ERROR_CANT_LOAD) : setInfo(coin);
    };

    load();
  }, [params]);

  const renderInfo = () => (
    <CoinInfo
      name={info.name}
      symbol={info.symbol}
      hashingAlgo={info.hashing_algorithm}
      description={info?.description?.en}
      marketCap={info?.market_data?.total_volume?.eur}
      homepage={info?.links?.homepage}
      genesisDate={info?.genesis_date}
      className="m-a"
    />
  );
  const renderError = () => <>{error}</>;

  return (
    <div className="mt-3">
      {error ? renderError() : loaded ? renderInfo() : "Loading ..."}
    </div>
  );
};

export default CoinPage;
