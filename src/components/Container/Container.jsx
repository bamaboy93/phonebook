import styled from "styled-components";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;

  
    
    
  

  @media  (max-width: 767px) {
    width: 480px;
    padding: 0px 30px;
  }

  @media (min-width: 768px) and (max-width: 1279px) {
    width: 768px;
    padding: 0px 40px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 0px 85px;
  }
}
`;

const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;
