import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const Context = useContext(AppContext);
  console.log(Context);
  return (
    <>
      <h2 style={{ color: "orange" }}>Home for Context</h2>
    </>
  );
};

export default Home;
