import DetailInfo from './compo/ProductDetailInfo';
import DetailImg from './compo/ProductDetailImg';
import styled from 'styled-components';
import Top from '../../components/Top';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailSection = styled.section`
  display: flex;
  margin: 20px 10vw;
  font-family: ${({ theme }) => theme.fontContent};
`;

function Detail() {
  const [data, setData] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/product/detail/${params.styleCode}`)
      .then(res => setData(res.data.data));
  }, []);

  return (
    <div className="Detail">
      <Top />
      <TopNav />
      <DetailSection>
        <DetailImg imgData={data.img} />
        <DetailInfo data={data} />
      </DetailSection>
      <Footer />
    </div>
  );
}

export default Detail;
