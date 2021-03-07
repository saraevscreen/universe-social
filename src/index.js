import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages = [
  { message: "Message1" },
  { message: "Message_______1" },
  { message: "Message0001" },
  { message: "Messaskdjksjdkjskdjksge1" },
  {
    message:
      'Line 11:9:  Using target="_blank" without rel="noreferrer" is a' +
      "security risk: see https://html.spec.whatwg.org/multipage/links.html#link-type-noopener " +
      "react/jsx-no-target-blank",
  },
];

let DialogUsers = [
  { id: 1, name: "Лехха" },
  { id: 2, name: "Настенка" },
  { id: 3, name: "Темыч" },
  { id: 4, name: "Женя" },
  { id: 5, name: "Лютон" },
  { id: 6, name: "Уэс" },
  { id: 7, name: "Рафаэль" },
];

ReactDOM.render(
  <React.StrictMode>
    <App   DialogUsers={DialogUsers} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
