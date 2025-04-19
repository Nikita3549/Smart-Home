FROM node:22-alpine as build
WORKDIR opt/api
COPY package.json nest-cli.json ./
RUN npm install
COPY ./src ./
COPY tsconfig.json ./
RUN npm run build

FROM node:22-alpine
WORKDIR opt/api
COPY package.json ./
RUN npm install --only=prod
COPY --from=build /opt/api/dist ./dist