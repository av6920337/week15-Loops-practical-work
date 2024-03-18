//Задание 1
// Выведите числа от 1 до 10 в консоль
let i=1;
// С использованием цикла while
while(i<=10){
    console.log(i);
    i++;
}
// С использованием цикла do..while
// do{
//     console.log(i);
//     i++;
// }while(i<=10);
// С использованием цикла for
// for(;i<=10;i++){
//     console.log(i);
// }


//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
// for(;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
let reciprocalNumbers=10;
// С использованием цикла while
// while(reciprocalNumbers>=1){
//     console.log(reciprocalNumbers);
//     reciprocalNumbers--;
// }
// С использованием цикла for
// for(;reciprocalNumbers>=1;reciprocalNumbers--){
//     console.log(reciprocalNumbers);
// }



//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
// с помощью вложенного цикла:
// for(let firstMultiplier=5;firstMultiplier<=5;firstMultiplier++){
//     for(let secondMultiplier=1;secondMultiplier<=10;secondMultiplier++){
//         console.log(`${firstMultiplier} * ${secondMultiplier} = ${firstMultiplier*secondMultiplier}`);
//     }
// }
// С использованием цикла while
// let x=0;
// while(x<10){
//     x++;
//     console.log(x*5);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
// 1. **Используя цикл for:**
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum+=1;
// }
// console.log(sum);
//4. **Используя метод reduce для массива чисел от 1 до 100:**
// const  numericArray= Array.from({length: 100}, (_, i) => i + 1);
// let sum = numericArray.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);
//1. Array.from({length: 100}, (_, i) => i + 1); - Этот код создает массив из 100 элементов, заполненных значениями от 1 до 100. Для этого используется метод Array.from(), который принимает два аргумента: объект с указанием длины массива (в данном случае 100) и функцию обратного вызова, которая генерирует значения для каждого элемента массива. В данном случае функция обратного вызова принимает два аргумента, но первый (_) игнорируется, а второй (i) представляет индекс элемента. Таким образом, каждый элемент массива будет равен i + 1, что даст нам массив чисел от 1 до 100.
//2. let sum = numericArray.reduce((acc, curr) => acc + curr, 0); - Этот код использует метод reduce() для вычисления суммы всех элементов массива numericArray. Метод reduce() принимает функцию обратного вызова с двумя аргументами: acc (аккумулятор) и curr (текущий элемент). В данном случае начальное значение аккумулятора равно 0. Функция обратного вызова просто складывает текущий элемент с аккумулятором. В результате работы метода reduce() мы получаем сумму всех элементов массива.


//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
// for(let element=0;element<array.length;element++){
//     console.log(array[element]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
const numbers = [1, 2, 3, 4, 5];
// let sumOfElement=0;
// for(let i=0;i<numbers.length;i++){
//     sumOfElement+=numbers[i];
// }
// console.log(sumOfElement);
//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
let animals = ["Кот", "Рыба", "Лемур"];
// for(let i=0;i<animals.length;i++){
//     let newStr=animals[i] +'- прекрасное животное';
//     console.log(newStr);
// }

//Задание 9
// Выведите символы в строке в консоль
const str = 'Hello';
// for(let symbol of str){
//     console.log(symbol);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
// for(let element of array){
//     console.log(element);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
const sentences = ['Hello, world!', 'How are you?'];
// for(let sentence of sentences){
//     let allWords=sentence.split('').join('');
//     console.log(allWords);
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// let sum=0;
// for(let number of numbers){
//     sum+=number;
//     console.log(sum);
// }

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
const list = ['apple', 'banana', 'cherry'];
// for(let wordLength of list){
//     console.log(wordLength.length);
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
// for(let i=0;i<words.length;i+=1){
//     let word=words[i];
//     let normalizedWord=word.toUpperCase();
//     console.log(normalizedWord);
// }

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];
// for(let char of greeting.toLowerCase()){
//     if(vowels.includes(char)){
//         vowelCount++;
//     }
//     console.log(vowelCount);
// }

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
const words = ['Hello', 'world', '!'];
// метод join.
// const combinedString = words.join(' ');
// console.log(combinedString); 


//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// while(i<=10){
//     console.log(i);
//     i++;
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// while(reciprocalNumbers>=1){
//     console.log(reciprocalNumbers);
//     reciprocalNumbers--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true; 
let x=0;
// while (x < allNumbers.length) {
//     if (allNumbers[x] < 0) {
//         allPositive = false;
//         break;
//     }
//     x++;
// }

// if (allPositive) {
//     console.log('Все элементы массива являются положительными числами.');
// } else {
//     console.log('Не все элементы массива являются положительными числами.');
// }

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
// const random = [2, 4, 6, -3, 8, 10];
// do{
//     console.log(random[x]);
//     x++;
// }while(x<random.length && random[x] >=0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// let indivisibleByThree=1;
// do{
//     if(indivisibleByThree%3 !==0){
//         console.log(indivisibleByThree);
//     }
//     indivisibleByThree++;
// }while(indivisibleByThree<=100);


//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let sum = 0;
// while(sum<=100){
//     let number=parseInt(prompt('Введите число:'));
//     sum+=number;
//     console.log("Сумма чисел превысила 100");
// }


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
// function changeColor(){
//     let h4Elements=document.querySelectorAll('h4');
//     for(let i=0;i<h4Elements.length;i++){
//         h4Elements[i].style.backgroundColor='blue';
//     }
// }
// console.log(changeColor());

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';
// for(let i=0;i<6;i++){
//     let randomIndex=Math.floor(Math.random()*alphabet.length);
//     randomString+=alphabet[randomIndex];
// }
// console.log(randomString);