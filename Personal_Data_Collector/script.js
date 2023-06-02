const person = {
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
/*
Question 1: What is your first name?
Question 2: What is your last name?
Question 3: What is your birth year?
Question 4: What is your birth year?
Question 5: What is your current position?
Question 6: What is your current hobby?

*/

const questions = ['What is your first name?', 'What is your last name?', 'What is your birth year?', 'What is your current position?', 'What is your current hobby?'];
let iteration = 0;

// document.querySelector('.question').textContent = questions[0];


document.querySelector('.submit').addEventListener('click', function () {
    // debugger;
    let inputValue = document.querySelector('.answer').value;
    if (inputValue === '' && document.querySelector('.submit').textContent === 'Submit') {
        alert("Invalid Input");

    } else {
        if (iteration < questions.length) {
            document.querySelector('.submit').textContent = "Submit";
            document.querySelector('.answer').style.display = 'block';
            document.querySelector('.question').textContent = questions[iteration];
            document.querySelector('.answer').value = "";
            ++iteration;

        } else if (iteration === questions.length) {
            document.querySelector('.question').textContent = 'Congratulations 🎉 !, All Questions are answered. if you want to see your details click on Generate button or click on Refresh button so You can restart answering questions.. thank you 😀.';

            document.querySelector('.answer').style.display = 'none';
            document.querySelector('.submit').style.display = 'none';

        }
    }
});