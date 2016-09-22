import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Nav from './lib/Nav'
import Home from './lib/Home'
import NewArticle from './lib/NewArticle'
import Article from './lib/Article'
import EditArticle from './lib/EditArticle'

render((
  <Router history={ hashHistory }>
    <Route path="/nav" component={ Nav }>
      <Route path="/" component={ Home }/>
      <Route path="/new-article/:userID" component={ NewArticle }/>
      <Route path="/edit-article/:articleID" component={ EditArticle } />
      <Route path="/article/:articleID" component={ Article }/>
    </Route>
  </Router>
), document.getElementById('app'))
