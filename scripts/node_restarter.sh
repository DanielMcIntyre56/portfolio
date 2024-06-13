#!/usr/bin/bash

# Run this file as a cron job to ensure the backend remains started

pgrep -x "node"

if [ $? -ne 0 ]; then
    sudo forever start /var/www/html/app.js
fi
