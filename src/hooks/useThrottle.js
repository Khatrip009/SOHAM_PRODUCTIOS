import { useRef } from 'react'
export default function useThrottle(fn, wait = 100) {
  const last = useRef(0)
  return (...args) => {
    const now = Date.now()
    if (now - last.current >= wait) {
      last.current = now
      fn(...args)
    }
  }
}
