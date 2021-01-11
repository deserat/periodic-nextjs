# Periodic NextJS

## WTF?

This is a website frontend using NextJS an example for the Periodic
headless CMS. It probably won't work for you just yet. Give me a few days,
I've got people to build and houses to see.

Right now all it does is recurse a tree and build pages in a hierarchial way.

The pages built can befound in my experimental api
https://github.com/deserat/periodic/tree/main/api . Did you notice it's not
an API? Ya me too. That will change.

Those pages can be made to run by setting up NextJS.

then

```
git clone git@github.com:deserat/periodic.git
git clone git@github.com:deserat/periodic-nextjs.git
```

then mave two terminals open. In the first make a simple server go by:

```
cd periodic/api
python -m http.server 8000
```

in the second

```
cd periodic-nextjs
npm i
npm run dev
```

Why two different repos? Because Headless is all about loose coupling. This
ensures I'm taking things like network, CORS, latency and various other issues
into account in a way that reading local files off the fs makes unnessesary.
Besides the other repo will be a fastapi script soon enough.
