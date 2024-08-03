import React, { useId } from 'react'

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) => {

const amountId =  useId()
  return (
    <div className={`flex bg-white/90 py-3 px-3  rounded-lg text-sm ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className='text-black inline-block mb-2'>
          {label}
        </label>
        <input 
          id={amountId}
          type="number" 
          className="outline-none bg-transparent w-full py-2" 
          placeholder='Amount'
          disabled = {amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black w-full mb-2">Currency Type</p>
        <select className='bg-gray-200 outline-none rounded-lg py-1 px-1 cursor-pointer'
          value={selectCurrency} 
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled = {currencyDisable}>

            {currencyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))} 
        </select>
      </div>
    </div>
  )
}

export default InputBox