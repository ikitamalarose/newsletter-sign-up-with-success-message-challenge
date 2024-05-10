# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Newsletter sign-up form with success message solution](#frontend-mentor---newsletter-sign-up-form-with-success-message-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Design preview for the Newsletter sign-up form with success message coding challenge](./design/solution.png)

### Links

- Solution URL: [Repository link](https://github.com/ikitamalarose/newsletter-sign-up-with-success-message-challenge.git)
- Live Site URL: [Go to the website](https://newsletter-sign-up-with-success-message-challenge-tau.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

```html
<form novalidate></form>
```
- ### Purpose: 
  This HTML code snippet creates a form element with the novalidate attribute. The novalidate attribute is used to disable browser validation on the form. It allows you to perform custom validation using JavaScript instead of relying on the browser's built-in form validation.
```js
form.addEventListener("submit", (e) => {
    e.preventDefault(e);

    const data = Object.fromEntries(new FormData(e.target));
    console.log(data);
});
```

- ### Purpose: 
  This JavaScript code snippet adds an event listener to the form's submit event. When the form is submitted, the event listener prevents the default form submission behavior (e.preventDefault()). Instead, it gathers form data using FormData and logs it to the console. This approach allows you to handle form submissions with custom validation and processing logic in JavaScript.

## Author

- Frontend Mentor - [@ikitamalarose](https://www.frontendmentor.io/profile/ikitamalarose)
- Twitter - [@ikitamalarose](https://www.twitter.com/ikitamalarose)

