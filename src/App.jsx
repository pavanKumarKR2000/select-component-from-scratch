import { useState } from "react"
import Select from "./components/Select"

const options = [
  { label: "one", value: "one" },
  { label: "two", value: "two" },
  { label: "three", value: "three" },
  { label: "four", value: "four" },
  { label: "five", value: "five" },
  { label: "six", value: "six" },
  { label: "seven", value: "seven" },
  { label: "eight", value: "eight" },
  { label: "nine", value: "nine" },
  {label:"ten",value:"ten"}]

function App() {

  const [value, setValue] = useState();

  return (
    <div className="flex items-start pt-[150px] bg-blue-50 justify-center w-screen h-screen">
      <Select options={options} value={value} onChange={(val) => setValue(val)} />
    </div>  
  )
}

export default App
