import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled, { css } from 'styled-components';

const DetailInfos = styled.div`
  width: 450px;
  padding: 0 54px 0 10px;
`;

const DetailInfoTitleTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 20px;

  strong {
    font-weight: 600;
  }
`;

const DetailInfoTitle = styled.div`
  margin: 30px auto;

  h1 {
    font-size: 40px;
    font-weight: 600;
  }
`;

const ProductSize = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  font-size: 18px;

  strong {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: gray;
    font-weight: 300;
  }
`;

const ProductSizeTableList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const button = styled.button`
  position: relative;
  text-align: center;
  font-size: 20px;
  width: calc(20% - 5px);
  height: 48px;
  line-height: 48px;
  border: 1px solid #e5e5e5;
  border-radius: 8%;
  margin-right: 5px;
  margin-top: 5px;
  background-color: white;

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }

  ${props => (props.clicked !== false ? Clicked : '')}
`;

const Clicked = css`
  color: white;
  background-color: black;
`;

export default function DetailInfo() {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <DetailInfos>
      <div className="productDetailInfoTitle">
        <DetailInfoTitleTop>
          <span className="categoryName">성인공용</span>
          <strong className="productPrice">169,000원</strong>
        </DetailInfoTitleTop>
        <DetailInfoTitle>
          <h1>카이리 신발</h1>
        </DetailInfoTitle>
      </div>
      <ProductSize>
        <strong>사이즈 선택</strong>
        <div>
          <Link to="#">사이즈 가이드</Link>
        </div>
      </ProductSize>
      <div className="productSizeTable">
        <ProductSizeTableList>
          <button className={clicked} onClick={onClick}>
            250
          </button>
          <button className={clicked} onClick={onClick}>
            255
          </button>
          <button className={clicked} onClick={onClick}>
            260
          </button>
          <button className={clicked} onClick={onClick}>
            265
          </button>
          <button className={clicked} onClick={onClick}>
            270
          </button>
          <button className={clicked} onClick={onClick}>
            275
          </button>
          <button className={clicked} onClick={onClick}>
            280
          </button>
          <button className={clicked} onClick={onClick}>
            285
          </button>
          <button className={clicked} onClick={onClick}>
            290
          </button>
          <button className={clicked} onClick={onClick}>
            295
          </button>
          <button className={clicked} onClick={onClick}>
            300
          </button>
        </ProductSizeTableList>
      </div>
    </DetailInfos>
  );
}
