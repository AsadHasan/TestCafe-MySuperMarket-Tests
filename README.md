[![Build status](https://ci.appveyor.com/api/projects/status/t6iowreeo75daymq?svg=true)](https://ci.appveyor.com/project/AsadHasan/testcafe-mysupermarket-tests)

# TestCafe web automation tests

Basic automation test for MySuperMarket website, using TestCafe with Typescript. Test runs parallel on all the browsers installed on the test server (it currently runs on Appveyor CI server, on Chrome, IE and Firefox on their Windows machine).

## To run locally

- Prerequisite: Requires [Node](https://nodejs.org/en/) to be already installed.
- Clone repository locally (or download as zipped, and unzip to required directory).
- In project root directory, run `npm install` to install dependencies.
- In same directory, run `npm test`, this will run the test on all browsers installed locally.
