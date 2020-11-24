import { useState, useCallback } from 'react'

export function useExposureGb() {
  const [exposureGb, setExposureGb] = useState('')
  const selectExposureGb = useCallback(exposureGb => {
    setExposureGb(exposureGb)
  }, [])

  return [exposureGb, selectExposureGb]
}
