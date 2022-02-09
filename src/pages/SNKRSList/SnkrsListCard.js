import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SnkrsListCard({ snkrsName, imgUrl, isOpen, key, setBtnActive, grid }) {
  return (
    <List>
      <div className={grid ? 'listCard' : 'changedListCard'}>
        <div
          className="cardWrapper"
          key={key}
          onMouseEnter={() => setBtnActive(true)}
          onMouseLeave={() => setBtnActive(false)}
        >
          <Link to="#">
            <div className="imgWrapper">
              <img src={imgUrl} alt={snkrsName} />
            </div>
            <div className="nameWrapper">
              <div className="itemName">{snkrsName}</div>
            </div>
          </Link>
        </div>
      </div>
    </List>
  );
}

const List = styled.div`
  .listCard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    width: 100%;

    .cardWrapper {
      .imgWrapper {
        display: flex;
        justify-content: center;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .nameWrapper {
        text-align: center;
        padding: 30px;

        .itemName {
          padding-top: 10px;
          font-size: 22px;
          font-weight: 600;
        }
      }
    }
  }

  .changedListCard {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 15px;
    width: 100%;

    .cardWrapper {
      .imgWrapper {
        display: flex;
        justify-content: center;
        overflow: hidden;

        img {
          width: 100%;
        }
      }

      .nameWrapper {
        display: none;
      }
    }
  }

  a {
    text-decoration: none;
    color: black;
  }

  a :hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 640px) {
    .listCard {
      grid-template-columns: 1fr;
    }

    .changedListCard {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default SnkrsListCard;
