// for
// 0~4 반복문
for(let i=0; i<=4; i++){
    console.log(i)
}
const li = document.querySelectorAll('.test li')
console.log(li)
/* for(let i=0; i<li.length; i++){
    console.log(li[i])
    // li[i].style.backgroundColor = 'yellow'
    // 홀수 li 노랑
    // 짝수 li 아쿠아
    if(i%2===1){
        li[i].style.backgroundColor = 'aqua'
    }else{
        li[i].style.backgroundColor = 'yellow'
    }
} */
for(let i=0; i<2; i++){ // 0~1 2번 반복문
    console.log(i)
    for(let j=1; j<6; j++){ // 1~5 5번 반복문
        console.log(`j=${j}`)
    }
}
console.log('-----------------------------------')
// ul-li*3-span*2
// let ulTag = document.createElement('ul')
// const answer1 = document.querySelector('.answer1')
// console.log(ulTag,answer1)
// for(let i=0; i<=2; i++){ //1단 for li*3
//     ulTag.innerHTML += `<li>li=${i+1}`
//     for(let j=0; j<=1; j++){ //2단 for span*2
//         ulTag.innerHTML += `<span>span=${j+1}</span><br>`
//     }
//     ulTag.innerHTML += `</li>`
// }
// answer1.appendChild(ulTag)
// innerHTML 작성은 가장 마지막에 속한 내용 = inline or img 등
let ulTag = document.createElement('ul')
let liTag = document.createElement('li')
const answer1 = document.querySelector('.answer1')
console.log(ulTag,answer1,liTag)
for(let i=0; i<=2; i++){ //1단 for li*3
    liTag = document.createElement('li')
    liTag.innerHTML += `li${i+1}`
    for(let j=0; j<=1; j++){ //2단 for span*2
        liTag.innerHTML += `<span>span${j+1}</span><br>`
    }
    ulTag.appendChild(liTag)
}
answer1.appendChild(ulTag)