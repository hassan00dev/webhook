chmod +x run_webhook.sh
chmod +x deploy.sh

# Start node application with PM2
npm install -g pm2
pm2 start ~/webhook/index.js --name webhook-server