Express Notes

HTTP Requests

Get Requests: 
When client makes a get request, server can return many responses codes
-Need to set up a request and tell the server how to provide a response

Express server needs to be restarted every time you make a change


ROUTES
Tell server what to do when a user visits a URL


NODEMON
-Automatically restarts your node process(express server) when a file changes
-Stops and restarts the server for us
-Install globally npm install -g nodemon
-run as nodemon src/app(whatever file you'll be changing regularly)


Node Inspector
-Interactively de-bugging and inspecting node process
-Debug node from within browser
-Install globally npm install -g node-inspector
-Run as path node-debug src/app.js
  -Set a breakpoint where the debugger will stop. 
  -node inspector does not restart after a file change
  -have nodemon run server and node inspector to run debugger
  		-- run node-inspector on its own in CL as 
  		--run nodemon in a separate terminal tab with nodemon --debug-brk filepath

 Debut in Code
 Can write debugger into the code as debugger;
 Debugger statement does not stop the server when written in code because it goes so fast




REQUEST OBJECT 
When a client sends an http request, the server grabs the request, bundles all that data into a JS object, and that is the request object we use in application.


