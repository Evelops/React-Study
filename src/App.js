import React from 'react';
import Number from './Number';
import Clock from './Clock';
import Test from './Test';
import Door from './Door';
import './App.css';

const Name=({name})=>{
  return <div>My name is {name}</div> // App compoent에서 props로 name을 받아 화면에 띄어줌.
}

const App = (props) => {
  return(
    <div>
      <Name 
      name="esy"
      />
      age is {props.age}
      <Number/>
      <Clock/>
      <Test/>
      <Door/>
      
    </div> //Name이라는 자식 Component에게 name이라는 값을 넘겨줬음. 추가로 index.js에서 age값을 props인자로 받아서 화면에 띄어줌. 
  );

}

export default App;
