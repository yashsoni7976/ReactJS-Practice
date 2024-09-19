import { InputBox } from "./components";
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useState } from "react";

function App() {
  // Initial amount set kiya
  const [amount, setAmount] = useState(0);

  // "From" aur "To" currencies set kar rahe hain (default: USD to INR)
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // Converted amount ko track karne ke liye state
  const [convertedAmount, setConvertedAmount] = useState(0);

  // "From" currency ki information ko fetch kar rahe hain
  const currencyInfo = useCurrencyInfo(from);

  // Currency options list ko generate kar rahe hain based on fetched data
  const options = Object.keys(currencyInfo);

  // Swap button se from aur to currencies ko swap kar rahe hain
  const swap = () => {
    // "From" aur "To" currency ko swap kiya
    setFrom(to);
    setTo(from);

    // Amount ko swap karte waqt update kiya (from amount to converted amount)
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  // Convert button press karne par conversion formula apply karte hain
  const convert = () => {
    if (currencyInfo[to]) {
      // Conversion karte hain amount * conversion rate ke basis par
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      // Background image set kiya
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            // Form submit hone par conversion logic ko call kiya
            onSubmit={(e) => {
              e.preventDefault(); // Default form action ko prevent kiya
              convert(); // Conversion logic call kiya
            }}
          >
            <div className="w-full mb-1">
              {/* "From" currency input field */}
              <InputBox
                label="From"
                amount={amount} // Current amount
                currencyOptions={options} // Currency dropdown options
                // Currency change hone par "from" currency update ki
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from} // Selected currency set ki
                // Amount change hone par update kar rahe hain
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              {/* Swap button */}
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Swap function call kiya
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              {/* "To" currency input field */}
              <InputBox
                label="To"
                amount={convertedAmount} // Converted amount dikhaya
                currencyOptions={options} // Currency dropdown options
                // "To" currency ko update karne ke liye
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to} // Selected currency set kiya
                amountDisabled // Amount field ko disabled kiya because it's auto-calculated
              />
            </div>
            {/* Convert button */}
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()} {/* Button label */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
