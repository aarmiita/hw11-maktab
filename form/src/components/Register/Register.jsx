import React, { useState, UseEffect } from "react";
import "./Register.css";
import Successregister from "./Successregister";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Register = ({ classes }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [fname, setFname] = useState("");
  const [success, setSuccess] = useState(false);
  const [togglePass, setTogglePass] = useState(false);

  const emailpattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("لطفا پسورد را به درستی وارد کنید ");
      return;
    }
    if (!fname) {
      alert("لطفا پسورد را به درستی وارد کنید ");
      return;
    }
    if (!email || !emailpattern.test(email)) {
      alert("لطفا ایمیل را به درستی وار کنید");
      return;
    }
    if (!pass) {
      alert("لطفا پسورد را به درستی وارد کنید ");
      return;
    }
    setName("");
    setFname("");
    setEmail("");
    setPass("");
    setSuccess(true);
  };
  return (
    <>
      <form className={`register-form ${classes}`}>
        <h2>رایگان ثبت نام کنید</h2>
        <div className="signout-control">
          <input
            type="text"
            placeholder="*نام"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="*نام خانوادگی"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div className="register-control">
          <input
            type="text"
            placeholder="*پست الکترونیک"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register-control">
          <input
            type={togglePass ? "text" : "password"}
            placeholder="*کلمه عبور"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />{" "}
          <span
            className="showPass-register"
            onClick={() => setTogglePass(!togglePass)}
          >
            {togglePass ? <AiFillEye /> : <AiFillEyeInvisible />}
          </span>
        </div>

        <input
          type="submit"
          value="ثبت نام"
          className="register-btn"
          onClick={handleSubmit}
        />
      </form>
      {success && <Successregister onclick={() => setSuccess(false)} />}
    </>
  );
};

export default Register;
