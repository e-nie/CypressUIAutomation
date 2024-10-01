import {homePage} from "../../pageObject";


describe('HOMEPAGE', ()=> {
    // const homePage = new HomePage()// DUPLICATED code
    it('Verify navbar menu', ()=> {
        homePage.open()
        homePage.verifyNavbarValue()
    })
})
