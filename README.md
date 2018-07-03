# vue-fb

> A Vue.js project
from this demo, https://medium.com/@oleg.agapov/basic-single-page-application-using-vue-js-and-firebase-part-1-9e4c0c11a228

NB Note the comments about updates in vuetify

Part 2
https://medium.com/@oleg.agapov/basic-single-page-application-using-vue-js-and-firebase-part-2-143a3084266f

Uses Material icons
https://material.io/tools/icons/?style=baseline

## Build Setup

``` bash
cd ..
vue init vuetifyjs/webpack vue-fb
cd vue-fb

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
npm i --save vuex

npm audit   -- to check vulnerabilities

npm i --save firebase
npm i --save axios

yarn add vue-toasted

yarn add vuedraggable

yarn add vue-chartjs chart.js

```
create fbconfig.js with auth properties, set hidden
create axiosapi.js with credentials, set hidden

Add
- logo
- page icon - in static folder
- theme
- list of items
- turn off text headings, just icons
- axios to read API
- set up a Cloud Firestore DB
- firebase realtime feed
- vue-toasted

- check for nulls, clear after, pop up Done
- vue-draggable, https://github.com/SortableJS/Vue.Draggable

- dashboard, chart.js, animated bubble chart
-     look at - resize, text sizes, putting in data connection

- draggable needs save/load from db, with ordering, 
-        check drag between order
- add/update/delete through actions
- useful data

- reaction to resize
- read API in store
- realtime feed in store - separate module
- crud graphQL
- https://www.creative-tim.com/product/vue-paper-dashboard

- animation in a canvas, eg radar display
- log connection to messages

try https://www.chartkick.com/vue ?