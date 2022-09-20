import NewsEntry from './newsEntry.jsx';
var React = require('react');

var NewsList = (props) => (
  <section className="col-2-3 news">
    <h3>News</h3>
    <div className = "news-searchbar center-news">
      <input type='text' placeholder='Search here...' className='news-query'></input><br/>
      <button>Update news topics</button>
    </div>
    {props.news.articles.map((article, idx) =>
      <NewsEntry key = {idx} id = {idx} article = {article}/>
    )}

    <div className = 'news-searchbar center-news'>
        <input type='text' placeholder ="Enter the number of news articles you'd like to see" className='news-quantity' onChange={props.onSearchChange}></input><br/>
        <button onClick={props.onClick}>Update number</button>
    </div>
  </section>
)

export default NewsList;