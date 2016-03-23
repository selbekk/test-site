# Test site for Enonic XP

This repo contains a very simple test site for Enonic XP. It's used for testing
other applications and libraries.

It also creates its own XP_HOME folder called `test-site`.

## What do I get

You get a basic site with a super simple design, with a Page content type and
page type. It's ugly, but it works fine for testing other applications and
libraries.

## How to use

This was made for my personal use, but if you want to use this too, feel free.
This is how to set it up and use it:

### Step 1: Clone the project

Navigate to where you want this code to reside, and clone the project

```bash
$ git clone https://github.com/selbekk/test-site.git
```

### Step 2: Install dependencies

I use NPM for dependency management, so we need to download them in order to
build our resources:

```bash
$ npm install
```

### Step 3: Start it up

Now you're ready to start using the app. I've created a few convenient NPM
scripts for you to use. Look in `package.json` for how they're implemented.
Feel free to change them to fit your needs:

```bash
$ npm start         # Starts Enonic at $XP/bin/server.sh
$ npm run build     # Builds the app
$ npm run deploy    # Deploys the app to $XP_HOME/test-site
$ npm run watch     # Watches for changes and deploys the app when they occur
```

### Step 4: Install the site

Open `http://localhost:8080`, go to the Content Studio, create a new site
(i.e. "Test Site") and add the Test Site application to it. You can then add a
basic page template to your site (I've called it `Page`), that handles content
of type `Page`. Then you're ready to go!

## Open open source

If you see a bug or something you'd like to see fixed, create an issue. If you
feel cool, create a pull request with your changes as well. Given that
everything is nice and good to go, I'll merge it and add you as a contributor,
so you can add code yourself later on.
