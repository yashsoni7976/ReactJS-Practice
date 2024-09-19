import React from 'react'
import { useId } from 'react'

function InputBox({
    label,                // Input label ka naam, e.g., "From" ya "To"
    amount,               // Input box mein dikhane ke liye amount value
    onAmountChange,       // Jab amount change ho, is function ko call karenge
    onCurrencyChange,     // Jab currency select ho, is function ko call karenge
    currencyOptions = [], // Dropdown ke liye available currency options
    selectCurrency = "usd", // Default selected currency, agar koi na ho
    amountDisabled = false, // Agar amount input ko disable karna ho, to true set karenge
    currencyDisabled = false, // Agar currency dropdown ko disable karna ho, to true set karenge
    className = "",       // Custom CSS classes agar deni ho to
}) {

    // Unique ID har input ke liye generate karte hain
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Amount input field ke liye section */}
            <div className='w-1/2'>
                {/* Input label (From ya To) */}
                <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>
                    {label}
                </label>

                {/* Amount input box */}
                <input
                    id={amountInputId}              // Label ke sath connect kar rahe hain ID se
                    className='outline-none w-full bg-transparent py-1.5' // Input box styling
                    type='number'                  // Input type number hai
                    placeholder='Amount'           // Placeholder text
                    disabled={amountDisabled}      // Agar disable flag true ho to disable karega
                    value={amount}                 // Current amount value
                    // Jab amount change ho to ye function call karega
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

            {/* Currency selection dropdown ke liye section */}
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40 mb-2 w-full'>Currency Type</p>

                {/* Currency dropdown */}
                <select
                    className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' // Styling
                    value={selectCurrency}            // Selected currency set karte hain
                    // Jab currency change ho to ye function call karega
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisabled}      // Disable flag ke basis par dropdown disable karega
                >
                    {/* Currency options ko map karke dropdown options generate kar rahe hain */}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}  {/* Currency ka naam dropdown mein dikhata hai */}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox
