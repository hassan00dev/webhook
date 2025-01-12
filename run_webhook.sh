#!/bin/bash

sudo apt update

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 22
node -v
nvm current

cd ~/webhook
npm install express
node index.js
