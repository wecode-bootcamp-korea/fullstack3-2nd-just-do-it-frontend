import styled from 'styled-components';
import { AiOutlineControl } from 'react-icons/ai';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useState } from 'react';

function ListTop({ filter, setFilter }) {
  const [upDown, setUpDown] = useState(false);

  return (
    <TopWrapper>
      <div className="topLeft">
        <div className="subTitle">
          <span>신발</span>
        </div>
        <div className="mainTitle">
          <span>Men's 신발(445)</span>
        </div>
      </div>
      <div className="topRight">
        <div className="filter" onClick={() => setFilter(!filter)}>
          필터
          <AiOutlineControl className="icon" />
        </div>
        <div className="sort" onClick={() => setUpDown(!upDown)}>
          신상품순
          {upDown ? (
            <MdKeyboardArrowUp className="icon" />
          ) : (
            <MdKeyboardArrowDown className="icon" />
          )}
        </div>
      </div>
    </TopWrapper>
  );
}

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
    .sort {
      cursor: pointer;
    }
  }
`;

export default ListTop;
