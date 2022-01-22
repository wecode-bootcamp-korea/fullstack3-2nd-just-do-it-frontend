import DetailInfo from './compo/DetailInfo';
import DetailImg from './compo/DetailImg';
import styled from 'styled-components';

const DetailSection = styled.section`
  display: flex;
  margin: 20px 60px;
`;
function Detail() {
  return (
    <div className="detail">
      <DetailSection>
        <DetailImg />
        <DetailInfo />
      </DetailSection>
    </div>
  );
}

export default Detail;
