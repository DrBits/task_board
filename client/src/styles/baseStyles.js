import { createGlobalStyle } from 'styled-components';

import { color, font, mixin } from 'utils/styles';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    color: ${color.textDarkest};
    line-height: 1.2;
    ${font.size(16)}
    ${font.regular}
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    ${font.regular}
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: boreder-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  ul, li, ol, dd, h1, h2, h3, h4, h5, h6, p {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    ${font.bold}
  }

  button {
    background: none;
    border: none;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
    &:focus {
      outline: none;
    }
    &:disabled {
      opacity: 1;
    }
  }

  [role="button"], button, input, textarea {
    appearance: none;
  }

  select option {
    color: ${color.textDarkest};
  }

  p {
    line-height: 1.4285;
    a {
      ${mixin.link()}
    }
  }

  textarea {
    line-height: 1.4285;
  }

  body, select {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    touch-action: manipulation;
  }

  ${mixin.placeholderColor(color.textLight)}
`;
