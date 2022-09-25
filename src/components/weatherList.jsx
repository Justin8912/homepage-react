import WeatherEntry from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/components/weatherEntry.jsx';
var React = require('react');


var WeatherList = (props) => (
  <section className="col-1-3 weather">
    <h3>Weather</h3>
      <table>
        <tbody>
          <WeatherEntry current={props.weather.current}/>
          <tr>
            <td colSpan="5"><h4>Today's weather</h4></td>
          </tr>
          <tr>
            <td>Weather</td>
            <td>Time</td>
            <td>Temp</td>
            <td>Chance of Rain</td>
          </tr>
          {props.weather.forecast.forecastday[0].hour.map((time, idx) =>
            <WeatherEntry key={idx} time = {time.time.slice(11)} temp={Math.round(time.temp_f)} iconLink={time.condition.icon} feelsLike={time.feelslike_f} chanceOfRain={time.chance_of_rain} uv={time.uv}/>
          )}
        </tbody>
      </table>
  </section>
)

export default WeatherList;