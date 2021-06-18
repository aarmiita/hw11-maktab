import React,{useEffect,useState} from 'react'
import "./Signin.css"
const Signin = ({classes}) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
  
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
  
      setEmail("");
      setPass("");
    };
    return (
        <form className={`signin-form ${classes}`}>
          <h2>خوش آمدید</h2>
          <input
            type="text"
            placeholder="*پست الکترونیک"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*کلمه عبور"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <a href="#">فراموش کردید</a>

        <input
          type="submit"
          value="ورود"
          className="btn-signin"
          onClick={handleSubmit}
        />

      </form>
    )
}

export default Signin
