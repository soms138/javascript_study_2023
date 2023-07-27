// 자바스크립트 연산자
let a = 10;
let b = 5;
let c = 1;
console.log(`${a}+${b}=${a+b}`);
console.log(a+'+'+b+'='+(a+b));
console.log(`${a}-${c}=${a-c}`);
console.log(`${b}X${c}=${b*c}`);
console.log(`${a}/${b}=${a/b}`);
console.log(`${a}%${b}=${a%b}`)//나머지(홀짝 구분할 때 사용하기도 함 1일 경우 홀수 0일 경우 짝수)
console.log('-------------------')
// 연결연산자
console.log('10'+10); // 1010 연결연산자
console.log(10+10); // 20 더하기연산자
console.log(typeof('10'+10)); //string
console.log(typeof(10+10)) //number
console.log('-------------------')
let age = 20
// age = age+1
age += 1 //age = age+1
console.log(`${age}살`);
age -= 1 //age = age-1
console.log(`${age}살`);
age *= 5 //age = age*5
console.log(age);
age /= 2 //age = age/2
console.log(age)
age %= 2 //age = age%2
console.log(age)
console.log('-------------------')
// 복합대입연산자를 이용한 태그 생성방법
let cart_li = '<ul>' // 빈 장바구니(초기상태)
// 참기름 1개 장바구니 담기
// cart_li = cart_li+'<li>참기름 1개</li>'; //복합대입연산자 사용하지 않을 경우
cart_li += '<li>참기름1개</li>';
// 베이글 2개 장바구니 담기
cart_li += '<li>베이글2개</li>'
cart_li += '</ul>'
console.log(cart_li);
console.log('-------------------')
// 태그 생성 메소드 creatElement('생성태그명')
let cartNewLi = document.createElement('ul');
const cart_contents = document.querySelector('#cart .contents');
cartNewLi.innerHTML = '<li>참기름 1개</li>'
cartNewLi.innerHTML += '<li>베이글 2개</li>'
console.log(cartNewLi);
console.log(cart_contents);
cart_contents.appendChild(cartNewLi) //cart_contents 객체에 appendChild 메소드를 사용하여 cartNewLi를 자식으로 넣겠다.
