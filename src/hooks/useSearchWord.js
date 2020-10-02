import { useEffect, useState, useCallback } from 'react'
import qs from 'query-string'
import * as ScrollManager from '../utils/scroll'

const DEST_POS = 316

export function useSearchWord() {
  const [searchWord, setSearchWord] = useState('')
  const inputSearchWord = useCallback(searchWord => {
    setSearchWord(searchWord)
    window.history.pushState({ searchWord }, '', `${window.location.pathname}`)
  }, [])
  const changeSearchWord = useCallback((withScroll = true) => {
    const { searchWord } = qs.parse(location.search)
    const target = searchWord == null ? '' : searchWord

    setSearchWord(target)
  }, [])

  useEffect(() => {
    changeSearchWord(false)
  }, [])

  return [searchWord, inputSearchWord]
}
