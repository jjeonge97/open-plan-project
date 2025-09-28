import styled from 'styled-components';
import { Button } from '@open-plan/ui';
import '@open-plan/ui/button.css';
import Header from '@/components/Header';

const Home = () => {
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
        <Button label="다음" />
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
