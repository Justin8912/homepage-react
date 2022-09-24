import WeatherEntry from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/components/weatherEntry.jsx';
var React = require('react');


var WeatherList = (props) => (
  <section className="col-1-3 weather">
    <h3>Weather</h3>
      <table>
        <tbody>
          <WeatherEntry/>
          <tr>
            <td colspan="5"><h4>Today's weather</h4></td>
          </tr>
          {props.weather.forecast.forecastday.map((time, idx) =>
            <WeatherEntry/>
          )}
        </tbody>
      </table>
  </section>
)

export default WeatherList;