// const dayNumber = parseInt(prompt("please Enter The Day Number"));

// if (dayNumber === 0) {
//     console.log("Today is Sunday");

// }else if(dayNumber === 1){
//     console.log("Today is Monday");

// }else if(dayNumber === 2){
//     console.log("Today is Tuesday");

// }else if(dayNumber === 3){
//     console.log("Today is Wednesday");

// }else if(dayNumber === 4){
//     console.log("Today is Thursday");

// }else if(dayNumber === 5){
//     console.log("Today is Friday");

// }else if(dayNumber === 6){
//     console.log("today is saturday");

// }else{
//     console.log("please Enter a valid Day Number");

// }

// const dayNumber = parseInt(prompt("please Enter The Day Number"));

// switch (dayNumber) {
//   case 0:
//     console.log("today is Sunday");
//     break;

//   case 1:
//     console.log("Today is Monday");
//     break;

//   case 2:
//     console.log("Today is Tuesday");
//     break;

//   case 3:
//     console.log("today is Wednesday");
//     break;

//   case 4:
//     console.log("today is thursday");
//     break;

//   case 5:
//     console.log("today is friday");
//     break;

//   case 6:
//     console.log("today is saturday");
//     break;

//     default: console.log("please enter valid number");

// }

const grade = prompt("Please enter your grade......");

switch (grade) {
  case "A":
    console.log("Your score is between 85% to 100%");
    break;
  case "B":
    console.log("Your score is between 75% to 84%");
    break;
  case "C":
    console.log("Your score is between 60% to 74%");
    break;
  case "D":
    console.log("Your score is between 50% to 59%");
    break;
  case "E":
    console.log("Your score is between 40% to 49");
    break;
  default:
    console.log("Your score is below 40%");
}
