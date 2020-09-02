import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.article`
margin-top: 30px;
border: solid 3px ${theme.colors.mainColor};
padding: 20px;
border-radius: 10px;
  .avatar{
    height:80px;
    width: auto;
  }
  .block-avatar{
    height: 80px;
    width: 80px;
    overflow: hidden;
    border-radius: 100px;
    margin: auto;
    float: left;
    margin-right: 10px;
  }
  .Icon{
    color: ${theme.colors.mainColor};
    margin-right: 10px;
  }
  .IconText{
    display: inline-flex;
    margin-top: 10px;
    margin-left: 10px;
  }
  .IconText-nbr{
    display: inline-flex;
    margin-top: 5px;
  }
  .title-event{
    &:hover{
      text-decoration: underline;
    }
  }
  .author{
    margin-top: 5px;
  }
  .tag{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    border: 3px solid ${theme.colors.bluecolor};
    border-radius: 20px;
    &:hover{
      color: white;
      background-color: ${theme.colors.bluecolor};
    }
  }
  .arrowlink{
    font-size: 5em;
    display: inline-block;
    &:hover{
      color: ${theme.colors.mainColor};
    }
  }
  .left-part{
    margin: auto;
  }
  .first-part-left{
    height: 100px;
  }
`;
