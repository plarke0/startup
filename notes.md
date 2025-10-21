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
Steps to begin working on a new branch
```bash
git checkout -b {branch-name}
```
Merge branch into working directory
```bash
git merge {branch}
```

## Command Line Commands

| Command | Description | Usage |
| ------- | ----------- | ----- |
| `chmod` | Change file modes | `chmod {number} {file}` |
| `pwd`   | Print working directory (-P for absolute path) | `pwd [-P]` |
| `cd`    | Change directory (.. for parent) | `cd {path}` |
| `ls`    | Displays the content of a directory | `ls` |
| `vim`   | Use vim to edit a file | `vim {file}` |
| `nano`  | Use nano to edit a file | `nano {file}` |
| `mkdir` | Creates new directory (-p to create intermediate directories) | `mkdir [-p] {directory}` |
| `mv`    | Move and rename file | `mv {sourceFile} {targetFile}` |
| `mv`    | Move file maintaining original name | `mv {sourceFile} {targetDirectory}` |
| `rm`    | Remove a file () | `rm [-r] {file/directory}` |
| `man`   | Displays manual entries for commands | `man {command}` |
| `ssh`   | ssh into a computer | `ssh [-i identity_file] {destination}` |
| `ps`    | Report a snapshop of the current processes | `ps` |
| `wget`  | Get a file from online (background) | `wget {url}` |
| `sudo`  | Execute a command as super user | `sudo {command}` |

### `chmod` Numeric Descriptions
`chmod` will take any sum of the following numeric instructions to change the corresponding permissions
| Number | Description |
| ------ | ----------- |
| `4000` |	Sets user ID on execution. |
| `2000` |	Sets group ID on execution. |
| `1000` |	Sets the link permission to directories or sets the save-text attribute for files. |
| `0400` |	Permits read by owner. |
| `0200` |	Permits write by owner. |
| `0100` |	Permits execute or search by owner. |
| `0040` |	Permits read by group. |
| `0020` |	Permits write by group. |
| `0010` |	Permits execute or search by group. |
| `0004` |	Permits read by others. |
| `0002` |	Permits write by others. |
| `0001` |	Permits execute or search by others. |

### `ls` Flags
| Flag | Description |
| ---- | ----------- |
| `-a` | Lists all entries in the directory, including the entries that begin with a . (dot). |
| `-l` | Displays the mode, number of links, owner, group, size (in bytes), and time of last modification for each file. If the file is a special file, the size field contains the major and minor device numbers. If the time of last modification is greater than six months ago, the time field is shown in the format month date year where as files modified within six months the time field is shown as month date time format. If the file is a symbolic link, the path name of the linked-to file is printed preceded by a ->. The attributes of the symbolic link are displayed.  |

## Start Ups

Even if your website doesn't necessarily need one of the technologies, you can just put it in so it passes it off.

APIs return .jsons that can be used however you want. In the context of this class, the information can be used to update information in your website.

## Basic Structure of the Internet

[6 byte Ethernet | 4 byte IP Addresses | 2 byte Port | HTTP | ...]

IP Address: Host <--> Host

TCP Ports: App <--> App

TCP ports allow your device to connect to different applications simultainiously

### Important Ports:
- 443: Used for HTTPS protocol
- 80: Used for HTTP protocol
- 22: Used for ssh (usually includes scp)

### DNS
Domains are split into three main parts: Top Level Domain, Root Domain, and Subdomains

#### TLD (Top Level Domain)
The highest level of the domain system. Intent is to sort websites by type. Possible TLDs are controlled by ICANN. Eg. `.com`, `.org`, etc.

#### Root Domain
The identity of the website. It includes the TLD, but adds a unique name before it. Eg. `byu.edu`, `plarke.net`, etc.

#### Subdomains
Organizational modifiers that are added on to the root domain. Any number of subdomains can be added by the owner of a root domain. The farther you get from the TLD, the more specific the subdomain should be.

#### A Records
An A record is a straight mapping from a domain name to IP address.

#### CNAME Records
A CNAME record maps one domain name to another domain name. This acts as a domain name alias. You would use a CNAME to do things like map byu.com to the same IP address as byu.edu so that either one could be used.

## HTML Stuff

### HTML Doctype
```html
<!DOCTYPE html>
```
Not an html tag, but tells the browser that the file it is looking at is html.

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
| `link`     | Link defines rel to outside file | `<link rel=relation href=link/>`               |
| `script`   | Integrates JS in html            | `<script src=path>{code}</script>`             |
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

### Box Model

Content is surrounded by Padding, which is surrounded by the Border, which is surrounded by the Margin.

### Style Sheet Format

```css
selector {
    property: value;
}
```
Eg.
```css
.div {
    color: red;
}
```

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

### CSS Properties

| Property  | Description  |
| - | - |
| `color` | Sets the color of text |
| `font-family` | Sets the font family of the text |
| `font-weight` | `bold` sets text to bold |
| `background-color` | Background color of an element |
| `padding` | The space between an element and its content |
| `margin` | The space between an element and its neighbors |
| `display` | Describes how an element should be displayed (`none`, `inline`, `block`, `flex`) |

#### Notes On `display: flex`

| Property       | Notes |
| -------------- | ----- |
| `display` | Must be set to flex or inline-flex |
| `flex-direction` | Sets the display-direction of flex items (`row`, `column`, `row-reverse`, `column-reverse`) |
| `flex-wrap` | Specifies whether the flex items should wrap or not (`no-wrap`, `wrap`, `wrap-reverse`) |
| `flex-flow` | Shorthand property for flex-direction and flex-wrap (eg. `row wrap`) |
| `justify-content` | Aligns the flex items when they do not use all available space on the main-axis (horizontally) (`center`, `flex-start`, `flex-end`, `space-around`, `space-between`, `space-evenly`) |
| `align-items` | Aligns the flex items when they do not use all available space on the cross-axis (vertically) (`center`, `flex-start`, `flex-end`, `stretch`, `baseline`, `normal`) |
| `align-content` | Aligns the flex lines when there is extra space in the cross axis and flex items wrap (`center`, `stretch`, `flex-start`, `flex-end`, `space-around`, `space-between`, `space-evenly`) |

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

## JavaScript

### DOM (Document Object Model)

An object representation of the HTML elements that the browser uses to render the display. The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM.

#### Visiting All Elements
```JavaScript
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

#### Document Functions

`querySelectorAll({'CSS-selector'})`
- Used to select all elements that match the given selector. Returns a list of matching elements.

`querySelector({'CSS-selector'})`
- Used to select the first element that matches the given selector. Returns the matching element.

`createElement({'element'})`
- Creates a new html element node.

`appendChild({node})`
- Appends an element node as the last child of an element.

`getElementById({'id'})`
- Gets an element with the specified id. Returns `null` if none are found.

`addEventListener({'event'}, {function})`
- Attaches an event handler to the document (or element). Common events include:
  - `"click"`
  - `"mousedown"`
  - `"mouseover"`
  - `"mouseleave"`
  - `"keyup"`
  - `"keydown"`
  - `"keypress"`
  - `"cut"`
  - `"copy"`
  - `"paste"`
  - `"select"`

Can also inject html directly using `element.innerHTML = {html}`, but doing so introduces the risk of ACE.

#### Modifying Element Tags
```JavaScript
const element = document.getElementById("byu");
element.style.color = "green";
element.textContent = "Go Cougs!";
```
Can access tags through the `.` operator.

### JSON
JSON stands for JavaScript Object Notation. It is a plain text format for storing and transporting data and is similar to the syntax for creating JavaScript objects. JSON is used to send, receive and store data.

Eg. `'{"name":"John", "age":30, "car":null}'`

`JSON.parse()` in JS will translate JSON into a JS object.

`JSON.stringify()` in JS will translate a JS object into JSON.

### Basic Syntax

#### if/else

```JavaScript
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
```

#### for

```JavaScript
for (exp 1; exp 2; exp 3) {
  // code block to be executed
}

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

`exp 1` is executed (one time) before the execution of the code block.

`exp 2` defines the condition for executing the code block.

`exp 3` is executed (every time) after the code block has been executed.

#### while

```JavaScript
while (condition) {
  // code block to be executed
}
```

#### switch/case

```JavaScript
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

Without `break;`, all cases will be checked, even after one matches.

#### objects

```JavaScript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

person.eyeColor = "blue";
person["hairColor"] = "brown";

const car = newObject({
    model: "Toyota"
});

car.owner = person;
```

### Array functions

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |

### Promises
Promises allow for processes to be run asynchronously. Promise executors take two functions as parameters: `resolve` and `reject`. Calling `resolve` sets the promise to the fulfilled state, and calling `reject` sets the promise to the rejected state.
```JavaScript
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.55 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});

coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```

