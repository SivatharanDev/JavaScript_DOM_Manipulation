'use strict';
// const person = {
//     fistName: '',
//     lastName: '',
//     birthYear: 0,
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     job: '',
//     hobby: ''
// }
// /*
// Question 1: What is your first name?
// Question 2: What is your last name?
// Question 3: What is your birth year?
// Question 4: What is your birth year?
// Question 5: What is your current position?
// Question 6: What is your current hobby?

// */

// const questions = ['What is your first name?', 'What is your last name?', 'What is your birth year?', 'What is your current position?', 'What is your current hobby?'];
// let iteration = 0;

// // document.querySelector('.question').textContent = questions[0];


// document.querySelector('.submit').addEventListener('click', function () {
//     // debugger;
//     let inputValue = document.querySelector('.answer').value;
//     if (inputValue === '' && document.querySelector('.submit').textContent === 'Submit') {
//         alert("Invalid Input");

//     } else {
//         if (iteration < questions.length) {
//             document.querySelector('.s-question').textContent = `Question ${iteration + 1}`;
//             document.querySelector('.submit').textContent = "Submit 🙌🏻";
//             document.querySelector('.answer').style.display = 'block';
//             document.querySelector('.question').textContent = questions[iteration];

//             /* 
//             adding values for object...
//             */
//             if (iteration === 0) {
//                 person.fistName = document.querySelector('.answer').value;
//             }



//             // switch (index) {
//             //     case 0:
//             //         person.fistName = document.querySelector('.answer').value;
//             //         break;
//             //     case 1:
//             //         person.lastName = document.querySelector('.answer').value;
//             //         break;
//             //     case 2:
//             //         Number(person.birthYear = document.querySelector('.answer').value);
//             //         break;
//             //     case 3:
//             //         person.job = document.querySelector('.answer').value;
//             //         break;
//             //     case 4:
//             //         person.hobby = document.querySelector('.answer').value;
//             //         break;
//             //     default:
//             //         console.log('Hello');

//             // }

//             console.log("iteration : " + iteration);

//             document.querySelector('.answer').value = "";

//             ++iteration;

//         } else if (iteration === questions.length) {
//             document.querySelector('.question').textContent = 'Congratulations 🎉 !, All Questions are answered. if you want to see your details click on Generate button or click on Refresh button so You can restart answering questions.. thank you 😀.';

//             document.querySelector('.answer').style.display = 'none';
//             document.querySelector('.submit').style.display = 'none';
//             document.querySelector('.gen').style.display = 'inline-block';
//             document.querySelector('.s-question').textContent = 'Congratulations 🎉 !';
//             document.querySelector('.s-question').style.backgroundColor = 'rgb(2, 151, 82)';
//             document.querySelector('.generate-btn').style.backgroundColor = 'rgb(2, 151, 82)';

//         }

//     }

// });

// document.querySelector('.refresh').addEventListener('click', function () {
//     location.reload();
// });

// document.querySelector('.gen').addEventListener('click', function () {
//     console.log(person);
//     document.querySelector('.about').textContent = `Hello 👋🏻 ${person.fistName} ${person.lastName} 😀, You born in ${person.birthYear}👶🏽, now your age is ${person.age}, You working as ${person.job}🎉, you interested in ${person.hobby}... 😀`;
// });



//Create wanted variables..

//object is created for person
const personn = {
    fistName: '',
    lastName: '',
    birthYear: 0,
    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },
    job: '',
    hobby: ''
}
//Array that is used to store all the quetions..
const questionss = ['What is your first name?', 'What is your last name?', 'What is your birth year?', 'What is your current position?', 'What is your current hobby?'];

//variables created for all buttons..
const submitBtn = document.querySelector('.submit');
const generateBtn = document.querySelector('.gen');
const refreshBtn = document.querySelector('.refresh');

//variables created of all item that related to DOM Manipulation..
const headDesc = document.querySelector('.symbol');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const about = document.querySelector('.about');


let iterationValue = -1;

//button clicks..
let calcAgeWithBirthYear = function () {
    personn.birthYear = answer.value;
    personn.calcAge();
}
let addAnswer = function (ques) {
    switch (ques) {
        case 'Question 1':
            personn.fistName = answer.value;
            break;
        case 'Question 2':
            personn.lastName = answer.value;
            break;
        case 'Question 3':
            calcAgeWithBirthYear();
            break;
        case 'Question 4':
            personn.job = answer.value;
            break;
        case 'Question 5':
            personn.hobby = answer.value;
            break;

    }
}

//Start Answering or Submit button actions
submitBtn.addEventListener('click', function () {
    //Start Answering..
    if (iterationValue === -1) {
        iterationValue++;
        headDesc.textContent = `Question ${iterationValue + 1}`;
        question.textContent = questionss[iterationValue];
        submitBtn.textContent = 'Submit';
        answer.classList.remove("hide");
    }
    //Submit
    else if (iterationValue >= 0) {
        if (!answer.classList.contains('hide') && answer.value === "") {
            alert("Answers Cannot be empty!");
        } else {
            iterationValue++;
            if (iterationValue < questionss.length) {
                headDesc.textContent = `Question ${iterationValue + 1}`;
                question.textContent = questionss[iterationValue];
                addAnswer(`Question ${iterationValue}`);
                console.log(iterationValue);
                answer.value = "";

            } else {
                if (iterationValue == questionss.length) addAnswer(`Question ${iterationValue}`);
                headDesc.textContent = `Congratulations 🎉 !'`;
                question.textContent = 'All Questions are answered. if you want to see your details click on Generate button or click on Refresh button so You can restart answering questions.. thank you 😀.';
                answer.classList.add("hide");
                submitBtn.classList.add("hide");
                generateBtn.classList.remove("hide");
                headDesc.style.backgroundColor = 'rgb(2, 151, 82)';
            }
        }

    }
});
//Generate
generateBtn.addEventListener('click', function () {
    console.log(personn);
    about.textContent = `Hello 👋🏻 ${personn.fistName} ${personn.lastName} 😀, You born in ${personn.birthYear}👶🏽, now your age is ${personn.age}, You working as ${personn.job}🎉, you interested in ${personn.hobby}... 😀`;

});


