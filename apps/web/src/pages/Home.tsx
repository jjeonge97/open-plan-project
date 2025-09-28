import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { FC, useEffect, useState } from 'react';
import { usePhotoInfoQuery } from '@/queries/usePhotoInfoQuery';
import { usePhotoStore } from '@/stores/photoStore';
import useDebounce from '@/hooks/useDebounce';
import Lottie from 'lottie-react';
import LottieImg from '../assets/loadingLottie.json';

const Home: FC = () => {
  const navigate = useNavigate();
  const { refetch } = usePhotoInfoQuery('0');
  const photoInfo = usePhotoStore((state) => state.photoInfo);
  const setPhotoInfo = usePhotoStore((state) => state.setPhotoInfo);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (photoInfo) {
      navigate('/result');
    }
  }, []);

  const debouncedGo = useDebounce(() => {
    (async () => {
      try {
        const { data } = await refetch(); // fresh 데이터
        if (data) {
          setPhotoInfo(data);
          navigate('/result');
        }
      } catch (e) {
        window.alert(e);
      } finally {
        setIsWaiting(false);
      }
    })();
  }, 500);

  const onClickMoveToResult = () => {
    setIsWaiting(true);
    debouncedGo();
  };

  return (
    <Container>
      <Header />
      <Content>
        <Text>
          안녕하세요
          <br />
          김현정입니다
        </Text>
      </Content>
      <ButtonWrapper>
        <Button
          children={
            isWaiting ? (
              <Lottie
                animationData={LottieImg}
                autoPlay
                style={{ height: 25 }}
              />
            ) : (
              '다음'
            )
          }
          onClick={onClickMoveToResult}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  color: #111;
`;

const ButtonWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
