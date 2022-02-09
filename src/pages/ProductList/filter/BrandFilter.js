import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

function BrandFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const addFilter = name => {
    navigate({ pathname: '/list', search: `${location.search}&subBrandName="${name}"` });
  };

  const removeFilter = name => {
    const targetURL = location.search;
    const splitArr = targetURL.split('&');
    const newURL = [];

    const result = splitArr.filter(e => e.includes(name));

    console.log(result);
  };

  return (
    <FilterWrapper>
      {removeFilter()}
      <Title>브랜드</Title>
      <Content>
        {brand.map((e, i) => {
          return (
            <div className="box" key={i}>
              <input type="checkbox" id={`b${e.id}`} onClick={() => removeFilter(e.name)} />
              <label htmlFor={`b${e.id}`}>{e.name}</label>
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

const brand = [
  {
    id: 1,
    name: 'ACG',
  },
  {
    id: 2,
    name: 'Nike Lab',
  },
  {
    id: 3,
    name: '나이키 스포츠웨어',
  },
  {
    id: 4,
    name: '조던',
  },
];

export default BrandFilter;
