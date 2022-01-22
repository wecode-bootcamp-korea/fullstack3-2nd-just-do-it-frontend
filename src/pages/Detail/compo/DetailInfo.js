import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import cartData from './ProductCart';
import axios from 'axios';

const DetailInfos = styled.div`
  width: 450px;
  padding: 0 54px 0 10px;
`;

const DetailInfoTitleTop = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 20px;

  span {
    font-size: 22px;
  }

  ul {
    font-weight: 600;
    letter-spacing: 0.3px;

    .productSalePrice {
      color: #fa5400;
      font-size: 22px;
    }
  }
`;

const DetailInfoTitle = styled.div`
  margin: 30px auto;

  h1 {
    font-size: 30px;
    font-weight: 600;
  }
`;

const ProductSaleRate = styled.div`
  font-size: 30px;
  color: #fa5400;
  letter-spacing: 0.3px;
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
  border: 1px ${props => (props.warn ? 'red' : 'transparent')} solid;

  .sizeButton {
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
  }

  .sizeButton-clicked {
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
    background-color: black;
    color: white;
  }
`;

const ProductQuantity = styled.div`
  padding: 30px 0;
  font-size: 25px;
  border-bottom: 2px solid #e5e5e5;

  span {
    margin-right: 30px;
  }

  .quantityBox {
    display: inline-block;
    text-align: center;
    width: 10px;
  }

  button {
    font-size: 30px;
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    background-color: white;
    margin-right: 10px;
  }
`;

const Warning = styled.div`
  opacity: 1;
  div {
    margin-top: 30px;
    color: red;
    font-size: 20px;
  }
`;

const PurchaseButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  margin: 20px 0;
  padding-bottom: 24px;
  border-bottom: 2px solid #e5e5e5;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 60px;
  margin-bottom: 8px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 17px;

  &:hover {
    background-color: gray;
  }
`;

const CartButton = styled.button`
  width: calc(50% - 2px);
  height: 60px;
  background-color: white;
  color: black;
  border: black solid 1px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 17px;
`;

const WishlistButton = styled.button`
  width: calc(50% - 2px);
  height: 60px;
  background-color: white;
  color: black;
  border: black solid 1px;
  border-radius: 30px;
  font-size: 17px;
`;

const ProductDescription = styled.div`
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e5e5;
`;

const ReviewBox = styled.div`
  border-bottom: 2px solid #e5e5e5;
  padding: 30px 0;
`;

const ReviewHeader = styled.div`
  h1 {
    display: inline;
  }
  span,
  button {
    float: right;
    margin-left: 5px;
  }
`;

const ReviewContent = styled.div`
  font-size: 20px;
  padding-top: ${props => (props.visible !== false ? '30px' : 0)};
  opacity: ${props => (props.visible !== false ? 1 : 0)};
  height: ${props => (props.visible !== false ? '50px' : '0px')};
  transition: all 0.5s;
`;

const SideCart = styled.nav`
  .backBlur {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }
  .backBlur.active {
    position: fixed;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.1);
    opacity: 1;
  }

  .sideCart {
    position: fixed;
    z-index: 1000;
    background-color: white;
    padding: 30px;
    width: 400px;
    height: 100vh;
    top: 0;
    right: -100%;
    transition: 850ms;
    opacity: 0;
  }
  .sideCart.active {
    opacity: 1;
    height: 100%;
    right: 0;
    transition: 350ms;
  }
`;

const SideCartTitle = styled.div`
  margin-top: 20px;
`;

const SideCartList = styled.ul`
  margin-top: 20px;

  li {
    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid #e5e5e5;
    align-items: flex-start;

    img {
      width: 100px;
      height: 100px;
      margin-right: 5px;
    }
  }
`;

const SideCartListInfo = styled.div`
  margin-left: 15px;
  div {
    margin-bottom: 8px;
    font-size: 16px;
  }
`;
const SideCartListProductName = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`;

const CartProductPrice = styled.div`
  margin-top: 5px;
  color: #fa7634;
`;

const SideCartTotalPrice = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;

  span {
    color: gray;
    font-weight: 300;
  }
  div {
    color: #fa7634;
    font-size: 30px;
    font-weight: 600;
  }
`;
const SideCartBottom = styled.div`
  div {
    margin-bottom: 20px;
    color: #999999;
    font-weight: 300;
  }
`;

const SideCartBottomButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    position: relative;
    width: 70%;
    margin: 10px auto;
    border-radius: 4px;
    padding: 10px;
    font-size: 18px;
  }
`;

const SideCartBottomCart = styled.button`
  background-color: white;
`;
const SideCartBottomPurchase = styled.button`
  background-color: #fa7634;
  color: white;
  border: transparent;
`;

const menSizeArr = [250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300];

export default function DetailInfo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [visible, setVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [data, setData] = useState('');
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    axios.get('data/shoedata.json').then(res => setData(res.data.data));
  }, []);
  const showSidebar = () => {
    if (activeIndex !== 0) {
      setSidebar(!sidebar);
    } else {
      setSidebar(false);
      setClicked(!clicked);
    }
  };
  const handleOnClick = index => {
    setActiveIndex(index);
  };
  // const buttonClick = () => {
  //   clicked ? set
  // }

  return (
    <DetailInfos>
      <div className="productDetailInfoTitle">
        <DetailInfoTitleTop>
          <span className="categoryName">{data.gender}</span>
          <ul className="productPrice">
            {data.sale_price ? <li className="productSalePrice">{data.sale_price} 원</li> : null}
            <li
              className="productNormalPrice"
              style={{ textDecoration: data.sale_price ? 'line-through' : 'none' }}
            >
              {data.normal_price} 원
            </li>
          </ul>
        </DetailInfoTitleTop>
        <DetailInfoTitle>
          <h1>{data.name}</h1>
        </DetailInfoTitle>
      </div>
      {data.sale_rate ? <ProductSaleRate>{data.sale_rate}% off</ProductSaleRate> : null}
      <ProductSize>
        <strong>사이즈 선택</strong>
        <div>
          <Link to="#">사이즈 가이드</Link>
        </div>
      </ProductSize>
      <ProductSizeTableList warn={clicked && activeIndex === 0}>
        {data.info &&
          data.info.map((obj, index) => {
            return (
              <button
                key={obj.size}
                onClick={() => handleOnClick(index + 1)}
                className={activeIndex === index + 1 ? 'sizeButton-clicked' : 'sizeButton'}
                disabled={obj.quantity === 0 ? true : false}
              >
                {obj.size}
              </button>
            );
          })}
      </ProductSizeTableList>
      {clicked && activeIndex === 0 ? (
        <Warning>
          <div>사이즈를 선택해주세요</div>
        </Warning>
      ) : null}
      <ProductQuantity>
        <span>수량</span>
        <span className="quantityBox">{quantity}</span>
        <button
          disabled={quantity <= 1}
          onClick={() => {
            setQuantity(quantity - 1);
          }}
        >
          -
        </button>
        <button
          disabled={quantity >= 5}
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </button>
      </ProductQuantity>
      <PurchaseButtons>
        <OrderButton>바로구매</OrderButton>
        <CartButton onClick={showSidebar}>장바구니</CartButton>
        <WishlistButton>위시리스트</WishlistButton>
      </PurchaseButtons>
      <ProductDescription>
        <h3>백신 맞은 사람만 신을 수 있는 카이리 신발</h3>
      </ProductDescription>
      <ReviewBox>
        <ReviewHeader>
          <h1>리뷰</h1>
          <button
            onClick={() => {
              setVisible(!visible);
            }}
          >
            내려오기
          </button>
          <span>별점</span>
        </ReviewHeader>
        <ReviewContent visible={visible}>
          <div>리뷰 작성하는 곳</div>
          <button>리뷰 제출</button>
        </ReviewContent>
      </ReviewBox>
      <SideCart>
        <span className={sidebar ? 'backBlur active' : 'backBlur'} onClick={showSidebar} />
        <nav className={sidebar ? 'sideCart active' : 'sideCart'}>
          <SideCartTitle>미니 장바구니</SideCartTitle>
          <SideCartList>
            {cartData &&
              cartData.map(obj => {
                return (
                  <li key={obj.style}>
                    <img src={obj.img} alt={obj.title} />
                    <SideCartListInfo>
                      <SideCartListProductName>{obj.name}</SideCartListProductName>
                      <div>스타일 : {obj.style}</div>
                      <div>사이즈 : {obj.size}</div>
                      <div>수량 : {obj.quantity}</div>
                      <CartProductPrice>{obj.price}</CartProductPrice>
                    </SideCartListInfo>
                  </li>
                );
              })}
          </SideCartList>
          <SideCartTotalPrice>
            <span>총 상품금액</span>
            <div>130000원</div>
          </SideCartTotalPrice>
          <SideCartBottom>
            <div>배송비는 주문서에서 확인 가능합니다</div>
            <SideCartBottomButtons>
              <SideCartBottomCart>장바구니 가기</SideCartBottomCart>
              <SideCartBottomPurchase>바로구매</SideCartBottomPurchase>
            </SideCartBottomButtons>
          </SideCartBottom>
        </nav>
      </SideCart>
    </DetailInfos>
  );
}
