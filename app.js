function changeContent() {

    let heading = document.getElementById("heading");
    let para = document.getElementById("para");

    heading.innerHTML = 'Java Script :';

    para.innerHTML = `JavaScript is a high-level, dynamic programming language used primarily for creating interactive web pages and applications. It runs in web browsers and allows for features like animations, form <br><br>
    
    validation, and dynamic content updates. JavaScript is essential for modern web development and also supports server-side programming through environments like Node.js. `

    // alert('You have Change The Content By clicking the button')

}

function previousContent() {

    let heading = document.getElementById("heading");
    let para = document.getElementById("para");

    heading.innerHTML = 'HTML :';

    para.innerHTML = `HTML, or HyperText Markup Language, is the standard language used to create and structure content on the web. It consists of a series of elements, represented by tags, that define the different parts of a webpage.HTML is not a programming language; rather, it's a markup language that outlines the structure and layout of a webpage.  <br><br>
    
    It works in conjunction with CSS (Cascading Style Sheets) for styling and JavaScript for interactivity. `

    alert('Original Content')

}