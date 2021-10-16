# cypress-example-docker-compose

See [docker-compose.yml](docker-compose.yml) and [circle.yml](circle.yml) files.




## Use

### Run with CI

1. build the containers with `npm run build`
2. start the web application and run Cypress tests with `npm run up`
3. use Circle CI as the CI tool, requires invitation 'https://github.com/benzdriver/cypress_circleci_docker/invitations' to access the github, then later on go to https://circleci.com/,
login with your github account and access to the repo: "benzdriver/cypress_circleci_docker"
4. Commit whatever new code to the "benzdriver/cypress_circleci_docker", it would triggered a new run in CircleCI

### Run standalone
```
cd e2e
npm install
npx cypress run --spec cypress/integration/* --headed

```
## End