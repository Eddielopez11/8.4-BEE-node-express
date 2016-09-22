import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Article from '../lib/Article'

describe("Article", () => {
  it("should have article post", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )

    let articleEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "articleContainer")
    expect(articleEl).toBeDefined()
  })

  it("should have a title", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )
    // fake state for blogPost
    articleRendered.setState({
      blogData: {
        _id: "1738",
        author: "Fetty",
        timeStamp: "2016.09.16",
        content: "Lorem",
        title: "moms spaghetti",
        user_info: {
          user_id: "679",
          user_name: "remys boys",
          user_imgSrc: "remyboys.jpeg"
        }
      }
    })

    let titleEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "article__contentTitle")
    expect(titleEl.textContent).toBe(articleRendered.state.blogData.title)
  })

  it("should have content", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )
    // fake state for blogPost
    articleRendered.setState({
      blogData: {
        _id: "1738",
        author: "Fetty",
        timeStamp: "2016.09.16",
        content: "Lorem",
        title: "moms spaghetti",
        user_info: {
          user_id: "679",
          user_name: "remys boys",
          user_imgSrc: "remyboys.jpeg"
        }
      }
    })

    let contentEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "article__content")
    expect(contentEl.textContent).toBe(articleRendered.state.blogData.content)
  })

  it("should have time stamp", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )
    // fake state for blogPost
    articleRendered.setState({
      blogData: {
        _id: "1738",
        author: "Fetty",
        timeStamp: "2016.09.16",
        content: "Lorem",
        title: "moms spaghetti",
        user_info: {
          user_id: "679",
          user_name: "remys boys",
          user_imgSrc: "remyboys.jpeg"
        }
      }
    })

    let dateEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "article__timestamp")
    expect(dateEl.textContent).toBe(articleRendered.state.blogData.timeStamp)
  })

  it("should have user name", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )
    // fake state for blogPost
    articleRendered.setState({
      blogData: {
        _id: "1738",
        author: "Fetty",
        timeStamp: "2016.09.16",
        content: "Lorem",
        title: "moms spaghetti",
        user_info: {
          user_id: "679",
          user_name: "remys boys",
          user_imgSrc: "remyboys.jpeg"
        }
      }
    })

    let authorEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "article__author")
    expect(authorEl.textContent).toBe(articleRendered.state.blogData.user_info.user_name)
  })

  it("should have profile picture", () => {
    let articleRendered = TestUtils.renderIntoDocument(
      <Article params={"articleID: 123"}/>
    )
    // fake state for blogPost
    articleRendered.setState({
      blogData: {
        _id: "1738",
        author: "Fetty",
        timeStamp: "2016.09.16",
        content: "Lorem",
        title: "moms spaghetti",
        user_info: {
          user_id: "679",
          user_name: "remys boys",
          user_imgSrc: "remyboys.jpeg"
        }
      }
    })

    let pictureEl = TestUtils.findRenderedDOMComponentWithClass(articleRendered, "article__authorHeadshot")
    expect(pictureEl.getAttribute("src")).toEqual(articleRendered.state.blogData.user_info.user_imgSrc)
  })
})
