import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  background-color: #22212C;

  .ant-form {
    display: flex;
    align-items: center;
    flex-direction: column;

  }

  .ant-modal {
    width: max-content !important;
  }

   .ant-modal-content {
    background-color:#302f3d ;
    width: 80rem;
    border-radius: 1rem;

  

    .ant-modal-confirm-title {
    font: 700 2.5rem "Merriweather Sans", sans-serif ;
      color: #fff;
      margin-bottom: 1.5rem;
    }

    .sectionInputs {
      display: flex;
      flex-wrap: wrap ;
      justify-content: space-evenly;
      width: 80rem;
      margin-bottom: 1rem;

      .description {
        align-self: flex-start;
        margin-right: auto;
        margin-left: 6.7rem;
        margin-top: 1rem;
       
      }
    }
    .ant-btn-primary {
    font: 400 1.3rem "Merriweather Sans", sans-serif ;
    background-color: #302f3d;
    border-color: #fff;
    }
    .ant-btn-primary:hover {
      background-color: #fff;
      border-radius: 0.5rem;
      border-color:#302f3d;
      color: #302f3d ;

    }

      .ant-btn-default {
    font: 400 1.3rem "Merriweather Sans", sans-serif ;
    }
    .ant-btn-default:hover {
      background-color: #302f3d;
      border-color:#fff;
      color: #fff ;

    }
  }

  .ant-divider {
    position: absolute;
   bottom: 0;
   width: 100%;
   margin: 0;
   z-index: 2;
   background-color: #837e9f;
  }
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
  
}
html {
  font-size: 62.5%;
}
`;

export default GlobalStyle;
