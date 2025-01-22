# DIBBs Site

This repository holds the code for the informational DIBBs website.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Running Locally

You'll need to install Node v18+ to run the project.

Pull down the source code and install the project dependencies:

```bash
npm i
```

Next, run the development server:

```bash
npm run dev
```

The site will now be available in your browser at [http://localhost:3000](http://localhost:3000).

## Running Tests

Run the automated tests with the following command:

```bash
npm run test
```

## Building for Production

If you'd like to build a production Docker image, you can run the [Docker build GitHub Action](https://github.com/CDCgov/dibbs-site/actions/workflows/docker-build.yml).

Select `Run workflow`, provide a branch to build from, and select the environment in which the image will be deployed to. Once done, click the green `Run workflow` button.

Once the Action finishes running, the image will be available to download from the [DIBBs Site GitHub Container Registry](https://github.com/cdcgov/dibbs-site/pkgs/container/dibbs-site).

## Deploying

Docker images are deployable by a DevOps team member. Please reach out to a DIBBs DevOps team member for their assistance with deployment.
