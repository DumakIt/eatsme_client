import styled from "@emotion/styled";

const breakpoints = [576, 800, 1200];
const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);
// ${mq[0]} {
//   font-size: 50px;
// }

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fbb240;
  ${mq[1]} {
    height: 60px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
  ${mq[1]} {
    width: 100%;
  }
  & > img {
    width: 160px;
    height: 50px;
    object-fit: contain;
    cursor: pointer;
    ${mq[1]} {
      width: 128px;
      height: 40px;
    }
  }
`;

export const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  ${mq[1]} {
    justify-content: stretch;
    gap: 0 20px;
    width: fit-content;
  }
  & > a {
    all: unset;
    font-size: 20px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    ${mq[1]} {
      font-size: 18px;
    }
    :hover {
      border-bottom: 2px solid white;
    }
  }
`;

export const BtnWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  ${mq[1]} {
    width: fit-content;
    gap: 0 20px;
    justify-content: stretch;
    margin-right: 20px;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin-right: 4px;
    margin-bottom: 2px;
  }
`;

export const LoginBtn = styled.button`
  all: unset;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  color: white;
  margin-left: 4px;

  :hover {
    border-bottom: 1px solid white;
  }
`;

export const JoinBtn = styled.button`
  width: 60px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #fbb240;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid white;
  }
`;

export const UserInfoBtn = styled.button`
  width: 60px;
  height: 32px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #fbb240;
  cursor: pointer;

  :hover {
    border-bottom: 1px solid white;
  }
`;
