import styled from 'styled-components';
import { SiNike } from 'react-icons/si';
import { FiSearch, FiHeart, FiShoppingBag, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import MenModal from './Modals/MenModal';
import WomenModal from './Modals/WomenModal';
import KidModal from './Modals/KidModal';
import SaleModal from './Modals/SaleModal';

const throttle = (callback, waitTime) => {
  let timeId = null;
  return element => {
    if (timeId) {
      return (timeId = setTimeout(() => {
        callback.call(this, element);
        timeId = null;
      }, waitTime));
    }
  };
};

function TopNav() {
  const [menModalOn, setMenModalOn] = useState(false);
  const [womenModalOn, setWomenModalOn] = useState(false);
  const [kidModalOn, setKidModalOn] = useState(false);
  const [saleModalOn, setSaleModalOn] = useState(false);

  // useEffect({}, [menModalOn, womenModalOn, kidModalOn, saleModalOn]);
  const [hide, setHide] = useState(false);
  const [pageY, setPageY] = useState(0);
  const documentRef = useRef(document);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };
  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener('scroll', throttleScroll);
    return () => documentRef.current.removeEventListener('scroll', throttleScroll);
  }, [pageY]);

  return (
    <>
      {console.log(hide)}
      {console.log(pageY)}
      {menModalOn ? <MenModal setMenModalOn={setMenModalOn} /> : null}
      {womenModalOn ? <WomenModal setWomenModalOn={setWomenModalOn} /> : null}
      {kidModalOn ? <KidModal setKidModalOn={setKidModalOn} /> : null}
      {saleModalOn ? <SaleModal setSaleModalOn={setSaleModalOn} /> : null}
      <TopContainer>
        <TopNavWrapper className={hide && 'hide'}>
          <NavLeft>
            <Link to="/">
              <SiNike />
            </Link>
          </NavLeft>
          <NavCenter>
            <div className="mainMenu">
              <Link to="/snkrs">
                <div>SNKRS</div>
              </Link>
              <div onMouseEnter={() => setMenModalOn(true)}>MEN</div>
              <div onMouseOver={() => setWomenModalOn(true)}>WOMEN</div>
              <div onMouseOver={() => setKidModalOn(true)}>KID</div>
              <div onMouseOver={() => setSaleModalOn(true)}>SALES</div>
            </div>
          </NavCenter>
          <NavRight>
            <span>
              <input className="search" placeholder="검색" />
            </span>
            <button id="searchIcon">
              <FiSearch className="icon" />
            </button>
            <button>
              <FiHeart className="icon" id="likeBtn" />
            </button>
            <button>
              <FiShoppingBag className="icon" id="iconBag" />
            </button>
            <button className="iconMobile">
              <FiMenu />
            </button>
            <button className="iconMobile">
              <FiSearch />
            </button>
          </NavRight>
        </TopNavWrapper>
      </TopContainer>
    </>
  );
}
const TopContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 80px; */
`;

const TopNavWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vw;
  position: sticky;
  /* position: fixed; */
  /* top: 40px; */
  left: 0;
  height: 80px;
  width: 100%;
  font-family: ${props => props.theme.fontContent};
  z-index: 100;
  background-color: white;

  @media screen and (max-width: 640px) {
    top: 0;
  }
`;

const NavLeft = styled.div`
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  width: 260px;

  a {
    color: black;

    & :hover {
      color: gray;
    }
  }
`;

const NavCenter = styled.div`
  box-sizing: border-box;
  font-family: ${props => props.theme.fontContent};

  a {
    color: black;
    text-decoration: none;
  }

  .mainMenu {
    display: flex;

    & div {
      margin: 0 20px;
      cursor: pointer;
    }
  }

  /* .main {
    padding: 10px;

    &::after {
      content: '';
      width: 0;
      height: 10px;
      position: absolute;
      left: 1rem;
      bottom: 0.8em;
      transition: width 200ms ease-in;
    }

    &:hover::after,
    &:focus::after {
      width: 80%;
    }

    &:hover ul,
    &:focus ul {
      opacity: 1;
      visibility: visible;
    }

    .sub {
      position: absolute;
      top: 40px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100vw;
      opacity: 0;
      visibility: hidden;
      transition: opacity 200ms ease-in-out;

      li {
        padding: 10px;

        &:hover,
        &:focus {
          background-color: blue;
        }
      }
    }
  } */
  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .search {
    border-radius: 100px;
    border: none;
    background-color: gainsboro;
    padding: 8px 40px;
    height: 20px;
    width: 90px;
  }

  button {
    margin-left: 10px;
    border-radius: 100%;
    border: none;
    background-color: white;
  }

  .icon {
    font-size: 23px;
  }

  #searchIcon {
    position: absolute;
    left: 5px;
    top: 5px;
    padding: 0;
    background-color: gainsboro;
  }

  .iconMobile {
    display: none;
    font-size: 23px;
  }

  @media screen and (max-width: 640px) {
    .search,
    #searchIcon,
    #likeBtn {
      display: none;
    }

    .iconMobile {
      display: block;
    }
  }
`;
export default TopNav;
