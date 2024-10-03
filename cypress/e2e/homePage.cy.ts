import {homePage} from "../../pageObject";
import {navBarValue, promoSectionValue} from "../../utilities/data";



describe('HOMEPAGE', ()=> {
    // const homePage = new HomePage()// DUPLICATED code
    it('Verify navbar menu', ()=> {
        homePage.open()
        homePage.verifyNavbarValue( navBarValue)
        homePage.verifyPromoSection(promoSectionValue)
    })
})
