import { useState, useCallback, useRef, useEffect} from 'react'
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let num = '0123456789';
    let char = '[]{}.,/@$<>;:!()-_'

    if(numAllowed) str += num;
    if(charAllowed) str += char;

    for(let i=1; i<=length; i++){
      let ind = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(ind)
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, numAllowed, charAllowed, setPassword])

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 30);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <div className="w-full h-screen bg-black">
      <div className='mx-auto my-8 max-w-2xl h-64 bg-gray-700 rounded-xl p-2 flex flex-col gap-8'>
        <div className='text-center text-white text-3xl font-bold mt-2'>
          Password Generator
        </div>
        <div className='flex justify-center gap-4 h-1/4 mt-2'>
          <input ref={passwordRef} className='w-3/4 rounded-lg p-3 text-xl font-semibold readOnly' type="text" value={password} placeholder="Password" />
          <button onClick={copyPassword} className="bg-blue-500 w-20 rounded-md text-2xl text-white font-semibold hover:bg-blue-800">copy</button>
        </div>
        <div className="flex m-2 gap-8 h-1/4 items-center">
          <div className='flex gap-4 ml-7'>
            <input className=' ' type="range" min={0} max={100} value={length} onChange={(e) => setLength(e.target.value)} id="range"/>
            <label className='text-xl text-orange-500 font-semibold' htmlFor="range">Length:<span style={{color: '#f4ec45', fontSize: 24, marginLeft: 12, fontWeight: 800}}>{length}</span></label>
          </div>
          <div className='flex gap-2'>
            <input id="numAllowed" className='h-6 w-6 hover:cursor-pointer' type="checkbox" defaultChecked={numAllowed} onChange={() => {
              setNumAllowed((prev) => !prev)
            }} />
            <label className='text-xl text-orange-500 font-semibold' htmlFor="numAllowed">Numbers</label>
          </div>
          <div className='flex gap-2'>
            <input id="charAllowed" className='h-6 w-6 hover:cursor-pointer' type="checkbox" onChange={() => {
              setCharAllowed((prev) => !prev)
            }} defaultChecked={charAllowed}/>
            <label className='text-xl text-orange-500 font-semibold' htmlFor="charAllowed">Characters</label>
          </div>
        </div>
      </div>  
   </div>
)}

export default App
