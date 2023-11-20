Build and Run
=============
build and run your Docker images. For development:
```bash
docker build -f Dockerfile.dev -t my-nuxt-app-dev .
docker run -p 3000:3000 my-nuxt-app-dev
```

For production:
```bash
docker build -f Dockerfile.prod -t my-nuxt-app-prod .
docker run -p 3000:3000 my-nuxt-app-prod
```

Make sure to replace my-nuxt-app-dev and my-nuxt-app-prod with your desired image names.

Adjust the API_BASE_URL and APP_ENV values according to your requirements.