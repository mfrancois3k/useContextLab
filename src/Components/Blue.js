import { useContext } from "react";
import { AppContext } from "../App";

const Blue = () => {
  const Context = useContext(AppContext);
  console.log(Context);
  return (
    <>
      <h2 style={{ color: "blue" }}>Blue for Context</h2>
    </>
  );
};

export default Blue;
