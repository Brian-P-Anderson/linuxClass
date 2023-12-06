# python_client.py
import requests
import time
import json
import sys
import random

# Check if the seed integer is provided as a command-line argument
if len(sys.argv) != 2:
    print("Usage: python python_client.py <seed_integer>")
    sys.exit(1)

# Get the seed integer from the command-line argument
seed = int(sys.argv[1])
random.seed(seed)  # Set the random seed

# Generate a random client ID between 0 and 65535 using the provided seed
client_id = random.randint(0, 65535)

while True:
    message = f'{client_id} (Python): {time.strftime("%Y-%m-%d %H:%M:%S")}'
    data = {'message': message}
    headers = {'Content-type': 'application/json'}
    
    response = requests.post('http://localhost:3000/send-update', data=json.dumps(data), headers=headers)

    if response.status_code == 200:
        print(f'Sent update: {message}')
    else:
        print(f'Failed to send update: {message}')
    time.sleep(2)