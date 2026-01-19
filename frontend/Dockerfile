# FROM node:20-alpine

# WORKDIR /app

# COPY package.json package-lock.json /app/

# RUN npm install

# COPY . .

# EXPOSE 5173

# CMD [ "npm","run","dev","--","--host" ]


FROM node:21-alpine As builder

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm install

COPY . .

RUN npm run build


FROM nginx:alpine As production

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx","-g","daemon off;" ]

