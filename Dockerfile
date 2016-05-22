FROM mhart/alpine-node
RUN npm install node-repl -g
WORKDIR /dotgov-list
ADD . /dotgov-list
