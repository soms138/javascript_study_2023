// 배열과 객체
const a = 1 //상수 (변하지 않는 값)
// a =2 // error (상수값을 변경할 때 에러 발생)
let b = 2 // 변수(변할 수 있는 값)
b += 4 // 새로운 값이 대입될 경우 기존 값 2가 제거되고 4로 새로 대입
console.log(b)

const yoil = ['일','월','화','수','목','금','토']
console.log(yoil)
console.log(`오늘은 ${yoil[1]}요일 입니다!}`)

const colorArray = ['white','black','yellow','pink','red']
const weatherArray = ['흐림','맑음','비','눈','태풍']
const color = document.querySelector('.color')
const weather = document.querySelector('.weather')

color.innerHTML = `${colorArray[3]}, ${colorArray[2]}`
weather.innerHTML = weatherArray[1]+', '+weatherArray[3]

let optionArray = new Array(4) // 빈 배열 4자리 준비
console.log(optionArray)
optionArray[0] = 'white'
optionArray[1] = 'M'
console.log(optionArray)