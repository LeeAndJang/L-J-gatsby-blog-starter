---
title: Git 명령어
date: 2020-10-21 22:10:36
category: Git
thumbnail: { thumbnailSrc }
draft: false
tags: ['git', 'gatsby']
---

## [GIT] 자주 사용하는 Git 명령어 모음

---

1. git init <br>
   Git 저장소 생성. 실행시 저장소 구성을 위한 .git 폴더가 생성된다.

2. git remote add [별칭][원격지 주소]

   ```
   $ git remote add origin https://github.com/jcwooo/ggb
   ```

'origin'은 원격 저장소를 가르키는 별칭이다.

3. git status
   현재 저장소 파일들의 상태를 확인한다. 파일을 수정하였다면 위 명령으로 확인할 수 있다.

   ```
   $ git status
   On branch master
   Changes not staged for commit:
   (use "git add <file>..." to update what will be committed)
   (use "git restore <file>..." to discard changes in working directory)
           modified:   src/html.js
   ```

src/html.js 파일이 수정되었음을 확인할 수 있다.

4. git add <br>
   git status로 수정 파일을 저장소로 반영하기 위해선 인덱스에 파일을 추가해야한다.
   Git Repository 구조는 '작업폴더(Working Directory) > 인덱스(Staging Area) > 저장소(Head Repository)로 구성된다. <br>
   git add 명령은 저장소에 commit 하기 위해 추가 및 수정 파일을 인덱스에 기록한다.

   ```
   $ git add src/html.js
   ```

5. git commit -m [설명] <br>
   인덱스(Staging Area)에 올린 변경사항을 Head에 적용한다.

   ```
   $ git commit -m "html 변경"
   ```

6. git push origin master <br>
   변경 내용을 원격 저장소로 보낸다.
   ```
   $ git push origin master
   ```
