# Fortune - front

This repository is a part of Fortune project - it is a frontend for Fortune API: https://github.com/lbacik/fortune-api

## dependencies

    yarn install

or

    npm install

## configuration

The only one required value (for the time being) is the Fortune API url, by default it is set to 
`http://localhost:8080` (for more information about Fortune Api please check the https://github.com/lbacik/fortune-api 
project)

## development

    yarn start

or

    npm start

The Fortune API url can be set by the `REACT_APP_FORTUNE_URL` environment variable

## production

    yarn build

or

    npm build

**Please note** that Fortune API url have to be set during the build process - there is no way (currently) to change it 
later, during the runtime.

## docker

### build

When building the docker image the Fortune API url has to be also set during the build process - it can be done through
the `FORTUNE_URL` build argument.

    docker build --build-arg FORTUNE_URL=http://foo.bar -t fortune-front:local .

### run

    docker run --rm -p 127.0.0.1:8888:80 fortune-front:local    
