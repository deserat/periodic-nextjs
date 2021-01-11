# Periodic NextJS

## WTF?

This is a website serving frontend using NextJS an example for the Periodic
headless CMS. It won't work for you just yet. Give me a few days, there are
other repo's and tools at play.

Right now all it does is recurse a tree and build pages in a hierarchial way.

The pages builds can befound in my experimental api https://github.com/deserat/periodic/tree/main/api

Those pages can by made to run by setting up NextJS.

then

```
git clone git@github.com:deserat/periodic.git
git clone git@github.com:deserat/periodic-nextjs.git
```

then mave two terminals open. In the first make simple servergo by:

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
ensures I'm taking things like network, CORS, and various other issues that
reading local files off the fs makes unnessesary.
