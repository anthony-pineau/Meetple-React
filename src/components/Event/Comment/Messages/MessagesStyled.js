import styled from 'styled-components';
import theme from 'src/styles/theme';

export default styled.div`
  .containerMessages{
    height: 500px;
    overflow-y: auto;
    padding: 1em;
  }
  .message {
    margin-bottom: 2em;
    position: relative;
    &-author {
      font-size: 0.9em;
    }
    &-body {
      border-radius: 1rem;
      background: #fff;
      color: ${theme.colors.mainColor};
      padding: 0.8em 1.3em;
      display: inline-block;
      margin-top: 0.8em;
      min-width: 5em;
      &::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid white;
        position: absolute;
        margin-top: -1.4em;
      }
    }
  }
`;
