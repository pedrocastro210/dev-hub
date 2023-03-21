import styled from "styled-components";

export const StyledLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background: #121214;

  margin: 0;

  padding: 32px 0;

  > img {
    width: 104.06px;
    height: 19.97px;
  }

  .containner-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 42px 22px;
    gap: 22px;

    width: 369px;
    height: 492px;

    margin-top: 18px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .containner-form > form {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;

    color: #f8f9fa;
  }

  .email,
  .password {
    display: flex;
    flex-direction: column;

    width: 325px;
    height: 125px;
  }

  .email > label,
  .password > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.182px;
    line-height: 0px;

    color: #f8f9fa;

    margin: 6px 0;
  }

  .email > input,
  .password > input {
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 290px;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    margin: 12px 0;

    color: #f8f9fa;
  }

  .email > p,
  .password > p {
    margin: 0 0 8px 0;
    color: red;
  }

  .containner-form > form > button {
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 324px;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #ff577f;
    border-radius: 4.06066px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  .containner-form > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 0px;

    color: #868e96;
  }

  .containner-form > a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 284px;
    height: 108px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    padding: 0px 22.3336px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 36px;

    color: #f8f9fa;

    text-decoration: none;
  }

  button:hover,
  a:hover {
    opacity: 70%;

    transition: 0.4s;
  }

  @media (max-width: 470px) {
    .containner-form {
      max-width: 70%;
    }

    .containner-form > form {
      max-width: 100%;
    }

    .email,
    .password {
      max-width: 90%;
    }

    .email > input,
    .password > input {
      max-width: 100%;
    }

    .containner-form > form > button {
      max-width: 103%;
    }

    .containner-form > a {
      max-width: 90%;
    }
  }
`;
