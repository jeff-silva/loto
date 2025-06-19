#!/bin/bash

docker compose -f compose-scrap.yml up --build --force-recreate --remove-orphans
mv -f ./scrap/app/contests.json ./contests.json