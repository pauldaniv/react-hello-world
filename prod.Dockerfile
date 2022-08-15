ARG APP_NAME="react-hello-world"
FROM node:alpine as build
WORKDIR /$APP_NAME
COPY . ./
RUN yarn install --frozen-lockfile && yarn build

FROM nginx:stable-alpine
ENV PORT=5000
COPY --from=build /$APP_NAME/build /www/$APP_NAME/html
COPY conf.template.nginx /etc/nginx/conf.d/default.template.conf

CMD sh -c "PORT=${PORT} APP_NAME=${APP_NAME} envsubst '\$PORT \$APP_NAME' < /etc/nginx/conf.d/default.template.conf > /etc/nginx/conf.d/default.conf && rm /etc/nginx/conf.d/default.template.conf && nginx -g 'daemon off;'"
