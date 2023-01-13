1.  connect database inside config.js

const config = {
db: {
/_ don't expose password or any sensitive info, done only for demo _/
host: "localhost", //database hosting url
user: "root", // database user
password: "", // database password
database: "poi", // database name
},
};

2. now install both view and server packages

cd pointsofinterest/

run this command on terminal: npm run install-view
run another command on terminal to install server packages: npm install

3. To run both view and server

run this command on terminal: npm run dev

4. To run only view

run this command on terminal: npm run client

5. To run only server

run this command on terminal: npm run server
