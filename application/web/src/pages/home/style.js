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

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  width: 190px;
`;
