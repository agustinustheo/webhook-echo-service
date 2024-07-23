<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A Webhook Echo Service built with NestJS for testing and debugging webhook integrations.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>

## Description

Webhook Echo Service is a [Nest](https://github.com/nestjs/nest) framework-based application designed for testing and debugging webhook integrations. It captures and logs all incoming HTTP requests, making it easier to inspect webhook payloads and headers.

## Features

- Captures all incoming HTTP requests (GET, POST, PUT, DELETE, etc.)
- Logs request method, path, URL parameters, query parameters, and body
- Uses TypeScript mixins for enhanced logging and timestamp functionality
- Dockerized for easy deployment and testing

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Docker

You can also run this service using Docker. The image is available on Docker Hub:

```bash
docker pull agustinustheoo/webhook-echo-service
docker run -p 3000:3000 agustinustheoo/webhook-echo-service
```

Or, build and run the Docker image locally:

```bash
# Build the Docker image
docker build -t webhook-echo-service .

# Run the Docker container
docker run -p 3000:3000 webhook-echo-service
```

## Usage

Once the service is running, you can send HTTP requests to any endpoint, and the service will echo back the details of the request. Here are some example curl commands:

1. Test a POST request with query parameters:
```bash
curl -X POST "http://localhost:3000/api/test?param1=value1&param2=value2"
```

2. Test a POST request with a JSON body:
```bash
curl -X POST http://localhost:3000/api/test -H "Content-Type: application/json" -d '{"key1":"value1","key2":"value2"}'
```

3. Test a POST request with URL parameters and a JSON body:
```bash
curl -X POST http://localhost:3000/api/test/123 -H "Content-Type: application/json" -d '{"key":"updatedValue"}'
```

4. Retrieve using a GET request:
```bash
curl "http://localhost:3000"
```

## TypeScript Mixins

This project demonstrates the use of TypeScript mixins to add timestamp and logging functionality to the NestJS service. The mixins are applied in the `src/app.service.ts` file.

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Webhook Echo Service is [MIT licensed](LICENSE).