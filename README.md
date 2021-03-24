# Fortune - front

This repository is a part of Fortune project - it is a frontend for the Fortune API: https://github.com/lbacik/fortune-api

## dependencies

    yarn install

or

    npm install

## configuration

The only one required value (for the time being) is the Fortune API url, by default it is set to 
`http://localhost:8080` (for more information about Fortune Api please check the https://github.com/lbacik/fortune-api 
project). The Fortune Api url can be passed to the app through the env variable `REACT_APP_FORTUNE_URL`.

## development

    yarn start

or

    npm start

## production

    yarn build

or

    npm build

**Please note** that Fortune API url (`REACT_APP_FORTUNE_URL`) have to be set before the build process started - there 
is no way (currently) to change it later, during the runtime.

## docker

### build

The Fortune API url can be passed through the `FORTUNE_URL` build argument.

    docker build --build-arg FORTUNE_URL=http://foo.bar -t fortune-front:local .

### run

    docker run --rm -p 127.0.0.1:8888:80 fortune-front:local    
