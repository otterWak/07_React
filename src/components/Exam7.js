// SpringBoot 서버로, React 클라이언트로 사용
//        요청      <->         응답

import React, { useState } from 'react';

const Exam7 = () => {

  const [message, setMessage] = useState(null);
  const [user, setUser] = useState("");

  const getPortNumber = () => {

    fetch("http://localhost/getPortNumber")
    .then( (res) => res.json())
    .then( (data) => {
      console.log(data);
      setMessage(data);
    }).catch((err)=>{
      console.log("err : " + err);
    })
  }

  const getUserInfo = () => {
    // fetch 요청 post
    // headers 설정 필수
    // body JSON 형태로 {name:"홍길동", age:20}
    // 응답받은 값을 user 상태에 세팅
    // catch (err발생 시 코드 작성하기)

    fetch("http://localhost/getUserInfo",{
      method : "POST",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify({"name" : "홍길동", "age" : 20})
    })
    .then((res) => res.text())
    .then((data) => setUser(data))
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <p>1. 서버로부터 응답 받은 값</p>
      <button onClick={getPortNumber}>통신하기</button>
      <ul>
        {message?.map((msg, idx)=> <li key={idx}>{msg}</li>)}
      </ul>

      <br></br>

      <p>2. 서버로 값 전달 후, 응답 받은 값</p>
      <button onClick={getUserInfo}>통신하기</button>
      <p>{user}</p>

    </div>
  );
};

export default Exam7;