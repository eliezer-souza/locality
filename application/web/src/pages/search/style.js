import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  text-align: center;

  .link {
    text-decoration: none;
  }

  .title {
    @media only screen and (max-width: 768px) {
      font-size: 9vw;
    }

    max-width: 1200px;
  }

  .label {
    @media only screen and (max-width: 768px) {
      font-size: 5vw;
    }

    max-width: 1200px;
  }
`;

export const Image = styled.img`
  width: 150px;

  @media only screen and (max-width: 768px) {
    width: 50px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
`;
