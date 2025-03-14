# Project Overview
**Problem**
Spectrum Real Estate a company needed a way to manage, save and share their real estate properties.
**Solution**:
A responsive and dynamic website was developed with a simple user interface that included property listings, search functionality, filters, and web stories. Additionally, a dashboard was created for content management and data entry to streamline their operations.

## Developer Guide
1. Setup
2. Development
3. Deployment
4. Support

## Setup
1. Open Google Chrome and log in using the project-associated email account.
2. Obtain the project source code by downloading it as a .zip file or cloning it with: `git clone <repo_url>`
3. Open the project in a text editor like VS Code.
4. Install the Live Server extension in VS Code.
5. Open the `/index.html` file and click on the _Go Live_ button in Live Server to launch the project locally.

## Development

#### Technical Stack:
Bootstrap and Vue Js are used in the Frontend, Google Sheets is used as a database, Google Apps Script is used to automate tasks and create server side API end points, Firebase Hosting is used for hosting.

#### Accessibility: 
The Backend source code have its own environment and version control since it is deployed via Google Apps Script Platform. To access simply just go to [script.google.com](https://script.google.com) , you must be logged in with the associated google account, then select the project and you are good to go.

## Deployment
1. Make and test any changes locally.
2. Open the terminal in the project directory.
3. Ensure Node.js is installed on your machine. If not, download it [here](https://nodejs.org/en).
4. Verify Node.js installation with `node -v`.
5. If familiar with Firebase, log in using: `firebase login` and deploy with `firebase deploy --only hosting` .
6. If logged into a different Firebase account, first log out with: `firebase logout`
7. For first-time Firebase users, install Firebase CLI tools globally (only needed once): `npm install -g firebase-tools`, Refer to the [Firebase documentation](https://firebase.google.com/docs/reference) for more information.
8. Confirm Firebase CLI installation with `firebase --version`
9. Ensure that `firebase.json` and `.firebaserc` files exist in the root of the project directory.
11. Run `firebase login` , this will open a browser window to do the authentication with the project associated account with firebase.
12. Finally, Once you are logged in, if your changes are completed and tested just run this command `firebase deploy --only hosting`.
13. Check the deployment history via [firebase console](https://console.firebase.google.com/)

## Support
For support, please reach out via [email](mailto:mashoun.dev@gmail.com)
