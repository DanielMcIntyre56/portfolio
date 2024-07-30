### Steps to run this project locally:
1) Ensure you have docker installed - try `docker -v` and if there is an error you need to install docker. Instructions can be found here - `https://docs.docker.com/engine/install/`.
2) Clone the project and naviagte to the `portfolio` directory.
3) Run `docker compose up` from the project root directory.
4) View the project at `http://localhost:3000/`

Notes:
- Building the docker image the first time will take longer. After the first build it will be cached and should build much faster.
- The contact form will not work when run locally without replacing the placeholder variables with valid email addresses and valid credentials for the Google SMTP server.
