import React, { useState, useEffect } from "react";
import axios from "axios";

function ExchangesPage() {
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          limit: "50",
          offset: "0",
          orderBy: "24hVolume",
          orderDirection: "desc",
        },
        headers: {
          "X-RapidAPI-Key":
            "31688f1d59mshd92eb1977e8cb10p199c91jsnebce3fbfba5e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setExchanges(response.data.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div style={{ height: "100vh" }}>
      <h1>Exchanges</h1>
    </div>
  );
}

export default ExchangesPage;
