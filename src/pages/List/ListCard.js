import styled from 'styled-components';

function ListCard() {
  return (
    <ListCardWrapper>
      <div />
    </ListCardWrapper>
  );
}

const ListCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default ListCard;
