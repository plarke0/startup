# Budget Center

[My Notes](notes.md)

A website to help you keep track of your money. By creating budget categories, you can more easily build your savings, set aside your tithing, and stick with your budgeting plans. It allows you to deposit money between these budget categories according to customizable ratios. Every action is logged, giving you an in depth history of what you have done with your money.

## 🚀 Specification Deliverable

> [!NOTE]
>  Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever struggled to stick to a budget? Have you ever wanted to cut down on wasteful spending? Then Budget Center is the solution for you! With it, you can create categories to take control of your money. By making and saving different ratios, you can fine tune where your money goes. And when you have control over where your money goes, you control where you go.

### Design

![Sign up design image](./readme-images/SignUp.png)
![Login design image](./readme-images/Login.png)
![Budget design image](./readme-images/Budget.JPG)

Here is a sequence diagram that shows how you would interact with the server to make a deposit and a withdrawl:

```mermaid
sequenceDiagram
    actor You
    You->>Server: Deposit $5
    Server-->>You: Updated category values
    You->>Server: Withdraw $2 from Savings
    Server-->>You: Updated category values
```

### Key features

- Secure login and account management
- Deposit money to multiple categories through customizable ratio profiles
- Withdraw money from categories
- Transfer money between categories
- Ability to create, rename, and merge categories
- Log all movement of money in each category
- Displays total of all accounts with a central pie chart
- Account data is persistently stored and can be accessed from any device

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Uses the correct HTML structure. There will be three HTML pages. One for signing up, one for logging in, and one for the budget application.
- **CSS** - CSS that allows for adjustable screen sizes, makes good use of space, and makes good use of color, leading to an aesthetically pleasing experience.
- **React** - Makes up the login/signup, updates totals/logs after useer input, and allows for the user to switch between interfaces in the budget page.
- **Service** - Backend server functionality for the following:
  - Saving and retrieving user budget data
  - Sign up, login, and log out for each user
  - Calculation of values for deposits, withdrawls, and log modifications
  - Calls to https://www.purgomalum.com to check for inappropriate usernames/category names
- **DB/Login** - Store users, total values, saved ratio profiles, and logs. Register and log in users, securely storing user credentials. Unable to access budget page without account.
- **WebSocket** - Display number of total and concurrent users that have accounts.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Server deployed and accessible with custom domain name** - [My server link](https://startup.plarke.net).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **HTML pages** - I added 5 different pages. The home page (index.html), the login page (login.html), the signup page (signup.html), the main budget center page (budget.html), and an about page (about.html).
- [X] **Proper HTML element usage** - I reasearched the use of different html tags and structured my website using header, main, footer, nav, menu, label, input, and various others. I also researched the svg tag to make my central pie chart.
- [X] **Links** - Links between different pages in nav.
- [X] **Text** - My about page has text, and the budget page has some example inputs.
- [X] **3rd party API placeholder** - Signup page has a note to make a call to a profanity checker to filter new usernames.
- [X] **Images** - An image is used to link to the budget center on the homepage.
- [X] **Login placeholder** - Placeholder for auth on the login and signup pages.
- [X] **DB data placeholder** - All data within the budget center page.
- [X] **WebSocket placeholder** - In the header, there is a text area for total user and current user counts.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [X] **Header, footer, and main content body** - I have a header and footer styled on each page, as well as a main.
- [X] **Navigation elements** - I styled the navigation bar on each page.
- [X] **Responsive to window resizing** - Each page responds to different window sizes to look good on smaller screens as well.
- [X] **Application elements** - I styled the login, signup, and budgeting pages.
- [X] **Application text content** - There is text throughout my page, and it has been styled.
- [X] **Application images** - The images on my home page have been styled.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Bundled using Vite** - I did not complete this part of the deliverable.
- [ ] **Components** - I did not complete this part of the deliverable.
- [ ] **Router** - I did not complete this part of the deliverable.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **All functionality implemented or mocked out** - I did not complete this part of the deliverable.
- [ ] **Hooks** - I did not complete this part of the deliverable.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Node.js/Express HTTP service** - I did not complete this part of the deliverable.
- [ ] **Static middleware for frontend** - I did not complete this part of the deliverable.
- [ ] **Calls to third party endpoints** - I did not complete this part of the deliverable.
- [ ] **Backend service endpoints** - I did not complete this part of the deliverable.
- [ ] **Frontend calls service endpoints** - I did not complete this part of the deliverable.
- [ ] **Supports registration, login, logout, and restricted endpoint** - I did not complete this part of the deliverable.


## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
