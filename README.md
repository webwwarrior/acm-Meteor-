# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

### Starting a ACM (ResinTech) site on the a2hosting server ###

* cd /etc/nginx/conf.d && vi default.conf 

        server  {

          listen  80;

          server_name acmix.com www.acmix.com;

          root /usr/share/nginx/html;

          location / {

                proxy_set_header X-Real-IP $remote_addr;

                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

                proxy_set_header Host $http_host;

                proxy_set_header X-NginX-Proxy true;

                proxy_pass http://xx.xx.xx.xx:3538/;

          }

        }



* sudo systemctl restart nginx

* cd /var/www/acm/bundle/programs/server

* export PORT=3538
* export MONGO_URL=mongodb://localhost:27017/acm
* export ROOT_URL=http://www.acmix.com/

* nvm install 0.10
* cd /var/www && forever start acm/bundle/main.js