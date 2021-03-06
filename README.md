NY_Times react simple app
===============

DIRECTORY STRUCTURE
-------------------

```
app
    actions/             contains actions (redux)
    reducers/            contains reducers (redux)
    components/          contains react components
    tests/               contains some tests ( karma-mocha, expect )
    styles/              contains styles
```

INSTALATION
------------

### Clone repository into your local environment

~~~
git clone https://github.com/Ross146/NY_Times_app.git
~~~

### Install 3-d party dependencies and running app

**NPM**

~~~
npm install
~~~
Then run project:
~~~
npm start
~~~
The application will be available on:
~~~
http://localhost:3000/
~~~


TESTS
-----

To run tests just execute following command:
```#!bash
npm test
```

DEVELOPMENT
-----

To run dev mode (webpack-dev-server):
```#!bash
npm run dev
```

The app will be available on host:
```#!bash
localhost: 8090
```
