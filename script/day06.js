// 배열과 객체
const array1 = ['html','css','js']
// 전체 배열 출력(테스트용 전체 정상 확인)
console.log(array1) 
// 개별 배열 직접 출력(이벤트, 속성, 메소드 동적결과 제작)
console.log(array1[0]) 
// DOM 변수 생성
const li = document.querySelectorAll('ul li')
console.log(li) // 전체 정상출력, 인덱스 번호 확인 등
console.log(li[1]) // 개별출력(이벤트, 속성, 메소드 활용)
// --------------------------------- 객체
// 배열은 2개 이상의 데이터가 서로 연관되어 있어야 한다.
// 쇼핑몰 옵션 : size, color, option 배열 개별구성
// const product_size = ['S','M','L']
// const product_color = ['white','black','yellow']

// 객체는 2개 이상의 데이터가 속성:값으로 이루어져 있기 때문에
// 큰 분류만 같다면 다양한 속성을 하나의 객체로 취급할 수 있다.
const cat1 = {
    color:'black', // 속성은 "" 작성 X 의미만 맞으면 키워드로 사용 가능
    age:1 // 속성값은 숫자일 경우 "" 작성 X
}
console.log(cat1) // 전체확인
console.log(cat1.color) // 객체.속성 개별출력
console.log(cat1.age)

const cat2 = {
    color:['white','brown','black'], 
    age:2
}
console.log(cat2)
console.log(cat2.color[1])

const product_size = ['S','M','L']
const product_color = ['white','black','yellow']
console.log(product_color,product_size)

const product = {
    size:['S','M','L'],
    color:['white','black','yellow']
}
console.log(product)
console.log(product.size[1])
console.log(product.color[1])