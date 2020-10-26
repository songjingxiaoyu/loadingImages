import { useEffect, useRef } from 'react'

const useDebounce = (fn: () => void, ms = 30, deps = []) => {
    let timeout = useRef()
    useEffect(() => {
        if (timeout.current) clearTimeout(timeout.current)
        // @ts-ignore
        timeout.current = setTimeout(() => {
            fn()
        }, ms)
    }, deps)
    const cancel = () => {
        clearTimeout(timeout.current)
        timeout == null
    }

    return [cancel]
  }

export default useDebounce