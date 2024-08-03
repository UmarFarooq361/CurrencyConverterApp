// import { useState, useEffect } from "react";

// function useCurrencyInfo (currency){
//     const [data, setData] = useState({})
//     useEffect(
//         () =>{
//             fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//             .then((res) => res.json())
//             .then((res) => setData(res[currency]))
//             console.log(data)
//         },
//         [currency]
//     )
// }

// export default useCurrencyInfo

import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Try fetching data from the primary URL
        let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        let result = await response.json();
        setData(result[currency]);
      } catch (error) {
        console.error("Primary URL failed, trying fallback:", error);
      }
    };

    fetchData();
  }, [currency]);

  return data ;
}

export default useCurrencyInfo;
