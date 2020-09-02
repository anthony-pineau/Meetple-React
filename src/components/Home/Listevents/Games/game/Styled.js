import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
display: inline-block;
text-align: center;
width: 300px;
margin: 1em;
padding: 10px;
border: solid 1px ${theme.colors.mainColor};
border-radius: 10px;
  .img-game{
    width: 150px;
    height: auto;
    &:hover{
      opacity:0.8;
    }
  }
`;
