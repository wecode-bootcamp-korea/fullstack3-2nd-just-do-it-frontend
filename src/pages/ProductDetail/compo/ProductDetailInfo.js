import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { IoIosArrowDown } from 'react-icons/io';
import StarRatings from 'react-star-ratings';
import Slider from 'react-input-slider';

const DetailInfos = styled.div`
  width: 25vw;
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

const DetailInfoTitle = styled.h1`
  margin: 30px auto;

  font-size: 30px;
  font-weight: 600;
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

  a {
    text-decoration: none;
    color: gray;
    font-weight: 300;
    cursor: text;
    font-size: 16px;
  }
`;

const ProductSizeText = styled.strong`
  font-size: 18px;
`;

const ProductSizeTableList = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px ${props => (props.warn ? 'red' : 'transparent')} solid;

  .sizeButton {
    position: relative;
    text-align: center;
    font-size: 16px;
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
    font-size: 16px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    display: inline;
    font-size: 20px;
  }

  .reviewRight {
    display: flex;
    align-items: center;

    span {
      margin-right: 10px;
    }

    .rotateIcon {
      cursor: pointer;
      transform: rotate(0turn);
    }

    .rotateIcon.active {
      transform: rotate(0.5turn);
    }
  }
`;

const ReviewContent = styled.div`
  font-size: 20px;
  padding-top: ${props => (props.visible !== false ? '30px' : 0)};
  opacity: ${props => (props.visible !== false ? 1 : 0)};
  height: ${props => (props.visible !== false ? '450px' : '0px')};
  transition: all 0.3s;

  button {
    position: relative;
    padding: 5px 10px;

    background: black;
    color: white;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const SliderWrapper = styled.div`
  .sliderName {
    margin: 6px 0;
    font-size: 18px;
    font-weight: 600;
  }
  .sliderValue {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    margin-bottom: 40px;
    font-size: 15px;
    color: #606060;
  }
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
    top: 0;
    right: -100%;
    transition: 850ms;
    opacity: 0;
  }

  .sideCart.active {
    opacity: 1;
    right: 0;
    transition: 350ms;
    min-height: 100vh;
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
      margin-top: 20px;
      width: 100px;
      margin-right: 5px;
    }

    .SideCartIcon {
      cursor: pointer;
      position: absolute;
      right: 25px;
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

const DeleteAllCart = styled.span`
  position: absolute;
  top: 44px;
  right: 30px;

  button {
    display: inline-block;
    background: white;

    &:hover {
      background: #e5e5e5;
    }
  }
`;

export default function DetailInfo({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const [deleteOk, setDeleteOk] = useState(1);
  const userId = localStorage.getItem('token');
  const [visible, setVisible] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const [comfortState, setComfortState] = useState({ x: 2.5 });
  const [colorState, setColorState] = useState({ x: 2.5 });
  const [sizeState, setSizeState] = useState({ x: 2.5 });
  const [widthState, setWidthState] = useState({ x: 2.5 });
  const [reviewChange, setReviewChange] = useState(0);
  const [reviewAverage, setReviewAverage] = useState(0);

  // 특정 사용자의 장바구니 목록 불러오기
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === '성공') {
          setAddCart(res.result);
        }
      });
  }, [deleteOk, userId]);

  // 별점을 서버에 보내기
  const sendReview = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/user/review`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        user_id: userId,
        styleCode: data.style_code,
        size: sizeState.x,
        color: colorState.x,
        width: widthState.x,
        comfort: comfortState.x,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setReviewChange(prev => prev + 1);
        if (
          res.message === 'REVIEW_POSTED' ||
          res.message === '모든 속성에 대해 리뷰를 입력해주세요.'
        ) {
          alert('리뷰를 남겨주셔서 감사합니다');
        } else {
          alert(res.message);
        }
      });
  };

  // 특정 용품의 별점 최신화
  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/user/reviewAverage`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', token: localStorage.getItem('token') },
      body: JSON.stringify({
        styleCode: data.style_code,
      }),
    })
      .then(res => res.json())
      .then(res => {
        setReviewAverage(res.review.totalAverage);
        setReviewChange(prev => prev + 1);
      });
  }, [data, reviewChange, reviewAverage]);

  // 장바구니 목록 중 한 품목만 삭제
  const deleteCart = (userId, cart_id) => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: 'delete',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        user_id: userId,
        cart_id: cart_id,
      }),
    }).then(() => {
      setDeleteOk(deleteOk + 1);
    });
  };

  // 장바구니 목록 모두 삭제
  const deleteAllCart = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: 'delete',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        token: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        user_id: userId,
      }),
    }).then(() => {
      setDeleteOk(prev => prev + 1);
    });
  };

  // 사이드바가 열림
  const showSidebar = () => {
    if (activeIndex !== 0) {
      setSidebar(prev => !prev);
      sendCartData();
    } else {
      setSidebar(false);
      setClicked(prev => !prev);
    }
  };

  const handleOnClick = (index, obj) => {
    setActiveIndex(index);
    setSize(obj);
  };

  const sendCartData = () => {
    fetch(`${process.env.REACT_APP_BASE_URL}/cart`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json', token: localStorage.getItem('token') },
      body: JSON.stringify({
        is_member: data.is_member,
        user_id: userId,
        quantity: quantity,
        style_code: data.style_code,
        size: size,
        is_member: data.is_member,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === '성공') {
          setAddCart(res.result);
        }
      });
  };

  const totalPrice = () => {
    let result = 0;
    addCart &&
      addCart.map(obj => {
        result += Math.round(
          obj.sale_price ? obj.sale_price * obj.quantity : obj.normal_price * obj.quantity
        );
      });
    return result;
  };

  // console.log(userId);
  return (
    <DetailInfos>
      <DetailInfoTitleTop>
        <span>{data.gender}</span>
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
      <DetailInfoTitle>{data.name}</DetailInfoTitle>
      {data.sale_rate ? <ProductSaleRate>{data.sale_rate}% off</ProductSaleRate> : null}
      <ProductSize>
        <ProductSizeText>사이즈 선택</ProductSizeText>
        <Link to="#">사이즈 가이드</Link>
      </ProductSize>
      <ProductSizeTableList warn={clicked && activeIndex === 0}>
        {data.info &&
          data.info.map((obj, index) => {
            return (
              <button
                key={obj.size}
                onClick={() => handleOnClick(index + 1, obj.size)}
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
        <CartButton onClick={() => showSidebar()}>장바구니</CartButton>
        <WishlistButton>위시리스트</WishlistButton>
      </PurchaseButtons>
      <ProductDescription>
        <h3>나이키를 이용해주셔서 감사합니다!</h3>
      </ProductDescription>
      <ReviewBox>
        <ReviewHeader>
          <h5>리뷰</h5>
          <span className="reviewRight">
            <span>
              <StarRatings
                rating={reviewAverage}
                starDimension="30px"
                starSpacing="0px"
                starRatedColor="black"
                starEmptyColor="#e5e5e5"
              />
            </span>
            <IoIosArrowDown
              size={30}
              onClick={() => {
                setVisible(prev => !prev);
              }}
              className={visible ? 'rotateIcon active' : 'rotateIcon'}
            />
          </span>
        </ReviewHeader>
        <ReviewContent visible={visible}>
          <SliderWrapper>
            <div className="sliderName">편안함</div>
            <Slider
              axis="x"
              xstep={0.01}
              xmin={0}
              xmax={5}
              x={comfortState.x}
              onChange={({ x }) => setComfortState({ x: parseFloat(x.toFixed(2)) })}
              styles={{
                track: {
                  backgroundColor: '#e5e5e5',
                  height: '4px',
                  width: '100%',
                },
                active: {
                  backgroundColor: '#e5e5e5',
                },
                thumb: {
                  backgroundColor: 'black',
                  width: '8px',
                  height: '8px',
                },
              }}
            />
            <div className="sliderValue">
              <span>불편함</span>
              <span>편안함</span>
            </div>
            <div className="sliderName">색상</div>
            <Slider
              axis="x"
              xstep={0.01}
              xmin={0}
              xmax={5}
              x={colorState.x}
              onChange={({ x }) => setColorState({ x: parseFloat(x.toFixed(2)) })}
              styles={{
                track: {
                  backgroundColor: '#e5e5e5',
                  height: '4px',
                  width: '100%',
                },
                active: {
                  backgroundColor: '#e5e5e5',
                },
                thumb: {
                  backgroundColor: 'black',
                  width: '8px',
                  height: '8px',
                },
              }}
            />
            <div className="sliderValue">
              <span>화면보다 밝음</span>
              <span>화면보다 어두움</span>
            </div>
            <div className="sliderName">사이즈</div>
            <Slider
              axis="x"
              xstep={0.01}
              xmin={0}
              xmax={5}
              x={sizeState.x}
              onChange={({ x }) => setSizeState({ x: parseFloat(x.toFixed(2)) })}
              styles={{
                track: {
                  backgroundColor: '#e5e5e5',
                  height: '4px',
                  width: '100%',
                },
                active: {
                  backgroundColor: '#e5e5e5',
                },
                thumb: {
                  backgroundColor: 'black',
                  width: '8px',
                  height: '8px',
                },
              }}
            />
            <div className="sliderValue">
              <span>작은</span>
              <span>큰</span>
            </div>
            <div className="sliderName">{data.acc_type || data.clothes_type ? '재질' : '발볼'}</div>
            <Slider
              axis="x"
              xstep={0.01}
              xmin={0}
              xmax={5}
              x={widthState.x}
              onChange={({ x }) => setWidthState({ x: parseFloat(x.toFixed(2)) })}
              styles={{
                track: {
                  backgroundColor: '#e5e5e5',
                  height: '4px',
                  width: '100%',
                },
                active: {
                  backgroundColor: '#e5e5e5',
                },
                thumb: {
                  backgroundColor: 'black',
                  width: '8px',
                  height: '8px',
                },
              }}
            />
            <div className="sliderValue">
              <span>{data.acc_type || data.clothes_type ? '얇음' : '좁음'}</span>
              <span>{data.acc_type || data.clothes_type ? '두꺼움' : '넓음'}</span>
            </div>
          </SliderWrapper>
          <button onClick={() => sendReview()}>리뷰 제출</button>
        </ReviewContent>
      </ReviewBox>
      <SideCart>
        <span
          className={sidebar ? 'backBlur active' : 'backBlur'}
          onClick={() => setSidebar(false)}
        />
        <nav className={sidebar ? 'sideCart active' : 'sideCart'}>
          <SideCartTitle>미니 장바구니</SideCartTitle>
          <DeleteAllCart>
            <button onClick={() => deleteAllCart()}>전체 삭제</button>
          </DeleteAllCart>
          <SideCartList>
            {addCart &&
              addCart.map(obj => {
                return (
                  <li key={obj.id}>
                    <img src={obj.url} alt={obj.url} />
                    <SideCartListInfo>
                      <SideCartListProductName>{obj.name}</SideCartListProductName>
                      <div>스타일 : {obj.style_code}</div>
                      <div>사이즈 : {obj.size}</div>
                      <div>수량 : {obj.quantity}</div>
                      {obj.sale_price ? (
                        <CartProductPrice>{obj.sale_price} 원</CartProductPrice>
                      ) : (
                        <CartProductPrice>{obj.normal_price} 원</CartProductPrice>
                      )}
                    </SideCartListInfo>
                    <GrFormClose
                      className="SideCartIcon"
                      onClick={() => deleteCart(userId, obj.id)}
                    />
                  </li>
                );
              })}
          </SideCartList>
          <SideCartTotalPrice>
            <span>총 상품금액</span>
            <div>{totalPrice()} 원</div>
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
