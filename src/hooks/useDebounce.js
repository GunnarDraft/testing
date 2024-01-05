import { useEffect, useRef } from 'react';


export default function useDebounce(func, delay = 1000) {
    const timer = useRef()

    useEffect(() => {
        return () => {
            if (!timer.current) return
            clearTimeout(timer.current)
        }
    }, [])

    const debouncedFunction = ((...args) => {
        const time = setTimeout(() => {
            func(...args)
        }, delay)
        clearTimeout(timer.current)
        timer.current = time
    })

    return debouncedFunction
}