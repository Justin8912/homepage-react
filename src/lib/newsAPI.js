import {newsAPI_KEY} from '../config/config.js';
var $ = require('jquery');

$.ajaxPrefilter(function (settings, _, jqXHR) {
  console.log(settings)
  jqXHR.setRequestHeader('Authorization', newsAPI_KEY);
});

var searchNews = (query, cb) => {
  $.ajax({
    url: 'https://newsapi.org/v2/everything?q=' + query,
    type: 'GET',
    data: {apiKey: newsAPI_KEY},
    contentType: 'text/plain',
    success: cb,
    error: function(error) {
      console.error('failed to get video', error);
    }
  });
};

export default searchNews;