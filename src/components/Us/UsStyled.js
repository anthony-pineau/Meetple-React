/* eslint-disable no-tabs */
import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  background-color: ${theme.colors.altColor};
  padding: 50px;
 .titreh1{
    margin-top: 150px;
    margin-bottom: 50px;
    text-align: left;
    font-size: 2em;
    padding: 10px;
    border-left: 3px solid ${theme.colors.mainColor};
  }
  .description{
    width: 350px;
    height: 500px;
    display: inline-block;
    padding:50px;
    border-radius: 10px;
    border: 3px solid ${theme.colors.bluecolor};
    margin: 20px;
    box-shadow: 4px 4px 4px ${theme.colors.mainColor};
  }
  .img-avatar{
    width: 100px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    margin: auto;
  }

  img {
    width: 100px;
    height: auto;
  }

  .Name {
    padding-top:50px; 
    text-align: center;
    padding-bottom:15px;

  }

  .spe { 
    text-align: center;
    padding-bottom:15px;
  } 

  .Tag{
    text-align: center;
    border-bottom: 3px solid ${theme.colors.mainColor};
    padding: 5px;
  }
  .title-jx{
    margin: 10px 0px 10px 0px;
    font-size: 1.2em;
  }
`;
