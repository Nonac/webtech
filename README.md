# SIMPLE RESUME MAKER

### Installs node modules
```
npm install
```

### Compiles the frontend
```
npm run build
```

### Starts the server
* #### localhost https
```
node server.js
```
* #### cloud https (needs key and certificate, not included in this repo)
```
node server.js -cloud
```
* #### http only
```
node server.js -http
```
* #### query the database
```
node server.js -sql
```

**NOTE: For the server-side node module "puppeteer" to function, you may need to install some dependencies if you don't have:**
[Puppeteer dependencies](https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#chrome-headless-doesnt-launch-on-unix%20dependencies)<br>
Otherwise, the pdf generator may not work, although it won't crash the server.
