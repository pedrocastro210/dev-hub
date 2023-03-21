import styled from "styled-components";

export const StyledHome = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  height: auto;

  background: #121214;

  padding-bottom: 200px;

  header {
    position: absolute;
    width: 100%;
    height: 72px;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 3px solid #212529;
  }

  header > img {
    width: 85.53px;
    height: 18.63px;
  }

  header > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    width: 55.49px;
    height: 32px;

    background: #212529;
    border-radius: 4px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;

    text-align: center;
    text-decoration: none;

    color: #f8f9fa;
  }

  header > a:hover {
    background: #ff577f;

    transition: 0.4s;
  }

  .info-user {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;

    margin-top: 120px;
    padding-bottom: 32px;

    border-bottom: 1px solid #212529;
  }

  .info-user > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 28px;

    color: #f8f9fa;
  }

  .info-user > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #868e96;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;

    // background: green;
  }

  .box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    width: 100%;
    height: 32px;

    margin: 24px 0;
  }

  .box-header > h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 28px;

    color: #f8f9fa;
  }

  .box-header > button {
    width: 32.49px;
    height: 32px;

    background: #212529;
    border-radius: 4px;

    color: #ffffff;
  }

  .box-header > button:hover {
    background: #343b41;
    cursor: pointer;
  }

  .box-tec {
    width: 100%;
    height: 416px;

    background: #212529;
    border-radius: 4px;
  }

  @media (max-width: 650px) {
    .info-user {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      max-width: 100vw;
    }

    .content {
      width: 90%;
    }
  }

  @media (max-width: 380px) {
    .info-user > h1 {
      font-size: 10vw;
    }

    .info-user > p {
      font-size: 4vw;
    }

    .box-header > h2 {
      font-size: 6vw;
    }
  }
`;
