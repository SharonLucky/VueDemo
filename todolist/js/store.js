/**
 * Created by gongrui on 17/1/13.
 */
var STORAGE_KEY = 'todos-vuejs';

var todoStorage = {
  fetch: function () {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};