// import Banner from './banner.jsx';
import searchNews from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/lib/newsAPI.js';
import NewsList from './newsList.jsx';

import exampleWeatherData from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/exampleData/weatherAPIData.js'
import WeatherList from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/components/weatherList.jsx'
var React = require('react');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      newsData: {articles: []},
      newsQuery: 'AI',
      desiredNewsArticles: 5
    }
  }

  handleNewsSearch(data) {
    data.articles = data.articles.slice(0, this.state.desiredNewsArticles);
    this.setState({
      newsData: data
    })
  }
  componentDidMount() {
    searchNews(this.state.newsQuery, (data) => {
      this.handleNewsSearch(data);
    })
  }

  onNewsClick() {
    searchNews(this.state.newsQuery, (data) => {
      this.handleNewsSearch(data);
    })
  }

  onSearchChange (e) {
    console.log('onSearchChange: ', e.target.value);
    this.setState({
      newsQuery: e.target.value,
    })
  }

  render() {
    return (
      <div id='main-body'>
        <section id='heading'>

        </section>

        <section className='row'>
          <div className="grid"><NewsList news={this.state.newsData} onClick={this.onNewsClick.bind(this)} onChange={this.onSearchChange.bind(this)}/>
          <WeatherList weather={exampleWeatherData}/></div>

        </section>
      </div>
    )
  }
}

export default App;