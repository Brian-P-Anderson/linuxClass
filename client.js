// node_client.js
const axios = require('axios');
const interval = 2000; // Interval in milliseconds

if (process.argv.length !== 3) {
  console.log("Usage: node node_client.js <seed_integer>");
  process.exit(1);
}

// Get the seed integer from the command-line argument
const seed = parseInt(process.argv[2]);

function generateRandomId(seed) {
    const range = 65536; // Range of IDs (0 to 65535)
    const scaledRandom = Math.floor(Math.random(seed) * range);
    return scaledRandom;
}
const client_id = generateRandomId(seed);

function sendUpdate() {
  
  const message = `${client_id} (JS): ${new Date()}`;
  axios.post('http://localhost:3000/send-update', { message })
    .then(() => console.log(`Sent update: ${message}`))
    .catch((err) => console.error(err));
}

setInterval(sendUpdate, interval);