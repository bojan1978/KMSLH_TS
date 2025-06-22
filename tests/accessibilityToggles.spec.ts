import {test, expect} from '@playwright/test';
import { Toggle } from '../page-objects/toggle';

test.beforeEach(async ({page}) => {
    await page.goto('/')
    const toggle = new Toggle(page)
    await toggle.toggleAcess()
});

test.describe('Validate Accessibility Toggles', () => {

    test('Accessibility window opened', async({page}) => {
        await expect(page.locator('#acwp-toolbar-module')).toBeVisible()
    })

    test('Check toggle default state', async({page}) => {
        const toggle = new Toggle(page)
        await toggle.checkToggles()
    })

    test('Togle highlight links', async({page}) => {
        const toggle = new Toggle(page)
        const highlightSlider = page.locator('[data-name="underline"]')
        await highlightSlider.click()
        expect(await highlightSlider.isChecked()).toBeTruthy()

        await toggle.menuColors()
    })

})