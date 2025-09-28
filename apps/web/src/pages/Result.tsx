import KeyValueCard from '@/components/KeyValueCard';
import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { usePhotoInfoQuery } from '@/queries/usePhotoInfoQuery';

const Result: FC = () => {
  const navigate = useNavigate();
  const { data } = usePhotoInfoQuery('0');

  const onClickMoveToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <ImageWrapper>
          <img src={data?.download_url} alt="img" />
        </ImageWrapper>
        <Content>
          <KeyValueCard
            firstKey="id"
            firstValue={data?.id ?? ''}
            secondKey="author"
            secondValue={data?.author ?? ''}
            isRow
          />
          <KeyValueCard
            firstKey="width"
            firstValue={data?.width ?? ''}
            secondKey="height"
            secondValue={data?.height ?? ''}
            isRow
          />
          <KeyValueCard
            firstKey="url"
            firstValue={data?.url ?? ''}
            secondKey="download_url"
            secondValue={data?.download_url ?? ''}
          />
          <Button label="이전" onClick={onClickMoveToHome} />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  background:
    linear-gradient(120deg, #ffffff 0%, rgba(255, 255, 255, 0) 55%),
    linear-gradient(
      165deg,
      rgba(0, 0, 0, 0.01) 0%,
      rgba(0, 0, 0, 0.3) 75%,
      #111111 100%
    ),
    #fafafa;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 40px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin: 40px 0;
  padding: 0 20px;
  box-sizing: border-box;

  img {
    width: 100%;
    border-radius: 24px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 60px;

  @media (min-width: 1440px) {
    margin: 0;
  }
`;
