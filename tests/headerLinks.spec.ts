import {test, expect} from '@playwright/test';
import testData from '../test-data/headerLinksData.json'
import { HeaderMenu } from '../page-objects/header';

test.beforeEach(async ({page}) => {
    await page.goto('/')
});

test.describe('Our solutions link', () => {

    test.beforeEach(async ({page}) => {
        const headerMenu = new HeaderMenu(page)
        const selector = page.getByRole('navigation', { name: 'I Need Knowledge Management' })
        await headerMenu.clickHoverLink(testData.headerLink.Our_solutions, selector)
    });

    test('Call center', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs( testData.hoverLink.Call_center, testData.breadcrumbTitle.Call_center, testData.pageTitle.Call_center)
    })

    test('Self Service', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Self_Service, testData.breadcrumbTitle.Self_Service, testData.pageTitle.Self_Service)
    })

    test('Onboarding & Training', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Onboarding_Training, testData.breadcrumbTitle.Onboarding_Training, testData.pageTitle.Onboarding_Training)
    })
    
    test('Field Service', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Field_Service, testData.breadcrumbTitle.Field_Service, testData.pageTitle.Field_Service)
    })
})

test.describe('Resources', () => {

    test.beforeEach(async ({page}) => {
        const headerMenu = new HeaderMenu(page)
        const selector = page.locator('[aria-labelledby="dropdown_menu-2"]')
        await headerMenu.clickHoverLink(testData.headerLink.Resources, selector)
    });

    test('Blog', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Blog, testData.breadcrumbTitle.Blog, testData.pageTitle.Resources)
    })

    test('Videos', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Videos, testData.breadcrumbTitle.Videos, testData.pageTitle.Resources)
    })

    test('News', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.News, testData.breadcrumbTitle.News, testData.pageTitle.Resources)
    })
    
    test('Guides', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs( testData.hoverLink.Guides, testData.breadcrumbTitle.Guides, testData.pageTitle.Resources)
    })

    test('Webinars', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Webinars, testData.breadcrumbTitle.Webinars, testData.pageTitle.Resources)
    })

    test('Reports', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPageBreadcrumbs(testData.hoverLink.Reports, testData.breadcrumbTitle.Reports, testData.pageTitle.Resources)
    })

    test('ROI Calculator', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPage(testData.hoverLink.ROI_Calculator, testData.breadcrumbTitle.ROI_Calculator, testData.pageTitle.ROI_Calculator)
    })
})

test.describe('About us', () => {

    test.beforeEach(async ({page}) => {
        const headerMenu = new HeaderMenu(page)
        const selector = page.locator('[aria-labelledby="dropdown_menu-4"]')
        await headerMenu.clickHoverLink(testData.headerLink.About_us, selector)
    });

    test('About us', async({page}) => {
        await page.getByRole('link').filter({hasText: testData.hoverLink.About_us}).click()
        const formTitle = await page.locator('.elementor-widget-container .elementor-icon-list-text').first().textContent()
        const pageTitle = await page.locator('.elementor-widget-heading h1').textContent()
        expect(formTitle).toEqual(testData.breadcrumbTitle.About_us)
        expect(pageTitle).toEqual(testData.pageTitle.About_us)
    })

    test('Careers', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPage(testData.hoverLink.Careers, testData.breadcrumbTitle.Careers, testData.pageTitle.Careers)
    })

    test('Lighthouse University', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPage(testData.hoverLink.Lighthouse_University, testData.breadcrumbTitle.Lighthouse_University, testData.pageTitle.Lighthouse_University)
    })
    
    test('Contact us', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.checkPage(testData.hoverLink.Contact_us, testData.breadcrumbTitle.Contact_us, testData.pageTitle.Contact_us)
    })
})

test.describe('Links without hovers', () => {

    test('Integrations redirection ', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.clickDirectLink(testData.headerLink.Integrations)
        await headerMenu.checkDirectLinkPage('[data-id="b429599"]', testData.breadcrumbTitle.Integrations, testData.pageTitle.Integrations)
    })

    test('Case Studies redirection ', async({page}) => {
        const headerMenu = new HeaderMenu(page)
        await headerMenu.clickDirectLink(testData.headerLink.Case_Studies)
        await headerMenu.checkDirectLinkPage('[data-id="24d8a031"]', testData.breadcrumbTitle.Case_Studies, testData.pageTitle.Case_Studies)
    })
})