FROM httpd:latest

COPY /dist/app-web-final /usr/local/apache2/htdocs/

