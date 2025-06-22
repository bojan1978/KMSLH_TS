import { Locator, Page, expect} from '@playwright/test'

export class HeaderMenu{

    readonly page: Page 
    constructor(page: Page) {
        this.page = page
    }

    async clickHoverLink(linkName: string, selector: Locator){
        await this.page.locator('.header_panel__nav-list').getByRole('link', {name: `${linkName}`}).click()
        await this.page.waitForTimeout(2000)
        await expect(selector).toBeVisible()
    }

    async clickDirectLink(selector: string){
        await this.page.locator('.header_panel__nav-list').getByRole('link', {name: `${selector}`}).click()
        await this.page.waitForTimeout(3000)
    }

    async checkPageBreadcrumbs(selector: string, breadcrumTitle: string, headTitle: string){
        await this.page.getByRole('link', {name: `${selector}`}).click()

        const breadcrum = await this.page.locator('#breadcrumbs').textContent()
        const title = await this.page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
    }

    async checkPage(selector: string, breadcrumTitle: string, headTitle: string){
        await this.page.getByRole('link', {name: `${selector}`}).click()

        const breadcrum = await this.page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const title = await this.page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
    }

    async checkDirectLinkPage(data_id: string, breadcrumTitle: string, headTitle: string){
        const breadcrum = await this.page.locator(`${data_id} .elementor-icon-list-text`).textContent()
        const title = await this.page.locator('.elementor-widget-heading h1').textContent()

        expect(breadcrum).toEqual(breadcrumTitle)
        expect(title).toEqual(headTitle)
    }
} 