FROM node:alpine

RUN mkdir /app

# Create work directory
WORKDIR /app

# Copy app source to work directory
COPY . /app

# Install app dependencies
RUN npm install

# Build and run the app
CMD npm start start
