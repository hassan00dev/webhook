#!/bin/bash

sudo apt update
sudo apt install -y nodejs npm

cd ~/webhook
npm install express
node index.js
