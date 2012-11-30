var expect = chai.expect;

describe("Mobi", function () {
  describe("Initial App Structure", function () {
    it("App should exist", function (done) {
      expect(App).to.exist;
      expect(App).to.include.keys('Views', 'Router', 'router');
      done();
    });
  });

  describe("Router Functions", function () {
    it("should remove 'current' class when hideAll is called", function (done) {
      var sections = $(".content > section");

      expect(App.router.hideAll()).to.eql(sections.removeClass("current"));
      done();
    });

    it("should add 'current' class when notFound is called", function (done) {
      var section = $("#not-found");

      expect(App.router.notFound()).to.eql(section.addClass("current"));
      done();
    });
  });
});