describe("split()",function(){
    it("split a string to single character",function(){
        var input = "321";
        var expectOutput = ['3','2','1']
        var output = split(input)
        expect(expectOutput).toEqual(output)
    });
    it("split a string to single character",function(){
        var input = "1";
        var expectOutput = ['1']
        var output = split(input)
        expect(expectOutput).toEqual(output)
    });
});
describe("format()",function(){
    it("format numbers to lcd-format",function(){
        var input = ['3','2','1'];
        var expectOutput = '._. ._. ... \n._| ._| ..| \n._| |_. ..| \n'
        var output = format(input)
        expect(expectOutput).toEqual(output)
    });
    it("format numbers to lcd-format",function(){
        var input = ['9','1','0'];
        var expectOutput = '._. ... ._. \n|_| ..| |.| \n..| ..| |_| \n'
        var output = format(input)
        expect(expectOutput).toEqual(output)
    });
});
