describe('My first test', () => {
  let sut;

  beforeEach(() => {
    sut = {};
  });

  it('should be true', () => {
    sut.a = true;
    sut.a = false;
    expect(sut.a).toBe(false);
  })
})