# Base image for development
FROM node:14-alpine AS development

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose the specified port for development
EXPOSE 3000

# Start the React app with hot-reloading enabled
CMD ["npm", "start"]

# Build stage for production
FROM node:14-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the entire project directory to the working directory
COPY . .

# Build the production version of the app
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine AS production

# Copy the production build files to the web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the specified port for production
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]
