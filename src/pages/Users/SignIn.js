import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SiNike } from 'react-icons/si';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { REDIRECT_URI, REST_API_KEY } from '../../config';

function SignIn({ modal, setModal }) {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const currentRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = event => {
    if (currentRef && !currentRef.current.contains(event.target)) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  return (
    <SignInWrapper>
      <div className="modal">
        <div className="modalWrapper" ref={currentRef} defaultValue={modal}>
          <div>
            <SiNike className="icon" />
          </div>
          <div className="modalTitle">나이키 로그인</div>
          <div className="inputWrapper">
            <input placeholder="아이디" />
            <input placeholder="비밀번호" type="password" />
          </div>
          <div className="inputFooter">
            <div className="checkBox">
              <input type="checkbox" />
              로그인 유지하기
            </div>
            <div>아이디/비밀번호 찾기</div>
          </div>
          <button className="normal">로그인</button>
          <a href={kauthUrl} replace={true}>
            <button className="kakao">
              <RiKakaoTalkFill className="kakaoIcon" />
              카카오톡 로그인
            </button>
          </a>
          <div className="goSignUp">
            회원이 아니신가요?{' '}
            <Link to="/signup">
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.div`
  font-family: ${props => props.theme.fontContent};

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 102;

    .modalWrapper {
      position: relative;
      top: 10px;
      width: 400px;
      height: 500px;
      margin: 50px auto;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      padding: 30px;
      animation-duration: 0.5s;
      animation-name: slide;

      @keyframes slide {
        from {
          top: 0px;
        }
        to {
          top: 10px;
        }
      }

      .icon {
        font-size: 80px;
      }

      .modalTitle {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
      }

      .inputWrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px;

        input {
          margin-bottom: 16px;
          font-size: 12px;
          padding: 10px;
          border: 1px solid #dfdfdf;
        }
      }

      .inputFooter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 20px;
        color: #979797;

        .checkBox {
          display: flex;
          align-items: center;
        }
      }

      button {
        width: 100%;
        margin-bottom: 15px;
        border: none;
        padding: 10px;
        background-color: #f2f2f2;
        cursor: pointer;
      }

      a {
        padding: 0;
        margin: 0;
        width: 100%;

        .kakao {
          background-color: #feec34;
          margin-bottom: 10px;
          border: none;
          padding: 10px;

          .kakaoIcon {
            vertical-align: -10%;
            margin-right: 10px;
            font-size: 16px;
          }
        }
      }

      .goSignUp {
        margin-top: 10px;
        font-size: 12px;
        color: #979797;

        a {
          color: black;
        }
      }
    }
  }
`;

export default SignIn;
