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
const personCard = function () {
    //cards tag
    let cards = document.createElement('div');
    cards.setAttribute('class', 'cards');
    // let headingText = document.createTextNode('Hello, World!');
    let card_about = document.querySelector('.card_about');
    card_about.appendChild(cards);
    // cards.appendChild(headingText);

    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    imgDiv.setAttribute('class', 'img');
    img.setAttribute('class', 'img-item');
    img.setAttribute('alt', 'user');
    img.setAttribute('src', 'Images/user.jpg');
    cards.appendChild(imgDiv);
    imgDiv.appendChild(img);

    let details = document.createElement('div');
    details.setAttribute('class', 'details');
    cards.appendChild(details);

    //first-name
    let flabel = document.createElement('p');
    let fTxt = document.createTextNode("First Name : ");
    flabel.appendChild(fTxt);
    let f_name = document.createElement('span');
    let f_val = document.createTextNode("Sivatharan");
    f_name.setAttribute('class', 'f-name');
    flabel.appendChild(f_name);
    f_name.appendChild(f_val);
    details.appendChild(flabel);

    //last-name
    let llabel = document.createElement('p');
    let lTxt = document.createTextNode("Last Name : ");
    llabel.appendChild(lTxt);
    let l_name = document.createElement('span');
    let l_val = document.createTextNode("Ponsivaranjan");
    l_name.setAttribute('class', 'l-name');
    llabel.appendChild(l_name);
    l_name.appendChild(l_val);
    details.appendChild(llabel);

    //DOB
    let dobLabel = document.createElement('p');
    let dobTxt = document.createTextNode("DOB : ");
    dobLabel.appendChild(dobTxt);
    let dob_name = document.createElement('span');
    let dob_val = document.createTextNode("1997");
    dob_name.setAttribute('class', 'dob-name');
    dobLabel.appendChild(dob_name);
    dob_name.appendChild(dob_val);
    details.appendChild(dobLabel);

    //Age
    let ageLabel = document.createElement('p');
    let ageTxt = document.createTextNode("Age Now : ");
    ageLabel.appendChild(ageTxt);
    let age_name = document.createElement('span');
    let age_val = document.createTextNode("26");
    age_name.setAttribute('class', 'age-name');
    ageLabel.appendChild(age_name);
    age_name.appendChild(age_val);
    details.appendChild(ageLabel);

    //job
    let jobLabel = document.createElement('p');
    let jobTxt = document.createTextNode("Working as : ");
    jobLabel.appendChild(jobTxt);
    let job_name = document.createElement('span');
    let job_val = document.createTextNode("Software Developer");
    job_name.setAttribute('class', 'job-name');
    jobLabel.appendChild(job_name);
    job_name.appendChild(job_val);
    details.appendChild(jobLabel);

    //job
    let hobbyLabel = document.createElement('p');
    let hobbyTxt = document.createTextNode("Hobby : ");
    hobbyLabel.appendChild(hobbyTxt);
    let hobby_name = document.createElement('span');
    let hobby_val = document.createTextNode("Sivatharan");
    hobby_name.setAttribute('class', 'hobby-name');
    hobbyLabel.appendChild(hobby_name);
    hobby_name.appendChild(hobby_val);
    details.appendChild(hobbyLabel);
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
    personCard();
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
    // about.textContent = `Hello 👋🏻 ${personn.fistName} ${personn.lastName} 😀, You born in ${personn.birthYear}👶🏽, now your age is ${personn.age}, You working as ${personn.job}🎉, you interested in ${personn.hobby}... 😀`;
    personCard();

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


