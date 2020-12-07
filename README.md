To visualzie and test map ids for API, clone all code in this directory

1) Edit test_mapids/www/static/main.js and replace mapId and accessToken variables with your id and token. 
  {
      "mapid": "projects/earthengine-legacy/maps/82608ad37a5061e731b033083f0eebb9-b4908a65761429930734a72853f5b140",
      "token": "",
      "tile_fetcher": "https://earthengine.googleapis.com/v1alpha/projects/earthengine-legacy/maps/82608ad37a5061e731b033083f0eebb9-b4908a65761429930734a72853f5b140/tiles/{z}/{x}/{y}",
      "colormap_options": {
          "min": 290.0,
          "max": 314.0,
          "palette": [
              "#2166ac",
              "#4393c3",
              "#92c5de",
              "#d1e5f0",
              "#fddbc7",
              "#f4a582",
              "#d6604d",
              "#b2182b"
          ]
      }
  }
  In the above example, 82608ad37a5061e731b033083f0eebb9 is the mapId and b4908a65761429930734a72853f5b140 is the accessToken.
2) Edit test_mapids/index.js to point to your directory
   app.use(express.static('<your root directory>/test-mapids/www'));
  
3) Install node.js and express.js (npm install express --save).

4) To start node server, run the command, node index.js in test_mapids/.

3) Go to your favorite browser and enter the url http://localhost:9999/. Enter the map id and access token in the form, submit.

4) Give the map a minute to load.

5) Repeat with other map ids and access tokens.

