import { Page, expect } from '@playwright/test'
import testData from '../test-data/bookDemoData.json'
import {getDemoData} from '../test-data/bookDemoData'

export class BookDemo{

    readonly page: Page 
    constructor(page: Page) {
        this.page = page
    }

    async buttonBookDemo() {
        await this.page.locator('.header_panel__menu').getByRole('link', {name: 'Book a Demo'}).click()
        await this.page.waitForTimeout(3000)
    }

    async inputAndAssertData(){
            const listLength = getDemoData().length
            for(let i=0; i<listLength ; i++){
                await this.page.getByPlaceholder(testData.data[i].placeholder).fill(testData.data[i].text)
                expect(await this.page.getByPlaceholder(testData.data[i].placeholder).inputValue()).toEqual(testData.data[i].text)
            }
            await this.page.locator('[name="country"]').click()
            await this.page.getByLabel('Country/Region*').selectOption('Iceland')
            await this.page.locator('[name="country"]').click()

            expect(await this.page.locator('[name="country"]').inputValue()).toEqual('Iceland')
}

} 