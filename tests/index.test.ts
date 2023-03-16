import { calculateTax } from "../src";

describe("Impostos", () => {
  it("Deve retornar 0 para salarios menores que 2500", () => {
    const salary = 1;
    const tax = calculateTax(salary);
    expect(tax).toBe(0);
  });

  it("Deve retornar 0 para salarios menores que 2500", () => {
    const salary = 2499;
    const tax = calculateTax(salary);
    expect(tax).toBe(0);
  });

  it("Deve retornar uma taxa de 7,5% para salarios menores que 3200", () => {
    const salary = 3199;
    const tax = calculateTax(salary);
    expect(tax).toBe(salary * 0.075);
  });

  it("Deve retornar uma taxa de 15% para salarios menores que 4250", () => {
    const salary = 4249;
    const tax = calculateTax(salary);
    expect(tax).toBe(salary * 0.15);
  });

  it("Deve retornar uma taxa de 22.5% para salarios menores que 5300", () => {
    const salary = 5299;
    const tax = calculateTax(salary);
    expect(tax).toBe(salary * 0.225);
  });

  it("Deve retornar uma taxa de 27.5% para salarios maiores que 5300", () => {
    const salary = 5301;
    const tax = calculateTax(salary);
    expect(tax).toBe(salary * 0.275);
  });
});
