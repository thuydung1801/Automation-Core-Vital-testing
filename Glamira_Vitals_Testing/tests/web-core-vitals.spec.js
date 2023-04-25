import { expect, test } from "@playwright/test";
import { playAudit } from "playwright-lighthouse";

const urls = [
    // "https://int.glamira.com/",
    // "https://www.glamira.ae/",
    // "https://www.glamira.africa/",
    // "https://www.glamira.africa/fr/",
    // "https://www.glamira.africa/pt/",
    // "https://www.glamira.at/",
    // "https://www.glamira.az/",
    // "https://www.glamira.az/en/",
    // "https://www.glamira.be/",
    // "https://www.glamira.be/fr/",
    // "https://www.glamira.bg/",
    // "https://www.glamira.bz/",
    // "https://www.glamira.ca/",
    // "https://www.glamira.ch/",
    // "https://www.glamira.ch/fr/",
    // "https://www.glamira.ch/it/",
    // "https://www.glamira.cl/",
    // "https://www.glamira.cn/",
    // "https://www.glamira.co.cr/",
    // "https://www.glamira.co.id/",
    // "https://www.glamira.co.id/en/",
    // "https://www.glamira.co.nz/",
    // "https://www.glamira.co.th/",
    // "https://www.glamira.co.uk/",
    // "https://www.glamira.co.za/",
    // "https://www.glamira.com.ar/",
    // "https://www.glamira.com.au/",
    // "https://www.glamira.com.bh/",
    // "https://www.glamira.com.bo/",
    // "https://www.glamira.com.br/",
    // "https://www.glamira.com.co/",
    // "https://www.glamira.com.do/",
    // "https://www.glamira.com.ec/",
    // "https://www.glamira.com.gt/",
    // "https://www.glamira.com.kw/",
    // "https://www.glamira.com.mt/",
    // "https://www.glamira.com.mx/",
    // "https://www.glamira.com.my/",
    // "https://www.glamira.com.my/my/",
    // "https://www.glamira.com.pa/",
    // "https://www.glamira.com.pe/",
    // "https://www.glamira.com.ph/",
    // "https://www.glamira.com.pr/",
    // "https://www.glamira.com.py/",
    // "https://www.glamira.com.sv/",
    // "https://www.glamira.com.tr/",
    // "https://www.glamira.com.tw/",
    // "https://www.glamira.com.tw/en/",
    // "https://www.glamira.com.uy/",
    // "https://www.glamira.com.ve/",
    // "https://www.glamira.com/",
    // "https://www.glamira.com/es/",
    // "https://www.glamira.cz/",
    // "https://www.glamira.de/",
    // "https://www.glamira.dk/",
    // "https://www.glamira.ee/",
    // "https://www.glamira.es/",
    // "https://www.glamira.fi/",
    // "https://www.glamira.fr/",
    // "https://www.glamira.gf/",
    // "https://www.glamira.gr/",
    // "https://www.glamira.gy/",
    // "https://www.glamira.hk/",
    // "https://www.glamira.hk/cn/",
    // "https://www.glamira.hk/en/",
    // "https://www.glamira.hn/",
    // "https://www.glamira.hr/",
    // "https://www.glamira.hu/",
    // "https://www.glamira.ie/",
    // "https://www.glamira.in/",
    // "https://www.glamira.is/",
    // "https://www.glamira.it/",
    // "https://www.glamira.jp/",
    // "https://www.glamira.kr/",
    // "https://www.glamira.lt/",
    // "https://www.glamira.lv/",
    // "https://www.glamira.md/",
    // "https://www.glamira.nl/",
    // "https://www.glamira.no/",
    // "https://www.glamira.pl/",
    // "https://www.glamira.pt/",
    // "https://www.glamira.ro/",
    // "https://www.glamira.se/",
    // "https://www.glamira.sg/",
    // "https://www.glamira.sg/cn/",
    // "https://www.glamira.si/",
    // "https://www.glamira.sk/",
    // "https://www.glamira.sr/",
    // "https://www.glamira.vn/",
    // "https://www.ring-paare.de/",
    "https://dev5.glamira.com/glgb",
    //"https://dev3.glamira.com/glgb/"
];

const stores = [
    // "int",
    // "ae",
    // "africa",
    // "africa-fr",
    // "africa-pt",
    // "at",
    // "az",
    // "az-en",
    // "be",
    // "be-fr",
    // "bg",
    // "bz",
    // "ca",
    // "ch",
    // "fr",
    // "ch-it",
    // "cl",
    // "cn",
    // "cr",
    // "id",
    // "id-en",
    // "nz",
    // "th",
    // "uk",
    // "za",
    // "ar",
    // "au",
    // "bh",
    // "bo",
    // "br",
    // "co",
    // "do",
    // "ec",
    // "gt",
    // "kw",
    // "mt",
    // "mx",
    // "my",
    // "my-my",
    // "pa",
    // "pe",
    // "ph",
    // "pr",
    // "py",
    // "sv",
    // "tr",
    // "tw",
    // "tw-en",
    // "uy",
    // "ve",
    // "glamira.com",
    // "es",
    // "cz",
    // "de",
    // "dk",
    // "ee",
    // "es",
    // "fi",
    // "fr",
    // "gf",
    // "gr",
    // "gy",
    // "hk",
    // "hk-cn",
    // "hk-en",
    // "hn",
    // "hr",
    // "hu",
    // "ie",
    // "in",
    // "is",
    // "it",
    // "jp",
    // "kr",
    // "lt",
    // "lv",
    // "md",
    // "nl",
    // "no",
    // "pl",
    // "pt",
    // "ro",
    // "se",
    // "sg",
    // "cn",
    // "si",
    // "sk",
    // "sr",
    // "vn",
    // "ring-paare",
    "stage"
]




//test.use({headless: true});
//home page
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('homepage: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(url);

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file);


            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports: {
                    formats: {
                        html: true,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/homepage",

                },
            });


            await page.close();
            await context.close();
            await browser.close();

        });

    });
}

//sign in
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('signin: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto(url);
            await page.waitForTimeout(5000)
            await page.evaluate(() => window.scrollTo(0, 900))
            await page.waitForTimeout(5000)
            const language = page.locator(
                "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
            )
            if (await language.isVisible()) {
                await expect(language).toBeVisible()
                await language.click()
            }
            const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
            if (await cookies.isVisible()) {
                await cookies.click()
            }
            await page.waitForTimeout(5000);
            await page.locator(
                "div.header-part-right-logo > ul > li.authorization-link.login > a"
            ).click();
            // await page.locator("div.mobi-menu > span").click();
            // await page.waitForTimeout(5000);
            // await page.locator("#mm-1 > ul > li > a > span").click();
            await page.waitForTimeout(2000);
            await page.locator("#login-email").fill("linh@onlinebizsoft.com");
            await page.locator("#login-password").fill("Linh@123");
            await page.locator("#customer_form_login_form_ajax > form > div.actions-toolbar > button").click();
            await page.waitForTimeout(5000);
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file);


            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports: {
                    formats: {
                        html: true,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/signin",

                },
            });


            await page.close();
            await context.close();
            await browser.close();

        });

    });
}


//product page
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('product page: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/glamira-diamonds-ring-stella-skug100490.html?alloy=white-375&stone1=diamond-Brillant');
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/productpage"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//landing
for (let a = 0; a < 2; a++) {
    urls.forEach((url, index) => {
        test('jewelery: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + "/jewelry/");
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/jewelry"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })
    });
}

//product listing page 
for (let a = 0; a < 2; a++) {
    urls.forEach((url, index) => {
        test('listing page: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + "/wedding-rings/");
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/listingpage"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })
    });
}




//checkout cart
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('checkout cart: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant');

            await page.evaluate(() => window.scrollTo(0, 900))
            await page.waitForTimeout(5000)
            const language = page.locator(
                "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
            )
            if (await language.isVisible()) {
                await expect(language).toBeVisible()
                await language.click()
            }
            const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
            await cookies.click()
            await page.waitForTimeout(5000)

            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.waitForURL(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=ruby');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page
                .locator(
                    "a.action.showcart"
                )
                .click()
            await page.waitForTimeout(3000);
            await page
                .locator(
                    "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
                )
                .click()
            await page.waitForTimeout(10000);
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/checkout-cart"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//checkout not login
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('checkout not login: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant');

            await page.evaluate(() => window.scrollTo(0, 900))
            await page.waitForTimeout(5000)
            const language = page.locator(
                "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
            )
            if (await language.isVisible()) {
                await expect(language).toBeVisible()
                await language.click()
            }
            const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
            await cookies.click()
            await page.waitForTimeout(5000)

            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.waitForURL(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=ruby');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page
                .locator(
                    "a.action.showcart"
                )
                .click()
            await page.waitForTimeout(3000);
            await page
                .locator(
                    "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
                )
                .click()
            await page.waitForTimeout(10000);

            const btnCheckout = page.locator("#cart-totals > div > table > tbody > tr.totals.sub > th");
            if (await btnCheckout.isVisible()) {
                await expect(btnCheckout).toBeVisible()
                await page.locator(
                    "#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li > button"
                ).click()
            }
            await page.waitForURL(url + "/checkout/#login-address");
            await page.waitForTimeout(3000);

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/checkout-notlogin"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//checkout login
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('checkout login: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=diamond-Brillant');

            await page.evaluate(() => window.scrollTo(0, 900))
            await page.waitForTimeout(5000)
            const language = page.locator(
                "#geoip-detect > div.geoip-detect-right > div > div.geoip-wrapper-content > a.btn-stay-here.geoip-close"
            )
            if (await language.isVisible()) {
                await expect(language).toBeVisible()
                await language.click()
            }
            const cookies = page.locator('#html-body > aside > div > div > div > button.amgdprcookie-button.-allow.-save')
            await cookies.click()
            await page.waitForTimeout(5000)

            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.waitForURL(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=blackdiamond');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page.goto(url + '/glamira-bracelet-tanel.html?alloy=white_red-375&stone1=ruby');
            await page.evaluate(() => window.scrollTo(0, 300));
            await page.locator("#product-addtocart-button").click();
            await page.waitForTimeout(1000);

            await page
                .locator(
                    "a.action.showcart"
                )
                .click()
            await page.waitForTimeout(3000);
            await page
                .locator(
                    "#html-body > div.modals-wrapper > aside.modal-slide.minicart.modal-sm._inner-scroll._show > div > div div > div.block-content > div.block-footer > div.actions > div.primary > a"
                )
                .click()
            await page.waitForTimeout(10000);

            const btnCheckout = page.locator("#cart-totals > div > table > tbody > tr.totals.sub > th");
            if (await btnCheckout.isVisible()) {
                await expect(btnCheckout).toBeVisible()
                await page.locator(
                    "#maincontent > div.columns > div > div.cart-container > div.cart-summary > ul > li > button"
                ).click()
            }
            //await page.waitForURL(url + "/checkout/#login-address");
            await page.waitForTimeout(5000);
            const username = page.locator("#checkout-login-email")
            await expect(username).toBeVisible()
            await username.fill("linh+1@onlinebizsoft.com")
            await page.locator("#checkout-login-password").fill("Linh@123")
            await page
                .locator(
                    "#form-login > fieldset > div.actions-toolbar > div.primary > button"
                )
                .click()

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/checkout-login"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//return
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('return not login: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/return/');
            await page.waitForTimeout(5000);

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/return-notlogin"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
} 

//return login
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('return  login: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url);
            // await page.waitForTimeout(5000);   
            await page.waitForTimeout(5000);
            await page.locator(
                "div.header-part-right-logo > ul > li.authorization-link.login > a"
            ).click();
            // await page.locator("div.mobi-menu > span").click();
            // await page.waitForTimeout(5000);
            // await page.locator("#mm-1 > ul > li > a > span").click();
            await page.waitForTimeout(2000);
            await page.locator("#login-email").fill("linh@onlinebizsoft.com");
            await page.locator("#login-password").fill("Linh@123");
            await page.locator("#customer_form_login_form_ajax > form > div.actions-toolbar > button").click();
            await page.waitForTimeout(5000); 
            await page.goto(url + "/return");
            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/return-login"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//sign up
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('sign up: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/customer/account/create/');
            await page.waitForTimeout(5000);

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/signup"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}

//review page /glamira-reviews/
for (let a = 0; a < 2; a++) {

    urls.forEach((url, index) => {
        test('review page: ' + url + a, async ({ playwright }) => {

            const browser = await playwright.chromium.launch({
                args: ['--remote-debugging-port=9222'],
            });
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto(url + '/glamira-reviews/');
            await page.waitForTimeout(5000);

            for (let i = 0; i <= index; i++) {
                var file = `${stores[i]}` + a;
            }
            console.log(file)
            await playAudit({
                thresholds: {
                    performance: 50,
                    accessibility: 50,
                    'best-practices': 50,
                    seo: 50,
                    pwa: 50,
                },
                ignoreError: true,
                page: page,
                port: 9222,
                reports:
                {
                    "formats": {
                        html: false,
                        csv: true,
                        json: true
                    },
                    name: "" + file,
                    directory: "lighthous-report-desktop/reviewpage"
                },
            });



            await page.close();
            await context.close();
            await browser.close();
        })

    });
}