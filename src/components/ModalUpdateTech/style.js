import styled from "styled-components";

export const StyledModalTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #00000087;
  top: 0;
  left: 0;

  > div {
    width: 369px;
    height: 342px;

    border-radius: 4px;
  }

  .header-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;

    max-width: 100%;
    height: 50px;

    background: #343b41;
    border-radius: 4px 4px 0px 0px;
  }

  .header-modal > h4 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;

    color: #f8f9fa;
  }

  .header-modal > span {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;

    color: #868e96;

    cursor: pointer;
  }

  > div > form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 12px 0 12px;
    gap: 2px;

    max-width: 100%;
    height: 85%;

    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 4px 4px;
  }

  > div > form > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.182px;
    line-height: 12px;

    color: #f8f9fa;

    margin-top: 22px;
  }

  > div > form > p {
    color: red;
    margin: 4px 0 8px 0;
    font-weight: bold;
  }

  > div > form > input {
    width: 98.3%;
    height: 48px;

    background: #343b41;
    color: #f8f9fa;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    margin-top: 14px;
  }

  > div > form > select {
    width: 100%;
    height: 48px;

    background: #343b41;
    color: #f8f9fa;

    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;

    margin-top: 14px;
  }

  > div > form > div {
    width: 100%;
    height: 48px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 0;
    gap: 22px;
  }

  .btn-save {
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 204px;
    height: 48px;

    background: #59323f;

    border: 1.2182px solid #59323f;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  .btn-delete {
    padding: 0px 22.3336px;
    gap: 10.15px;

    width: 98px;
    height: 48px;

    background: #868e96;

    border: 1.2182px solid #868e96;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: #ffffff;
  }

  button:hover {
    opacity: 75%;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    > div {
      width: 95vw;
    }
    @media (max-width: 315px) {
      > div {
        height: 57%;
      }
      > div > form > div {
        flex-direction: column;
      }
    }
  }
`;
