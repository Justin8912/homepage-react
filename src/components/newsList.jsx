import NewsEntry from './newsEntry.jsx';
var React = require('react');

var NewsList = (props) => (
  <section className="col-2-3 news">
    <h3>News</h3>
    {props.news.articles.map((article, idx) =>
      <NewsEntry key = {idx} id = {idx} article = {article}/>
    )}
  </section>
)

export default NewsList;