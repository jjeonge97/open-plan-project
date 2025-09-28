import KeyValueCard from '@/components/KeyValueCard';
import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { usePhotoStore } from '@/stores/photoStore';

const Result: FC = () => {
  const navigate = useNavigate();
  const photoInfo = usePhotoStore((state) => state.photoInfo);

  useEffect(() => {
    //조회 이력 없이 result 페이지 진입 시 home 페이지로 이동
    if (!photoInfo) {
      console.log('사진 조회 한적 없는데 result 페이지 진입');
      setTimeout(() => navigate('/'), 1000);
    }
  }, []);

  const onClickMoveToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Header />
      <Wrapper>
        <ImageWrapper>
          <img src={photoInfo?.download_url} alt="img" />
        </ImageWrapper>
        <Content>
          <KeyValueCard
            firstKey="id"
            firstValue={photoInfo?.id ?? ''}
            secondKey="author"
            secondValue={photoInfo?.author ?? ''}
            isRow
          />
          <KeyValueCard
            firstKey="width"
            firstValue={photoInfo?.width ?? ''}
            secondKey="height"
            secondValue={photoInfo?.height ?? ''}
            isRow
          />
          <KeyValueCard
            firstKey="url"
            firstValue={photoInfo?.url ?? ''}
            secondKey="download_url"
            secondValue={photoInfo?.download_url ?? ''}
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
