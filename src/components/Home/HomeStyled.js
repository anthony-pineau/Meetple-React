import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  .header{
    background: #82f0f3;
    background: -moz-linear-gradient(45deg, #82f0f3 0%, #7db9e8 100%, #82daf2 100%);
    background: -webkit-linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
    background: linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#82f0f3', endColorstr='#82daf2',GradientType=1 );
    padding: 10px 50px 0px 50px;
    z-index: 2;
    text-align: center;
  }
  .titleh1{
    padding-top: 150px;
    font-size: 2em;
  }
  .text{
    margin-bottom: 50px;
    margin-top: 20px;
  }
  .nbrresult{
    width: fit-content;
    text-transform: uppercase;
    margin: auto;
    font-size: 2em;
    margin-top: 10px;
    border-bottom: solid 3px ${theme.colors.mainColor};
  }
  .combo-box-demo{
    display: inline-block;
    width: 100%;
  }
  .Mui-focused{
    color: ${theme.colors.bluecolor};
  }
  .title{
    margin-top: 50px;
    padding: 10px;
    border-left: solid 3px ${theme.colors.mainColor};
  }
  .events{
    width: 1200px;
    margin: auto;
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
  .filtre{
    padding: 20px;
    margin-top: 150px;
    background: #F5F4FC;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
  .inscription{
    border: 2px solid ${theme.colors.bluecolor};
    border-radius: 10px;
    padding: 1em;
    color: ${theme.colors.bluecolor};
    text-transform: uppercase;
    &:hover{
      transition: background-color 1s;
      background-color: ${theme.colors.bluecolor};
      color: white;
    }
  }
`;
