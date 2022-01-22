import styled from 'styled-components';

function SaleModal({ setSaleModalOn }) {
  return (
    <Modal>
      <div className="modal">
        <div className="modalWrapper" onMouseLeave={() => setSaleModalOn(false)}>
          <ul className="modalCol">
            <li className="cateTitle">Mens Sale</li>
            <ul className="cateList">
              <li>신발</li>
              <li>의류</li>
              <li>용품</li>
              <li>전체 보기</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">Women Sale</li>
            <ul className="cateList">
              <li>신발</li>
              <li>의류</li>
              <li>용품</li>
              <li>전체 보기</li>
            </ul>
          </ul>
          <ul className="modalCol">
            <li className="cateTitle">Kids Sale</li>
            <ul className="cateList">
              <li>신발</li>
              <li>의류</li>
              <li>용품</li>
              <li>전체 보기</li>
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

export default SaleModal;
