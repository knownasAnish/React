import { useState, useEffect } from 'react'
import InputBox from './components/InputBox.jsx'
import UseCurrencyInfo from './hooks/UseCurrencyInfo.js';

function App() {

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();
  // console.log(from)
  const currencyInfo = UseCurrencyInfo(from)
  console.log("currencyInfo",currencyInfo)
  const options = Object.keys(currencyInfo)
  console.log("options",options);

  function convert(){
    setConvertedAmount(currencyInfo[to]*amount)
  }
  useEffect(() => {
    convert()
  }, [amount, from, to])
  
  function swap(){
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }
  return (
    <>
      <div className='h-screen w-full flex flex-col gap-9 justify-center items-center' style={{backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`}}>
        {/* <h1 className="text-white text-8xl font-bold absolute top-10">Currency Converter</h1> */}
        <div className='h-1/2 w-1/2 backdrop-blur-sm bg-white/30 rounded-3xl flex flex-col gap-9 items-center pt-14'>
          <InputBox label="From" amount={amount} onAmountChange={(e) => setAmount(e.target.value)} onCurrencyChange={(e) => setFrom(e.target.value)} currencyOptions={options} selectedCurrency={from} amountDisable={false} currencyDisable={false}  />
          <InputBox label="To" amount={convertedAmount} onCurrencyChange={(e) => setTo(e.target.value)} currencyOptions={options} selectedCurrency={to} amountDisable={true} currencyDisable={false} />
          <button onClick={convert} className="w-fit p-3 bg-blue-600 h-fit rounded-2xl text-xl font-bold text-white">convert {amount} {from.toUpperCase()} to {to.toUpperCase()}</button>
          <button onClick={swap} className="absolute bg-blue-800 text-white w-32 h-12 rounded-2xl text-2xl font-bold top-48">swap</button>
        </div>
      </div>
    </>
    
  )
}

export default App
