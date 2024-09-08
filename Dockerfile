FROM ubuntu:latest
WORKDIR /myapp
COPY index.html /myapp/
COPY script.py /myapp/
COPY index.js /myapp/
COPY index.css /myapp/
RUN apt-get update
RUN apt-get install -y python3-pip
CMD [ "python", "./script.py" ]