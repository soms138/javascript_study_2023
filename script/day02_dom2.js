// getElement.. 방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const firstCls = document.getElementsByClassName('first');
const lastCls = document.getElementsByClassName('last');
console.log(mainTag,hTag[0],contentsCls[0],boxId,firstCls[0],lastCls[0]);
console.log(aTag,aTag[0],aTag[1],aTag[2]);
// querySelector.. 방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('box');
// const aTagQ = document.querySelector('a'); // body에서 읽게되는 a태그 중에 가장 첫번째로 존재하는 태그만 인식
const aTagQ = document.querySelectorAll('a'); // body에서 읽게되는 a태그 중에 모든 a태그를 인식
const firstClsQ = document.querySelector('.first');
const lastClsQ = document.querySelectorAll('.last');
console.log(mainTagQ,hTagQ,contentsClsQ,boxIdQ,firstClsQ,lastClsQ[0]);
// console.log(aTagQ); // 1개일 경우
console.log(aTagQ,aTagQ[0],aTagQ[1],aTagQ[2]); // 2개 이상일 경우