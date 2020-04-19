## Hit Pump web page

### Build instructions

#### Prerequisites
* Install Node.js
* Install npm

#### Gulp build
* Install dependencies for project: `npm install --save-dev`
* Run build: `gulp`

#### Docker
* To build nginx container - docker build -t hit-pump-web:latest .
* To start locally - docker run --name hitpump-web -p 8080:80 -d hit-pump-web:latest 

### License
This repository (with exempt of fonts and official logo png files) is licensed under the GPL V3 License - see the [LICENSE.md](LICENSE.md) file for details.

