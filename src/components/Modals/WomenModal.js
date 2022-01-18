import styled from 'styled-components';

function WomenModal({ setWomenModalOn }) {
  return (
    <Modal>
      <div className="modal">
        <div className="modalWrapper" onMouseLeave={() => setWomenModalOn(false)}>
          <ul className="modalCol">
            <li className="cateTitle">New & Featured</li>
            <ul className="cateList">
              <li>Expert's pick</li>
              <li>신상품</li>
              <li>SNKRS</li>
              <li>MUST HAVES</li>
              <li>MEMBER SHOP</li>
              <li>브라 & 타이츠 셋업</li>
              <li>아이콘 클래쉬 컬렉션</li>
              <li>홈트레이닝 컬렉션</li>
              <li>겨울 아우터</li>
              <li>애슬릿 리뷰</li>
              <li>나이키 스타일링</li>
              <li>SALE</li>
              <li>지속 가능 컬렉션</li>
              <li>품절임박</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">신발</li>
            <ul className="cateList">
              <li>신발 전체</li>
              <li>라이프스타일</li>
              <li>러닝</li>
              <li>트레이닝 & 짐</li>
              <li>농구</li>
              <li>조던</li>
              <li>축구</li>
              <li>골프</li>
              <li>테니스</li>
              <li>샌들 & 슬리퍼</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">의류</li>
            <ul className="cateList">
              <li>의류 전체</li>
              <li>스포츠 브라</li>
              <li>타이츠 & 레깅스</li>
              <li>팬츠 & 숏 팬츠</li>
              <li>후디 & 크루</li>
              <li>재킷 & 베스트</li>
              <li>탑 & 티셔츠</li>
              <li>스커트 & 드레스</li>
              <li>요가</li>
              <li>양말</li>
              <li>셋업</li>
            </ul>
            <br />
            <li className="cateTitle">용품</li>
            <ul className="cateList">
              <li>모자 & 헤드밴드</li>
              <li>가방</li>
              <li>애플워치</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">스포츠</li>
            <ul className="cateList">
              <li>러닝</li>
              <li>트레이닝 & 짐</li>
              <li>축구</li>
              <li>골프</li>
              <li>테니스</li>
              <li>요가</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">브랜드</li>
            <ul className="cateList">
              <li>Nike Sportswear</li>
              <li>NikeLab</li>
              <li>Jordan</li>
              <li>NBA</li>
              <li>ACG</li>
            </ul>
          </ul>
        </div>
      </div>
    </Modal>
  );
}

const Modal = styled.div`
  .modal {
    position: fixed;
    top: 50px;
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
      top: 50px;
    }
  }
`;

export default WomenModal;
