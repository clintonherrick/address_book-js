describe('Contact', function(){
  it("creates a new contact with the given specifications", function(){
    var testContact = new Contact("Jim", "Sith");
    expect(testContact.firstName).to.equal("Jim");
    expect(testContact.lastName).to.equal("Sith");
    expect(testContact.address).to.eql([]);
  });


  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Sue", "Hall");
    expect(testContact.fullName()).to.equal("Sue Hall");
  });

});



describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 This St", "Real Town", "Oregon");
    expect(testAddress.street).to.equal("123 This St");
    expect(testAddress.city).to.equal("Real Town");
    expect(testAddress.state).to.equal("Oregon");
  });

  it("add the fullAddress method to all the addresses", function() {
    var testAddress = new Address("123 This St", "Real Town", "Oregon");
    expect(testAddress.fullAddress()).to.equal("123 This St, Real Town, Oregon");

  });
});
