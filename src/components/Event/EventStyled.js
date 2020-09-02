import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  text-align: center;
  margin-top: 100px;
  .nav{
    margin-top: 20px;
    border-bottom: 5px solid ${theme.colors.mainColor};
  }
  .navigation-item{
    display: inline-flex;
    padding: 5px;
    text-transform: uppercase;
    margin-right: 10px;
    &-active{
      border-bottom: 5px solid ${theme.colors.bluecolor};
    }
    .icon{
      margin-right: 10px;
    }
  }
  .title-event{
    text-align: left;
    text-transform: uppercase;
    padding: 10px;
    border-left: solid 3px ${theme.colors.mainColor};
    margin: 5px;
  }
  .icon-category{
    border-bottom: 3px solid ${theme.colors.mainColor};
    padding: 5px;
    margin: 5px;
    display:inline-flex;
  }
  .icon-nbr{
    padding: 5px;
    margin: 5px;
    display:inline-flex;
  }
  .icon-event{
    margin-right: 10px;
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
  .listtags{
    margin-top: 10px;
  }
  .text{
    margin: 50px 0px;
  }
  .avatar{
    height: 30px;
    width: 30px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .author{
    margin-bottom: 10px;
  }
  .current-event{
    border: 3px solid ${theme.colors.bluecolor};
    border-radius: 20px;
    position: fixed;
    right: 0;
    top: 50%;
    &:hover{
      background-color: white;
    }
  }
 .action-join{
    color: ${theme.colors.bluecolor};
    width: 80%;
    font-size: 1.5em;
    background-color: #F5F4FC;
    padding: 10px;
    border: solid 3px ${theme.colors.bluecolor};
    border-radius: 0.5em;
    text-transform: uppercase;
    &:hover{
      background-color:${theme.colors.bluecolor};
      color: #F5F4FC;
      transition: background-color 1s;
    }
  }
  .response{
    padding: 10px;
  }

`;
