import React, { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  const listener = () => {
    if (window.pageYOffset > 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div
      onClick={scrollToTop}
      className={`transition-opacity fixed bottom-0 right-0 z-50 p-6 duration-500 ${
        visible ? 'opacity-50 hover:opacity-100 cursor-pointer' : 'opacity-0'
      }`}
    >
      <button
        aria-label="Back to top"
        className="rounded-lg bg-gray-500 hover:bg-gray-700"
      >
        TOP
      </button>
    </div>
  )
}

export default BackToTop
