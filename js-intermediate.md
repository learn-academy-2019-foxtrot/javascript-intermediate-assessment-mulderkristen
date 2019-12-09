# ASSESSMENT 3: INTERMEDIATE JAVASCRIPT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. What are the HTTP verbs? Which CRUD action corresponds to each verb?

  Your answer: Get, Put, Delete - delete, Patch - update with modification, Post - update with replacement

  Researched answer: Get - read, Put - create


2. Why would you use object destructuring?

  Your answer: Object destructuring helps keep your code simple so you can assign variables to properties within your object and call on them.  

  Researched answer: Destructuring in the render function of a React component is useful. In these components, access to props can be made significantly easier using destructuring so you don't have to type this.props over and over.



3. Why is testing important?

  Your answer: Testing is important to ensure your code is working as you meant it to. Red green refactor is a common way to test by first writing your test to hit a red error and then building your function and checking if your error turned green. 

  Researched answer: In React, if we have some logic that needs to be tested in lifecycle components, we should try to extract it in another testable place and only use it in there, the componentDidMount is helpful for testing these. If you have a big component, break it up and test smaller pieces because tests should always be simple and small. 

4. What is the difference between a class and an object?

  Your answer: In React, a class is a component that can hold state of objects, methods, and render to the user. A class can also hold object destructuring and call from other class components. An object holds properties that can be passes through a class component and have states. 

  Researched answer: A class is a blueprint from which you can create the instance and has a logical existence. An object has a physical existence and is the instance of the class, which helps programmers to use variables and methods from inside the class.


5. What did you learn during the group project this week? Please include any additional feedback you may have.

  Your answer: I got much more comfortable with passing props through classes and working with how class components can interact with each other. I also undertood more the value of object destructuring in writing clean code. I still get a little mixed up with when to use brackets, parantheses or nothing in React. 



### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

  Your answer: You have to import the CSS file into the body of your HTML page. When importing CSS to your class component on React, it usually looks like: import from './App.css'

  Researched answer: To add external CSS, you can add a <link /> into your <head> section of your HTML page


2. What is the difference between a div and a span?

  Your answer: You can wrap mulitiple items in a div, like heading or images and set them to an id or class. Span is used to wrap small items. 

  Researched answer: divs should be used to wrap sections of a document, while spans should be used to wrap small portions of text, images, etc. You can wrap a span within a div to change the CSS of just part of the words in your heading which can be useful!


3. What is a CSS class? When should you use an id instead of a class?

  Your answer: I know they both can be used to adjust CSS and you would use # for ids and . for classes but I don't know when you should use each one. 

  Researched answer: Use a class when you want to consistently style multiple elements throughout the page/site. Classes are useful when you have more than one element that shares the same style. Use the ID when you have a single element on the page that will take the style.


4. Name 4 semantic HTML tags.

  Your answer: <div></div> <h1> </h1>

  Researched answer: These tags introduce meaning to the web page rather than just presentation, <p></p> <span></span> <blockquote></blockquote>


5. What are three options for creating responsive design?

  Your answer: 

  Researched answer: Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones). <meta> controls the webpage's dimensions and scaling, width= for images, <picture> lets you change the image depending on size of the browser


### STRETCH: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

  Your answer: Front end development is the code that the user interacts with. Tools and skills that are important for front end are an understanding of how a user may interact with a product, considering the user experience, and working closely with back end and design to build. 

  Researched answer: To sum it up, front end developers code websites using the building blocks of HTML, CSS, and JavaScript (more on this shortly). They’re the ones who take a design and develop it into a website that works. Good skills would be HTML, CSS, Javascript, React, responsive design, testing and debugging, command line, web performance


2. What is block scope in JavaScript?

  Your answer: Block scope is the scope that lives within a particular block of code, like a variable within a function as an example. (this is actually function scope)

  Researched answer: A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block.


3. How would you explain the idea of "inheritance" in object oriented programming?

  Your answer: Class inheritance is when a child class component inherits methods and properties from a parent child class compenent when called. In React, I would declare my class component with an "extends" to the parent class component to access this class after ensuring it was properly imported and exported. 

  Researched answer: In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation.
