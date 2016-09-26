import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Home from '../lib/Home'
import Simulant from 'simulant'


describe("Home", () => {
  it("should validate the whole credit card", () => {
    let homeRendered = TestUtils.renderIntoDocument(
      <Home />
    )
    homeRendered.setState({
      cardValidate: "creditCard__number creditCard--valid",
      dateValidate: "creditCard__date creditCard--valid",
      cvvValidate: "creditCard__cvv creditCard--valid",
      nameValidate: "creditCard__name creditCard--valid",
      creditCard: "creditCard"
    })

    let formEl = TestUtils.findRenderedDOMComponentWithTag(homeRendered, "div")
    expect(formEl.getAttribute('class')).toBe("creditCard"
    )
  })

  it("should not validate the whole credit card when creditcard nubmber isnt validated", () => {
    let homeRendered = TestUtils.renderIntoDocument(
      <Home />
    )
    homeRendered.setState({
      cardValidate: "creditCard__number",
      dateValidate: "creditCard__date creditCard--valid",
      cvvValidate: "creditCard__cvv creditCard--valid",
      nameValidate: "creditCard__name creditCard--valid",
      creditCard: "creditCard"
    })

    let formEl = TestUtils.findRenderedDOMComponentWithTag(homeRendered, "div")
    let numberEl = TestUtils.findRenderedDOMComponentWithClass(homeRendered, "creditCard__number")
    let validatorEl = homeRendered.creditCardValidator()
    Simulant.fire( numberEl, 'onKeyUp', {validatorEl})
    expect(formEl.getAttribute('class')).toBe("creditCard creditCard--incomplete"
    )
  })

  it("should not validate the whole credit card when creditcard date isnt validated", () => {
    let homeRendered = TestUtils.renderIntoDocument(
      <Home />
    )
    homeRendered.setState({
      cardValidate: "creditCard__number creditCard--valid",
      dateValidate: "creditCard__date",
      cvvValidate: "creditCard__cvv creditCard--valid",
      nameValidate: "creditCard__name creditCard--valid",
      creditCard: "creditCard"
    })

    let formEl = TestUtils.findRenderedDOMComponentWithTag(homeRendered, "div")
    let dateEl = TestUtils.findRenderedDOMComponentWithClass(homeRendered, "creditCard__date")
    let validatorEl = homeRendered.creditCardValidator()
    Simulant.fire( dateEl, 'onKeyUp', {validatorEl})
    expect(formEl.getAttribute('class')).toBe("creditCard creditCard--incomplete"
    )
  })

  it("should not validate the whole credit card when creditcard cvv isnt validated", () => {
    let homeRendered = TestUtils.renderIntoDocument(
      <Home />
    )
    homeRendered.setState({
      cardValidate: "creditCard__number creditCard--valid",
      dateValidate: "creditCard__date creditCard--valid",
      cvvValidate: "creditCard__cvv",
      nameValidate: "creditCard__name creditCard--valid",
      creditCard: "creditCard"
    })

    let formEl = TestUtils.findRenderedDOMComponentWithTag(homeRendered, "div")
    let cvvEl = TestUtils.findRenderedDOMComponentWithClass(homeRendered, "creditCard__cvv")
    let validatorEl = homeRendered.creditCardValidator()
    Simulant.fire( cvvEl, 'onKeyUp', {validatorEl})
    expect(formEl.getAttribute('class')).toBe("creditCard creditCard--incomplete"
    )
  })

  it("should not validate the whole credit card when creditcard name isnt validated", () => {
    let homeRendered = TestUtils.renderIntoDocument(
      <Home />
    )
    homeRendered.setState({
      cardValidate: "creditCard__number creditCard--valid",
      dateValidate: "creditCard__date creditCard--valid",
      cvvValidate: "creditCard__cvv creditCard--valid",
      nameValidate: "creditCard__name",
      creditCard: "creditCard"
    })

    let formEl = TestUtils.findRenderedDOMComponentWithTag(homeRendered, "div")
    let nameEl = TestUtils.findRenderedDOMComponentWithClass(homeRendered, "creditCard__name")
    let validatorEl = homeRendered.creditCardValidator()
    Simulant.fire( nameEl, 'onKeyUp', {validatorEl})
    expect(formEl.getAttribute('class')).toBe("creditCard creditCard--incomplete"
    )
  })
})
