function apisearch(){
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyBn-3p5QPIRKPm0oyD3zNJQCpOxPjQDIq8&cx=3623768b6ccb843a2&q=" + $("#querybox").val(),
        success: function (result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }
    
            $("#output").html(searchOutput);
    
        }
    });   
}

// DO NOT CHANGE CODE ABOVE EXCEPT LINE 5 AS STATED IN THE ASSIGNMENT. YOU MAY COPY THE ABOVE FUNCTION FOR QUESTION (4) OF JS.

// START TYPING BELOW

// Function to call the apiSearch function on click of the search button
function searchButtonClick() {
    apisearch();
}

// Function to change the background color of the site
function changeBackgroundColor() {
    var body = document.querySelector('body');
    // Generate a random color
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // Apply the random color to the body background
    body.style.backgroundColor = randomColor;
}

// Function to implement toggle fade
function toggleFade() {
    $('header, h1, #querybox, #searchButton').fadeToggle();
}

// Function to implement "I'm feeling lucky" button
function feelingLucky() {
    $.ajax({
        type: 'GET',
        dataType:"jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyBn-3p5QPIRKPm0oyD3zNJQCpOxPjQDIq8&cx=3623768b6ccb843a2&q=" + $("#querybox").val(),
        success: function (result) {
            console.log('data: ', result);
            var luckyOutput = '';
            // Only show the first result
            luckyOutput += `<p><a href="${result.items[0].title}">${result.items[0].link}</a>: ${result.items[0].snippet}</p>`;
            $("#output").html(luckyOutput);
        }
    });   
}

