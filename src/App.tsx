import { useEffect, useState } from "react";
import * as SC from "./AppStyled";
import SocNet from "./components/SocNet/SocNet";
import Timer from "./components/Timer/Timer";
import Title from "./components/Title/Title";
import { calculateTimeLeft } from "./utils/handlers";

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);


 useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <SC.AppCon>
      <Title />
      <Timer timeLeft={timeLeft}/>
      <SocNet/>
    </SC.AppCon>
  );
};

export default App;
