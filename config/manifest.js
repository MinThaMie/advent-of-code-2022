'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Advent of Code 2022',
    short_name: 'AoC 2022',
    description: 'Tracker for my Advent of Code 2022 solutions',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#007b7b',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        targets: ['favicon'],
      },
    ],
    ms: {
      tileColor: '#007b7b',
    },
  };
};
