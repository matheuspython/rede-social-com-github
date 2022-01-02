import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }
  body{
    background: rgb(248, 248, 248);
  }
  .container{
    max-width: 1280px;
    width: 100%;
    padding: 0 2%;
    margin: 5px auto;
  }
`
