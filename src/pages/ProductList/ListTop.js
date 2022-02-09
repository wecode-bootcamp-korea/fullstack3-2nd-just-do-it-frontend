import { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineControl } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

function ListTop({ filter, setFilter, query, sortMethod, setSortMethod }) {
  const [upDown, setUpDown] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [cate, setCate] = useState();
  const [gender, setGender] = useState();
  const [sortName, setSortName] = useState('신상품순');

  useState(() => {
    if (query.get('categoryId') === '1') {
      setCate('신발');
    } else if (query.get('categoryId') === '2') {
      setCate('의류');
    } else if (query.get('categoryId') === '3') {
      setCate('용품');
    } else {
      setCate('전체');
    }
  }, []);

  useState(() => {
    if (query.get('genderId') === '1') {
      setGender("Mens'");
    } else if (query.get('genderId') === '2') {
      setGender("Womens'");
    } else if (query.get('genderId') === '3') {
      setGender("Kids'");
    }
  }, []);

  const makeModal = () => {
    setUpDown(prev => !prev);
    setFilterModal(prev => !prev);
  };

  return (
    <TopWrapper>
      <div className="topLeft">
        <div className="subTitle">
          <span>{cate}</span>
        </div>
        <div className="mainTitle">
          <span>
            {gender} {cate}
          </span>
        </div>
      </div>
      <div className="topRight">
        <div className="filter" onClick={() => setFilter(!filter)}>
          필터
          <AiOutlineControl className="icon" />
        </div>
        <div className="sortBox" onClick={makeModal}>
          <div className="sort">
            {sortName}
            {upDown ? (
              <MdKeyboardArrowUp className="icon" />
            ) : (
              <MdKeyboardArrowDown className="icon" />
            )}
          </div>
          {filterModal && <FilterModal setSortMethod={setSortMethod} setSortName={setSortName} />}
        </div>
      </div>
    </TopWrapper>
  );
}

const FilterModal = ({ setSortMethod, setSortName }) => {
  const makeSort = (id, name) => {
    setSortMethod(id);
    setSortName(name);
  };

  return (
    <Modal>
      {sort.map((e, i) => {
        return (
          <div className="sortWrapper" key={e.id} onClick={() => makeSort(e.id, e.name)}>
            <div>{e.name}</div>
          </div>
        );
      })}
    </Modal>
  );
};

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    vertical-align: -10%;
    margin-left: 5px;
  }

  .topLeft {
    .subTitle {
      font-size: 14px;
    }
    .mainTitle {
      padding-top: 14px;
      font-size: 20px;
      font-weight: 700;
    }
  }
  .topRight {
    display: flex;
    font-size: 16px;

    .filter {
      margin-right: 30px;
      cursor: pointer;
    }
    .sortBox {
      position: relative;
      .sort {
        cursor: pointer;
      }
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  background-color: #fff;
  width: 100px;
  border-radius: 10px;
  padding: 14px;
  right: 0;
  text-align: right;
  z-index: 200;

  div {
    margin: 10px 0;
  }
`;

const sort = [
  {
    id: 1,
    name: '신상품순',
  },
  {
    id: 2,
    name: '리뷰 많은 순',
  },
  {
    id: 3,
    name: '이름순',
  },
  {
    id: 4,
    name: '할인률순',
  },
  {
    id: 5,
    name: '낮은 가격 순',
  },
  {
    id: 6,
    name: '높은 가격 순',
  },
];
export default ListTop;
