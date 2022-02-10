import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import SignIn from '../pages/Users/SignIn';
import { SiJordan } from 'react-icons/si';
import { GiConverseShoe } from 'react-icons/gi';
import { POST_MEMBER_API } from '../config';

function Top() {
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem('token');

  const makeMember = () => {
    axios
      .get(POST_MEMBER_API, {
        headers: {
          user_id: token,
        },
      })
      .then(() => {
        alert('프리미엄 회원이 되신 것을 축하드립니다!');
      })
      .catch(() => {
        alert('이미 프리미엄 회원입니다!');
      });
  };

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <>
      {modal && <SignIn modal={modal} setModal={setModal} />}
      <TopWrapper>
        <TopLeft>
          <SiJordan className="icon" />
          <GiConverseShoe className="icon" />
        </TopLeft>
        <TopRight>
          <li>고객센터</li>
          <Link to="/signup">
            <li>멤버 가입</li>
          </Link>
          <li onClick={makeMember}>프리미엄 멤버 가입</li>
          {token ? (
            <li onClick={() => logOut()}>로그아웃</li>
          ) : (
            <li onClick={() => setModal(true)}>로그인</li>
          )}
        </TopRight>
      </TopWrapper>
    </>
  );
}

const TopWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 0.5vh 3vw;
  font-family: ${props => props.theme.fontContent};

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
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default Top;
