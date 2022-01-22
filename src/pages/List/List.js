import styled from 'styled-components';
import ListCard from './ListCard';
import Top from '../../components/Top';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import ListTop from './ListTop';
import ListFilterCard from './ListFilterCard';
import { useState } from 'react';

function List() {
  const [filter, setFilter] = useState(false);

  return (
    <>
      <Top />
      <TopNav />
      <ListWrapper>
        <ListTop filter={filter} setFilter={setFilter} />
        <ListBody>
          <ListFilterCard filter={filter} />
          <ListCard />
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

export default List;
