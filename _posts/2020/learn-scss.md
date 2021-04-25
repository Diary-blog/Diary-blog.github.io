---
title: ✒️ Learn SCSS
date: 2020-12-27
update: 2020-12-27
tags:
  - SCSS
  - CSS
  - learnCSS
  - story
keywords: story, gatsby, blog, html, css, scss, learn
read: 5m
cover: ./img/scss.png
---

Learn SCSS in 5 minutes

SCSS simply means Sassy CSS.

Sassy CSS is a CSS preprocessor that gives you access to use features that are not available in Vanilla CSS

***

## Variables

To create a variable just add a $sign to the variable name and set them like a normal CSS property.

```css
$product-dark-blue: #324e85
$product-light-blue: #4c7396
$product-lighter-blue: #9bb7cf

.element { color: $product-dark-blue; }
```

***

## Nesting

SCSS helps you write cleaner and concise CSS.

```css
.container {
  width: 100%;
  color: gray;
  background-color: green;

  div {
    border: 1px solid black;
    a {
      text-decoration: none;
      color: #f2f2f2;
      &::hover {
        color: #d2d2d2;
      }
    }
  }
}
```

***

## Inheritance

@extends help you inherit the properties of another class.

```css
.header {
  color: gray;
}
.sub-header {
  @extend .header;
  font-size: 40px;
}
```

***

## Mixin

Mixin is another way SCSS implement inheritance using @mixin.

```css
@mixin red-color {
  color: gray;
}
.header {
  @include red-color; /* add mixin */
}
```

***

## Operators

SCSS offers you different kind of operators that you can use in your CSS.
Arithmetic operators like +, -, *, / etc

```css
@mixin top-margin ($margin) {
  margin-top: 30px + $margin;
}
.container {
  width: 800px - 80px;
  @include top-margin(10px);
}
```

***

## Color functions

scss provides some function that can be used to manipulate colors.

```css
mix(blue, gray, 30%) /* 30% blue, 70% gray */
lighten(#ff0000, 30%) /* #ff9999 */
darken(#ff0000, 30%)  /* #660000 */

opacity(rgba(#036), 0.3)  /* rgba(0, 51, 102, 0.79) */
trnasparentize($color, $amout)
```

***

## Loops

create utility classes for your color, font-size and a lot of other properties

```css
@for $x from 1 through 70 {
  .font-size-#{$x} {
    font-size: 0px + $x;
  }
}
```

***

## Conditions

Another awesome feature of scss is the ability to use If/else statements in css.

```css
$bg: pink;
$bg-mobile: red;

p {
  @if $bg == pink {
    color: blue;
  } @else if $bg-mobile == red {
    color: green;
  } @else {
    color: gray;
  }
}
```

## Documentation

https://sass-lang.com/documentation

