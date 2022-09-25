import WeatherEntry from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/components/weatherEntry.jsx';
import $ from 'jquery';
var React = require('react');



var WeatherList = (props) => {
  var divStyle = {
    'maxHeight': $('.col-2-3').height()
  }

  console.log(divStyle.maxHeight);
  console.log($('.col-2-3').height())
  return (
    <section className="col-1-3 weather" style={divStyle}>
      <h3>Weather</h3>
        <table>
          <tbody>
            <WeatherEntry time={props.weather.current.last_updated.slice(11)}
            iconLink={props.weather.current.condition.icon}
            temp = {Math.round(props.weather.current.temp_f)}
            feelsLike = {Math.round(props.weather.current.feelslike_f)}
            />
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
              <WeatherEntry key={idx} time = {time.time.slice(11)} temp={Math.round(time.temp_f)} iconLink={time.condition.icon} feelsLike={Math.round(time.feelslike_f)} uv={time.uv}/>
            )}
          </tbody>
        </table>
    </section>
  )
}

export default WeatherList;