import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SubClothesFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const addFilter = name => {
    navigate({ pathname: '/list', search: `${location.search}&subClothesName="${name}"` });
  };

  return (
    <FilterWrapper>
      <Title>의류</Title>
      <Content>
        {clothes.map((e, i) => {
          return (
            <div className="box" key={i}>
              <input type="checkbox" id={`c${e.id}`} onClick={() => addFilter(e.name)} />
              <label htmlFor={`c${e.id}`}>{e.name}</label>
            </div>
          );
        })}
      </Content>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  border-bottom: 1px solid gainsboro;
  padding: 10px 0;
`;

const Title = styled.div`
  font-weight: 600;
  margin: 10px 0;
`;
const Content = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;

  .box {
    margin: 4px 0;

    input {
      display: none;
    }

    input + label {
      cursor: pointer;
      margin-left: 6px;
    }

    input + label:before {
      content: '';
      display: inline-block;
      width: 17px;
      height: 17px;
      margin-right: 6px;
      line-height: 17px;
      border: 1px solid #cbcbcb;
      vertical-align: middle;
    }

    input:checked + label:before {
      content: 'v';
      font-weight: 700;
      color: #fff;
      background-color: #000;
      border-color: #000;
      font-size: 12px;
      text-align: center;
    }
  }
`;

const clothes = [
  {
    id: 1,
    name: '베이스레이어 상의',
  },
  {
    id: 2,
    name: '베이스레이어 하의',
  },
  {
    id: 3,
    name: '그래픽티',
  },
  {
    id: 4,
    name: '저지',
  },
  {
    id: 5,
    name: '조거',
  },
  {
    id: 6,
    name: '브라',
  },
];

export default SubClothesFilter;
