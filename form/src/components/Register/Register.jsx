import React,{useState,UseEffect} from 'react'
import "./Register.css"


const Register = ({classes}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!email) {
        alert("Please add a email");
        return;
      }
      if (!pass) {
        alert("Please add a pass");
        return;
      }
      setName("");
      setFname("");
      setEmail("");
      setPass("");

    };
    return (
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
            type="password"
            placeholder="*کلمه عبور"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        
        <input
          type="submit"
          value="ثبت نام"
          className="register-btn"
          onClick={handleSubmit}
        />
      </form>
    )
}

export default Register
