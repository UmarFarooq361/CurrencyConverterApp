import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
 
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    console.log('Currency Info:', currencyInfo)
    console.log('Amount:', amount)
    console.log('Convert to:', to)

    if (currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    } else {
      console.error(`Conversion rate for ${to} is not available`)
    }
  }


  return (
    <>
    <div className="flex flex-wrap justify-center items-center bg-cover w-full h-screen bg-no-repeat"
      style={{ backgroundImage: `url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}>

        <div className="w-full">
          <div className="w-full max-w-md mx-auto p-5 border border-gray-100 rounded-lg bg-white/30 backdrop-blur-sm" >
            <form action="" onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
              <div className="w-full mb-1">
                <InputBox 
                  label="From"
                  amount={amount}
                  currencyOption={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button 
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg
                              border-2 border-white bg-blue-500 text-white px-2 py-1' 
                  onClick={swap}
                  >
                      Swap
                  
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox 
                    label="To"
                    amount={convertedAmount}
                    currencyOption={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />
              </div>
              <button 
                  type='button'
                  className='w-full  
                              border-2 border-white bg-blue-500 text-white px-4 py-3 rounded-lg' 
                  onClick={convert}
                  >
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
          </div>
        </div>

    </div>
    </>
  )
}

export default App
