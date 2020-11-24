import { useEffect, useState, useCallback } from 'react'
import qs from 'query-string'
import * as ScrollManager from '../utils/scroll'

const DEST_POS = 316

export function useTag() {
  const [tag, setTag] = useState('')
  const selectTag = useCallback(tag => {
    setTag(tag)
    //window.history.pushState({ tag }, '', `${window.location.pathname}`)
  }, [])

  return [tag, selectTag]
}
