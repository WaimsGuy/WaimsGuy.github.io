

let autoPopButton = document.getElementById("autoPopCareerGoals");

    autoPopButton.addEventListener("click", (event)=>{
        event.preventDefault();

        fetch("userProfile.json")
        .then(response => response.json())
        .then(data => {
            let fieldToPopulate = document.getElementById("response");
            console.log(fieldToPopulate.value);
            console.log(data.scholarshipQuestions[0].answer)
            fieldToPopulate.value = data.scholarshipQuestions[0].answer;
        })
});