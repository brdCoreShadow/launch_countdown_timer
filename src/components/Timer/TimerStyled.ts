import styled from "@emotion/styled";

export const TimerStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 260px;
  margin-left: 24px;
  margin-right: 24px;

  & > li {
    text-transform: uppercase;

    &:not(:last-of-type) {
      margin-right: 16px;
    }

    & > p {
      margin-top: 10px;

      font-size: 7px;
      font-weight: 700;
      letter-spacing: 2.96px;

      color: #8385a9;
    }

    & > div {
      position: relative;

      height: 72px;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;


      background-color: #343650;

      border-radius: 4px;

      box-shadow: 0 4px 6px -2px rgba(0, 0, 0, 0.6);

      overflow: hidden;
    }
  }
`;


export const LowerCon = styled.div`
  display: inline-block;

  width: 70px;
  height: 50%;

  background-color: #343650;

  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;

  opacity: 0.2;
`;

export const Number = styled.h3`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  font-size: 36px;
  line-height: 1.97;
  letter-spacing: -1.08px;
  font-weight: 700;

  color: #fb5e84;
`;
