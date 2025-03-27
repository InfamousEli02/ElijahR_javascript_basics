//Demo 2 
// const num1 = 10;
// const num2 = 5;


// const op = "";

//else if
// if(op == "add"){
//     let sum = num1 + num2;
//     console.log(sum);
// } else if(op == "sub"){
//     let sub = num1 - num2;
//     console.log(sub);
// } else if(op == "multi"){
//     let multi = num1 * num2;
//     console.log(multi);
// } else{
//     let  div = num1 / num2;
//     console.log(div);
// }


//switch method
// switch(op){
//     case 'add':
//         let sum = num1 + num2;
//         console.log(sum);
//     break;
//     case 'sub':
//         let sub = num1 - num2;
//         console.log(sub);
//     break;
//     case 'multi':
//         let multi = num1 * num2;
//         console.log(multi);
//     break;
//     case 'div':
//         let  div = num1 / num2;
//         console.log(div);
// }

//demo 3
    // if (num1 > num2){
    //     console.log('This is greater than')
    // } else if(num1 < num2){
    //     console.log('This is less than')
    // } else if(num1 >! num2){
    //     console.log('This is greater than or equal to')
    // } else if(num1 <! num2){
    //     console.log('This is less than or equal to')
    // } else{
    //     console.log('no answer')
    // }


    // if (num1 == num2){
    //     console.log("same");
    // } else if(num1 != num2){
    //     console.log("not the same");
    // } else{
    //     console.log("something else");
    // }

//Demo 4
const age = 21 //global
let message; //global

if(age >= 21){
    //block scope
    message = "can be in the club";
    console.log(age);
}

console.log(message); //global