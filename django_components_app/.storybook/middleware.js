const {
    createDjangoAPIMiddleware,
  } = require('storybook-django/src/middleware');
  
  module.exports = createDjangoAPIMiddleware({
    // Point this at your Django runserver instance, with the correct port number.
    origin: 'http://localhost:8000',
    apiPath: ['/django_components/', '/static/'],
  });