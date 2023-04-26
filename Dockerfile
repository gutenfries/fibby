# debian plays nicely with rust & is generally faster than ubuntu
FROM denoland/deno:debian-1.27.0

# for deno & deno deploy, if applicable
ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .


# Cache deno dependencies
RUN deno cache main.ts --unstable

EXPOSE 8000

CMD ["task", "start"]
