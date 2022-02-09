import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

function IconFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const addFilter = name => {
    navigate({ pathname: '/list', search: `${location.search}&subIconName="${name}"` });
  };

  return (
    <FilterWrapper>
      <Title>아이콘</Title>
      <Content>
        {icon.map((e, i) => {
          return (
            <div className="box" key={i}>
              <input type="checkbox" id={`i${e.id}`} onClick={() => addFilter(e.name)} />
              <label htmlFor={`i${e.id}`}>{e.name}</label>
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
      font-size: 13px;
      text-align: center;
    }
  }
`;

const icon = [
  {
    id: 1,
    name: '에어 포스 1',
  },
  {
    id: 2,
    name: '나이키 에어맥스',
  },
  {
    id: 3,
    name: '데이브레이크',
  },
  {
    id: 4,
    name: '인피니티 런',
  },
  {
    id: 5,
    name: '블레이저',
  },
  {
    id: 6,
    name: '나이키 와플',
  },
  {
    id: 7,
    name: '나이키 크레이터 임팩트',
  },
];

export default IconFilter;
