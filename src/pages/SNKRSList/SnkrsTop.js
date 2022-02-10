import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SignIn from '../Users/SignIn';
import { FaShoppingCart, FaMapMarker } from 'react-icons/fa';
import { BsFillGridFill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { IoChevronBackOutline } from 'react-icons/io5';

function SnkrsTop({ grid, setGrid }) {
  const [modal, setModal] = useState(false);
  const token = localStorage.getItem('token');

  const logOut = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <ListHeader>
      {modal && <SignIn modal={modal} setModal={setModal} />}
      <div className="firstHead">
        <Link to="/">
          <div>
            <span>
              <IoChevronBackOutline className="icon" />
            </span>
            Visit Nike.com
          </div>
        </Link>
        <div className="firstRight">
          <div className="rightRight">
            <Link to="/signup">회원가입</Link>
            <div className="center">/</div>
            {token ? (
              <div onClick={() => logOut()}>로그아웃</div>
            ) : (
              <div onClick={() => setModal(true)}>로그인</div>
            )}
          </div>
          <div className="rightRight">고객센터</div>
          <span>
            <FaShoppingCart className="iconRight" />
          </span>
          <div>
            <span>
              <FaMapMarker className="iconRight" />
            </span>
            대한민국
          </div>
        </div>
      </div>
      <div className="secondHead">
        <Link to="/snkrs">
          <img src="/Images/snkrs.png" alt="snkrs" />
        </Link>
        <div className="secondCenter">
          <div className="centerMenu">Feed</div>
          <div className="centerMenu">In stock</div>
          <div className="centerMenu">Upcoming</div>
        </div>
        <div onClick={() => setGrid(!grid)}>
          {grid ? <BsFillGridFill className="icon" /> : <BsFillGrid3X3GapFill className="icon" />}
        </div>
      </div>
    </ListHeader>
  );
}

const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontContent};

  a {
    text-decoration: none;
    color: black;
  }

  .firstHead {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 2vw;

    .icon {
      vertical-align: -13%;
    }

    .firstRight {
      display: flex;

      .rightRight {
        display: flex;
        padding-right: 10px;
        cursor: pointer;

        .center {
          margin: 0 5px;
        }
      }

      .iconRight {
        padding-right: 10px;
      }
    }
  }

  .secondHead {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
    padding: 20px 2vw;

    img {
      width: 30px;
      margin: 0;
    }

    .secondCenter {
      display: flex;
      align-items: center;
      font-size: 18px;

      .centerMenu {
        padding: 0 20px;
      }
    }

    .icon {
      font-size: 20px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 640px) {
    .firstHead {
      display: none;
    }
  }
`;

export default SnkrsTop;
