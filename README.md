# Porject 3 and 4 - Containerize Apps and Docker Compose
This project deploys a web app as a Docker container, that leverages multiple Docker images. This multi-container setup will be done using Docker compose. The web app containers environment will be hosted on the AWS cloud and users will be able to access the web app via the public internet.

This project is composed of one Dockerfile that will setup the container that will host the web app (Dockerfile),the js app code (app.js) and its dependencies files (.gitignore, .eslintrc.json, .dockerignore and package.json). The project will also have a Dockerfile for the database setup (Dockerfile.db), the database content file (nhl-stats-2022.csv), one script to create and setup the mongobd collection (import.sh) and one script to start mongo db server and run the collection setup script (entrypoint.sh). Lastly, it has a docker compose file to setup the communication between the two containers (docker-compose.yml).

URL for the public Github repository: https://github.com/zakiirjuman/wcd-project-3/tree/main

## Table of contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Installations](#installations)
- [Usage](#usage)
- [Testing the Results](#testing-the-results)
- [Authors](#authors)

## Prerequisites
Access links for more information on how to install and configure each prequisite:
- AWS account.
- Create Docker hub account.
- IAM User with right permissions (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html).
- Secret access key (https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html).


## Getting Started

In the AWS console launch an ec2 instance. Choose a name, an image and a type. We used the ubuntu 20.4 image and the type t2.micro but feel free to choose a different option. Setup the keypair, make sure to store the file containing the keypair in the directory you are going to use to ssh to the ec2. In the network settings create a security group to keep listening in port 3000. The rest you can leave as default.

Access links for more information on how to launch and ec2 and setup security group:
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html

## Installations

In your terminal connect to the ec2 you have created using ssh client connection:
```sh
ssh -i <YOUR_KEY_PAIR> ec2-user@<YOUR_EC2_PUBLIC_IP>
```

Inside your ec2 install Git and Docker: 

For git instalations, if you chose an ubuntu image use the follwoing comand: 
```sh
sudo apt-get update
sudo apt-get install -y git
```
or access the following link to know the comand for different options: 
https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

For Docker instalation, use following comand if you chose an ubuntu image: 
```sh
sudo apt-get update
sudo apt-get install -y docker.io
```
or access the following link to know the comand for different options: 
https://docs.docker.com/engine/install/

## Usage 
Inside your ec2 clone this repository using following comand: 
```sh
$ git clone https://github.com/zakiirjuman/wcd-project-3/
```
Run the docker compose file using the following command: 
```sh
$ docker compose up -d
```

## Testing the Results
Run the application in your browser using:
```sh
<ec2 public ip>:3000/<the routes on the api.js>
```
See bellow information about the application and its routes:

### Hockey Players Application

This is a simple app that displays a list of hockey players and their stats. It is built using Node.js and Express. It has only three routes:

- `/players` - Displays a list of all players
- `/toronto` - Displays a list of all players who play for the Toronto Maple Leafs
- `/points` - Displays a list of the top 10 players by points

Access the following links to get the images used in this project published on dockerhub:

For Data base image:
https://hub.docker.com/r/zakiirjuman/project-3-db

For app image:
https://hub.docker.com/r/zakiirjuman/project-3-app

## Diagram

## Authors

- Beatriz Carvalho de Oliveira - https://github.com/beatrizCarvalhoOliveira
- Carolina Delwing Rosa - https://github.com/caroldelwing
- Zakiir Juman - https://github.com/zakiirjuman
