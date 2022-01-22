import styled from 'styled-components';

function KidModal({ setKidModalOn }) {
  return (
    <Modal>
      <div className="modal">
        <div className="modalWrapper" onMouseLeave={() => setKidModalOn(false)}>
          <ul className="modalCol">
            <li className="cateTitle">New & Featured</li>
            <ul className="cateList">
              <li>신상품</li>
              <li>다이나모 고</li>
              <li>윈터 에센셜</li>
              <li>와플 트레이너 2</li>
              <li>신고 벗기 편한 키즈 플라이이즈</li>
              <li>나이키 키즈 클래식</li>
              <li>조던 키즈</li>
              <li>아이들을 위한 선물</li>
              <li>SALE</li>
              <li>품절임박</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">신발</li>
            <ul className="cateList">
              <li>베이비(160mm 이하)</li>
              <li>리틀키즈(165-220mm)</li>
              <li>주니어(225-250mm)</li>
              <li>라이프스타일</li>
              <li>러닝</li>
              <li>축구</li>
              <li>농구</li>
              <li>샌들 & 슬리퍼</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">의류</li>
            <ul className="cateList">
              <li>베이비 (0-4세)</li>
              <li>리틀키즈 (4-7세)</li>
              <li>주니어 (8-13세)</li>
              <li>팬츠 & 레깅스</li>
              <li>후디 & 크루</li>
              <li>아우터 & 재킷</li>
              <li>스커트 & 드레스</li>
              <li>탑 & 티셔츠 & 브라</li>
              <li>트랙수트 & 세트</li>
              <li>가방 & 모자 & 용품</li>
            </ul>
            <br />
            <li className="cateTitle">용품</li>
            <ul className="cateList">
              <li>가방</li>
              <li>모자</li>
              <li>양말</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">스포츠</li>
            <ul className="cateList">
              <li>러닝</li>
              <li>축구</li>
              <li>농구</li>
              <li>테니스</li>
            </ul>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  font-family: ${props => props.theme.fontContent};

  .modal {
    position: fixed;
    top: 80px;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
    animation-duration: 0.5s;
    animation-name: slidein;

    .modalWrapper {
      position: relative;
      width: 100%;
      background-color: white;
      display: flex;
      justify-content: center;

      .modalCol {
        padding: 40px;

        .cateTitle {
          margin-bottom: 15px;
          font-weight: 700;
          font-size: 18px;
        }

        .cateList {
          margin-top: 0;

          li {
            margin-bottom: 7px;
            font-size: 14px;
            color: gray;
          }
        }
      }
    }
  }

  @keyframes slidein {
    from {
      top: 0;
    }

    to {
      top: 80px;
    }
  }
`;

export default KidModal;
