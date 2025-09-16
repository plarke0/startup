#!/bin/bash

while getopts s: flag
do
    case "${flag}" in
        s) service=${OPTARG};;
    esac
done

if [[ -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployFiles.sh -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying files for $service to server\n"

# Step 1
printf "\n----> Clear out the previous distribution on the target.\n"
ssh web << ENDSSH
rm -rf services/${service}/public
mkdir -p services/${service}/public
ENDSSH

# Step 2
printf "\n----> Copy the distribution package to the target.\n"
scp -r * web:services/$service/public
