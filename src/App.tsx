import * as SC from "./AppStyled";
import SocNet from "./components/SocNet/SocNet";
import Timer from "./components/Timer/Timer";
import Title from "./components/Title/Title";

const App: React.FC = () => {
  return (
    <SC.AppCon>
      <Title />
      <Timer/>
      <SocNet/>
    </SC.AppCon>
  );
};

export default App;
