import React from "react";

const Forgotpass = ({ onclick }) => {
  return (
    <div className="forgot">
      <h4>ایمیل خود را وارد کنید</h4>
      <div>
        <input type="email" placeholder="پست الکترونیک" />
      </div>
      <button className="btn-signin" onClick={onclick}>
        ارسال
      </button>
    </div>
  );
};

export default Forgotpass;
