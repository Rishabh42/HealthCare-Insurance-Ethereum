# Use the official Node.js image as the base image
FROM node:21-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Install Truffle globally
RUN npm install -g truffle

# Copy the project files into the container
COPY . .

# Expose the port for Ethereum RPC (if needed)
EXPOSE 8545

# Run Truffle commands (e.g., compile, migrate, test)
CMD ["truffle", "compile"]
