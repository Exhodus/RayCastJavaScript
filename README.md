🌟 Raycasting Interactive Demo

Una implementación interactiva de **raycasting en 2D** con detección de colisiones en tiempo real, construida con **JavaScript vanilla** y **Canvas API**.

![Raycasting Demo](https://img.shields.io/badge/JavaScript-Vanilla-yellow?style=for-the-badge&logo=javascript)
![HTML5](https://img.shields.io/badge/HTML5-Canvas-orange?style=for-the-badge&logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-Flexbox-blue?style=for-the-badge&logo=css3)

## 🎯 ¿Qué es esto?

Este proyecto es un ejercicio práctico para entender los fundamentos del **raycasting** - una técnica fundamental en gráficos por computadora usada en juegos clásicos como Wolfenstein 3D y Doom.

### ✨ Características

- **360 rayos** emitidos desde un punto central
- **Detección de colisiones** con objetos rectangulares
- **Interacción en tiempo real** siguiendo el cursor del ratón
- **Algoritmo de intersección rayo-rectángulo** implementado desde cero
- Renderizado eficiente con Canvas API

## 🚀 Demo en Vivo

Mueve el cursor por el canvas y observa cómo los rayos amarillos:
- Se proyectan en todas direcciones (360°)
- Se detienen al colisionar con el rectángulo azul
- Se actualizan en tiempo real siguiendo tu movimiento

## 🛠️ Tecnologías Utilizadas

- **JavaScript ES6+**: Lógica de raycasting y detección de colisiones
- **HTML5 Canvas**: Renderizado gráfico 2D
- **CSS3**: Diseño y layout con Flexbox

## 📐 Conceptos Implementados

### Algoritmo de Raycasting

El algoritmo calcula la intersección de cada rayo con las 4 paredes del rectángulo:

```javascript
// Para cada lado del rectángulo:
// - Lado izquierdo: x = rectX
// - Lado derecho: x = rectX + rectWidth
// - Lado superior: y = rectY
// - Lado inferior: y = rectY + rectHeight

// Calculamos el parámetro t donde el rayo intersecta cada lado
// y validamos que la intersección esté dentro de los límites
```

### Matemáticas Utilizadas

- **Trigonometría**: `cos(θ)` y `sin(θ)` para direcciones de rayos
- **Geometría vectorial**: Ecuaciones paramétricas de líneas
- **Intersección rayo-segmento**: Algoritmo optimizado para 4 lados

## 🎮 Cómo Usar

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/raycasting-demo.git
   cd raycasting-demo
   ```

2. **Abre el archivo HTML**
   ```bash
   # Simplemente abre index.html en tu navegador favorito
   open index.html
   ```

3. **¡Interactúa!**
    - Mueve el cursor sobre el canvas negro
    - Observa cómo los rayos reaccionan al obstáculo azul

## 📁 Estructura del Proyecto

```
raycasting-demo/
│
├── index.html          # Estructura HTML
├── main.css           # Estilos y layout
└── js/
    └── main.js        # Lógica de raycasting
```

## 🧮 Detalles Técnicos

| Parámetro | Valor |
|-----------|-------|
| Número de rayos | 360 |
| Radio de emisión | 25px |
| Canvas | 1000x500px |
| FPS | ~60 (limitado por requestAnimationFrame) |

## 🎓 Aprendizajes

Este proyecto me ayudó a:
- ✅ Comprender algoritmos de detección de colisiones 2D
- ✅ Practicar geometría computacional
- ✅ Optimizar renderizado en Canvas
- ✅ Implementar interacción en tiempo real
- ✅ Trabajar con trigonometría aplicada

## 🔮 Posibles Mejoras

- [ ] Añadir múltiples obstáculos
- [ ] Implementar diferentes formas geométricas
- [ ] Agregar efecto de sombras dinámicas
- [ ] Crear un modo 3D (raycasting pseudo-3D)
- [ ] Añadir controles con teclado

## 📝 Licencia

Este proyecto es de código abierto y está disponible para propósitos educativos.

## 👨‍💻 Autor

Desarrollado como ejercicio de práctica en JavaScript y Canvas API.

---

⭐ Si te gustó este proyecto o te ayudó a aprender algo nuevo, ¡dale una estrella!

💡 **¿Dudas o sugerencias?** Abre un issue o contáctame.
