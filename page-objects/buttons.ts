import { Locator, Page, expect} from '@playwright/test'

export class HomePageButtons{

    readonly page: Page 
    constructor(page) {
        this.page = page
    }

    async scrollToElement(locator: string){
        const elementPosition = this.page.locator(locator)
        await elementPosition.click({force: true})
    }

    async checkParagraphSectionText(locator: string, tabText: string){
        await this.page.getByRole('tab', {name: `${locator}`}).click()
        await expect (this.page.getByLabel(`${locator}`).getByRole('paragraph')).toContainText(`${tabText}`)
    }

    async checkSectionText(locator: string, tabText: string){
        await this.page.getByRole('tab', {name: `${locator}`}).click()
        await expect (this.page.getByLabel(`${locator}`)).toContainText(`${tabText}`)
    }
    async checkRadio(radioLocator: string, confirmLocator: string){
        await this.page.getByRole('tab', {name: `${radioLocator}`}).click()
        await this.page.waitForTimeout(1000)
        expect(await this.page.locator(`${confirmLocator}`).getAttribute('aria-selected')).toBeTruthy()
    }

    async checkIntegrationsTab(locator: string, confirmLocator: string, tabText: string){
        await this.page.getByRole('tab', {name: `${locator}`}).click()
        expect(await this.page.locator(`${confirmLocator}`).getByRole('paragraph').textContent()).toEqual(`${tabText}`)
    }

    async checkRedirections(tabName: string, buttonName: string, redirectionLink: string){
        await this.page.getByRole('tab', {name: `${tabName}`}).click()
        await this.page.getByRole('link', {name: `${buttonName}`}).click()
        expect(this.page.url()).toContain(`${redirectionLink}`)
    }

    async checkDemoPage(){
        const breadcrum = await this.page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const title = await this.page.locator('.elementor-widget-heading h1').textContent()
        expect(breadcrum).toEqual("Book a Demo")
        expect(title).toEqual('Take your company knowledge to the next level.')
        await expect(this.page.locator('#top')).toBeVisible()
    }
}
