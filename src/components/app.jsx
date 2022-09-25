// import Banner from './banner.jsx';
import searchNews from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/lib/newsAPI.js';
import NewsList from './newsList.jsx';

import exampleWeatherData from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/exampleData/weatherAPIData.js'
import WeatherList from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/components/weatherList.jsx'
import searchWeather from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/lib/weatherAPI.js'

import Banner from './banner.jsx';
var React = require('react');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherLocation: 'Austin',
      weatherData: undefined,
      newsData: {articles: []},
      newsQuery: 'AI',
      desiredNewsArticles: 2
    }
  }

  // Event handlers
  handleNewsSearch(data) {
    data.articles = data.articles.slice(0, this.state.desiredNewsArticles);
    this.setState({
      newsData: data
    })
  }

  handleWeatherSearch(data) {
    this.setState({
      weatherData: data,
    })
  }
  componentDidMount() {
    searchNews(this.state.newsQuery, (data) => {
      this.handleNewsSearch(data);
    })

    searchWeather(this.state.weatherLocation, (data) => {
      this.handleWeatherSearch(data);
    })
  }

  onNewsClick() {
    searchNews(this.state.newsQuery, (data) => {
      this.handleNewsSearch(data);
    })
  }

  onSearchChange (e) {
    this.setState({
      newsQuery: e.target.value,
    })
  }

  onWeatherClick(e) {
    searchWeather(this.state.weatherLocation, (data) => {
      this.handleWeatherSearch(data);
    })
  }
  weatherLocation (e) {
    this.setState({
      weatherLocation: e.target.value,
    })
  }


  render() {
    return (
      <div id='main-body'>
        <Banner/>

        <section className='row'>
          <div className="grid"><NewsList news={this.state.newsData} onClick={this.onNewsClick.bind(this)} onChange={this.onSearchChange.bind(this)}/>
          {this.state.weatherData !== undefined &&
            <WeatherList weather={this.state.weatherData} weatherLocation={this.weatherLocation.bind(this)} weatherClick={this.onWeatherClick.bind(this)}/>
          }
          </div>

        </section>
      </div>
    )
  }
}

export default App;