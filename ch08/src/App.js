import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseStateCompo from "./components/UseStateCompo";
import UseEffectCompo from "./components/UseEffectCompo";
import UseRefCompo from "./components/UseRefCompo";
/*
  날짜 : 2020/10/21
  이름 : 강래구
  내용 : 컴포넌트 훅 실습하기

  React Hooks
    - 함수형 컴포넌트에서 사용되는 특별한 기능 갖는 함수들
    - 훅 함수를 이용해서 함수형 컴포넌트에서도 컴포넌트의 상태값, 생명주기 함수를 구현할 수있다.

  useState()
    - 함수형 컴포넌트에서 상태값을 관리하는 Hooks(기능, 함수)
    - 가장 많이 사용하는 리액트 Hook

  useEffect()
    - 함수형 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 실행하는 hook
    - 클래스형 컴포넌트의 componentDidMount, componentDidUpdate 생명주기 함수와 동일하다.

  useRef()
    - 함수형 컴포넌트에서 ref를 생성, 할당할 수 있게 하는 hook
*/
function App() {
  return (
    <div className="App">
      <h3>ch08. 리액트 훅</h3>

      <h4>1.useState</h4>
      <UseStateCompo />
      <h4>2.useEffect</h4>
      <UseEffectCompo />
      <h4>3.useRef</h4>
      <UseRefCompo />
    </div>
  );
}

export default App;
