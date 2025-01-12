`chmod +x run_webhook.sh`
`chmod +x deploy.sh`

# Start node application with PM2
`npm install -g pm2`
`pm2 start ~/webhook/index.js --name webhook-server`
`pm2 list`
`pm2 logs webhook-server`
`pm2 startup`
`pm2 save`

`pm2 restart webhook-server`
`pm2 stop webhook-server`
`pm2 delete webhook-server`
