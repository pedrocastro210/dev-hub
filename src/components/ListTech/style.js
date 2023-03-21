import styled from "styled-components";

export const StyledListTech = styled.div`
  width: 96%;
  height: 369px;

  > h3 {
    color: #ffffff;
    margin-left: 32px;
  }

  > ul {
    padding-left: 0;
    width: 100%;
  }

  > ul > li {
    list-style: none;

    margin: 12px;

    width: 100%;
    height: 49px;

    background: #121214;
    border-radius: 4px;
  }

  > ul > li:hover {
    background: #343b41;
    cursor: pointer;
  }

  > ul > li > div {
    display: flex;
    justify-content: space-between;
    margin: 0 12px;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14.21px;
    line-height: 22px;

    color: #ffffff;
  }

  .status {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;

    text-align: right;

    color: #868e96;
  }

    @media (max-width: 400px) {
      > ul > li {
        max-width: 95%;
      }
    }

    @media (max-width: 280px) {
      > ul > li {
        max-width: 90%;
      }
    } 
  }
`;
