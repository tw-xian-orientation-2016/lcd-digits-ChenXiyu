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
