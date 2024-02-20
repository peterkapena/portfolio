# Use an official Nginx runtime as the base image
FROM arm64v8/nginx:alpine

# Copy the build files into the default Nginx webserver directory
COPY build/ /usr/share/nginx/html

RUN apk add nano

# Expose port 80 to the outside world
EXPOSE 80
EXPOSE 443

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

# docker run -d --name portfolio --network peterkapena portfolio
