FROM node:lts as base
WORKDIR /app
COPY package* /app/
RUN npm install --quiet
COPY . /app/
RUN npm run build

FROM node:lts-slim as prod
WORKDIR /app
COPY package* /app/
RUN npm ci --quiet
COPY --from=base /app/dist/ /app
CMD ["node", "index.js"]