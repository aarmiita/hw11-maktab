import React, { useEffect, useState } from "react";
import "./Signin.css";
import Forgotpass from "./Forgotpass";
import Successsignin from "./Successsignin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Signin = ({ classes }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [send, setSend] = useState(false);
  const [success, setSuccess] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !emailpattern.test(email)) {
      alert("Please add a email");
      return;
    }
    if (!pass) {
      alert("Please add a pass");
      return;
    }

    setEmail("");
    setPass("");
    setSuccess(true);
  };
  return (
    <>
      <form className={`signin-form ${classes}`}>
        <h2>خوش آمدید</h2>
        <div>
          <input
            type="email"
            placeholder="*پست الکترونیک"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type={togglePass ? "text" : "password"}
            placeholder="*کلمه عبور"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <span className="showPass" onClick={() => setTogglePass(!togglePass)}>
            {togglePass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <a href="#" onClick={() => setSend(true)}>
          فراموش کردید
        </a>

        <input
          type="submit"
          value="ورود"
          className="btn-signin"
          onClick={handleSubmit}
        />
      </form>
      {send && <Forgotpass onclick={() => setSend(false)} />}
      {success && <Successsignin onclick={() => setSuccess(false)} />}
    </>
  );
};

export default Signin;
