import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ListFilterCard({ filter }) {
  return (
    <FilterWrapper>
      <div className={filter ? 'notHide' : 'hide'}>
        {listMock.map((element, index) => {
          return (
            <div key={index}>
              {console.log(element)}
              {Object.keys(element)}
              <Link to="/?">
                <button>{element['신발 사이즈']}</button>
              </Link>
            </div>
          );
        })}
      </div>
    </FilterWrapper>
  );
}

const listMock = [
  {
    '신발 사이즈': [220, 225, 230, 235],
  },
  { 색상: ['orange'] },
];

const FilterWrapper = styled.div`
  margin-top: 50px;

  .notHide {
    display: block;
  }

  .hide {
    display: none;
  }
`;

export default ListFilterCard;
