FROM nginx:alpine
# Copy static files to Nginx directory
COPY index.html style.css script.js /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
