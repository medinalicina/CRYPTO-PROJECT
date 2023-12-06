import React, { useState, useEffect } from "react";
import axios from "axios";
import ExchangeStats from "./ExchangeStats";
import "./ExchangePage.css";

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
        setExchanges(response.data.data.exchanges);
        console.log(response.data.data.exchanges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="exchange-container">
      <h1>Discover the dynamic universe of cryptocurrencies.</h1>
      {exchanges.map((exchanges) => (
        <ExchangeStats
          key={exchanges.uuid}
          exchanges={exchanges}
        ></ExchangeStats>
      ))}
    </div>
  );
}

export default ExchangesPage;
