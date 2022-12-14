var React = require('react');

var NewsEntry = (props) => (
  <div className='article'>
    <a href = {props.article.url}>
      <img src = {props.article.urlToImage} alt='Article Cover art'/>
      <h4 className='news-article-title'>{props.article.title}</h4>
      <p id='author'>{props.article.author}</p>
    </a>
    <p className='news-article'>{props.article.description}</p>
  </div>
)

export default NewsEntry;