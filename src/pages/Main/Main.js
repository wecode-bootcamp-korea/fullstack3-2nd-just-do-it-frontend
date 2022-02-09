import styled from 'styled-components';
import Top from '../../components/Top';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';

function Main() {
  return (
    <>
      <Top />
      <TopNav />
      <MainWrapper>
        <First>
          <img className="pc" src="/Images/Main/1/1-1.jpeg" alt="1-1" />
          <img className="mobile" src="/Images/Main/1/1-2.jpeg" alt="1-2" />
          <FirstContent>
            <div className="title">가능성은 지금부터</div>
            <div className="content">매일 공개되는 새로운 미션에 도전하고</div>
            <div className="content">
              더 성장한 나를 만들어 줄 다양한 리워드와 제품도 함께 만나보세요
            </div>
            <div>
              <button>미션 참여하기</button>
              <button>컬랙션 구매하기</button>
            </div>
          </FirstContent>
        </First>
        <Second>
          <img className="pc" src="/Images/Main/2/2-1.jpeg" alt="2-1" />
          <img className="mobile" src="/Images/Main/2/2-2.jpeg" alt="2-2" />
          <SecondContent>
            <div className="title">2022 나이키 X T1 LCK 컬렉션</div>
            <div className="content">실제 선수들이 착용하는 유니폼을 입고,</div>
            <div className="content">우승을 향해 달려가는 선수들을 함께 응원해 보세요.</div>
            <div className="content">구매 멤버를 위한 특별한 혜택도 만나보세요.</div>
            <div>
              <button>구매하기</button>
            </div>
          </SecondContent>
        </Second>
        <Third>
          <img className="pc" src="/Images/Main/3/3-1.gif" alt="3-1" />
          <img className="mobile" src="/Images/Main/3/3-2.gif" alt="3-2" />
          <ThirdContent>
            <div className="title">나이키 테크 팩</div>
            <div className="content">
              탁월한 기능성과 디자인으로 언제 어디서든 최상의 룩을 선사하는 나이키 테크 팩.
            </div>
            <div className="content">나이키 멤버가 되어 가장 먼저 만나보세요.</div>
            <div>
              <button>구매하기</button>
            </div>
          </ThirdContent>
        </Third>
        <Forth>
          <img className="pc" src="/Images/Main/4/4-1.gif" alt="4-1" />
          <img className="mobile" src="/Images/Main/4/4-2.gif" alt="4-2" />
          <ForthContent>
            <div className="title">나이키 블레이저 로우 '77 점보</div>
            <div className="content">과감하고 색다른 스타일을 완성해보세요.</div>
            <div>
              <button>구매하기</button>
            </div>
          </ForthContent>
        </Forth>
        <Fifth>
          <img className="pc" src="/Images/Main/5/5-1.png" alt="5-1" />
          <img className="mobile" src="/Images/Main/5/5-2.png" alt="5-2" />
          <FifthContent>
            <div className="title">나이키 ACG 가이드</div>
            <div className="content">녹색 잔디와 꽃이 함께하는 아이슬란드의 봄을 만나보세요</div>
            <div className="content">나이키 ACG 컬렉션과 함께 자연으로 떠나보세요.</div>
            <div>
              <button>컬렉션 구매하기</button>
            </div>
          </FifthContent>
        </Fifth>
      </MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.div`
  margin: 3vw;
  max-width: 100vw;
  font-family: ${({ theme }) => theme.fontContent};

  .pc {
    display: block;
  }

  .mobile {
    display: none;
  }

  .title {
    margin: 30px;
    font-size: 50px;
    font-weight: 900;
  }

  .content {
    margin: 5px;
  }

  button {
    margin: 30px;
    background-color: black;
    color: white;
    padding: 14px 36px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
  }

  @media screen and (max-width: 640px) {
    .pc {
      display: none;
    }
    .mobile {
      display: block;
    }
  }
`;

const First = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const FirstContent = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const Second = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const SecondContent = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const Third = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const ThirdContent = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const Forth = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const ForthContent = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

const Fifth = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

const FifthContent = styled.div`
  margin-bottom: 60px;
  text-align: center;
`;

export default Main;
