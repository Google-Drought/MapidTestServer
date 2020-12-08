Running MapidTestServer
-----------------------

Note: These instructions are for Mac OS.

1) Clone repo to your local machine. 
  
2) Edit MapidTestServer/index.js to point to your directory,  
app.use(express.static('<your root directory>/test-mapids/www'));
  
3) Install node.js and express.js (npm install express --save).

4) To start node server, run the command node index.js in MapidTestServer/.

3) Go to your favorite browser and enter the url http://localhost:8888. Enter the tile fetcher url in the form and submit.  
Example tile fetcher url, https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/82608ad37a5061e731b033083f0eebb9-b4908a65761429930734a72853f5b140/tiles/{z}/{x}/{y}.

4) Give the map a minute to load.

5) Repeat with other tile fetcher urls.

