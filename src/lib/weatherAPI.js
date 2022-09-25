import {weatherAPI_KEY} from '../config/config.js';
var $ = require('jquery');


$.ajaxPrefilter(function(settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', weatherAPI_KEY);
});

var searchWeather = (location, cb) => {
  $.ajax({
    url: 'http://api.weatherapi.com/v1/forecast.json?',
    type: 'GET',
    data: { key: weatherAPI_KEY, q: location, days: 1, aqi: 'yes', alerts: 'no'},
    contentType: 'application/json',
    success: cb,
    error: function(error) {
      console.error('failed to get video', error);
    }
  });
};

// Have not configured this yet.
export default searchWeather;