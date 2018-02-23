# React


<p> Here is the simple step to start react with creating simple web app now I am going to tell you how to start  react and how to 
create your own porject using react.</p> 
before starting our project we have to know litle bit about react ......

why  should learn React ?

  :->  react is small learning curve
  :-> react is Agile  and faster
  :-> React uses jsx --- like DOM elements
  and last
  :-> react has a great community   like facebook 
  ok let's start 

<----Installation ---->
#step 1
install node
sudo apt-get install node 

and check version of your node.js

node -v
or 
node --version
and also check
npm -v
or 
npm --version

#step 2

create a floder react-test

mkdir react-text

#go to react-text folder and run this commands

--> npm init
it will ask same project details
name -- myproject
version leave it
description -->any thing you want
keword
script 
author
license  MIT

it will create one JSON FILLE FOR YOU LIKE THIS


#################################################################################################################################

{
  "name": "react-project",
  "version": "1.0.0",
  "description": "hello react",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "JOhn",
  "license": "MIT",
  }
}

##################################################################################################################################
you have to install some 3 party packages for react so run this commands

#step 3

npm install  express@4 --save

and open JESO FILE YOU WILL SEE 

####################################################################################################################################
{
  "name": "react-project",
  "version": "1.0.0",
  "description": "hello react",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "JOhn",
  "license": "MIT",
  "dependencies": {
    "express": "^4.16.2"
  }
}
###################################################################################################################################
Now Delete Foloder node_modules
rm -rf node_modules
then
npm install

now all packeges and dependencies are install in your folder 
that's it
Happy coding :-)

create one folder 

mkdir public

inside public folder you have to create index.html file so we can write our first
html code there
<!Doctype html>
<html>
<head>
  <title>my react page</title>
</head>
<body>
   <h1> hello react  </h1>
   
</body>
</html>

after that one thing we need in root folder 

server.js
so go to the root foloder of react


vim server.js


var express = require('express');


//create a app

var app = express();
app.use(express.static('public'));
app.listen(3000, function() {

	console.log('express server is open on port 3000')

});

for starting the server in port number 3000 so you can see you first page on browser

for starting server code

node server.js


localhost : 3000

that's it ...........byeee
happy coding









