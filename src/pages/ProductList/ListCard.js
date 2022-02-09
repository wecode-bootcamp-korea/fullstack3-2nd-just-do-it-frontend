import { useState } from 'react';
import styled from 'styled-components';
import { IoIosLock } from 'react-icons/io';
import { Link } from 'react-router-dom';

function ListCard({
  index,
  categoryName,
  genderName,
  imgUrl,
  normalPrice,
  productName,
  salePrice,
  saleRate,
  styleCode,
  subAccName,
  subBrandName,
  subClothesName,
  subIconName,
  isMember,
}) {
  const [mouse, setMouse] = useState(false);

  return (
    <ListCardWrapper key={index}>
      <div className="cardWrapper">
        {!isMember ? (
          <NormalProducts styleCode={styleCode} productName={productName} imgUrl={imgUrl} />
        ) : (
          <MemberProducts
            mouse={mouse}
            setMouse={setMouse}
            styleCode={styleCode}
            productName={productName}
            imgUrl={imgUrl}
          />
        )}
        <div className="detailWrapper">
          <div className="detailLeft">
            {isMember ? <div className="member">For Members</div> : null}
            <div className="row1">{productName}</div>
            <div className="row2">
              {genderName} {categoryName}
            </div>
          </div>
          {!salePrice ? (
            <Price normalPrice={normalPrice} />
          ) : (
            <SaledPrice saleRate={saleRate} salePrice={salePrice} normalPrice={normalPrice} />
          )}
        </div>
        <div className="colors">1 컬러</div>
      </div>
    </ListCardWrapper>
  );
}

const NormalProducts = ({ styleCode, productName, imgUrl }) => {
  return (
    <Link to={`/product/detail/${styleCode}`}>
      <div className="imgWrapper">
        <img alt={productName} src={imgUrl} />
      </div>
    </Link>
  );
};

const MemberProducts = ({ mouse, setMouse, styleCode, productName, imgUrl }) => {
  return (
    <div
      className="imgWrapperForMember"
      onMouseEnter={() => setMouse(true)}
      onMouseLeave={() => setMouse(false)}
    >
      <Link to={`/product/detail/${styleCode}`}>
        <div className="white" style={mouse ? { display: 'block' } : { display: 'none' }}>
          <div className="comment">
            나이키 멤버만
            <br /> 구매가능한 제품입니다
          </div>
        </div>
        <button>
          <IoIosLock className="icon" />
        </button>
        <img alt={productName} src={imgUrl} />
      </Link>
    </div>
  );
};

const Price = ({ normalPrice }) => {
  return (
    <div className="detailRight">
      <div>{parseInt(normalPrice).toLocaleString()} 원</div>
    </div>
  );
};

const SaledPrice = ({ saleRate, salePrice, normalPrice }) => {
  return (
    <div className="detailRight">
      <div className="row1">
        <span className="saleRate">{saleRate}% </span>
        {parseInt(salePrice).toLocaleString()} 원
      </div>
      <div className="row2">{parseInt(normalPrice).toLocaleString()} 원</div>
    </div>
  );
};

const ListCardWrapper = styled.div`
  a {
    margin: 0;
    padding: 0;
  }

  .cardWrapper {
    display: flex;
    flex-direction: column;

    .imgWrapper {
      height: 500px;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #efefef;
      object-fit: scale-down;
      cursor: pointer;

      img {
        display: flex;
        width: 100%;
      }
    }

    .imgWrapperForMember {
      height: 500px;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #efefef;
      position: relative;
      cursor: pointer;
      z-index: 20;

      .white {
        position: absolute;
        background: rgba(255, 255, 255, 0.9);
        top: 0;
        left: 0;
        z-index: 30;
        width: 100%;
        height: 100%;
        color: #997062;
        display: none;

        .comment {
          margin-top: 70px;
          margin-left: 30px;
        }

        &:hover {
          display: block;
        }
      }

      button {
        position: absolute;
        top: 20px;
        left: 20px;
        border: none;
        border-radius: 100%;
        background-color: white;
        width: 40px;
        height: 40px;
        text-align: center;
        z-index: 40;

        .icon {
          color: #997062;
          font-size: 20px;
        }
      }

      img {
        display: flex;
        width: 100%;
        z-index: 20;
      }
    }

    .detailWrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .member {
        color: #997062;
      }

      .row1 {
        margin-top: 5px;
      }

      .row2 {
        margin-top: 5px;
        color: gray;
      }

      .detailRight {
        text-align: right;

        .saleRate {
          margin-right: 10px;
          color: #fc4f06;
        }

        .row1 {
          margin-top: 5px;
        }

        & > .row2 {
          text-decoration: line-through;
        }
      }
    }
    .colors {
      margin-top: 10px;
      color: gray;
    }
  }
`;

export default ListCard;
