import {weatherAPI_KEY} from '../config/config.js';
var $ = require('jquery');


$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', weatherAPI_KEY);
});

var searchWeather = (query, cb) => {
  $.ajax({
    url: '',
    type: 'GET',
    data: { q: query },
    contentType: 'application/json',
    success: cb,
    error: function(error) {
      console.error('failed to get video', error);
    }
  });
};

// Have not configured this yet.
// export default searchWeather;