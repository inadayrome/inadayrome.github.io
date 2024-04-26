# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

FROM node:20.12.2-bullseye-slim AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
ENV GATSBY_TELEMETRY_DISABLED=1
# install node modules and build assets
RUN npm install
RUN npm run clean && npm run build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/public .
ENV GATSBY_TELEMETRY_DISABLED=1
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
