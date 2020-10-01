import React, { useCallback, useRef, Component } from 'react'
import { rhythm } from '../../utils/typography'
import './index.scss'
import { Item } from './item'
import ScrollMenu from 'react-horizontal-scrolling-menu'

// const list = [
//   { name: 'item1' },
//   { name: 'item2' },
//   { name: 'item3' },
//   { name: 'item4' },
//   { name: 'item5' },
//   { name: 'item6' },
//   { name: 'item7' },
//   { name: 'item8' },
//   { name: 'item9' }
// ];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return <div className={`menu-item ${selected ? 'active' : ''}`}>{text}</div>
}

// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const { name } = el

    return <MenuItem text={name} key={name} selected={selected} />
  })

const Arrow = ({ text, className }) => {
  return <div className={className}>{text}</div>
}

const ArrowLeft = Arrow({ text: '◀', className: 'arrow-prev' })
const ArrowRight = Arrow({ text: '▶', className: 'arrow-next' })

const selected = 'item1'

export const Category = ({ categories, category, selectCategory }) => {
  const containerRef = useRef(null)

  const scrollToCenter = useCallback(
    tabRef => {
      const { offsetWidth: tabWidth } = tabRef.current
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current
      const tabLeft = tabRef.current.getBoundingClientRect().left
      const containerLeft = containerRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      containerRef.current.scroll({
        left: targetScollX,
        top: 0,
        behavior: 'smooth',
      })
    },
    [containerRef]
  )

  // state = {
  //   selected,
  // }

  // onSelect = key => {
  //   this.setState({ selected: key })
  // }
  let list = categories.map((title, idx) => ({ name: title, key: idx }))
  list.unshift({ name: 'All' })


  const menu = Menu(list, selected)

  return (
    // <ul
    //   ref={containerRef}
    //   className="category-container"
    //   role="tablist"
    //   id="category"
    //   style={{
    //     margin: `0 -${rhythm(3 / 4)}`,
    //     overflowX: 'scroll',
    //   }}
    // >
    //   <Item
    //     title={'All'}
    //     selectedCategory={category}
    //     onClick={selectCategory}
    //     scrollToCenter={scrollToCenter}
    //   />
    //   {categories.map((title, idx) => (
    //     <Item
    //       key={idx}
    //       title={title}
    //       selectedCategory={category}
    //       onClick={selectCategory}
    //       scrollToCenter={scrollToCenter}
    //     />
    //   ))}
    // </ul>
    <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={selected}
      onSelect={selectCategory}
    />
  )
}
