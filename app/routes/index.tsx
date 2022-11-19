const Index = () => <p>Hello World</p>

export default Index;

// in-source test suites
if (process.env.NODE_ENV === "test" && import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("test test case", () => {
    expect(1).toBe(1);
  });
}
