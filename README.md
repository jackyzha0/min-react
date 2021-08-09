# `min-react`
Because `create-react-app` has way too much extra boilerplate

## Contents
```
src
├── components      # all React components
│   ├── Clock.js    # clock that ticks once a second (useState and useEffect example)
│   ├── Footer.js
│   └── Header.js
├── App.js          # main React app
├── index.css       # root-level styling
└── index.js        # React entrypoint (where React gets inserted into the page)
```

## Config
### Styling
Root page styling is done in `src/index.css`. All component styling is done through [`styled-components`](https://styled-components.com/docs/basics#getting-started) (example in `src/App.js`).

### Page Metadata
To customize the font, page title, page icon, etc. you can customize the page skeleton over in `public/index.html`. 

All fonts are served through [Google Fonts](https://fonts.google.com/), you can pick and choose your own over there!

### Deployment
[Vercel](https://vercel.com/) is the recommended way to deploy this site to the internet. [Current deployment](https://min-react.vercel.app/)