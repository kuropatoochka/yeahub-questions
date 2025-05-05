import { useCallback, useEffect, useRef } from "react";

export const useDebounceCallback = <T extends ( ...args: any[] ) => void>( callback: T, delay: number ) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  }, [ callback ])

  const debounced = useCallback(( ...args: Parameters<T> ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      savedCallback.current(...args)
    }, delay)
  }, [ delay ])


  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debounced as T
}