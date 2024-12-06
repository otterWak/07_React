// 상태 내리꽂기(Props Drilling) : 부모가 가진 데이터를 자식에게 전달해서 자식이 이용할 수 있게 해줌

import React, { useState } from 'react';

// 부모 컴포넌트
const Exam3 = () => {

  const [name, setName] = useState("홍길동");
  // react 컴포넌트의 stats를 변경해야 할 때
  // 무조건 setState를 통해서 업데이트를 해 줘야 하며,
  // 업데이트 하는 과정에서 기존의 상태값을 짓ㄱ접적으로 수정하면 안된다

  return (
    // 자식 컴포넌트 (Child1에 부모의 상태인 name 값을
    // username이라는 key에 세팅하여 props를 통해 전달)
    <Child1 username={name}/>
  );
};

// 자식 컴포넌트
const Child1 = (props) => {
  console.log(props);

  return (
    <div>
      <p>안녕</p>    
      <p>나는 {props.username}이야</p>
      <p>{props.age}</p>

      <Child2 name={props.username}/>
    </div>
  );
};

// 자식의 자식 컴포넌트
const Child2 = (props) => {
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
};








// 부모 컴포넌트
export default Exam3;


