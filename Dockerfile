FROM node:18-alpine3.14 as build

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm ci --production

COPY . .

RUN npm run export

#nginx
FROM nginx:1.21-alpine as prod

COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
