// import Banner from './banner.jsx';
import searchNews from '/Users/justinstendara/Documents/HackReactor/Personal Projects/homepage-react/homepage-react/src/lib/newsAPI.js';
import NewsList from './newsList.jsx';
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

  componentDidMount() {
    searchNews(this.state.newsQuery, (data) => {
      data.articles = data.articles.slice(0, this.state.desiredNewsArticles);
      console.log('newsData: ', data);
      this.setState({
        newsData: data
      })
      console.log(this.state.newsData.articles);
    })
  }

  onNewsClick(e) {
    console.log('event: ', e);
  }

  onSearchChange (e) {
    console.log('onSearchChange: ', e);
  }

  render() {
    return (
      <div id='main-body'>
        <section id='heading'>

        </section>

        <section className='row'>
          <div className="grid">
          <NewsList news={this.state.newsData} onClick={this.onNewsClick.bind(this)} onChange= {this.onSearchChange.bind(this)}/></div>

        </section>
      </div>
    )
  }
}

export default App;