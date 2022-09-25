var React = require('react');
var Banner = () => (
  <section id='heading'>
    <div id="banner"></div>
    <nav>
      <ul>
        <li><a className="icon"><img src="./images/news-icon.png"/>News</a></li>
        <li><a className="icon"><img src="./images/weather-icon.png"/>Weather</a></li>
        <li><a className="icon" href="https://www.reddit.com"><img src="./images/reddit-icon.png"/> Reddit</a></li>
      </ul>
    </nav>
  </section>
)


export default Banner;