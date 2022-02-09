import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

function ColorFilter() {
  const navigate = useNavigate();
  const location = useLocation();

  const addFilter = id => {
    navigate({ pathname: '/list', search: `${location.search}&colorId=${id}` });
  };
  return (
    <FilterWrapper>
      <Title>색상</Title>
      <Content>
        {color.map((e, i) => {
          return (
            <div className="btnWrapper" key={i} onClick={() => addFilter(e.id)}>
              <button style={{ backgroundColor: e.hex }} />
              <div className="name">{e.color}</div>
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  text-align: center;

  .btnWrapper {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    cursor: pointer;

    button {
      margin-bottom: 10px;
      width: 24px;
      height: 24px;
      border: 0.1px solid #eeeeee;
      border-radius: 100%;
      cursor: pointer;
    }

    .name {
      padding: 0px;
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
`;

const color = [
  {
    id: 1,
    color: '연갈색',
    hex: '#F0E68C',
  },
  {
    id: 2,
    color: '검정색',
    hex: '#000000',
  },
  {
    id: 3,
    color: '파랑색',
    hex: '#3786D5',
  },
  {
    id: 4,
    color: '갈색',
    hex: '#765439',
  },
  {
    id: 5,
    color: '금색',
    hex: '#D5D606',
  },
  {
    id: 6,
    color: '회색',
    hex: '#737373',
  },
  {
    id: 7,
    color: '녹색',
    hex: '#109300',
  },
  {
    id: 8,
    color: '쑥색',
    hex: '#7E7F01',
  },
  {
    id: 9,
    color: '남색',
    hex: '#3A4A75',
  },
  {
    id: 10,
    color: '주황색',
    hex: '#EB621D',
  },
  {
    id: 11,
    color: '분홍색',
    hex: '#EB008A',
  },
  {
    id: 12,
    color: '보라색',
    hex: '#693BB1',
  },
  {
    id: 13,
    color: '빨간색',
    hex: '#C50101',
  },
  {
    id: 14,
    color: '은색',
    hex: '#C4C4C4',
  },
  {
    id: 15,
    color: '흰색',
    hex: '#FFFFFF',
  },
  {
    id: 16,
    color: '노란색',
    hex: '#FCC200',
  },
];

export default ColorFilter;
