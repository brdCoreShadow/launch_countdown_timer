import styled from "@emotion/styled";

export const Line = styled.div`
  position: relative;

  display: inline-block;

  width: 70px;
  height: 0.5px;

  background-color: #000;

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    transform: translate(-50%, -50%);

    display: inline-block;
    width: 6px;
    height: 6px;
    content: "";

    background-color: #000;

    border-radius: 50%;
  }

  &::after{
    position: absolute;

    top: 0;
    right: 0;

    transform: translate(50%, -50%);

     display: inline-block;
    width: 6px;
    height: 6px;
    content: "";

    background-color: #000;

    border-radius: 50%;
  }
`;
