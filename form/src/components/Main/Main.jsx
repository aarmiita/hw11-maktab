import React ,{useState}from 'react';
import Signin from "../Signin/Signin";
import Register from "../Register/Register";
import Button from "../Button/Button";
import "./Main.css"

const Main = () => {
const [toggleState, setToggleState] = useState(1);
const toggleTab= (index)=>{
    setToggleState(index);
}
    return (

        <div className="main ">
        <div className="container">
            <div className="btns">
            <Button btnContent="ورود" onclick={()=>toggleTab(1)} classes={toggleState === 1 ? "active-tab":"tab"}/>
            <Button btnContent="ثبت نام" onclick={()=>toggleTab(2)} classes={toggleState === 2 ? "active-tab":"tab"} />
            </div>
<div className="forms">

      <Signin classes={toggleState === 1 ? "active-content":"content"}/>
      <Register classes={toggleState === 2 ? "active-content":"content"}/>

</div>

        </div></div>
    )
}

export default Main;
