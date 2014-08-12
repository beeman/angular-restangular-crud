### If you like this my [new project](https://github.com/beeman/loopback-angular-admin) might be interesting too!

It uses loopback, angular, restangular and has support for user authentication, file uploads and other stuff :)

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

You can start working in the client directory and most of the changes will be picked up by autoreload (https://www.npmjs.org/package/livereload). Grunt serves the client on port 9000 and the API serves the same app at port 3000, but without the livereload.

It is trivial to create some more models and quickly crank out a simple scaffold, as show below. 

## Adding a new datatype to this example

We will add an object named 'Host' 

Add menu item somewhere around line 30 in app/index.html:

    <li ui-sref-active="active"><a href='' ui-sref="hosts.list">Hosts</a></li>

Copy app/scripts/controllers/notes.js to app/scripts/controllers/hosts.js 

    $ cp app/scripts/controllers/notes.js app/scripts/controllers/hosts.js 

Now edit the new file and search and replace:

    find app/scripts/controllers/hosts.js -type f -exec sed -i '' 's/note/host/g' {} \;
    find app/scripts/controllers/hosts.js -type f -exec sed -i '' 's/Note/Host/g' {} \;

Create the views:

    mkdir app/views/hosts/
    cp app/views/notes/* app/views/hosts
    
Now edit these new files and search and replace:

    find app/views/hosts/. -type f -exec sed -i '' 's/note/host/g' {} \;
    find app/views/hosts/. -type f -exec sed -i '' 's/Note/Host/g' {} \;

Last but certainly not least, register the new controller in your template:

Edit app/index.html and the following line just before the 'endbuild' line 

    <script src="scripts/controllers/hosts.js"></script>


Update the API to accept this datatype. Edit api/models.json and add the following code to the object array:

    "host": {
      "public": true,
      "dataSource": "db",
      "plural": "hosts"
    }

Now restart the API to start accepting the model abov..

# Todo

 * Add easy DB configuration
 * You name it?

# License

The MIT License (MIT)

Copyright (c) 2014 Bram Borggreve

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
