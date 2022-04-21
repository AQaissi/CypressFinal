//This sentence is to allow auto completion from cypress library,node package
/// <reference types="cypress"/> 
import {SamsungPageObjects} from "../support/pages/SamsungPageObjects"

const samsung = new SamsungPageObjects();

describe("Purchase a device from an online retailer" , () => {
 
    it("Open Samsung home page", () => {
        samsung.navigateToHomePage()
    })

    it("Navigate to the device page", () => {
        samsung.navigateToDevicePage()

    })

    it("Click ADD TO CART button", () => {
        samsung.clickAddToCart()
    })

    it("Click Pay Now button", () => {
        samsung.clickPayNow()
    })

    it("Continue as guest" , () => {
        samsung.clickContinueAsGuest()
    })

    it("Error message displaying when selecting a requires feild without filling", () => {
        samsung.selectEmptyShippingField()
        samsung.verifyRequiredFieldErrorMessageAppearing(true)
    })

    it("Error message displaying when fill an invalid pincode", ()=> {
        cy.fixture('userInfo').then(function (info) {
            samsung.fillInvalidPincode(info.invalidPincode)
            samsung.verifyInvalidPinCodeErrorMessageAppearing(true)
    
        })

    })

    it("Error message displaying when fill an invalid email format", ()=> {
        cy.fixture('userInfo').then( (info) => {
            samsung.fillInvalidEmail(info.invalidEmail)
            samsung.verifyInvalidEmailErrorMessageAppearing(true)
    
        })

    })

    it("Fill all required shipping info and verify error message disappearing", () => {
        cy.fixture('userInfo').then((info) => {
            samsung.fillValidFields(info.firstname,info.lastname,info.AddressLine1,info.validPin,info.validEmail,info.mobile)
            samsung.verifyRequiredFieldErrorMessageAppearing(false)

        })
    })



})

