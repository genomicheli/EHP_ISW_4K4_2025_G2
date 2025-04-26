
# 📚 Tabla de Contenidos

- [📄 Gestión de Configuración](#-gestión-de-configuración)
  - [🎓 Universidad Tecnológica Nacional - Facultad Regional Córdoba](#-universidad-tecnológica-nacional---facultad-regional-córdoba)
  - [👥 Integrantes del Grupo](#-integrantes-del-grupo)
  - [📁 Estructura Actual del Repositorio](#-estructura-actual-del-repositorio)
  - [🗂️ Listado de Ítems de Configuración](#️-listado-de-ítems-de-configuración)
  - [📖 Glosario](#-glosario)
  - [📌 Criterio de la Línea Base](#-criterio-de-la-línea-base)

---

# 📄 Gestión de Configuración

## 🎓 Universidad Tecnológica Nacional - Facultad Regional Córdoba

Repositorio del Proyecto de software **ECOHARMONY PARK**  
Materia: **Ingeniería y Calidad de Software** - Grupo 2

---

## 👥 Integrantes del Grupo

| Nombre y Apellido | Legajo |
| ----------------- | ------ |
| Juan Ignacio Camargo Mano | 85308 |
| Consuelo Cordoba Oyhamburu | 85832 |
| Pedro Placci | 90522 |
| Genoves Micheli | 78493 |
| Mateo Ugarte Torres | 93050 |
| Delfina Brenda Glavas | 89335 |
| Gianella Bryanna Magliano | 89302 |
| Paloma Candelaria Corcoba | 85250 |
| Joaquin Miranda Oliveros | 85530 |
| Marcio Joel Saravia | 85518 |

---

## 📁 Estructura Actual del Repositorio

```
EHP_ISW_4K4_2025_G2/
│── app/
│   │── public/
│   │   │── ecoharmonyPark.jpg
│   │   │── ecoharmonyPark.png
│   │   │── vite.svg
│   │── src/
│       │── assets/
│       │   │── react.svg
│       │── components/
│       │   │── StyledButton.tsx
│       │── context/
│       │   │── AuthContext.tsx
│       │── pages/
│       │   │── EmailMessage.tsx
│       │   │── LoginPage.tsx
│       │   │── PurchasePage.tsx
│       │   │── SuccessPage.tsx
│       │   │── WelcomePage.tsx
│       │── utils/
│       │   │── pricing.ts
│       │── App.css
│       │── App.tsx
│       │── index.css
│       │── main.tsx
│       │── vite-env.d.ts
│── config/
│── docs/
│── tests/
│── README.md
```

---

## 🗂️ Listado de Ítems de Configuración

| Nombre del Ítem               | Regla de Nombrado         | Ubicación Física           | Tipo de Ítem  |
| ------------------------------ | ------------------------- | --------------------------- | ------------- |
| Aplicación Web (Frontend)      | EHP_APP_[Nom]             | app/src/                    | Código        |
| Componentes Reutilizables      | EHP_COMP_[Nom]            | app/src/components/         | Código        |
| Contexto de Estado Global      | EHP_CTX_[Nom]             | app/src/context/            | Código        |
| Páginas de Navegación          | EHP_PAGE_[Nom]            | app/src/pages/              | Código        |
| Funciones Utilitarias          | EHP_UTIL_[Nom]            | app/src/utils/              | Código        |
| Configuración del Proyecto     | EHP_CFG_[Nom]             | config/, vite.config.ts, tsconfig*.json, eslint.config.js | Configuración |
| Archivos Estáticos Públicos    | EHP_PUB_[Nom]             | app/public/                 | Asset         |
| Pruebas Unitarias y Funcionales| EHP_TEST_[Nom]            | tests/                      | Test          |
| Documentación General          | EHP_DOC_[Nom]             | docs/                       | Documentación |
| Hoja de Estilos Principal      | EHP_CSS_[Nom]             | app/src/App.css, index.css   | Código        |
| Archivos de Inicio/Principal   | EHP_BOOT_[Nom]            | app/src/main.tsx, App.tsx, index.html | Código |
| Archivos de Ambiente           | EHP_ENV_[Nom]             | app/src/vite-env.d.ts        | Configuración |
| Imágenes Públicas              | EHP_IMG_[Nom]             | app/public/                  | Asset         |
| Logos/Assets del Proyecto      | EHP_ASSET_[Nom]           | app/src/assets/              | Asset         |

---

## 📖 Glosario

| Sigla | Significado               |
| ----- | ------------------------- |
| EHP   | EcoHarmony Park           |
| APP   | Aplicación Principal       |
| COMP  | Componente                 |
| CTX   | Contexto                   |
| PAGE  | Página de Navegación       |
| UTIL  | Función Utilitaria         |
| CFG   | Configuración              |
| PUB   | Público (Assets Estáticos) |
| TEST  | Prueba                     |
| DOC   | Documentación              |
| CSS   | Hoja de Estilos             |
| BOOT  | Archivos de Inicio         |
| ENV   | Ambiente                   |
| IMG   | Imagen                     |
| ASSET | Recurso Estático            |

---

## 📌 Criterio de la Línea Base

La **línea base** se establece para cada **entrega de Trabajo Práctico Evaluable** corregido de **EcoHarmony Park**.

Cada entrega revisada representa un punto de referencia estable, permitiendo:

- Estabilidad de código fuente y configuración.
- Actualización completa de documentación.
- Pruebas realizadas y registradas.

Cada Línea Base será etiquetada en el repositorio utilizando el siguiente formato:

```
LB-[Número]-[Descripción]-[Fecha]
```



