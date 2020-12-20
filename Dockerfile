FROM node:14 as base

ARG PROJECT_DIR=/opt/project
ARG FORTUNE_URL

ENV REACT_APP_FORTUNE_URL=$FORTUNE_URL

COPY . ${PROJECT_DIR}
WORKDIR ${PROJECT_DIR}

RUN npm install \
    && npm run build

FROM lbacik/nginx-index

ARG PROJECT_DIR=/opt/project

COPY --from=base ${PROJECT_DIR}/build /http
