let bar = document.querySelector('p');
let title = document.querySelector('.nav-mobile');
let nav = document.querySelector('nav');

let isShowing = true;
function toggleNav() {
    if(isShowing) {
        isShowing = false;
        // title.style.display = 'flex';
        title.style.top = '-100px';
        nav.style.boxShadow = '0px 0px 8px #0C0C0C';
    } else {
        title.style.top = '75px';
        // title.style.display = 'none';
        isShowing = true;
        nav.style.boxShadow = 'none';
        
    }
}

nav.addEventListener('click',toggleNav);

const skills = ['#html5','#css3','#js','#react','#redux','#ps','#java','#git','#sass','#mocha','#chrome','#jest'];
const paragraphSkill = ['Has a strong knowledge on using semantic HTML and can create an accessible website with HTML. Also knowledgeable about the common structure, forms, elements of HTML.',
'Has a strong knowledge about the common properties of CSS. Can create different layout using Grid and Flexbox. Can also create animations and transitions using CSS.',
'Has a strong knowledge about JavaScript from the basics of JavaScript to objects, functions, classes, modules and JSON. Has a knowledge about Asynchronous Programming like Promises and Async...await function. Has a knowledge on requests using AJAX and fetch API. Knows how to manipulate DOM.',
'Has a decent knowledge about React. I can create a single-page web applcations using this library. Has some knowledge about the patterns of React. Also knows JSX, Components(class and function), Hooks and Lifecycle Methods.',
'Has a decent knowledge about Redux. I use Redux for storing state and React for rendering and updating state. Also knows about reducers, action creators, selectors, thunks and Promise Lifecycle Actions. Has a knowledge about using React-Redux and Redux Toolkit library.',
'Has a little knowledge about Photoshop. Can edit photos and can make images a png file.',
'Has a decent knowledge about Java, from the basics to the four OOP concepts. Can create an efficient code with less time complexity using the right data structure. Also knows dynamic programming like memoization.',
'Has a decent knowledge about Git. Can push commits from local to remote repository. Knows to create another branch before merging different version to main branch.',
'Has a decent knowledge about Sass. It improves the readability of a CSS file and is more flexible than CSS.',
'Has a decent knowledge about Mocha JS. I used Mocha.JS for testing JavaScript code functionality with the combination of Chai assert method.',
'Has a decent knowledge about Chrome DevTools, React DevTools, and Redux DevTools. I mostly used this for debugging and testing HTML, CSS and React. I also use this for checking the breakpoint to help my website become responsive. I can also manipulate DOM temporarily.',
'Has a little knowledge about Jest. Familiar on testing React JSX codes by using snapshot and testing React and Redux logical codes by creating test and mocks'];

let outputParagraph = document.querySelector('#output');
const skillButtons = [];

skills.forEach(skill => {
    skillButtons.push(document.querySelector(skill));
});

for(let i=0; i<skillButtons.length; i++) {
    skillButtons[i].paragraph = paragraphSkill[i];
}

function changeParagraph(event) {
    outputParagraph.innerHTML = event.target.paragraph;
}

skillButtons.forEach(skill => {
    skill.addEventListener('click',changeParagraph);
});