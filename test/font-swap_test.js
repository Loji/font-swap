(function ($) {
  module(':fontSwap selector', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is fontSwap', function () {
    expect(1);
    deepEqual(this.elems.filter(':fontSwap').get(), this.elems.last().get());
  });
}(jQuery));
