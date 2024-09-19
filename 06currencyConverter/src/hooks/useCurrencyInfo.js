import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Currency data ko store karne ke liye state

    useEffect(() => {
        // Currency API se data fetch karne ke liye useEffect use kar rahe hain
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json()) // Response ko JSON format mein convert karte hain
            .then((result) => {
                // Result mein se currency data ko extract karke state mein set kar rahe hain
                setData(result[currency] || result); // Agar result mein currency ka key nahi mila to pura result le lenge
            })
            .catch((error) => {
                // Agar fetch karte waqt koi error aayi to usko console mein log karenge
                console.error('Error fetching currency data:', error);
            });
    }, [currency]); // Ye effect tab run hoga jab "currency" dependency change hogi

    // Currency data update hone par console mein data ko log karenge
    useEffect(() => {
        console.log('Currency data:', data);
    }, [data[currency]]); // Jab bhi data change hoga, ye effect run karega

    return data; // Updated data ko return karte hain hook se
}

export default useCurrencyInfo;
