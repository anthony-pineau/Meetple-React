import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
min-height: 200px;
border: solid 3px ${theme.colors.mainColor};
padding: 15px;
border-radius: 10px;
text-align: center;
  .title{
    &:hover{
    color: ${theme.colors.mainColor};
    text-decoration: underline;
    }
  }
  .IconText{
    display: inline-flex;
    margin-top: 10px;
    margin-left: 10px;
  }
  .Icon{
    color: ${theme.colors.mainColor};
    margin-right: 10px;
  }
  .action-delete{
    margin-top: 10px;
    color: ${theme.colors.bluecolor};
    font-size: 1em;
    background-color: #F5F4FC;
    padding: 5px;
    border: solid 3px ${theme.colors.bluecolor};
    border-radius: 0.5em;
    text-transform: uppercase;
    &:hover{
      cursor: pointer;
      background-color:${theme.colors.bluecolor};
      color: #F5F4FC;
      transition: background-color 1s;
    }
  }
  .title-delete{
    margin: 1em;
  }
  .non{
    margin: 1em;
    width: 25%;
    color: ${theme.colors.bluecolor};
    font-size: 1em;
    background-color: white;
    padding: 5px;
    border: solid 3px ${theme.colors.bluecolor};
    border-radius: 0.5em;
    text-transform: uppercase;
      &:hover{
        background-color: ${theme.colors.bluecolor};
        color: #F5F4FC;
        transition: background-color 1s;
      }
  }
  .oui{
    margin: 1em;
    width: 25%;
    color: red;
    font-size: 1em;
    background-color: white;
    padding: 5px;
    border: solid 3px red;
    border-radius: 0.5em;
      text-transform: uppercase;
      &:hover{
        background-color: red;
        color: #F5F4FC;
        transition: background-color 1s;
      }
  }

`;
