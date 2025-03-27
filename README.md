# Documento de Gestión de Configuración

## Universidad Tecnológica Nacional - Facultad Regional Córdoba

### Repositorio del Proyecto de software ECOHARMONY PARK de la materia Ingeniería y Calidad de Software para el grupo 2.


### Integrantes del Grupo

| Nombre y Apellido | Legajo     |
| ----------------- | ---------- |
| Juan Ignacio Camargo Mano        | 85308 |
| Consuelo Cordoba Oyhamburu       | 85832 |
| Pedro Placci                     | 90522 |
| Genoves Micheli                  | 78493 |
| Mateo Ugarte Torres              | 93050 |
| Delfina Brenda Glavas            | 89335 |
| Gianella Bryanna Magliano        | 89302 |
| Paloma Candelaria Corcoba        | 85250 |
| Joaquin Miranda Oliveros         | 85530 |

### Estructura del Repositorio

```
EHP_ISW_4K4_2025_G2/
│── assets/
│   │── ico/
│   │── img/
│   │── video/
│── config/
│── docs/
│   │── CasosPrueba/
│   │── DER/
│   │── ManualUsuario/
│   │── Prototipos/
│   │── UserStories/
│   ├── .gitkeep
│── source/
│   │── back/
│   │── database/
│   │── front/
│   │── lib/
│── tests/
│   │── PruebasAutomatizadas/
│   │── PruebasUnitarias/
│── README.md
```

### Listado de Ítems de Configuración

| Nombre del Ítem       | Regla de Nombrado          | Ubicación Física           | Tipo de Ítem  |
| --------------------- | -------------------------- | -------------------------- | ------------- |
| Base de Datos         | EHP\_BD                    | source/database            | Código        |
| Backend               | EHP\_Back                  | source/back                | Código        |
| Frontend              | EHP\_Front                 | source/front               | Código        |
| Librerías             | EHP\_Lib                   | source/lib                 | Código        |
| Pruebas Unitarias     | EHP\_PU[X]-[Nom]           | tests/PruebasUnitarias     | Test          |
| Pruebas Automatizadas | EHP\_PA[X]-[Nom]           | tests/PruebasAutomatizadas | Test          |
| User Stories          | EHP\_US[X]-[nom]           | docs/UserStories           | Documentación |
| Casos de Prueba       | EHP\_CP[X]-[NomUS]-[NomCP] | docs/CasosPrueba           | Documentación |
| Prototipos            | EHP\_PT[XUS]               | docs/Prototipos            | Documentación |
| Manual de Usuario     | EHP\_MU[Nom]               | docs/ManualUsuario         | Documentación |
| Tickets               | EHP\_TK[X]-[ROL]-[Nom]     | docs/Tickets               | Documentación |
| DER                   | EHP\_DER                   | docs/DER                   | Documentación |
| Publicidad            | EHP\_PUBLICIDAD[Nom]       | docs/Publicidad            | Documentación |
| Imágenes              | EHP\_Img[nom]              | assets/img                 | Asset         |
| Íconos                | EHP\_Ico[Nom]              | assets/ico                 | Asset         |
| Videos                | EHP\_Vid[nom]              | assets/video               | Asset         |

### Glosario

| Sigla | Significado               |
| ----- | ------------------------- |
| EHP   | EcoHarmony Park           |
| BD    | Base de datos             |
| Back  | Backend                   |
| Front | Frontend                  |
| Lib   | Librerías                 |
| PU    | Pruebas unitarias         |
| PA    | Pruebas automatizadas     |
| X     | Número                    |
| Nom   | Nombre                    |
| US    | UserStory                 |
| CP    | Caso de prueba            |
| NomUS | Nombre de la UserStory    |
| NomCP | Nombre del Caso de prueba |
| PT    | Prototipos                |
| XUS   | Número de UserStory       |
| MU    | Manual de usuario         |
| TK    | Tickets                   |
| DER   | Diagrama Entidad-Relación |
| Img   | Imágenes                  |
| Ico   | Iconos                    |
| Vid   | Videos                    |

### Criterio de la Línea Base

La línea base se establece por cada entrega de **Trabajo Práctico Evaluable** corregido de **EcoHarmony Park**. Nos basamos en este criterio ya que las entregas de los Trabajos Prácticos Evaluable de EcoHarmony Park constituyen un marco de referencia sólido, estable y revisado del progreso de la materia.





