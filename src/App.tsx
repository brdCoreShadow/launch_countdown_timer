import * as SC from "./AppStyled";
import Timer from "./components/Timer/Timer";
import Title from "./components/Title/Title";

const App: React.FC = () => {
  return (
    <SC.AppCon>
      <Title />
      <Timer/>
    </SC.AppCon>
  );
};

export default App;
