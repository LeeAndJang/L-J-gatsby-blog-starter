import React, { useState } from 'react'
import { Input } from 'mdbreact'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbreact/dist/css/mdb.css'

import './index.scss'

export const Search = props => {
  const [input, setInput] = useState('')

  const changeHandler = e => {
    setInput(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()
    props.inputSearchWord(input)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        name="input"
        label="검색할 단어를 입력해보세요."
        icon="search"
        onChange={changeHandler}
      />
    </form>
  )
}

export default Search
