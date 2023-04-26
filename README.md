# Fresh Fibby (COMPLETE)

---
> Fresh Fibby is a SaaS HTTP REST API that returns fibonacci numbers in [JSON](https://wikipedia.org/wiki/json) format
---

## Summary of development

The name "Fresh Fibby" was chosen beacause of the following:

1) "Fresh" is the name of the React-similar framework used in this project.
2) I believe having a product name is important, even if it's cheesy :)

The codebase is almost exclusively written with Functionally-Oriented-Programming, as is common practice
in modern web development.

## Running

### From Docker

Fresh Fibby can be run from a contained docker image, with no external dependencies.

To build and run the docker image, run the following in your shell of choice:
_(assuming you have [Docker](https://docs.docker.com/get-docker/) installed on your system)_

```bash
docker build -t fresh-fibby . # build the image
docker run -p 8000:8000  -it --rm --name fresh-fibby-instance fresh-fibby # run an anstance of the image
```

This will expose a secure tunnel from the Docker image to your local machine on port 8000, where you can
securely visit the API.

### From Deno runtime

If you have [Deno](https://deno.land) installed on your system, you can start the server from the command line.

At the root of the repository, run the following to start a web server in production mode:

```bash
deno task start
# OR
deno task dev
# to start a development mode server (hot reload, debug, etc.)
```

## Limitations

`count` must be <= 200, as anything greater won't neccecarily cause a stack overflow,
 BUT the browser javascript engine will freeze up at a certain point
 due to the sheer amount of computational power needed.

---
---

## examples

output of running `http://localhost:8000/api/fibonacci/{}/?help`:

```json
{ HELP_MESSAGE: "
fibby v0.1.0:


Usage: http://localhost:8000/api/fibonacci/{count}?{options}

Count:
  <COUNT>  the length of the sequence to output, i.e.: 0, 1, 1, 2, 3, 5 would be the result of \`count=6\`.
    Count must be a positive, non-zero integer.

Options:
  ?numbering      Preface each number in the sequence with it's position within the sequence, i.e: 1:0, 2:1, 3:1, 4:2, 5:3, 6:5
  ?last-only      Print only the last number of the sequence for the given count
  ?help           Print help
" }
```
