import React from "react";

const Successsignin = ({ onclick }) => {
  return (
    <div className="forgot">
      <div>
        <h1>شما با موفقیت وارد شدید</h1>
      </div>

      <button className="btn-signin" onClick={onclick}>
        بستن
      </button>
    </div>
  );
};

export default Successsignin;
