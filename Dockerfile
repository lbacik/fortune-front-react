FROM node:16 as base

ARG PROJECT_DIR=/opt/project
ARG FORTUNE_URL

ENV REACT_APP_FORTUNE_URL=$FORTUNE_URL

COPY . ${PROJECT_DIR}
WORKDIR ${PROJECT_DIR}

RUN npm install \
    && npm run build

FROM lbacik/nginx-index:react

ARG PROJECT_DIR=/opt/project

COPY --from=base ${PROJECT_DIR}/build /http
