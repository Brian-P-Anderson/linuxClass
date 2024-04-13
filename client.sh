#!/bin/bash
# Check if the seed integer is provided as a command line argument
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <seed_integer>"
    exit 1
fi

# Get the seed integer from the command line argument
SEED=$1

# Generate a random integer between 0 and 65535 using the provided seed
RANDOM_ID=$((($SEED + $RANDOM) % 65536))
while true; do
  MESSAGE="$RANDOM_ID (Bash): $(date)"
  curl -X POST -H "Content-Type: application/json" -d '{"message":"'"$MESSAGE"'"}' http://localhost:3000/send-update
  sleep 2
done