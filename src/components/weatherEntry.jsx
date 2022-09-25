var React = require('react');

var WeatherEntry = (props) => (
  <tr>
    <td><img src={props.iconLink}/></td>
    <td>{props.time}</td>
    <td>{props.temp} &#186;F</td>
    <td>{props.chanceOfRain}</td>
  </tr>
)

export default WeatherEntry;