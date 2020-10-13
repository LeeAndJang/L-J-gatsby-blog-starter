---
title: '[Js] 자바스크립트 중복 제거'
date: 2020-09-24 12:09:49
category: Javascript
thumbnail: { thumbnailSrc }
draft: false
---

### ES5 이하 버전

```javascript
function getUniqueObjectArray(array, key) {
  let tempArray = []
  let resultArray = []
  for (let i = 0; i < array.length; i++) {
    let item = array[i]
    if (tempArray.includes(item[key])) {
      continue
    } else {
      resultArray.push(item)
      tempArray.push(item[key])
    }
  }
  return resultArray
}
```

### ES6 버전

```javascript
function getUniqueObjectArray(array, key) {
  return array.filter((item, i) => {
    return (
      array.findIndex((item2, j) => {
        return item.key === item2.key
      }) === i
    )
  })
}
```

<br>
<br>
<br>

####읽어주셔서 감사합니다.🖐
