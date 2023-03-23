# Frontend Mentor - Manage landing page solution

This is a solution to the [Manage landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Summary](#summary)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I used font awesome instead of the icons provided by Front End Mentor because it is simpler to change color on hover.

```html
<ul class="socials">
  <li>
    <a href="#">
      <i class="fa fa-facebook"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-youtube"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-twitter"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-pinterest"></i>
    </a>
  </li>
  <li>
    <a href="#">
      <i class="fa fa-instagram"></i>
    </a>
  </li>
</ul>
```

In this project I used more rem than em because I searched the difference and I think rem is more suitable for most cases.

It's the first time I style scrollbar. I had seen styled scroll bars before and wondered how to do that and now I finally did it.

```scss
body::-webkit-scrollbar {
  background-color: $dark-blue;
}
body::-webkit-scrollbar-thumb {
  background-color: $bright-red;
  border: 2px solid hsla(0, 0%, 10%, 0.3);
  border-radius: 30px / 70px;
}
```

I did this because otherwise the user would be able to scroll while the list was visible being unable to close it because the close button would not go down with the list.

```scss
body:has(.around[data-visible="true"]) {
  overflow-y: hidden;
}
```

I could have specified the numbers in the html itself but there's this feature in css that I hardly ever use and I wanted to practice it a bit.

```scss
#features {
  padding-block: 50px;
  counter-reset: feature;

  .number::before {
    counter-increment: feature;
    content: counter(feature, decimal-leading-zero);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
  }
}
```

This is to show the scroll only when the user hover over it. I saw it on Amazon's website and wanted to try it.

```scss
.slider {
  overflow-x: hidden;
  padding-bottom: 8px;
}
.slider:hover {
  overflow-x: scroll;
  padding-bottom: 0;
}
```

I used centimeters here because I wanted this height to not change no matter what.

```scss
.slider::-webkit-scrollbar {
  height: 0.23cm;
}
```

Grid layout was the best way I found to change the position of the elements in the footer.

```scss
.container {
  grid-template-columns: repeat(3, max-content);
  grid-template-areas:
    "socials-and-logo lists form"
    "socials-and-logo lists copyright";
  justify-content: space-between;
  gap: 0;
}
```

I wasn't sure how I was supposed to make the slider so I just did the simplest thing I could.

```js
const balls = Array.from(document.querySelectorAll(".ball"));

document.querySelector(".slider").addEventListener("scroll", (e) => {
  // console.log(e.target.scrollLeft)
  // console.log(e.target.scrollWidth)

  let ballNumber = ((e.target.scrollLeft / e.target.scrollWidth) * 100) / 25;
  balls.forEach((b) => b.setAttribute("data-selected", false));
  balls[Math.round(ballNumber)].setAttribute("data-selected", true);
});
```

### Summary
In this project I practiced a lot of css techniques and learned a lot too. The slider and footer's elements' position were by far the most challenging things to do here. I had a lot of fun in this project and I hope to have even more in the next ones!

### Useful resources

- [Stack Overflow](https://stackoverflow.com/questions/42421361/input-button-elements-not-shrinking-in-a-flex-container) - I didn't know that.
- [w3schools](https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp) - I learned how to style scroll here.
- [Stack Overflow](https://stackoverflow.com/questions/59369271/css-counter-with-a-number-padding) I learned how to pad start of css counter number with 0.

## Author

- Frontend Mentor - [@rafaeldevvv](https://www.frontendmentor.io/profile/rafaeldevvv)
- Instagram - [@rafaeldevvv](https://www.instagram.com/rafaeldevvv)
