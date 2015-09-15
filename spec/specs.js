describe('Contact', function(){
  it("creates a new contact with the given specifications", function(){
    var testContact = new Contact("Jim", "Sith");
    expect(testContact.firstName).to.equal("Jim");
    expect(testContact.lastName).to.equal("Sith");
    expect(testContact.address).to.eql([]);
  });
});
