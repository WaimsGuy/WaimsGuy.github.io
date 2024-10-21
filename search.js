//upon loading uses search query to start filter
window.onload = function(){
    const searchQuery = localStorage.getItem('searchQuery');
    fetch("data.json")
    .then(response => response.json())
    .then(scholarshipJSON => loadScholarships(scholarshipJSON, searchQuery))
    .catch(err => console.log("Error: " +err));
}

function loadScholarships(scholarshipJSON, searchQuery){

    //make object to array
    let scholarshipArray = [];
    for(let i = 0; i < scholarshipJSON.scholarships.length; i++){
        scholarshipArray.push(scholarshipJSON.scholarships[i]);
    }

    //sort array by keywords only
    let sortedScholarships = [];
    for(let scholarship of scholarshipArray){
        if(scholarship.keywords.includes(searchQuery) || scholarship.scholarshipName.includes(searchQuery)){
            sortedScholarships.push(scholarship);
        }
    }

    //bootstrap: construct card
    var scholarshipCard = document.getElementById("col");

    //clear card each time
    scholarshipCard.innerHTML = "";

    //more bootstrap card construction stuff...
    for(let i = 0; i < sortedScholarships.length; i++){
        let scholarshipNamePrint = sortedScholarships[i].scholarshipName;
        let scholarshipKeywords = sortedScholarships[i].keywords;
        let scholarshipURL = sortedScholarships[i].url;
        let scholarshipDescription = sortedScholarships[i].description;

        let addScholarshipCard = document.createElement("div");
        addScholarshipCard.classList.add("row", "featurette", "mb-4");
    
        addScholarshipCard.innerHTML = `
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">
                    <a class="header-link" href="#">${scholarshipNamePrint}</a>
                </h2>
                <p class="lead">
                    ${scholarshipDescription}
                </p>
            </div>
            <div class="col-md-5">
                <img src="${scholarshipURL}" class="featurette-img img-fluid" alt="${scholarshipNamePrint}"/>
            </div>
        `;
        scholarshipCard.appendChild(addScholarshipCard);
    }

}