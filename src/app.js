/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["My cat ", "My computer ", "My code ", "My girlfriend "];
  let action = ["ate ", "scratched ", "burned ", "throw "];
  let what = ["my homework ", "my phone ", "my car ", "my clothes "];
  let when = [
    " before the class",
    " when I was sleeping",
    " while I was at the supermarket",
    " during my break",
    " while I was taking a shower"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    "" +
    action[actionIndex] +
    "" +
    what[whatIndex] +
    "" +
    when[whenIndex]
  );
};
