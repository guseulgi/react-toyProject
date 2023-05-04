import React from 'react'

export default function JoinBtn({ age } :{ age: number}) {
  return (
    <>
    {age > 14 ? <label>회원 가입이 가능</label> : <label>회원 가입이 불가능</label>}
    <button disabled={age > 14} style={
      age > 14 ? {backgroundColor : 'blue'} : {backgroundColor : 'red'}
    }>가입</button>
    </>
  )
}
