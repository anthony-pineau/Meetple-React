import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  .nav-items{
    border: 2px solid ${theme.colors.bluecolor};
    border-radius: 10px;
    padding: 5px;
    width: 180px;
    margin: 15px auto;
    text-align: center;
    &:hover{
      transition: background-color 1s;
      background-color: ${theme.colors.bluecolor};
    }
  }
`;
