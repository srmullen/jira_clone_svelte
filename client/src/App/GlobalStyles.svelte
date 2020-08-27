<style global>
  :root {
    --primary: #0052cc; /* Blue */
    --success: #0B875B; /* green */
    --danger: #E13C3C; /* red */
    --warning: #F89C1C; /* orange */
    --secondary: #F4F5F7; /* light grey */

    --textDarkest: #172b4d;
    --textDark: #42526E;
    --textMedium: #5E6C84;
    --textLight: #8993a4;
    --textLink: #0052cc;

    --backgroundDarkPrimary: #0747A6;
    --backgroundMedium: #dfe1e6;
    --backgroundLight: #ebecf0;
    --backgroundLightest: #F4F5F7;
    --backgroundLightPrimary: #D2E5FE;
    --backgroundLightSuccess: #E4FCEF;

    --borderLightest: #dfe1e6;
    --borderLight: #C1C7D0;
    --borderInputFocus: #4c9aff;

    --font-regular: 'CircularStdBook';
    --font-medium: 'CircularStdMedium';
    --font-bold: 'CircularStdBold';
    --font-black: 'CircularStdBlack';
  }

  html, body {
    height: 100%;
    min-height: 100%;
    min-width: 768px;
  }

  body {
    color: var(--textDarkest);
    -webkit-tap-highlight-color: transparent;
    line-height: 1.2;
    font-size: 16px;
    font-family: var(--font-regular);
  }

  *, *:after, *:before, input[type="search"] {
    box-sizing: border-box;
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
    font-family: var(--font-bold);
    font-weight: normal;
  }

  button {
    background: non;
    border: none;
  }

  /* Workaround for IE11 focus highlighting for select elements */
  select::-ms-value {
    background: none;
    color: #42413d;
  }

  [role="button"], button, input, select, textarea {
    outline: none;
  }

  [role="button"]:focus, button:focus, input:focus, select:focus, textarea:focus {
    outline: none;
  }

  [role="button"]:disabled, button:disabled, input:disabled, select:disabled, textarea:disabled {
    opacity: 1;
  }

  [role="button"], button, input, textarea {
    appearance: none;
  }

  select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }

  select::-ms-expand {
    display: none;
  }

  select option {
    color: var(--textDarkest)
  }

  p {
    line-height: 1.4285;
  }

  p a {
    cursor: pointer;
    color: var(--textLink);
    font-family: var(--font-medium);
  }

  p a:hover,
  p a:visited,
  p a:active {
    color: var(--textLink);
  }

  p a:hover {
    text-decoration: underline;
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

  ::-webkit-input-placeholder {
    color: var(--textLight) !important;
    opacity: 1 !important;
  }
  :-moz-placeholder {
    color: var(--textLight) !important;
    opacity: 1 !important;
  }
  ::-moz-placeholder {
    color: var(--textLight) !important;
    opacity: 1 !important;
  }
  :-ms-input-placeholder {
    color: var(--textLight) !important;
    opacity: 1 !important;
  }
</style>