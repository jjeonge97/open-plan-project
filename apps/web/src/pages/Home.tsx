import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { FC, useEffect } from 'react';
import { usePhotoInfoQuery } from '@/queries/usePhotoInfoQuery';
import { usePhotoStore } from '@/stores/photoStore';

const Home: FC = () => {
  const navigate = useNavigate();
  const { refetch } = usePhotoInfoQuery('0');
  const photoInfo = usePhotoStore((state) => state.photoInfo);
  const setPhotoInfo = usePhotoStore((state) => state.setPhotoInfo);

  useEffect(() => {
    // 사진 한번이라도 조회 시 바로 result 페이지로 이동
    if (photoInfo) {
      console.log('사진 한번이라도 조회함');
      navigate('/result');
    }
    console.log('사진 조회 한번도 안함');
  }, []);

  const onClickMoveToResult = async () => {
    try {
      const { data } = await refetch();
      if (data) {
        setPhotoInfo(data);
        navigate('/result');
      }
    } catch (e) {
      window.alert(e);
    }
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
        <Button label="다음" onClick={onClickMoveToResult} />
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
