import styled from 'styled-components';
import { SiNike } from 'react-icons/si';
import { Link } from 'react-router-dom';

function SignIn({ setModal }) {
  return (
    <SignInWrapper>
      <div className="modal" onClick={() => setModal(false)}>
        <div className="modalAni">
          <div className="modalWrapper">
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
            <button>카카오 로그인</button>
            <button>페이스북 로그인</button>
            <div className="goSignUp">
              회원이 아니신가요?{' '}
              <Link to="/signup">
                <span>회원가입</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInWrapper>
  );
}

const SignInWrapper = styled.div`
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
          font-size: 16px;
          padding: 6px;
          border: 1px solid gainsboro;
        }
      }
      .inputFooter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 20px;

        .checkBox {
          display: flex;
          align-items: center;
        }
      }
      button {
        width: 100%;
        margin-bottom: 10px;
        border: none;
        padding: 10px;
      }
      .normal {
        background-color: black;
        color: white;
      }

      .goSignUp {
        margin-top: 10px;
        font-size: 12px;
        color: gray;

        a {
          color: black;
        }
      }
    }
  }
`;

export default SignIn;
