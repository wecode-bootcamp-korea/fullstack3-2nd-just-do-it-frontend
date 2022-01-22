import { SiJordan } from 'react-icons/si';
import { GiConverseShoe } from 'react-icons/gi';
import styled from 'styled-components';

function Top() {
  return (
    <TopWarppeer>
      <TopLeft>
        <SiJordan className="icon" />
        <GiConverseShoe className="icon" />
      </TopLeft>
      <TopRight>
        <li>고객센터</li>
        <li>멤버 가입</li>
        <li>프리미엄 멤버 가입</li>
        <li>로그인</li>
      </TopRight>
    </TopWarppeer>
  );
}

const TopWarppeer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gainsboro;
  padding: 0.5vh 3vw;
  font-family: ${props => props.theme.fontContent};
  /* position: sticky; */
  /* top: 0; */

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const TopLeft = styled.div`
  font-size: 1.4rem;

  .icon {
    padding-right: 1vw;
  }
`;

const TopRight = styled.ul`
  display: flex;

  li {
    padding-left: 1vw;
    font-size: 0.8rem;
  }
`;

export default Top;
