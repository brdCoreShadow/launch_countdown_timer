import GeometryLine from "../GeometryLine/GeometryLine";
import * as SC from "./TimerStyled";

const Timer: React.FC = () => {
  return (
    <SC.TimerStyled>
      <li>
        <div>
          <SC.UpperCon></SC.UpperCon>
          {/* <GeometryLine /> */}
          {/* <SC.Number>08</SC.Number> */}
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>days</p>
      </li>
      <li>
        <div>
          <SC.UpperCon></SC.UpperCon>
          <GeometryLine />
          <SC.Number>23</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>hours</p>
      </li>
      <li>
        <div>
          <SC.UpperCon></SC.UpperCon>
          <GeometryLine />
          <SC.Number>55</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>minutes</p>
      </li>
      <li>
        <div>
          <SC.UpperCon></SC.UpperCon>
          <GeometryLine />
          <SC.Number>41</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>seconds</p>
      </li>
    </SC.TimerStyled>
  );
};

export default Timer;
