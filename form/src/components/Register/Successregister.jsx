import React from "react";

const Successregister = ({ onclick }) => {
  return (
    <div className="forgot">
      <div>
        <h1>ثبت نام شما با موفقیت انجام شد</h1>
      </div>

      <button className="btn-signin" onClick={onclick}>
        بستن
      </button>
    </div>
  );
};

export default Successregister;
