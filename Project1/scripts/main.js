/**
 * Created by li5801 on 4/10/2018.
 */
var myHeading=document.querySelector('h1');
myHeading.textContent='Hello world!';
var myButton=document.querySelector('button');
myButton.onclick=function () {
  var img=document.querySelector('img');
  img.setAttribute('src','images/firefox2.jpg')
};
function setusername() {
    var myname=prompt('Please enter your name.');
    localStorage.setItem('name',myname);
    myHeading.textContent='Mozilla is cool '+myname;
}
if(!localStorage.getItem('name')){
    setusername();
}
else {
    var sotredname=localStorage.getItem('name');
    myHeading.textContent='Mozilla is cool '+sotredname;
}