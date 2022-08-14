FROM node:alpine as build

WORKDIR /react-hello-world
COPY . ./
RUN yarn install --frozen-lockfile && yarn build

FROM nginx:stable-alpine
COPY --from=build /react-hello-world/build /www/react-hello-world/html
COPY conf.template.nginx /etc/nginx/conf.d/default.template.conf

CMD sh -c "PORT=${PORT:-3000} envsubst '\$PORT' < /etc/nginx/conf.d/default.template.conf > /etc/nginx/conf.d/default.conf && rm /etc/nginx/conf.d/default.template.conf && nginx -g 'daemon off;'"
