document.addEventListener('DOMContentLoaded', function () {
    // Basic form submission for each form
    const forms = document.querySelectorAll('form');

    const question1 = document.getElementById("form1");
    const question2 = document.getElementById("form2");
    const question3 = document.getElementById("form3");
    const question4 = document.getElementById("form4");

    let questionData = {};

    fetch('userProfile.json')
    .then(response => response.json())
    .then(data => {
        questionData = data;
    })
    .catch(error => {
        console.error("Error fetching JSON: " + error);
    });

    question1.addEventListener("submit", function (event) {
        event.preventDefault();
        let textarea = question1.querySelector('textarea');

        if(textarea.value == ""){
            alert("The text area was empty")
        } else {
            questionData.scholarshipQuestions[0].answer = textarea.value;
            console.log(questionData.scholarshipQuestions[0]);
        }
    });

    question2.addEventListener("submit", function (event) {
        event.preventDefault();
        let textarea = question2.querySelector('textarea');

        if(textarea.value == ""){
            alert("The text area was empty")
        } else {
            questionData.scholarshipQuestions[1].answer = textarea.value;
            console.log(questionData.scholarshipQuestions[1]);
        }
    });

    question3.addEventListener("submit", function (event) {
        event.preventDefault();
        let textarea = question3.querySelector('textarea');

        if(textarea.value == ""){
            alert("The text area was empty")
        } else {
            questionData.scholarshipQuestions[2].answer = textarea.value;
            console.log(questionData.scholarshipQuestions[2]);
        }
    });

    question4.addEventListener("submit", function (event) {
        event.preventDefault();
        let textarea = question4.querySelector('textarea');

        if(textarea.value == ""){
            alert("The text area was empty")
        } else {
            questionData.scholarshipQuestions[3].answer = textarea.value;
            console.log(questionData.scholarshipQuestions[3]);
        }
    });


});
