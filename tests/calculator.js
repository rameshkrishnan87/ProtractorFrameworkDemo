let homepage = require('../pages/homepage');
describe('demo calculator tests', function () {
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/')
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('6');
        browser.sleep(2000);
    });
});