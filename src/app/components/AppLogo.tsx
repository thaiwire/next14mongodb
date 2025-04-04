export default function AppLogo() {
  const subTitle = "create by Codingthailand";
  const dateNow = new Date();
  const timeNow = <p>{dateNow.toLocaleTimeString()}</p>;

  return (
    <>
      <p style={{ color: "red" }}>My Logo</p>
      <small style={{ color: "blue" }}>{subTitle}</small>{" "}
      <small style={{ color: "blue" }}>{dateNow.toLocaleDateString()}</small>{" "}
      {timeNow}
    </>
  );
}

// react flagment
