
export class SamsungPageObjects {

    navigateToHomePage(){
        cy.visit('/')
    }

    navigateToDevicePage(){
        cy.visit('/smartphones/galaxy-m/galaxy-m33-5g-blue-128gb-storage-6gb-ram-sm-m336bzbpins/buy/')
        cy.get('.pd-buying-price__cta > .cta').should('be.visible')

    }

    clickAddToCart(){
        cy.get('.pd-buying-price__cta > .cta').click()
    }

    clickPayNow(){
        cy.get('.sticky-content > .order-p6-summary-price-details > .os-btn-holder > .btn-primary',{timeout:5000}).click()
      
    }

    clickContinueAsGuest(){
        cy.get('#b2C_Continue_Guest',{timeout:5000}).click({force: true})

    }

    getFirstNameField(){
        return cy.get('input[name="firstName"]')

    }

    getLastnameField(){
        return cy.get('input[data-vv-as="Last Name"]')

    }

    getAddressLine1Field(){
        return cy.get('input[data-vv-as="Address Line 1"]')

    }

    getPincodeField(){
        return cy.get('input[data-vv-as="Pincode"]')
    }
    
    getMobileNumberField(){
        return cy.get('input[data-vv-as="Mobile Number"]')

    }

    getEmailField(){
        return cy.get('input[data-vv-as="Email"]')

    }

    selectEmptyShippingField(){
        this.getFirstNameField().click()
        this.getLastnameField().click()
    }

    fillInvalidPincode(invalidPincod){
        this.getPincodeField().type(invalidPincod)
    }
    fillInvalidEmail(invalidEmail){
        this.getEmailField().type(invalidEmail)
    }

    fillValidFields(firstname,lastname,address1,pincode,validemail,phone){
        this.getFirstNameField().type(firstname)
        this.getLastnameField().type(lastname)
        this.getAddressLine1Field().type(address1)
        this.getPincodeField().type(pincode)
        this.getEmailField().type(validemail)
        this.getMobileNumberField().type(phone)
    }

    verifyRequiredFieldErrorMessageAppearing(shouldAppear){
        cy.get('div.input-error-msg').should(shouldAppear ? 'be.visible' : 'not.be.visible')
        //message is: This is a required field
    }

    verifyInvalidPinCodeErrorMessageAppearing(shouldAppear){
        cy.contains("Please enter a valid Pincode").should(shouldAppear ? 'be.visible' : 'not.be.visible')
    }

    verifyInvalidEmailErrorMessageAppearing(shouldAppear){
         cy.contains("The Email field format is invalid").should(shouldAppear ? 'be.visible' : 'not.be.visible')

    }


}