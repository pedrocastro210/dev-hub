import styled from "styled-components";

export const StyledRegister = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: auto;

  background: #121214;

  margin: 0;

  .containner {
    width: 490px;

    margin: 42px 0;
  }

  .header-containner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-containner > img {
    width: 108.06px;
    height: 18.21px;
  }

  .header-containner > a {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 67.49px;
    height: 40.11px;

    background: #212529;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    color: #f8f9fa;

    text-decoration: none;
  }

  .header-containner > a:hover {
    background: #868e96;

    transition: 0.4s;
  }

  .containner-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;

    width: 100%;

    margin-top: 32px;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }

  .containner-form > h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;

    color: #f8f9fa;
  }

  .containner-form > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 8px;

    margin: 0;

    color: #868e96;
  }

  .box-form {
    width: 95%;
  }

  .box-form > div {
    display: flex;
    flex-direction: column;

    gap: 12px;
  }

  .box-form > div > label {
    margin: 6px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.182px;
    line-height: 12px;

    color: #f8f9fa;
  }

  .box-form > div > input,
  .box-form > div > select {
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 90%;
    height: 48px;

    background: #343b41;

    border: 1.2182px solid #343b41;
    border-radius: 4px;

    color: #f8f9fa;
  }

  .box-form > div > select {
    width: 100%;
  }

  .box-form > button {
    margin: 12px 0;
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 100%;
    height: 48px;

    background: #ff577f;

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  .box-form > button:hover {
    background: #59323f;

    transition: 0.4s;
  }

  .box-form > div > p {
    color: red;
    margin-top: 0;
    margin-bottom: 18px;
  }

  @media (max-width: 540px) {
    .containner {
      max-width: 90vw;
    }

    .box-form {
      max-width: 90%;
    }
  }
`;
