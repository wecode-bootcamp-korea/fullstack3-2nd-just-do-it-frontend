import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Top from '../../components/Top';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { REDIRECT_URI, REST_API_KEY } from '../../config';

function SignUp() {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <Top />
      <TopNav />
      <SignUpWrapper>
        <SnsSignUp>
          <div className="snsWrapper">
            <h2>나이키 멤버 가입</h2>
            <div>멤버가 되어 나이키가 제공하는</div>
            <div className="secondRow">최고의 제품과 혜택을 만나보세요.</div>
            <a href={kauthUrl}>
              <button className="kakao">
                <RiKakaoTalkFill className="kakaoIcon" />
                카카오톡 회원가입
              </button>
            </a>
          </div>
        </SnsSignUp>
        <NormalSignUp>
          <div>
            <input placeholder="사용하실 ID를 입력해주세요. (수신 가능 E-mail)" />
            <input
              placeholder="영문 대 소문+숫자+특수문자 8~16자리(괄호(),<>사용 불가)"
              type="password"
            />
            <input placeholder="패스워드를 다시 입력해 주세요." type="password" />
            <input placeholder="이름을 입력해 주세요." />
            <input placeholder="휴대폰 번호 '-'표 없이 입력해 주세요." />
          </div>
          <div className="condition">
            <div>이용약관</div>
            <textarea rows={6} disabled="true" readOnly>
              나이키 이용약관입니다
            </textarea>
            <div className="checkBox">
              <span>
                <input type="checkbox" />
                <span> [필수] 이용약관에 동의합니다</span>
              </span>
            </div>
          </div>
          <button className="submitBtn">회원가입하기 (만 14세 이상)</button>
        </NormalSignUp>
      </SignUpWrapper>
      <Footer />
    </>
  );
}

const SignUpWrapper = styled.div`
  box-sizing: border-box;
  margin: 120px auto;
  text-align: center;
  font-family: ${props => props.theme.fontContent};
  width: 380px;
  padding: 20px;
`;

const SnsSignUp = styled.div`
  margin-bottom: 20px;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 14px;
  }

  div {
    font-size: 16px;

    .secondRow {
      margin-top: 5px;
      margin-bottom: 20px;
    }
  }

  button {
    width: 100%;
    margin-bottom: 5px;
    border: none;
    padding: 10px;
  }

  a {
    width: 100%;
    margin-bottom: 10px;
    border: none;

    .kakao {
      background-color: #feec34;
      cursor: pointer;

      .kakaoIcon {
        vertical-align: -10%;
        margin-right: 10px;
        font-size: 16px;
      }
    }
  }
`;

const NormalSignUp = styled.div`
  div {
    display: flex;
    flex-direction: column;

    input {
      font-size: 12px;
      padding: 6px;
      margin-bottom: 10px;
      border: 1px solid #dfdfdf;
    }
  }

  .condition {
    padding: 10px 0;
    font-size: 14px;
    text-align: left;

    textarea {
      margin: 10px 0;
      font-size: 12px;
      resize: none;
      padding: 6px;
      padding-bottom: 10px;
      background-color: white;
    }
  }

  .submitBtn {
    background-color: black;
    color: white;
    width: 100%;
    padding: 14px 0;
    border: none;
  }
`;

export default SignUp;
