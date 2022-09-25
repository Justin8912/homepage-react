var React = require('react');

var WeatherEntry = (props) => (
  <tr>
    <td><img src={props.iconLink}/></td>
    <td>{props.time}</td>
    <td>{props.temp} &#186;F</td>
    <td>{props.feelsLike} &#186;F</td>
  </tr>
)

export default WeatherEntry;