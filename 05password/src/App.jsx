import { useState , useCallback , useEffect, useRef} from "react"

function App() {

  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [charater, setCharater] = useState(false)
  const [Password, setPassword] = useState("")

  const Passwordref = useRef(null)

  const PasswordGenrator = useCallback( () => {
    let pass = ""
    let str =  "ABCDEFGHIJKLMNOPRSTUVWXYZabcefghijklmnopqrstuvwxyz"
    if (number) str += "0123456789"
    if (charater) str += "!@#$^*():_-|~`+='"

    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,number,charater,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    Passwordref.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=> {
    PasswordGenrator()
  }, [length,number,charater,PasswordGenrator])

  return (
    <>
    <div className="text-4xl text-white text-center py-5">Password Generator</div>

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-blue-600 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Genrator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          value={Password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={Passwordref}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-600 text-white px-3 py-0.5  shrink-0"
        
        >copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {
              setNumber((prev)=>(!prev));
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input 
            type="checkbox"
            defaultChecked={number}
            id="charInput"
            onChange={() => {
              setCharater((prev)=>(!prev));
            }}
          />
          <label htmlFor="charInput">Charaters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
