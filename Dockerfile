# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the remaining project files to the working directory
COPY . .

# Build the React app (this assumes you have a script in your package.json like "build": "react-scripts build")
RUN npm run build

# Expose the port that the app will run on (if your React app runs on a different port, adjust this)
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
