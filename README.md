## Quick Overview

Make sure to have nodejs 10.4 installed

```sh
cd SlicePay
npm install
cd server
npm install
cd ..
npm start
```

This starts up the app and can be viewed on http://localhost:4200/ 

Initial Screen:

<p align='center'>
<img src='InitialScreen.png' width='600' alt='npm start'>
</p>

Initial  Assumption:
The Excel Files have been dumped to Mongo Db on that machine

## Brief Explanation of Code

* This application is setup with angular and themed in angular material UI on frontend side
* On the backend side, the APIs are setup with nodejs, express JS and MongoDB for the database
* All Client related code sits in src folder
* UI has a simple header component and Home Component which consists of cards 
* Data.Service.ts has the fetch API and fetches  data
* Now the data is loaded into the cards component 
* On Server Side, Node JS and Express JS is used for hosting the APIs and mongodb package is used for connecting to database
* On server startup, it connects to mongodb one time
* In Server folder/server.js, API is written for fetching the data from DB