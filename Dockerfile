FROM python:latest
COPY ./storybook-static / 
EXPOSE 8080 
CMD python -m http.server 8080