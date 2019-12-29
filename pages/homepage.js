let homepage = function(){
    let firstNumber_Input = element(by.model('first'));
    let secondNumber_Input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    this.get = function(url){
         browser.get(url);
    };
    this.enterFirstNumber = function(firstNo){
        firstNumber_Input.sendKeys(firstNo);
    };
    this.enterSecondNumber = function(secondNo){
        secondNumber_Input.sendKeys(secondNo);
    };
    this.clickGo  = function(){
        goButton.click();
    };
    this.verifyResult = function(result){
        let output = element.all(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toContain(result);
    };
};

module.exports = new homepage();