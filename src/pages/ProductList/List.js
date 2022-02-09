import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Top from '../../components/Top';
import TopNav from '../../components/TopNav';
import ListTop from './ListTop';
import ListFilterCard from './ListFilterCard';
import ListCard from './ListCard';
import Footer from '../../components/Footer';
import { GET_LIST_API } from '../../config';

function List() {
  const [filter, setFilter] = useState(true);
  const [productList, setProductList] = useState([]);
  const [sortMethod, setSortMethod] = useState(0);

  // const params = useParams();
  const location = useLocation().search;
  const query = new URLSearchParams(location);
  const currURL = window.location.search;
  const URL = `${GET_LIST_API}${currURL}&sortMethod=${sortMethod}`;

  const FILTER_URL = `${process.env.REACT_APP_BASE_FRONT_URL}?genderId=${query.get(
    'genderId'
  )}&categoryId=${query.get('categoryId')}`;

  const changeParams = new URLSearchParams(FILTER_URL);

  useEffect(() => {
    axios({
      url: URL,
      method: 'GET',
    }).then(response => {
      setProductList(response.data.list);
    });
  }, [URL]);

  return (
    <>
      <Top />
      <TopNav />
      <ListWrapper>
        <ListTop
          filter={filter}
          setFilter={setFilter}
          query={query}
          sortMethod={sortMethod}
          setSortMethod={setSortMethod}
        />
        <ListBody>
          <ListFilterCard filter={filter} FILTER_URL={FILTER_URL} changeParams={changeParams} />
          <ListCardWrapper>
            {productList.map((element, index) => {
              return (
                <ListCard
                  key={index}
                  categoryName={element.categoryName}
                  genderName={element.genderName}
                  productName={element.productName}
                  imgUrl={element.imgUrl}
                  normalPrice={element.normal_price}
                  salePrice={element.sale_price}
                  saleRate={element.sale_rate}
                  styleCode={element.styleCode}
                  subAccName={element.subAccessoriesName}
                  subBrandName={element.subBrandName}
                  subClothesName={element.subClothesName}
                  subIconName={element.subIconName}
                  isMember={element.is_member}
                />
              );
            })}
          </ListCardWrapper>
        </ListBody>
      </ListWrapper>
      <Footer />
    </>
  );
}

const ListWrapper = styled.div`
  padding: 3vw;
  box-sizing: border-box;
  font-family: ${props => props.theme.fontContent};
`;

const ListBody = styled.div`
  display: flex;
`;

const ListCardWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default List;
