import { ITimer } from "@/utils/types";
import GeometryLine from "../GeometryLine/GeometryLine";
import * as SC from "./TimerStyled";

const Timer: React.FC<ITimer> = ({timeLeft}) => {
  
    const {days, hours, minutes, seconds} =timeLeft;
  
    return (
    <SC.TimerStyled>
      <li>
        <div>
          <GeometryLine />
          <SC.Number>{days}</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>days</p>
      </li>
      <li>
        <div>
          <GeometryLine />
          <SC.Number>{hours}</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>hours</p>
      </li>
      <li>
        <div>
          <GeometryLine />
          <SC.Number>{minutes}</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>minutes</p>
      </li>
      <li>
        <div>
          <GeometryLine />
          <SC.Number>{seconds}</SC.Number>
          <SC.LowerCon></SC.LowerCon>
        </div>
        <p>seconds</p>
      </li>
    </SC.TimerStyled>
  );
};

export default Timer;
