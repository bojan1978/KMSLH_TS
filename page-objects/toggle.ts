import { Page, expect} from '@playwright/test'

export class Toggle{

    readonly page: Page 
    constructor(page) {
        this.page = page
    }

    async toggleAcess() {
        await this.page.locator('#acwp-toolbar-btn-wrap').getByRole('button').click()
        await this.page.waitForTimeout(1000)
    }

    async checkToggles(){
        let slider_list = ['[data-name="contrast"]', '[data-name="incfont"]', '[data-name="readable"]', '[data-name="underline"]']
            for(const slider of slider_list){
                expect(await this.page.locator(slider).isChecked()).toBeFalsy()
        }
    }


    async menuColors(){
        let menuLinks = ['Our Solutions', 'Integrations', 'Resources', 'Case Studies', 'About', 'Book a Demo']
            
        for(const menuLink of menuLinks){
            await expect(this.page.locator('.header_panel__menu').getByRole('link', {name: menuLink})).toHaveCSS('background-color', 'rgb(255, 233, 1)')
        }
    }

} 