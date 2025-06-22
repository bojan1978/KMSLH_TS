import {test, expect} from '@playwright/test'
import { BookDemo } from '../page-objects/bookDemo';

test.beforeEach(async ({page}) => {
    await page.goto('/')
    const bookDemo = new BookDemo(page)
    await bookDemo.buttonBookDemo()
    
});

test.describe('Book a Demo', () => {

    test('Check redirection', async({page}) => {
        expect(page.url()).toContain('/book-a-demo/')
        const pageTitle = await page.locator('.elementor-widget-heading h1').textContent()
        const formTitle = await page.locator('#top h3').textContent()

        expect(pageTitle).toEqual('Take your company knowledge to the next level.')
        
        await expect(page.locator('#top')).toBeVisible()
        expect(formTitle).toEqual('Fill out the form below:')
    })

    test('Enter values', async({page}) => {
        const bookDemo = new BookDemo(page)
        await bookDemo.inputAndAssertData()
    })

})