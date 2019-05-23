var path = require('path');

var pages = [
  {
    name: 'home',
    entry: path.resolve(__dirname, '../src/entry/home.js'),
    template: path.resolve(__dirname, '../src/templates/template.html'),
  },
  {
    name: 'admin',
    entry: path.resolve(__dirname, '../src/entry/admin.js'),
    template: path.resolve(__dirname, '../src/templates/template.html'),
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