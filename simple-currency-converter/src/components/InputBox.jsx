import { useState, useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions,
    selectedCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className='',     
}){
    const InputId = useId()
    return(
        <div className={`h-1/3 w-3/4 bg-white mx-auto p-3 rounded-2xl flex ${className} justify-around`}>
            <div className='flex flex-col justify-around w-1/3 items-center '>
                <label
                    className='text-2xl font-semibold' 
                    htmlFor={InputId}
                    >{label}
                </label>
                <input
                    className="bg-gray-200 w-fit text-semibold"
                    id={InputId} 
                    type="number" 
                    value={amount}
                    onChange={onAmountChange}
                    disabled={amountDisable}
                />
            </div>
            <div className='flex flex-col justify-around w-1/3 items-center '>
                <p className="text-xl text-black font-semibold">Currency Type</p>
                <select
                    value={selectedCurrency}
                    onChange={onCurrencyChange}
                    disabled={currencyDisable}
                    className='w-fit bg-gray-200 text-semibold'>
                        {currencyOptions.map((currency) => (
                            <option value={currency} key={currency}>{currency}</option>
                        ))}

                </select>
            </div>
        </div>
    )
}
export default InputBox