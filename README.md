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

Though there are some schema's configured in api/models.json (look at the bottom, setting, host and note) it works schemaless so you can just add some fields to your forms and the data will be saved. Per default the API has an in-memory DB wich will be cleared when you restart the API. You can connect the API to a Mongodb/MySQL or Oracle database.

You can start working in the client directory and most of the changes will be picked up by autoreload (https://www.npmjs.org/package/livereload). Grunt serves the client on port 9000 and the API serves the same app at port 3000, but without the livereload.

It is trivial to create some more models and quickly crank out a simple scaffold, as show below. 

## Adding a new datatype to this example

Add menu item somewhere around line 30 in app/index.html:

    <li><a ng-href="#/hosts">Hosts</a></li>

Add routes in app/scripts/app.js, right after the existing routes, before the .otherwise() methode.

    .when('/hosts/', {
      templateUrl: 'views/hosts/list.html',
      controller: 'HostsListCtrl'
    })
    .when('/hosts/add', {
      templateUrl: 'views/hosts/add.html',
      controller: 'HostsAddCtrl'
    })
    .when('/hosts/:id', {
      templateUrl: 'views/hosts/item.html',
      controller: 'HostsItemCtrl'
    })
    .when('/hosts/edit/:id', {
      templateUrl: 'views/hosts/edit.html',
      controller: 'HostsEditCtrl'
    })

Now we can click a link and access the above routes:

Let's create the controllers:

    $ cp app/scripts/controllers/notes.js app/scripts/controllers/host.js 

Now edit the new file and search and replace:

    note => host
    Note => Host

Create the views:

    mkdir app/views/hosts/
    cp app/views/notes/* app/view/hosts/

Now edit these new files and search and replace:

    note => host
    Note => Host

Last but certainly not least, register the new controller in your template:

Edit app/index.html and the following line just before the 'endbuild' line 

    <script src="scripts/controllers/hosts.js"></script>

# Todo

 * Add easy DB configuration
 * Start using angular-ui-browser
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
