/**
 * @jest-environment jsdom
 */

const calculator = require('../src/app.js');

describe('Calculadora Geométrica - Pruebas de Integración', () => {
  // Configuración del DOM para pruebas
  beforeEach(() => {
    document.body.innerHTML = `
      <select id="shape">
        <option value="square">Cuadrado</option>
        <option value="rectangle">Rectángulo</option>
        <option value="circle">Círculo</option>
        <option value="triangle">Triángulo</option>
      </select>
      
      <div id="square-inputs" class="shape-inputs">
        <input type="number" id="square-side" value="5">
      </div>
      
      <div id="rectangle-inputs" class="shape-inputs" style="display: none;">
        <input type="number" id="rectangle-width" value="4">
        <input type="number" id="rectangle-height" value="6">
      </div>
      
      <div id="circle-inputs" class="shape-inputs" style="display: none;">
        <input type="number" id="circle-radius" value="3">
      </div>
      
      <div id="triangle-inputs" class="shape-inputs" style="display: none;">
        <input type="number" id="triangle-base" value="8">
        <input type="number" id="triangle-height" value="5">
      </div>
      
      <button id="calculate-btn">Calcular Área</button>
      <div id="result" class="result-container">
        El área es: <span id="area-value">0</span>
      </div>
    `;
    
    // Simulando la carga del DOM para activar los event listeners
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
  });

  test('La calculadora debe mostrar correctamente el área del cuadrado al hacer clic en calcular', () => {
    // Configurar
    document.getElementById('shape').value = 'square';
    const event = new Event('change');
    document.getElementById('shape').dispatchEvent(event);
    
    // Ejecutar
    document.getElementById('calculate-btn').click();
    
    // Verificar
    expect(document.getElementById('area-value').textContent).toBe('25.00');
  });

  test('La calculadora debe cambiar los inputs visibles al cambiar la figura seleccionada', () => {
    // Inicialmente se muestra el cuadrado
    expect(document.getElementById('square-inputs').style.display).not.toBe('none');
    
    // Cambiar a círculo
    document.getElementById('shape').value = 'circle';
    const event = new Event('change');
    document.getElementById('shape').dispatchEvent(event);
    
    // Verificar que se muestra círculo y se oculta cuadrado
    expect(document.getElementById('circle-inputs').style.display).toBe('block');
    expect(document.getElementById('square-inputs').style.display).toBe('none');
  });
});