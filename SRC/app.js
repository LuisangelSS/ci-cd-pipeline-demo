// Calculadora de áreas
const calculator = {
    // Calcula el área de un cuadrado
    calculateSquareArea: function(side) {
        return side * side;
    },
    
    // Calcula el área de un rectángulo
    calculateRectangleArea: function(width, height) {
        return width * height;
    },
    
    // Calcula el área de un círculo
    calculateCircleArea: function(radius) {
        return Math.PI * radius * radius;
    },
    
    // Calcula el área de un triángulo
    calculateTriangleArea: function(base, height) {
        return (base * height) / 2;
    }
};

// Para exportar las funciones y permitir pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculator;
}

// Código para la interfaz web
document.addEventListener('DOMContentLoaded', function() {
    const shapeSelect = document.getElementById('shape');
    const calculateBtn = document.getElementById('calculate-btn');
    const areaValue = document.getElementById('area-value');
    
    // Controladores para mostrar/ocultar campos según la figura seleccionada
    shapeSelect.addEventListener('change', function() {
        // Ocultar todos los inputs
        document.querySelectorAll('.shape-inputs').forEach(el => {
            el.style.display = 'none';
        });
        
        // Mostrar solo los inputs relevantes
        const selectedShape = shapeSelect.value;
        document.getElementById(`${selectedShape}-inputs`).style.display = 'block';
    });
    
    // Calcular el área cuando se haga clic en el botón
    calculateBtn.addEventListener('click', function() {
        const selectedShape = shapeSelect.value;
        let area = 0;
        
        switch(selectedShape) {
            case 'square':
                const side = parseFloat(document.getElementById('square-side').value);
                if (side > 0) {
                    area = calculator.calculateSquareArea(side);
                }
                break;
                
            case 'rectangle':
                const width = parseFloat(document.getElementById('rectangle-width').value);
                const height = parseFloat(document.getElementById('rectangle-height').value);
                if (width > 0 && height > 0) {
                    area = calculator.calculateRectangleArea(width, height);
                }
                break;
                
            case 'circle':
                const radius = parseFloat(document.getElementById('circle-radius').value);
                if (radius > 0) {
                    area = calculator.calculateCircleArea(radius);
                }
                break;
                
            case 'triangle':
                const base = parseFloat(document.getElementById('triangle-base').value);
                const triangleHeight = parseFloat(document.getElementById('triangle-height').value);
                if (base > 0 && triangleHeight > 0) {
                    area = calculator.calculateTriangleArea(base, triangleHeight);
                }
                break;
        }
        
        // Mostrar el resultado redondeado a 2 decimales
        areaValue.textContent = area.toFixed(2);
    });
});