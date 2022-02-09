import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

function SubAccFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const addFilter = name => {
    navigate({ pathname: '/list', search: `${location.search}&subAccessoriesName="${name}"` });
  };
  return (
    <FilterWrapper>
      <Title>용품</Title>
      <Content>
        {acc.map((e, i) => {
          return (
            <div className="box" key={i}>
              <input type="checkbox" id={`a${e.id}`} onClick={() => addFilter(e.name)} />
              <label htmlFor={`a${e.id}`}>{e.name}</label>
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

const acc = [
  {
    id: 1,
    name: '모자',
  },
  {
    id: 2,
    name: '가방',
  },
  {
    id: 3,
    name: '장갑',
  },
];

export default SubAccFilter;
