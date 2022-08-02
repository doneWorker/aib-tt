import { useEffect, useState } from "react";

import { fetchCoins } from "../api/coins";
import CoinsTable from "../components/Coins.table";
import { ERROR_CANT_LOAD } from "../constants";

const ListPage = () => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      const [list, err] = await fetchCoins(10); // I like golang ;-)

      err ? setError(ERROR_CANT_LOAD) : setCoins(list);
    };

    load();
  }, []);

  const renderCoins = () => <CoinsTable coins={coins} className="m-a" />;
  const renderError = () => <>{error}</>;

  return <div className="mt-3">{error ? renderError() : renderCoins()}</div>;
};

export default ListPage;
