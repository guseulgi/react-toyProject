import React from 'react'

export default function MyPage({ id, name} :{
  id: string,
  name :string,
}) {
  if(id && name) {
    return (
      <div>
        <p>{name} 님 환영합니다</p>
      </div>
    )
  } else {
    return (
      <div>
        <p>사용자 데이터를 제대로 받아오지 못하였습니다.</p>
      </div>
    )
  }

}
