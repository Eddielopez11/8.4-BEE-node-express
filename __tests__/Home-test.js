import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Home from '../lib/Home'


describe("Home", () => {
  it("should have blogs", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Home/>
    )
    // fake state for blogPosts
    mainRendered.setState({
      blogPosts: [
         {
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
      ]
    })
    // I want this to find an article
    let articleEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered,"article__previews")
    expect(articleEl).toBeDefined()
  })

  it("sould link to specific article", () => {
    let mainRendered = TestUtils.renderIntoDocument(
      <Home/>
    )
    mainRendered.setState({
      blogPosts: [
         {
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
      ]
    })

    let articleEl = TestUtils.findRenderedDOMComponentWithClass(mainRendered, "article__link")
    expect(articleEl.getAttribute("href")).toBe("#/article/1738")
  })

})
