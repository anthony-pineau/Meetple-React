import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
margin-top: 30px;
text-align: center;
  .item{
    display: inline-flex;
    margin: 10px;
  }
  .icon{
      margin-right: 5px;
      color: ${theme.colors.mainColor};
    }
  .map{
    margin-top: 30px;
    width: 100%;
    height: 300px;
    background-color: ${theme.colors.bluecolor};
  }
  h2{
    color: white;
  }
`;
