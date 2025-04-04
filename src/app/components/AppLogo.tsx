"use client";

import { useState } from "react";

type AppLogoProps = {
    title: string;
    // add other props here if needed
}

export default function AppLogo({title} : AppLogoProps) {
 const [subTitle2,setSubTitle2] = useState("create by twp only"); // state to manage the visibility of the component

  const subTitle = "create by Codingthailand";

  const dateNow = new Date();
  const timeNow =  <p> {dateNow.getHours()} : {dateNow.getMinutes()} </p>;
  const isShow = true;
  const isShowDate = true; // if isShowDate is true, show dateNow

  const onHandleClick = () => {
    setSubTitle2("create by nextjstwp"); // set subTitle2 to "create by twp"
    // alert("Hello World"); // function to handle click event
  }; // function to handle click event


  return (
    <>
      <p style={{ color: "red" }}>{title}</p>
      <button onClick={onHandleClick} style={{ color: "red" }}>
        Click Me
      </button>
      <small style={{ color: "blue" }}>{subTitle}</small>{" "}
      <small style={{ color: "blue" }}>{subTitle2.toUpperCase()}</small>{" "}
      <small style={{ color: "blue" }}>{dateNow.toLocaleDateString()}</small>{" "}
      {
        isShow && <div>เวลานี้ : {timeNow} </div> // if isShow is true, show timeNow
      }
      {isShowDate ? (
        <small style={{ color: "blue" }}>{dateNow.toLocaleDateString()}</small>
      ) : (
        <small style={{ color: "blue" }}>{dateNow.toLocaleTimeString()}</small>
      )}
    </>
  );
}

// react flagment
