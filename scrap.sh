#!/bin/bash

docker compose -f compose-scrap.yml up --build --force-recreate --remove-orphans
mv ./scrap/app/contests.json ./contests.json