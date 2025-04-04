"use client";

export default function AppLogo() {
  const subTitle = "create by Codingthailand";
  const dateNow = new Date();
  const timeNow =  <p> {dateNow.getHours()} : {dateNow.getMinutes()} </p>;
  const isShow = true;
  const isShowDate = true; // if isShowDate is true, show dateNow

  const onHandleClick = () => {
    alert("Hello World"); // function to handle click event
  }; // function to handle click event

  return (
    <>
      <p style={{ color: "red" }}>My Logo</p>
      <button onClick={onHandleClick} style={{ color: "red" }}>
        Click Me
      </button>
      <small style={{ color: "blue" }}>{subTitle}</small>{" "}
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
