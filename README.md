# Getting Started

## Requirements
PHP 7.0 and above\
PDO \
MySQL\
Apache\
Npm

## Configuration

### API
Define environment variables:\
https://www.php.net/manual/en/reserved.variables.environment.php
- LMS_DB_USER. Database username
- LMS_DB_PASSWORD. Database password
- LMS_DB_DSN. Dsn, for example "mysql:host=localhost;port=3306;dbname=lms"
- LMS_FRONT_URL. Front url for Access-Control-Allow-Origin header (CORS policy)\

Apache configuration example
```
<VirtualHost *:%httpport%>
    SetEnv LMS_DB_USER "root"
    SetEnv LMS_DB_PASSWORD "root"
    SetEnv LMS_DB_DSN "mysql:host=localhost;port=3306;dbname=lms"
    SetEnv LMS_FRONT_URL "http://localhost:3000"
</VirtualHost>
```

### Client side
Define environment variable REACT_APP_API_URL responsible for api url in a .env file at the root of this project\
For example:
`REACT_APP_API_URL=http://localhost/lms/api`

In the project directory, you need to run:
### `npm install`
Install the dependencies in the local node_modules folder

## Usage
**Test user**: username - admin, password - admin

In the project directory, you can run either
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

or
### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\