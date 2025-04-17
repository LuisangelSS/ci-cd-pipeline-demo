const calculator = require('../src/app.js');

describe('Calculadora Geométrica - Pruebas Unitarias', () => {
  test('Debe calcular correctamente el área de un cuadrado', () => {
    expect(calculator.calculateSquareArea(5)).toBe(25);
    expect(calculator.calculateSquareArea(0)).toBe(0);
  });

  test('Debe calcular correctamente el área de un rectángulo', () => {
    expect(calculator.calculateRectangleArea(5, 10)).toBe(50);
    expect(calculator.calculateRectangleArea(0, 10)).toBe(0);
  });

  test('Debe calcular correctamente el área de un círculo', () => {
    expect(calculator.calculateCircleArea(5)).toBeCloseTo(78.54, 2);
    expect(calculator.calculateCircleArea(0)).toBe(0);
  });

  test('Debe calcular correctamente el área de un triángulo', () => {
    expect(calculator.calculateTriangleArea(6, 4)).toBe(12);
    expect(calculator.calculateTriangleArea(0, 10)).toBe(0);
  });
});