# NOD TEST
### The Task
Build this website using whatever tech/language makes sense to you (but steer clear of Wordpress etc). Take us through how you approached the task and how you thought about the elements that needed to be on the page and how you built it. Oh and make sure it works end to end! Doesnt need to have lots of features but the features that are there should work. (e.g. buttons that don't work just shouldn't be there) 

#### Solution Intro
This application is built using **React** and **Express.js**. React application provides front-end UI while Express.js provides api to deliver the content to react application. Exress.js uses MongoDB as database. React application uses *Jest* and *Enzyme* as test framework while Express.js uses *supertest* for testing.

### Features
Application displays a content banner on the top of home page and featured planets below it. You can go to all planets page by clicking on **View all planets** button. Clicking on each planet container leads to details page chich provides more information regarding the selected planet.

Application also provides secure admin section where you can add, edit, delete banner, planets and images. You need to register and login to go to admin section.  You can go to admin section by clicking to **ADMIN** link on the top. 

### Project Structure
Project contains two main folders **real_estate_agency_frontend** and **real_estate_agency_api**. Each folder is a seperate project and needs the dependency installed separately.

### Installation
##### React project (real_estate_agency_frontend)
Install npm dependencies
```
cd real_estate_agency_frontend
npm install
```
##### Express.js project(real_estate_agency_api)
Install npm dependencies
```
cd real_estate_agency_api
npm install
```
Express.js uses Mongodb for database. So create two databases with names **real_estate_agency** and **real_estate_agency_test**.

There is db dump inside `real_estate_agency_api/db_dump`. Import this dump using `mongorestore` command assuming you current directory is real_estate_agency_api/db_dump/.
```
mongorestore -d real_estate_agency real_estate_agency/
```

### Run project
##### React project
`npm start`
This runs the app in the development mode. 
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### Express.js project
`npm start`
This runs the app in the with dev config.

Run mongodb server
`mongod`

### Test project
##### React project
`npm test`

##### Express.js project
`env NODE_ENV=test npm test`
This runs the api server using test config and runs test under test database(real_estate_agency_test)
