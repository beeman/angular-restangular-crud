# angular-restangular-crud

Example of how to use restangular in a way that you DRY too much... 

It uses AngularJS with Restangular at the frontend and loopback (https://www.npmjs.org/package/loopback) as the API.

To run it you need node/npm/grunt/bower (and maybe even more packages) installed...

### Clone the repository

    git clone https://github.com/beeman/angular-restangular-crud

### Install the server and leave it running 

    cd angular-restangular-crud/api
    npm install
    node app.js # or nodemon app.js

### Install the client

    cd angular-restangular-crud/client
    npm install 
    bower install
    grunt

Grunt might show some errors, most of the time it's jslint testing your JavaScript... Fix the errors or override them with --force.

### Serve the page

	  grunt serve

If all went well you can now list/add/view and edit notes.

It is trivial to create some more models and quickly crank out a simple scaffold. 

Though there are some schema's configured in api/models.json (look at the bottom, setting, host and note) it works schemaless so you can just add some fields to your forms and the data will be saved. Per default the API has an in-memory DB wich will be cleared when you restart the API. You can connect the API to a Mongodb/MySQL or Oracle database.

You can start working in the client directory and most of the changes will be picked up by autoreload (https://www.npmjs.org/package/livereload).

