import styled from 'styled-components';
import SizeFilter from './filter/SizeFilter';
import ColorFilter from './filter/ColorFilter';
import BrandFilter from './filter/BrandFilter';
import IconFilter from './filter/IconFilter';
import SubClothesFilter from './filter/SubClothesFilter';
import SubAccFilter from './filter/SubAccFilter';

function ListFilterCard({ filter }) {
  return (
    <FilterWrapper>
      <div className={filter ? 'notHide' : 'hide'}>
        <SizeFilter />
        <ColorFilter />
        <BrandFilter />
        <IconFilter />
        <SubClothesFilter />
        <SubAccFilter />
      </div>
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  margin-top: 50px;
  margin-right: 20px;

  .notHide {
    display: block;
    width: 220px;
  }

  .hide {
    display: none;
  }
`;

export default ListFilterCard;
