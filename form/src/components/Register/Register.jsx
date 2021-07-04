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
  const [province, setProvince] = useState("");
  const [city, setCity] = useState(false);
  const [newCities, setNewCities] = useState("");
  const [subCities, setSubCities] = useState([]);
  const [degree, setDegree] = useState("");
  const [degreePlace, setDegreePlace] = useState(false);
  const [studyPlace, setStudyPlace] = useState("");
  const handleDegree = (e) => {
    setDegree(e.target.value);
    if (e.target.value === "") {
      setDegreePlace(false);
    } else {
      setDegreePlace(true);
    }
  };
  const handleProvince = (e) => {
    setProvince(e.target.value);
    if (e.target.value === "") {
      setCity(false);
    } else {
      setCity(true);
      if (e.target.value === "tehran") {
        setSubCities([{ name: "تهران" }, { name: "کرج" }]);
      }
      if (e.target.value === "ghom") {
        setSubCities([{ name: "قم" }, { name: "	جعفریه" }]);
      }
      if (e.target.value === "mazandaran") {
        setSubCities([{ name: "ساری" }, { name: "بابل" }]);
      }
      if (e.target.value === "khorsanRazavi") {
        setSubCities([{ name: "مشهد" }, { name: "چناران" }]);
      }
      if (e.target.value === "kerman") {
        setSubCities([{ name: "کرمان" }, { name: "سیرجان" }]);
      }
      if (e.target.value === "golestan") {
        setSubCities([{ name: "گرگان" }, { name: "کردکوی" }]);
      }
      if (e.target.value === "gilan") {
        setSubCities([{ name: "رشت" }, { name: "بندرانزلی" }]);
      }
      if (e.target.value === "Isfahan") {
        setSubCities([{ name: "اصفهان" }, { name: "شاهین شهر" }]);
      }
      if (e.target.value === "hamedan") {
        setSubCities([{ name: "همدان" }, { name: "نهاوند" }]);
      }
      if (e.target.value === "shiraz") {
        setSubCities([{ name: "شیراز" }, { name: "مرو دشت" }]);
      }
    }
  };
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
    if (setDegreePlace) {
      if (!studyPlace) {
        alert("لطفا محل تحصیل خو را ورا کنید");
        return;
      }
    }
    setName("");
    setFname("");
    setEmail("");
    setPass("");
    setDegree("");
    setProvince("");
    setCity(false);
    setDegreePlace(false);
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
            {togglePass ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>
        <div className="register-control">
          <select value={degree} onChange={handleDegree}>
            <option value="">مدرک تحصیلی</option>
            <option value="diplom">دیپلم</option>
            <option value="karshenasi">کارشناسی</option>
            <option value="karshenasiArshad">کارشناسی ارشد</option>
            <option value="doctora">دکتری</option>
          </select>
        </div>
        <div className="degreePlace">
          {degreePlace && (
            <input
              type="text"
              placeholder="محل تحصیل"
              value={studyPlace}
              onChange={(e) => setStudyPlace(e.target.value)}
            />
          )}{" "}
        </div>
        <div className="register-control">
          <select value={province} onChange={handleProvince}>
            <option value="">استان</option>
            <option value="tehran">تهران</option>
            <option value="ghom">قم</option>
            <option value="mazandaran">مازندران</option>
            <option value="khorsanRazavi">خراسان رضوی</option>
            <option value="kerman">کرمان</option>
            <option value="golestan">گلستان</option>
            <option value="gilan">گیلان</option>
            <option value="Isfahan">اصفهان</option>
            <option value="hamedan">همدان</option>
            <option value="shiraz">شیراز</option>
          </select>
        </div>
        {city && (
          <div>
            <select
              value={newCities}
              onChange={(e) => setNewCities(e.target.value)}
            >
              {subCities.map((city, index) => {
                return (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>
        )}

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
