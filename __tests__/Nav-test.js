import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Nav from '../lib/Nav'
jest.mock("../node_modules/react-google-login")



describe("Nav", () => {
  it("should have a logo", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let logoEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkLogo")
    expect(logoEl).toBeDefined()
  })

  it("logo should route to home", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let logoEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__logoLink")
    expect(logoEl.getAttribute("href")).toBe("#/")
  })

  it("should have an about us link", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let aboutUsEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkAboutUs nav__link")
  })

  it("about us should link to about us in footer", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let a = TestUtils.findRenderedDOMComponentWithClass(navRendered, "nav__linkAboutUs nav__link")
    expect(a.getAttribute("href")).toEqual("#aboutUs")
  })

  it("should have a footer", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let footerEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "footer")
    expect(footerEl).toBeDefined()
  })

  it("should have an about us in the footer", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let aboutEl = TestUtils.findRenderedDOMComponentWithClass(navRendered,"footer__aboutUs" )
    expect(aboutEl).toBeDefined()
  })

  it("should have a create link in the footer", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let createEl = TestUtils.findRenderedDOMComponentWithClass(navRendered,"footer__linkCreate" )
    expect(createEl).toBeDefined()
  })

  it("create link should link to who is signed in", () => {
    let navRendered = TestUtils.renderIntoDocument(
    <Nav/>
    )
    navRendered.setState({
      currentUserID: "123123"
    })
    let createEl = TestUtils.findRenderedDOMComponentWithClass(navRendered, "footer__linkCreate")
    expect(createEl.getAttribute("href")).toEqual("#/new-article/123123")
  })

  it("should have a log out link in the footer", () => {
    let navRendered = TestUtils.renderIntoDocument(
      <Nav/>
    )
    let logoutEl = TestUtils.findRenderedDOMComponentWithClass(navRendered,"footer__signOut" )
    expect(logoutEl).toBeDefined()
  })
})
