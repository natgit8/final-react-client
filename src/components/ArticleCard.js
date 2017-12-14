import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ArticleCard extends Component {


  generateArticleCards = () => {

    return this.props.articles.map((article) => {
      // debugger;
        return (
          <Card className="articleCard">
          <a href={article.url} target="_blank" class="ui medium image">

            <img src={ article.multimedia[3] }/>
          </a>

            <Card.Content>
            <Card.Header>
              <div className="title">
                <h3>{article.title}</h3>
              </div>
            </Card.Header>
            <Card.Meta>
              <div>Author: {article.byline}</div>
            </Card.Meta>
            <Card.Description>
            {article.abstract}
            </Card.Description>
            </Card.Content>
          </Card>

        )
    })
  }
  render() {

    return (
      <Card.Group itemsPerRow={3} size='medium'>
        {this.generateArticleCards()}
      </Card.Group>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    articles: state.articlesReducer.articles
  }
}

export default connect(mapStateToProps)(ArticleCard)
