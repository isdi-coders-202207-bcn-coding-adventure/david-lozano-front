import styled from "styled-components";

const CounterStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 12rem;
  align-items: center;

  .counter {
    &__card {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__digit {
      display: grid;
      place-items: center;
      background-color: #ffc700;
      height: 4rem;
      width: 4rem;
      border-radius: 10px;
      font-size: 2rem;
      color: #243342;
    }
    &__data-time {
      text-align: center;
      color: #ebedec;
    }
  }
`;

export default CounterStyled;
