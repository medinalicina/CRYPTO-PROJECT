import React, { useEffect } from "react";
import axios from "axios";

function SingleCoinPage() {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
        params: {
          referenceCurrencyUuid: 'yhjMzLPhuIDl',
          timePeriod: '24h'
        },
        headers: {
          'X-RapidAPI-Key': '39e1231c66msh1e9397f9d922770p1ac01djsn60c7f7bb2519',
          'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);  

  return <div>
    <p>amin is my hubby!</p>
    <h2>
    </h2>
    
  </div>;
}

export default SingleCoinPage;
