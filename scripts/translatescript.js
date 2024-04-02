// Assuming you have a select element with id "languageSelect"
var selectElement = document.getElementById("languageSelect");

// Add event listener to the select element
selectElement.addEventListener("change", function() {
    // Get the selected option
    var selectedOption = selectElement.options[selectElement.selectedIndex].value;
    
    // Check if the selected option is "Greek"
    if(selectedOption === "gr") {
        console.log("Selected option is Greek");
        document.getElementById("default-site").style.display="none"
        document.getElementById("greek-site").style.display="block"
    } else if (selectedOption === "en"){
        console.log("Selected option is English")
        document.getElementById("default-site").style.display="block"
        document.getElementById("greek-site").style.display="none"
    }
});
