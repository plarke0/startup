# CS 260 Notes

[My startup - Budget Central]()

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Git

Steps of using git to clone a repo
```bash
cd {directory of project}
```
```bash
git clone {repo url}
```
Steps of using git to push changes through the command line
```bash
git add .
```
```bash
git commit -m "{Title Message}" -m "{Description Message}"
```
```bash
git push {Remote name (eg. origin)} {Branch name (eg. main)}
```
Steps of using git to sync changes through the command line
```bash
git fetch
```
```bash
git status
```
```bash
git pull
```

## Start Ups

Even if your website doesn't necessarily need one of the technologies, you can just put it in so it passes it off.

APIs return .jsons that can be used however you want. In the context of this class, the information can be used to update information in your website.

## Basic Structure of the Internet

[6 byte Ethernet | 4 byte IP Addresses | 2 byte Port | HTTP | ...]

IP Address: Host <--> Host

TCP Ports: App <--> App

TCP ports allow your device to connect to different applications simultainiously

## HTML Stuff

### HTML Structure Elements

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `head`     | Section for metadata             | `<head></head>`                                |
| `style`    | CSS styling in head              | `<style></style>`                              |
| `body`     | Contains all content in the page | `<body></body>`                                |
| `header`   | For introductory content         | `<header></header>`                            |
| `nav`      | Set of navigation links          | `<nav></nav>`                                  |
| `footer`   | Footer for document or section   | `<footer></footer>`                            |
| `main`     | Main content of the document     | `<main></main>`                                |
| `section`  | Section of a document            | `<section></section>`                          |
| `aside`    | Indirectly related content       | `<aside></aside>`                              |
| `p`        | Paragraph (space before/after)   | `<p></p>`                                      |
| `table`    | Table of cells                   | `<table></table>`                              |
| `tr`       | Row in a table                   | `<tr></tr>`                                    |
| `ol`       | Ordered list                     | `<ol></ol>`                                    |
| `ul`       | Unordered list                   | `<ul></ul>`                                    |
| `div`      | Block structure element          | `<div></div>`                                  |
| `span`     | Inline structure element         | `<span></span>`                                |

### HTML Elements

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `a`        | Anchor defines a hyperlink       | `<a href=link></a>`                            |
| `img`      | External image element           | `<img src=link width=x height=y>`              |
| `audio`    | External audio element           | `<audio src=link></audio>`                     |
| `video`    | External video element           | `<img src=link width=x height=y>`              |
| `source`   | Source of an img/video/audio     | `<source src=link>`                            |
| `svg`      | Inline graphics display          | `<svg width=x height=y></svg>`                 |
| `canvas`   | Drawing and animating through JS | `<canvas id="" width=x height=y></canvas>`     |
| `th`       | Table header element             | `<th></th>`                                    |
| `td`       | Table data element               | `<td></td>`                                    |
| `li`       | List item for ul and ol          | `<li value=num></li>`                          |
| `hr`       | Horizontal rule (line)           | `<hr>`                                         |

### Inputs

| Element    | Meaning                          | Example                                        |
| ---------- | -------------------------------- | ---------------------------------------------- |
| `form`     | Input container and submission   | `<form action="form.html" method="post">`      |
| `fieldset` | Labeled input grouping           | `<fieldset> ... </fieldset>`                   |
| `input`    | Multiple types of user input     | `<input type="" />`                            |
| `select`   | Selection dropdown               | `<select><option>1</option></select>`          |
| `optgroup` | Grouped selection dropdown       | `<optgroup><option>1</option></optgroup>`      |
| `option`   | Selection option                 | `<option selected>option2</option>`            |
| `textarea` | Multiline text input             | `<textarea></textarea>`                        |
| `label`    | Individual input label           | `<label for="range">Range: </label>`           |
| `output`   | Output of input                  | `<output for="range">0</output>`               |
| `meter`    | Display value with a known range | `<meter min="0" max="100" value="50"></meter>` |

### Common Input Attributes

| Attribute | Meaning                                                                             |
| --------- | ----------------------------------------------------------------------------------- |
| name      | The name of the input. This is submitted as the name of the input if used in a form |
| disabled  | Disables the ability for the user to interact with the input                        |
| value     | The initial value of the input                                                      |
| required  | Signifies that a value is required in order to be valid                             |

### Input Elements

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |

## CSS

Priority of CSS tags is as follows: inline > header > style sheet. 

### Style Sheet Format

selector (eg. "p") {
    property (eg. "color"): value;
}

### CSS Selectors

| Selector                   | Example              | Example Description                                            |
| -------------------------- | -------------------- | -------------------------------------------------------------- |
| `element`                  | eg. `p`              | Selects all `<p>` elements                                     |
| `element, element`         | eg. `p, h1`          | Selects all `<p>` and `<h1>` elements                          |
| `.class`                   | eg. `.intro`         | Selects all elements with `class="intro"`                      |
| `element.class`            | eg. `p.intro`        | Selects all `<p>` with `class="intro"`                         |
| `#id`                      | eg. `#name`          | Selects all elements with `id="name"`                          |
| `*`                        | eg. `*`              | Selects all elements                                           |
| `[attribute]`              | eg. `[lang]`         | Selects all elements with a `lang` attribute                   |
| `[attribute=value]`        | eg. `[lang="en"]`    | Selects all elements with `lang="en"`                          |
| `[attribute~=value]`       | eg. `[lang~="en"]`   | Selects all elements with a `lang` attribute containing `"en"` |
| `[attribute\|=value]`      | eg. `[lang\|="en"]`  | Selects all elements with a `lang` attribute equal to or starting with `"en"` |
| `[attribute^=value]`       | eg. `[lang^="en"]`   | Selects all elements with a `lang` attribute that begins with `"en"` |
| `[attribute$=value]`       | eg. `[lang$="en"]`   | Selects all elements with a `lang` attribute that ends with `"en"` |
| `[attribute*=value]`       | eg. `[lang*="en"]`   | Selects all elements with a `lang` attribute that contains `"en"` |

### CSS Size Units

#### Absolute Lengths
  
| Unit   | Description      |
| ------ | ---------------- |
| `cm`   | centimeters      |
| `mm`   | millimeters      |
| `in`   | inches (96px)    |
| `px*`  | pixels (1/96in)  |
| `pt`   | points (1/72in)  |
| `pc`   | picas (12pt)     |
*Pixels are not equal to device pixels. It scales with dpi, so for low dpi devices, 1px = 1 device pixel, but on higher dpi devices 1px can be multiple device pixels.

#### Relative Lengths

| Unit   | Description                                   |
| ------ | --------------------------------------------- |
| `em`   | Relative to the font size of the element      |
| `rem`  | Relative to the font size of the root element |
| `%`    | Relative to the parent element                |