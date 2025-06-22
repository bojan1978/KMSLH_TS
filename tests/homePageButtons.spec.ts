import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
import { HeaderMenu } from '../page-objects/header';
import { HomePageButtons } from '../page-objects/buttons';

import buttonData from '../test-data/buttons.json'
import headerData from '../test-data/headerLinksData.json'
// const buttonsPage = require('../page-objects/buttons')
// const headerLink = require('../page-objects/headers')
// const buttonData = require('../test-data/buttons.json')
// const headerData = require('../test-data/headerLinksData.json')

test.beforeEach(async ({page}) => {
    await page.goto('/')
});

test.describe('Check tab buttons and radios', () => {

    test('Management tabs', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Management_tab)

        await buttonsPage.checkParagraphSectionText(buttonData.tabTitle.Self_Service, buttonData.pageTitle.Self_Service)
        await buttonsPage.checkSectionText(buttonData.tabTitle.Onboarding_Training, buttonData.pageTitle.Onboarding_Training)
        await buttonsPage.checkSectionText(buttonData.tabTitle.Field_Service, buttonData.pageTitle.Field_Service)
        await buttonsPage.checkParagraphSectionText(buttonData.tabTitle.Call_Center, buttonData.pageTitle.Call_center)
    })

    test('Data section', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Data_section_tab)

        await buttonsPage.checkRadio(buttonData.tabTitle.Radio_2, buttonData.scrollLocator.Radio_2)
        await buttonsPage.checkRadio(buttonData.tabTitle.Radio_3, buttonData.scrollLocator.Radio_3)
        await buttonsPage.checkRadio(buttonData.tabTitle.Radio_1, buttonData.scrollLocator.Radio_1)
    })

    test('3rd party tabs', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Integrations_tab)

        await buttonsPage.checkIntegrationsTab(buttonData.tabTitle.Azure, buttonData.scrollLocator.Azure, buttonData.pageTitle.Azure)
        await buttonsPage.checkIntegrationsTab(buttonData.tabTitle.Salesforce, buttonData.scrollLocator.Salesforce, buttonData.pageTitle.Salesforce)
        await buttonsPage.checkIntegrationsTab(buttonData.tabTitle.Genesys, buttonData.scrollLocator.Genesys, buttonData.pageTitle.Genesys)
        await buttonsPage.checkIntegrationsTab(buttonData.tabTitle.AWS_Integration, buttonData.scrollLocator.AWS_Integration, buttonData.pageTitle.AWS_Integration)
    })
})

test.describe('Button functionality', () => {

    test('Knowledge section Learn More button', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        const headerLink = new HeaderMenu(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Knowledge_section)

        await headerLink.checkPageBreadcrumbs(buttonData.buttonTitle.Learn_more, headerData.breadcrumbTitle.Call_center, headerData.pageTitle.Call_center)
    })

    test('Knowledge section Book a Demo button', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Knowledge_section)

        await page.locator('#e-n-tab-content-1806174081').getByRole('link', {name: 'Book a demo'}).click()
        await page.waitForTimeout(1000)

        await buttonsPage.checkDemoPage()
    })

    test('Integrations button', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        const headerLink = new HeaderMenu(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Integrations_tab)
        
        await page.getByRole('link', {name: 'View all Integrations'}).click()
        await headerLink.checkDirectLinkPage(buttonData.scrollLocator.Integration, headerData.breadcrumbTitle.Integrations, headerData.pageTitle.Integrations)
    })
    
    test('Tailored demo button', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Tailored_demo_button)

        await page.getByRole('link', {name: 'Get a tailored demo today'}).click()
        await page.waitForTimeout(1000)

        await buttonsPage.checkDemoPage()
    })
})

test.describe('Redirection to external links', () => {

    test.beforeEach(async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.scrollToElement(buttonData.scrollDataID.Integrations_tab)
    })

    test('Azure OpenAI Integration', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.checkRedirections(buttonData.tabTitle.Azure, buttonData.buttonTitle.Azure, buttonData.redirectionLinks.Azure)
    })

    test('Salesforce Integration', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.checkRedirections(buttonData.tabTitle.Salesforce, buttonData.buttonTitle.Salesforce, buttonData.redirectionLinks.Salesforce)
    })

    test('Genesys Integration', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.checkRedirections(buttonData.tabTitle.Genesys, buttonData.buttonTitle.Genesys, buttonData.redirectionLinks.Genesys)
    })

    test('AWS Integration', async({page}) => {
        const buttonsPage = new HomePageButtons(page)
        await buttonsPage.checkRedirections(buttonData.tabTitle.AWS_Integration, buttonData.buttonTitle.AWS_Integration, buttonData.redirectionLinks.AWS_Integration)
    })
    
})