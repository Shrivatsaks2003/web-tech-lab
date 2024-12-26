$(document).ready(function() {
    // a. Append content at the end of the existing paragraph and list
    $('#appendBtn').on('click', function() {
    $('#myParagraph').append(' More text appended!');
    $('#myList').append('<li>Another List Item</li>');});
    // b & c. Animate the box and change its color
    $('#animateBtn').on('click', function() {
    // Animate the box: move it to the right and change width/height
    // Also use 'animate' with a backgroundColor property (requires jQuery UI)
    $('#animBox').animate({
    left: '+=100px',
    width: '200px',
    height: '200px',
    backgroundColor: '#e74c3c' // Changing the color of the div
    }, 1000);
    });
    });