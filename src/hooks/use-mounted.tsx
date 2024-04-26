'use client'

import { useEffect, useState } from 'react'

/**
 * @info
 * A hook to check if a component is mounted or not
 */

export default function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}
