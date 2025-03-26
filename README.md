# Documento de Gestión de Configuración

##UTN FRC - CATEDRA: INGENIERIA Y CALIDAD DE SOFTWARE

## ECOHARMONY PARK - GRUPO 2

### Integrantes del Grupo

| Nombre y Apellido          | Legajo     |
| -------------------------- | ---------- |
| Juan Ignacio Camargo Mano  | 85308      |
| Consuelo Cordoba Oyhamburu | 85832      |


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
│   │── Publicidad/
│   │── Tickets/
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

### Listado de Items de Configuración

| Nombre del Item       | Regla de Nombrado          | Ubicación Física           | Tipo de Item  |
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

La línea base se establece por cada entrega de **TP\_evaluable** corregido de **EcoHarmony Park**.

