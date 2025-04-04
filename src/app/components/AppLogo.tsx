

export default function AppLogo() {
  const subTitle = "create by Codingthailand";
  const dateNow = new Date();
  const timeNow = <p>{dateNow.toLocaleTimeString()}</p>;
  const isShow = true;
  const isShowDate = true; // if isShowDate is true, show dateNow

  return (
    <>
      <p style={{ color: "red" }}>My Logo</p>
      <small style={{ color: "blue" }}>{subTitle}</small>{" "}
      <small style={{ color: "blue" }}>{dateNow.toLocaleDateString()}</small>{" "}
      

      {
        isShow && <div>เวลานี้ : {timeNow} </div> // if isShow is true, show timeNow
      }

      {
        isShowDate ? <small style={{ color: "blue" }}>{dateNow.toLocaleDateString()}</small>
        : <small style={{ color: "blue" }}>{dateNow.toLocaleTimeString()}</small>
      }
    </>
  );
}

// react flagment
