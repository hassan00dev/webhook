const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001; // Replace with your custom port

// Middleware to parse JSON payloads
app.use(express.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
    console.log('Webhook received:', req.body);

    // Run the deploy.sh file
    exec('~/webhook/deploy.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing deploy.sh: ${error.message}`);
            return res.status(500).send(`Deployment failed: ${error.message}`);
        }
        if (stderr) {
            console.error(`Stderr from deploy.sh: ${stderr}`);
        }
        console.log(`Stdout from deploy.sh: ${stdout}`);
        res.status(200).send('Deployment triggered successfully!');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Webhook server running on port ${port}`);
});
