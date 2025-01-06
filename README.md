# Unhandled 'EADDRINUSE' Error in Node.js

This repository demonstrates a common but easily overlooked error in Node.js: the `EADDRINUSE` error. This error occurs when your Node.js server attempts to bind to a port that is already in use by another process.

## The Problem

The `bug.js` file contains a simple HTTP server that listens on port 8080. If another application is already using this port (e.g., another server, or even a process that holds the port open), the server will fail to start and may not provide a helpful error message.

## The Solution

The `bugSolution.js` file demonstrates a more robust approach. It includes error handling to gracefully manage the `EADDRINUSE` error, providing a more informative message to the user and allowing the server to handle this issue without immediately crashing. 