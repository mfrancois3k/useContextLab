import { useContext } from "react";
import { AppContext } from "../App";

const Red = () => {
  const Context = useContext(AppContext);
  console.log(Context);
  return (
    <>
      <h1 style={{ color: "Red" }}>Red for Context</h1>
    </>
  );
};

export default Red;
