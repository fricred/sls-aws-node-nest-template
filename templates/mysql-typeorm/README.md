![Logo of the project](images/revstar.png?raw=true 'WeCare Logo')

# We Care Services

> Serverless base project

This is the backend services project for the revstar Web and mobile apps

## Installing / Getting started

These are the current global libraries needed to run the project.

```shell
npm install --silent --no-progress npm@6.14.15 -g
npm install --silent --no-progress serverless@2.71.0 -g
npm install --silent --no-progress @nestjs/cli@8.2.0 -g
npm install --silent --no-progress ts-node@10.4.0 -g
npm install --silent --no-progress typeorm@0.2.41 -g
```

This comands will install the required CLI comands `serverless`, `nest` and `typeorm`

### Initial Configuration

before starting to develop it is necessary to copy the file [.env.example](.env.example) into `.env` and update the folowing environments variables

```shell
PRJ=#project name
ENV=#environment mode (local,dev,test,prod)
TYPEORM_HOST = #mysql host url or ip
TYPEORM_USERNAME = #mysql user
TYPEORM_PASSWORD = #mysql password
TYPEORM_DATABASE = #mysql database name
TYPEORM_PORT = #mysql port number
```
the rest of the environments variables is related to migrations and seeding of the database
## Developing

### Database
- You can use the [docker-compose.yml](docker-compose.yml)

```shell
docker-compose up -d
```

- this will create a dockerized mysql database with the same version as the aws serverless database them you need to run the migration command


```shell
npm run migrations:run
```

this will run all the DB schema changes and seeding the default tables

### Building

Because we are using nest behind every lambda we need to compile the mono repos before run serverless

```shell
npm run build
```

the command has all the necessesary subcomands to build all the apps and place in the [dist](dist) directory

### Run Locally

- To run locally use

  ```shell
  npm run serverless:start
  ```
  this will build and run serverless offline and expose the lambdas in http://localhost:3000

### Build & Deploy
- To deploy using and aws account  use

```shell
serverless package -s $STAGE
```

`$STAGE` could be  (dev,test,prod)

The CI/CD pipeline will automatically trigger from the master branch and build and deploy each function automatically.
