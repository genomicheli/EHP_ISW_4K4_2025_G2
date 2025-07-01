# 📃 Gestión de Configuración

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
|-- app/
|   |-- public/
|   |   |-- EHP_IMG_ecoharmonyPark.jpg
|   |   |-- EHP_IMG_ecoharmonyPark.png
|   |   |-- EHP_PUB_vite.svg
|   |-- src/
|       |-- assets/
|       |   |-- EHP_ASSETS_react.svg
|       |-- components/
|       |   |-- EHP_COMP_StyledButton.tsx
|       |-- context/
|       |   |-- EHP_CTX_AuthContext.tsx
|       |-- pages/
|       |   |-- EHP_PAGE_EmailMessage.tsx
|       |   |-- EHP_PAGE_LoginPage.tsx
|       |   |-- EHP_PAGE_PurchasePage.tsx
|       |   |-- EHP_PAGE_SuccessPage.tsx
|       |   |-- EHP_PAGE_WelcomePage.tsx
|       |-- utils/
|       |-- EHP_BOOT_App.tsx
|       |-- EHP_BOOT_main.tsx
|       |-- EHP_BOOT_index.html
|       |-- EHP_CSS_App.css
|       |-- EHP_CSS_index.css
|       |-- EHP_ENV_vite-env.d.ts
|       |-- EHP_CFG_vite.config.ts
|       |-- EHP_CFG_eslint.config.js
|       |-- EHP_CFG_tsconfig.app.json
|       |-- EHP_CFG_tsconfig.json
|       |-- EHP_CFG_tsconfig.node.json
|-- docs/
|   |-- userStories/
|   |   |-- EHP_DOC_US-8.pdf
|   |-- casosPrueba/
|   |   |--EHP_TEST_US_InscribirActividad.xlsx
|   |   |--EHP_TEST_US_ComprarEntradaGrupo11.xlsx
|   |   |--EHP_TEST_US_ComprarEntradaGrupo1.xlsx
|   |-- implementacionScrum/
|   |   |--EHP_DOC_SCRUM.pdf
|   |-- retrospectiveScrum/
|   |   |--EHP_DOC_RETROSPECTIVE.jpg
|   |-- tdd/
|   |   |--EHP_DOC_TDD.pdf
|-- README.md
```

---

## 🗂️ Listado de Ítems de Configuración

| **Nombre del Ítem**          | **Regla de Nombrado**   | **Ubicación Física**                        | **Tipo de Ítem** |
| ---------------------------- | ----------------------- | ------------------------------------------- | ---------------- |
| Aplicación Web (Frontend)    | EHP\_APP\_\[Nom]        | `app/src/`                                  | Código           |
| Componentes Reutilizables    | EHP\_COMP\_\[Nom]       | `app/src/components/`                       | Código           |
| Contexto de Estado Global    | EHP\_CTX\_\[Nom]        | `app/src/context/`                          | Código           |
| Páginas del Sistema          | EHP\_PAGE\_\[Nom]       | `app/src/pages/`                            | Código           |
| Funciones Utilitarias        | EHP\_UTIL\_\[Nom]       | `app/src/utils/`                            | Código           |
| Archivos de Arranque         | EHP\_BOOT\_\[Nom]       | `app/src/App.tsx`, `main.tsx`, `index.html` | Código           |
| Hojas de Estilo              | EHP\_CSS\_\[Nom]        | `app/src/*.css`                             | Código           |
| Archivos de Configuración    | EHP\_CFG\_\[Nom]        | `app/src/*.config.*`, `tsconfig*.json`      | Configuración    |
| Archivos de Ambiente         | EHP\_ENV\_\[Nom]        | `app/src/vite-env.d.ts`                     | Configuración    |
| Imágenes Públicas            | EHP\_IMG\_\[Nom]        | `app/public/`                               | Asset            |
| Logos y Assets del Sistema   | EHP\_ASSETS\_\[Nom]     | `app/src/assets/`                           | Asset            |
| Recursos Estáticos Públicos  | EHP\_PUB\_\[Nom]        | `app/public/`                               | Asset            |
| Documentos de Usuario        | EHP\_DOC\_US-\[ID]      | `docs/userStories/`                         | Documentación    |
| Casos de Prueba              | EHP\_TEST\_US\_\[Nom]   | `docs/casosPrueba/`                         | Documentación    |
| Documentos del Proceso Scrum | EHP\_DOC\_SCRUM         | `docs/implementacionScrum/`                 | Documentación    |
| Retrospectivas Scrum         | EHP\_DOC\_RETROSPECTIVE | `docs/retrospectiveScrum/`                  | Documentación    |
| Test-Driven Development      | EHP\_DOC\_TDD           | `docs/tdd/`                                 | Documentación    |
| Manual/Resumen del Proyecto  | README.md               | `README.md`                                 | Documentación    |


---

## 📖 Glosario

| **Sigla / Prefijo**    | **Significado**                                             |
| ---------------------- | ----------------------------------------------------------- |
| **EHP**                | EcoHarmony Park (nombre del sistema/proyecto)               |
| **APP**                | Aplicación principal (estructura general del frontend)      |
| **COMP**               | Componente reutilizable (UI / funcionalidad encapsulada)    |
| **CTX**                | Contexto (manejo de estado global con React Context API)    |
| **PAGE**               | Página del sistema (pantallas de usuario final)             |
| **UTIL**               | Función utilitaria (funciones de soporte o auxiliares)      |
| **BOOT**               | Archivo de arranque del sistema (entry points)              |
| **CSS**                | Hoja de estilos en cascada (estilos personalizados)         |
| **CFG**                | Archivo de configuración del entorno o herramientas         |
| **ENV**                | Definición de tipos o variables de entorno                  |
| **IMG**                | Imagen pública utilizada por la app                         |
| **ASSETS**             | Recurso estático del sistema (logos, íconos, ilustraciones) |
| **PUB**                | Archivo estático público (incluidos SVGs y HTMLs generales) |
| **DOC**                | Documentación general del proyecto                          |
| **DOC\_US**            | Documento de historia de usuario                            |
| **DOC\_SCRUM**         | Documentación del proceso Scrum                             |
| **DOC\_RETROSPECTIVE** | Registro de retrospectivas de Scrum                         |
| **TEST**               | Caso de prueba funcional                                    |
| **TDD**                | Test-Driven Development                                     |
| **README**             | Documento raíz con resumen general del repositorio          |


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

