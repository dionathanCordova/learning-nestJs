# pode usar pra react
FROM node:12.14.0-alpine3.11 

# pode usar pra react
RUN apk add --no-cache bash git

RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

# pode usar pra react
USER node

# pode usar pra react
WORKDIR /home/node/app
