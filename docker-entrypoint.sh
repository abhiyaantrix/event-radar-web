#!/bin/sh

set -e

echo "Refreshing npm packages"

echo "Using node version: $(node --version)"
echo "Using npm version: $(npm --version)"

npm install

exec "$@"
