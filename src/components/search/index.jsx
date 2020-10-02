import React, { useState, useRef } from 'react'
import { Input } from 'mdbreact'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbreact/dist/css/mdb.css'

import './index.scss'

export const Search = props => {
  const [input, setInput] = useState('')
  const nameInput = useRef()

  const changeHandler = e => {
    //역슬래시 제거
    if (e.target.value.toString().indexOf('\\') != -1) {
      e.target.value.toString().replace(/\\/gi, '')
      setInput({
        input: '',
      })(
        (nameInput.current.state.innerValue = nameInput.current.state.innerValue.replace(
          /\\/gi,
          ''
        ))
      )

      e.preventDefault()
      return false
    }
    setInput(e.target.value)
    props.inputSearchWord(e.target.value)
  }

  const onFormSubmit = e => {
    e.preventDefault()
    // props.inputSearchWord(input)
  }

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        name="input"
        label="검색할 단어를 입력해보세요."
        icon="search"
        onChange={changeHandler}
        ref={nameInput}
      />
    </form>
  )
}

export default Search
