#!/bin/bash

echo "Starting MongoDB server"
docker-entrypoint.sh mongod &

echo "Waiting for MongoDB to start up"

sleep 30

echo "Running import script"
./import.sh

tail -f /dev/null