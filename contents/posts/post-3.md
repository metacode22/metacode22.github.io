---
date: '2022-06-22'
title: '썸네일 없으면 으째 되누!'
summary: '뀨잉뀨잉'
thumbnail: '../images/test.png'
categories: ['featured', '일상']
---

![](https://velog.velcdn.com/images/metamong/post/6a0f7dae-88fc-4c8a-8ac0-5f53f13dc589/image.png)

NextJS에서 mongodb를 다루다가 갑자기 이런 에러가 떴었다. 오타가 났나 10분 동안 찾아봤는데 없어서 바로 구글링을 했다.

![](https://velog.velcdn.com/images/metamong/post/02413a6c-9190-4760-9051-652e6ea1d74b/image.png)
https://stackoverflow.com/questions/60063820/getting-replicasetnoprimary-and-mongoserverselectionerror-error-while-connecting

처음엔 저 `ReplicaSetNoPrimary`라는 키워드로 검색했는데 해결 방법들이 마땅치 않았다. 근데 `MongoServerSelectionError`로 검색하니 바로 위 스택오버플로우 답변을 보고 실마리를 찾을 수 있었다.

단순히 mongodb에 접근하는 ip가 허용된 ip가 아니기에 생기는 문제였다.

![](https://velog.velcdn.com/images/metamong/post/81a13e44-3e3f-46cf-983e-e0300fd3ec98/image.png)

위 사진과 같이 Network Access에서 ADD CURRENT IP ADDRESS 버튼을 통해 현재 ip를 추가해주면 된다. 내가 잠시 위치를 옮겼는데 그러면서 와이파이가 바뀌었기에 이런 일이 벌어지지 않았나 싶다.(맞나..?)

