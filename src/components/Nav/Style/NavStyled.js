import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.nav`
  width: 100%;
  height: 70px;
  opacity: 0.8;
  padding: 15px;
  background: #82f0f3;
  background: -moz-linear-gradient(45deg, #82f0f3 0%, #7db9e8 100%, #82daf2 100%);
  background: -webkit-linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  background: linear-gradient(45deg, #82f0f3 0%,#7db9e8 100%,#82daf2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#82f0f3', endColorstr='#82daf2',GradientType=1 );
  position: fixed;
  top: 0px;
  z-index: 1;
  .logo{
    float: left;
    margin-left: 10px;
  }
  .menuicon{
    float: right;
    display: none;
  }
  .icon{
    color: white;
  }
  .nav-items{
    border: 2px solid ${theme.colors.bluecolor};
    border-radius: 10px;
    padding: 5px;
    width: 200px;
    display: inline-block;
    text-align: center;
    float: right;
    margin-right: 10px;
    color: ${theme.colors.bluecolor};
    text-transform: uppercase;
    &:hover{
      transition: background-color 1s;
      background-color: ${theme.colors.bluecolor};
      color: white;
    }
  }

  @media screen and (max-width: 1200px) {
    .menuicon{
      display: block;
    }
    .nav{
      display: none;
    }
  }

`;
