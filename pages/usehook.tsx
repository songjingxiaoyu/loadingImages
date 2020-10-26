
import useDebounce from '../hooks/useDebounce '
import {useState} from 'react'
const Usehook = () => {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  // @ts-ignore
  const [cancel] = useDebounce(() => {
    setB(a)
  }, 2000, [a])

  const changeIpt = (e: { target: { value: any } }) => {
    setA(e.target.value)
  }
  return <div>
    <input type="text" onChange={changeIpt} />
    { b } { a }
  </div>
}

export default Usehook