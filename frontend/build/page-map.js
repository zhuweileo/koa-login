var path = require('path');

var pages = [
  {
    name: 'home',
    entry: path.resolve(__dirname, '../src/entry/home.js'),
    template: path.resolve(__dirname, '../src/templates/home.html'),
  },
  {
    name: 'login',
    entry: path.resolve(__dirname, '../src/entry/login.js'),
    template: path.resolve(__dirname, '../src/templates/login.html'),
  },
]

function getEntry() {
  var entry = {}
  pages.forEach(function (item) {
    entry[item.name] = item.entry;
  })
  return entry
}

module.exports = {
  pages,
}