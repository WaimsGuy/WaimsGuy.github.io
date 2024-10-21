function showScholarshipsByKeyword(){

    //stores search query from any page before navigating to search page
    const inputDescription = document.getElementById("descriptionInput").value;
    localStorage.setItem('searchQuery', inputDescription);

    window.location.href = "search.html";

    
}

