
const BTN = document.querySelector('button');
const H1 = document.querySelector('h1');

console.log(BTN);

const Toggle = () => H1.classList.toggle('on');
BTN.addEventListener('click', Toggle);

const Lee_Name = '이창훈';
const Lee_Age = 30;
const Lee_Wife = '박양';

const Lee = {
    name: '이창훈',
    age: 30,
    wife: '박양'
}



console.log(Lee.name, Lee['name']);

const Ddal = ['이하린', '이은조'];

console.log(Ddal[0]);


const ShopData = [
    { name: '이창훈', age: 30, id: 1 },
    { name: '김창훈', age: 40, id: 2 },
    { name: '박창훈', age: 50, id: 3 },
    { name: '손창훈', age: 60, id: 4 },
]

const overAge = ShopData.filter(it => it.age > 49);

console.log(overAge);

const SHOP = document.querySelector('#N');
//const SHOPDATE = ShopData.map(it => `<li>${it.name}</li>`).join('');

//SHOP.innerHTML = SHOPDATE;

for (let i = 0; i < overAge.length; i++) {
    SHOP.innerHTML += `<li>${overAge[i].name}</li>`
}








