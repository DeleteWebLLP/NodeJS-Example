# CodeHost Node.js Starter

This is a minimal "Hello World" application designed to test Node.js deployments on DirectAdmin web hosting without requiring SSH/terminal access. 

## Why this structure?
DirectAdmin uses Phusion Passenger to run Node.js applications. This requires specific configurations that differ slightly from a standard local setup:

* **`server.js`**: The main entry point. It uses `process.env.PORT` instead of a hardcoded port (like 3000). Passenger dynamically assigns a port and handles the reverse proxy automatically.
* **`package.json`**: Contains the basic app metadata and dependencies. DirectAdmin reads this file when you click "Run NPM Install" in the graphical interface to generate the `node_modules` folder on the server.

## Deployment Steps
1. Download `server.js` and `package.json`.
2. Select both files and compress them into a `.zip` archive. *(Do not include a local `node_modules` folder).*
3. Upload and extract the zip file via the DirectAdmin File Manager.
4. Go to **Node.js Setup** > **Create Application** and point the startup file to `server.js`.
5. Click **Run NPM Install**, then click **Start App**.
