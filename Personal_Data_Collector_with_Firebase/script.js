'use strict';

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
    about.textContent = `Hello 👋🏻 ${personn.fistName} ${personn.lastName} 😀, You born in ${personn.birthYear}👶🏽, now your age is ${personn.age}, You working as ${personn.job}🎉, you interested in ${personn.hobby}... 😀`;

});

//Refresh..
refreshBtn.addEventListener('click', function () {
    headDesc.textContent = `Description 👇🏻`;
    question.textContent = `Welcome 😀! This is a program that ask you several quetions about you 🫵🏻 and based on that it will generate information about you 🙌🏻. shall we begin 🚀 ?`;
    answer.classList.add("hide");
    submitBtn.classList.remove("hide");
    submitBtn.textContent = 'Start answering 🤞🏼';
    generateBtn.classList.add("hide");
    headDesc.style.backgroundColor = '#ff0066';
    iterationValue = -1;
    personn.fistName = "";
    personn.lastName = "";
    personn.birthYear = 0;
    personn.job = "";
    personn.hobby = "";
    about.textContent = "Please Click on Generate button for generate informations about You ☝🏻";
    answer.value = "";
});


