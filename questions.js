// Banco de preguntas. Cada pregunta: t=tema, p=enunciado, c=opción correcta,
// w=3 opciones incorrectas, e=explicación de la correcta, r=por qué falla cada incorrecta (mismo orden que w).
window.QUESTIONS = [
 {
  "t": "Introducción a la IS",
  "p": "¿Qué definición de Ingeniería de Software corresponde a la IEEE (1993)?",
  "c": "Aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software.",
  "w": [
   "Estudio de los principios y metodologías para el desarrollo y mantenimiento de sistemas de software.",
   "Establecimiento de principios y métodos de la ingeniería para obtener software rentable, fiable y que trabaje en máquinas reales.",
   "Aplicación práctica del conocimiento científico en el diseño y construcción de programas y su documentación asociada."
  ],
  "e": "La IEEE (1993) enfatiza tres adjetivos clave: enfoque <b>sistemático, disciplinado y cuantificable</b>, aplicado a desarrollo, operación y mantenimiento; es «aplicar ingeniería al software».",
  "r": [
   "Esa es la definición de Zelkovitz (1978).",
   "Esa es la definición de Bauer (1972): rentable, fiable y en máquinas reales.",
   "Esa es la definición de Boehm (1976)."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "«Establecimiento de los principios y métodos de la ingeniería a fin de obtener software de modo rentable, que sea fiable y trabaje en máquinas reales». ¿De quién es esta definición?",
  "c": "Bauer (1972)",
  "w": [
   "Zelkovitz (1978)",
   "Boehm (1976)",
   "IEEE (1993)"
  ],
  "e": "Bauer (1972) subraya que el software sea <b>rentable, fiable</b> y funcione en <b>máquinas reales</b>.",
  "r": [
   "Zelkovitz habla de «estudio de principios y metodologías» para desarrollo y mantenimiento.",
   "Boehm habla de «aplicación práctica del conocimiento científico» y menciona documentación asociada.",
   "La IEEE habla de enfoque sistemático, disciplinado y cuantificable."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Cuál de estas afirmaciones sobre el software es correcta según la cátedra?",
  "c": "El software se desarrolla o modifica con intelecto; no se manufactura en el sentido clásico y no se «desgasta».",
  "w": [
   "El software se manufactura como cualquier producto industrial y se desgasta con el uso.",
   "El software se desgasta con el tiempo, por eso necesita mantenimiento.",
   "Hoy la mayor parte del software se construye a partir de componentes estándar sin personalización."
  ],
  "e": "El software no se fabrica en serie ni se desgasta físicamente; además, aunque la industria avanza a componentes, <b>la mayor parte se construye para un uso individualizado</b>.",
  "r": [
   "Justamente la diferencia con el hardware es que no se manufactura en el sentido clásico.",
   "El software no se desgasta; el mantenimiento se debe a errores, cambios de entorno o mejoras, no a desgaste.",
   "La cátedra dice que, pese a la tendencia a componentes, la mayor parte se hace para uso individualizado."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Cuánto cuesta corregir un error en la fase de análisis respecto de corregirlo cuando el software ya fue entregado al cliente?",
  "c": "Aproximadamente una décima parte",
  "w": [
   "Aproximadamente lo mismo",
   "El doble",
   "Aproximadamente la mitad"
  ],
  "e": "Los errores son más costosos cuanto más tarde se detectan: en análisis cuesta <b>una décima parte</b> de lo que cuesta una vez entregado.",
  "r": [
   "El costo crece con las etapas; no es igual.",
   "Es al revés: es más barato corregir temprano.",
   "La diferencia es mucho mayor: una décima parte."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "Las revisiones e inspecciones, según el apunte, han probado detectar…",
  "c": "4 de cada 5 errores introducidos en el proceso de construcción",
  "w": [
   "1 de cada 5 errores",
   "1 de cada 2 errores",
   "Todos los errores de la codificación"
  ],
  "e": "Son técnicas simples y poderosas: detectan <b>4 de cada 5 errores</b> y se aplican a todo el proceso, no solo a la codificación.",
  "r": [
   "Detectan mucho más: 4 de cada 5.",
   "Es una proporción mayor: 4 de cada 5.",
   "No se limitan a la codificación ni detectan «todos» los errores."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Desde qué tres perspectivas debe hacerse la calidad?",
  "c": "Producto, proceso y ámbito del negocio o dominio",
  "w": [
   "Costo, tiempo y alcance",
   "Usuario, cliente y gerente",
   "Análisis, diseño y codificación"
  ],
  "e": "El apunte establece calidad del <b>producto</b>, del <b>proceso</b> y del <b>ámbito del negocio o dominio</b>.",
  "r": [
   "Costo-tiempo-alcance es el triángulo clásico de gestión, no las perspectivas de calidad del apunte.",
   "Son tipos de participantes, no perspectivas de calidad.",
   "Son etapas del desarrollo."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Qué normas califican a las empresas en grados de madurez según sus actividades de calidad a lo largo del proceso software?",
  "c": "CMM, SPICE e ISO 9000",
  "w": [
   "UML, SADT y HIPO",
   "COCOMO, PERT y CPM",
   "MIL-STD-2167 y ESA PSS-05-0"
  ],
  "e": "CMM, SPICE e ISO 9000 evalúan madurez/calidad del <b>proceso</b>. El principio: un proceso de calidad asegura un producto de calidad.",
  "r": [
   "Son notaciones/técnicas de análisis y diseño.",
   "Son técnicas de estimación y planificación.",
   "Son estándares de ciclo de vida de desarrollo (militar y de la ESA), no de madurez."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Cuál de las siguientes NO es una de las ocho nociones fundamentales de Wasserman?",
  "c": "Mantenimiento perfectivo",
  "w": [
   "Abstracción",
   "Reutilización",
   "Medidas"
  ],
  "e": "Las ocho son: abstracción; métodos y notaciones de análisis y diseño; prototipado de la interfaz de usuario; arquitectura del software; proceso del software; reutilización; medidas; herramientas y ambientes integrados. El mantenimiento perfectivo es un <b>tipo de mantenimiento</b>, no una noción de Wasserman.",
  "r": [
   "Sí es una noción fundamental (nº 1).",
   "Sí es una noción fundamental (nº 6).",
   "Sí es una noción fundamental (nº 7): permite saber dónde se está y hacia dónde ir."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Cuál es una de las siete causas de cambio en la IS que identifica Wasserman?",
  "c": "La falta de predicción del modelo de desarrollo en cascada",
  "w": [
   "La desaparición de las interfaces gráficas",
   "El aumento del costo del hardware",
   "La disminución del uso de redes"
  ],
  "e": "Entre las siete causas figuran: tiempo de puesta en el mercado, factores económicos, computación de escritorio, redes, orientación a objetos, interfaces gráficas y <b>la falta de predicción del modelo en cascada</b>.",
  "r": [
   "Fueron las interfaces gráficas (ventanas, iconos, punteros) las que cobraron importancia.",
   "Bajaron los costos del hardware y subieron los de desarrollo y mantenimiento.",
   "Hubo un uso intensivo de redes locales y de área amplia."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "Según el apunte, ¿qué indican las herramientas de la Ingeniería de Software?",
  "c": "Proporcionan soporte para el proceso y para los métodos (pueden ser automáticas o semiautomáticas).",
  "w": [
   "Indican cómo construir el software (análisis, diseño, pruebas).",
   "Definen el marco de trabajo del conjunto de actividades.",
   "Representan un enfoque o filosofía de construcción, como la orientación a objetos."
  ],
  "e": "Las <b>herramientas</b> (p. ej., CASE) soportan proceso y métodos. Los <b>métodos</b> dicen cómo construir; el <b>proceso</b> es el marco; el <b>paradigma</b> es el enfoque.",
  "r": [
   "Eso describe a los métodos.",
   "Eso describe al proceso.",
   "Eso describe al paradigma."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "Cuando se dice que el ingeniero de software «usa la computadora como herramienta», se marca la diferencia con…",
  "c": "Las ciencias de la computación, donde la computadora (hardware) también es objeto de estudio",
  "w": [
   "El análisis de requisitos",
   "La gestión de proyectos",
   "La garantía de calidad"
  ],
  "e": "En «Computer Science» la computadora es también objeto de estudio e investigación; en IS es <b>solo una herramienta</b> dentro de la solución.",
  "r": [
   "No es una diferencia disciplinaria.",
   "No es una diferencia disciplinaria.",
   "No es una diferencia disciplinaria."
  ]
 },
 {
  "t": "Introducción a la IS",
  "p": "¿Cuáles son los cuatro procesos principales que componen el proceso software?",
  "c": "Selección de un modelo de ciclo de vida, gestión del proyecto, orientados al desarrollo e integrales del proyecto",
  "w": [
   "Requisitos, diseño, codificación y pruebas",
   "Personal, producto, proceso y proyecto",
   "Pre-desarrollo, desarrollo, post-desarrollo y retiro"
  ],
  "e": "El proceso software se compone de: selección de MCV, gestión del proyecto, procesos orientados al desarrollo (pre, desarrollo, post) y procesos integrales.",
  "r": [
   "Son etapas de desarrollo, no los cuatro procesos principales.",
   "Son las 4 P de la gestión de proyectos.",
   "Pre-desarrollo, desarrollo y post-desarrollo son subclases de uno solo de los cuatro procesos (los orientados al desarrollo)."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Qué define el estándar IEEE 1074-1989?",
  "c": "Un conjunto de actividades esenciales, no ordenadas en el tiempo, que deben incorporarse en un ciclo de vida elegido por el usuario",
  "w": [
   "Un ciclo de vida en cascada de nueve etapas obligatorio",
   "Una metodología de desarrollo orientada a objetos",
   "El conjunto de métricas de calidad a utilizar"
  ],
  "e": "La norma <b>no define un ciclo de vida ni una metodología</b>: aporta actividades esenciales y exige elegir y seguir un modelo.",
  "r": [
   "Las nueve etapas son solo un ejemplo de mapa de actividades.",
   "El estándar no define metodologías.",
   "Las métricas no son el objeto del estándar."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Qué clasificación tienen los procesos orientados al desarrollo del software?",
  "c": "Pre-desarrollo, desarrollo y post-desarrollo",
  "w": [
   "Requisitos, diseño e implementación",
   "Planificación, ejecución y control",
   "Verificación, validación y configuración"
  ],
  "e": "Producen, instalan, operan y mantienen el software y lo retiran: se clasifican en pre-desarrollo, desarrollo y post-desarrollo.",
  "r": [
   "Son procesos del desarrollo propiamente dicho.",
   "Es una clasificación de gestión, no del estándar.",
   "Son procesos integrales (V&V, configuración)."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Qué debe quedar documentado como salida del proceso de selección de un modelo de ciclo de vida?",
  "c": "El modelo seleccionado, con la justificación de la elección",
  "w": [
   "El plan de gestión del proyecto",
   "El informe de la necesidad",
   "El plan de contingencias"
  ],
  "e": "La salida es el MCV seleccionado <b>incluyendo la justificación</b>.",
  "r": [
   "Es salida de la iniciación del proyecto.",
   "Es salida de la exploración de conceptos.",
   "Es salida del seguimiento y control (análisis de riesgos)."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuál es la salida con la que culmina el proceso de iniciación del proyecto?",
  "c": "El plan de gestión del proyecto software",
  "w": [
   "El análisis de riesgos",
   "La especificación de requisitos",
   "El plan de instalación"
  ],
  "e": "Se establece el mapa de actividades, se asignan recursos y se define el entorno; culmina con el <b>plan de gestión del proyecto</b> (más el plan de retiro).",
  "r": [
   "Es salida del seguimiento y control.",
   "Es salida del proceso de requisitos.",
   "Es salida del post-desarrollo (instalación)."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Dónde se documentan los riesgos identificados y su gestión?",
  "c": "En el plan de contingencias",
  "w": [
   "En el plan de pruebas",
   "En el plan de formación",
   "En el informe de instalación"
  ],
  "e": "El análisis de riesgos (técnico, económico, operativo y de soporte, y del programa/calendario) se documenta en el <b>plan de contingencias</b>.",
  "r": [
   "El plan de pruebas es de verificación y validación.",
   "El plan de formación es del proceso de formación.",
   "El informe de instalación es del post-desarrollo."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "La pregunta «¿está el producto correctamente construido?» corresponde a…",
  "c": "La verificación",
  "w": [
   "La validación",
   "La gestión de la configuración",
   "La auditoría de calidad externa"
  ],
  "e": "<b>Verificación</b>: el producto está técnicamente bien construido y satisface la fase anterior. <b>Validación</b>: ¿es el producto correcto, el que el usuario quería?",
  "r": [
   "La validación pregunta si es el producto correcto.",
   "La configuración controla cambios.",
   "No es una actividad definida con ese sentido."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Qué proceso genera el «Informe de la necesidad», base de todo el trabajo de ingeniería posterior?",
  "c": "Exploración de conceptos",
  "w": [
   "Asignación del sistema",
   "Proceso de requisitos",
   "Proceso de diseño"
  ],
  "e": "La exploración de conceptos identifica la necesidad, formula soluciones, hace el estudio de viabilidad y genera el informe de la necesidad.",
  "r": [
   "La asignación parte del informe de la necesidad.",
   "Los requisitos se elaboran a partir de él.",
   "El diseño viene mucho después."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuándo se realiza el proceso de asignación del sistema?",
  "c": "Cuando el sistema requiere desarrollo de hardware y software, o no se puede asegurar que solo se necesite software",
  "w": [
   "Solo al finalizar la codificación",
   "Únicamente en proyectos de mantenimiento",
   "Cuando el cliente no tiene presupuesto"
  ],
  "e": "Se asignan funciones a elementos del sistema (software, hardware, personal, BD, documentación, procedimientos) y se obtienen las especificaciones de software, hardware e interfaz.",
  "r": [
   "Es un proceso de pre-desarrollo.",
   "No es exclusivo del mantenimiento.",
   "No depende del presupuesto."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "El requisito «el 95 % de las transacciones se debe procesar en menos de un segundo» es de tipo…",
  "c": "De rendimiento (dinámico)",
  "w": [
   "Funcional",
   "De interfaz",
   "De mantenimiento"
  ],
  "e": "Los requisitos de rendimiento especifican una característica numérica estática (nº de usuarios) o dinámica (tiempos de respuesta).",
  "r": [
   "Un funcional especifica una función (p. ej., emitir facturas).",
   "Los de interfaz definen características de interfaces (usuario, hardware, software).",
   "No es una categoría de requisitos."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "El proceso de diseño traduce…",
  "c": "El «qué hacer» de los requisitos en el «cómo hacerlo» del diseño",
  "w": [
   "El código fuente en código objeto",
   "El diseño en pruebas",
   "Las pruebas en requisitos"
  ],
  "e": "Es el proceso central que unifica desarrollo y mantenimiento; los refinamientos acercan la representación al código.",
  "r": [
   "Eso es parte de la implementación.",
   "No es su función.",
   "Invierte el sentido del proceso."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "Independencia funcional de los módulos significa…",
  "c": "Máxima cohesión y mínimo acoplamiento",
  "w": [
   "Mínima cohesión y máximo acoplamiento",
   "Máxima cohesión y máximo acoplamiento",
   "Mínima cohesión y mínimo acoplamiento"
  ],
  "e": "Un módulo con función definida (cohesión alta) y poca interacción con otros (acoplamiento bajo) facilita cambios y mantenimiento.",
  "r": [
   "Es exactamente lo contrario.",
   "El acoplamiento alto es indeseable.",
   "La cohesión baja es indeseable."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuáles son las cuatro actividades de diseño desde el punto de vista técnico?",
  "c": "Diseño de datos, arquitectónico, procedimental y de interfaz",
  "w": [
   "Preliminar, detallado, físico y lógico",
   "Conceptual, lógico, físico y externo",
   "Análisis, síntesis, evaluación y prueba"
  ],
  "e": "Desde la visión técnica: datos, arquitectura, procedimiento e interfaz. Desde la gestión: diseño preliminar (alto nivel) y detallado (bajo nivel).",
  "r": [
   "Preliminar/detallado es la visión de gestión.",
   "Son niveles del diseño de base de datos.",
   "No corresponde al apunte."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "Una empresa modifica su software porque el cliente migró a otro sistema operativo. Es mantenimiento…",
  "c": "Adaptativo",
  "w": [
   "Correctivo",
   "Perfectivo",
   "Preventivo"
  ],
  "e": "El <b>adaptativo</b> acomoda el software a cambios del entorno externo (CPU, SO, periféricos). Correctivo: defectos. Perfectivo: mejoras funcionales.",
  "r": [
   "El correctivo repara defectos.",
   "El perfectivo amplía funciones.",
   "El apunte distingue correctivo, adaptativo y perfectivo."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cómo se llama el período en que conviven el sistema en retiro y el nuevo sistema?",
  "c": "Ensayo en paralelo (operación dual)",
  "w": [
   "Prueba de aceptación",
   "Instalación diferida",
   "Transferencia tecnológica"
  ],
  "e": "En el proceso de retiro, el sistema viejo da los resultados oficiales mientras se prepara y valida el nuevo y se forma al usuario.",
  "r": [
   "La aceptación es parte de la instalación.",
   "No es un término del apunte.",
   "La transferencia es una fase de la norma ESA."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuál es una característica de los procesos integrales del proyecto?",
  "c": "Son simultáneos y complementarios a los de desarrollo (V&V, configuración, documentación, formación)",
  "w": [
   "Se ejecutan solo al final del ciclo de vida",
   "Se ejecutan antes del pre-desarrollo",
   "No incluyen actividades de no desarrollo"
  ],
  "e": "Aseguran terminación y calidad; incluyen actividades de no desarrollo; algunas se invocan como una subrutina.",
  "r": [
   "Son simultáneos, no finales.",
   "Son simultáneos al desarrollo.",
   "Sí incluyen actividades de no desarrollo."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuándo pueden realizarse las pruebas del software?",
  "c": "Solo cuando ya existe código ejecutable",
  "w": [
   "Desde la etapa de requisitos",
   "Solo después de la instalación",
   "Únicamente durante el mantenimiento"
  ],
  "e": "Las pruebas ejecutan el software con juegos de ensayo; antes de tener código, solo hay revisiones y otras tareas de verificación.",
  "r": [
   "En requisitos se hacen revisiones, no pruebas.",
   "Se hacen antes de instalar (y la aceptación antes de la instalación formal).",
   "No son exclusivas del mantenimiento."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "Son técnicas de prueba de caja negra…",
  "c": "Partición de equivalencias, análisis de valores límites, gráficos de causa-efecto y conjetura de errores",
  "w": [
   "Cobertura de sentencias, de decisión y de condición",
   "Diagramas de Chapín y HIPO",
   "CPM y PERT"
  ],
  "e": "La caja negra prueba funciones sin mirar el código; la caja blanca usa coberturas.",
  "r": [
   "Son técnicas de caja blanca.",
   "Son técnicas de diseño.",
   "Son técnicas de planificación."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Qué es el mapa de actividades?",
  "c": "Una tabla de doble entrada: actividades del proceso software × etapas del ciclo de vida elegido",
  "w": [
   "Un diagrama de Gantt con recursos",
   "La lista de requisitos priorizados",
   "El diagrama de contexto del sistema"
  ],
  "e": "Se marcan con X las actividades que se ejecutan en cada etapa (puede indicarse importancia «+»/«–» y tipo O obligatoria/C condicional). Adapta el proceso genérico al proyecto.",
  "r": [
   "El Gantt es otra herramienta.",
   "No tiene relación con requisitos.",
   "El DC es un diagrama de arquitectura del sistema."
  ]
 },
 {
  "t": "Proceso IEEE 1074",
  "p": "¿Cuáles son las cuatro funciones de la gestión de la configuración?",
  "c": "Identificación, control, informe del estado y auditorías de configuración",
  "w": [
   "Planificación, estimación, seguimiento y retiro",
   "Verificación, validación, depuración y prueba",
   "Formación, documentación, instalación y soporte"
  ],
  "e": "Identifica la estructura del sistema en un momento dado, controla cambios, informa su estado y audita; busca trazabilidad.",
  "r": [
   "Son actividades de gestión del proyecto.",
   "Son tareas de V&V.",
   "Son otros procesos."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Quién propuso el modelo en cascada y en qué año?",
  "c": "Royce, 1970",
  "w": [
   "Boehm, 1988",
   "Pressman, 1998",
   "Gilb, 1985"
  ],
  "e": "El modelo cascada fue introducido por Royce en 1970. Boehm propuso el espiral (1988).",
  "r": [
   "Boehm presentó el modelo espiral.",
   "Pressman es autor de uno de los textos de la cátedra, no del modelo.",
   "Gilb se asocia al desarrollo evolutivo."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Cuál es la limitación principal del modelo en cascada, según el apunte?",
  "c": "No trata al software como un proceso de resolución de problemas: es un proceso de creación, no de fabricación",
  "w": [
   "Entrega demasiadas versiones al cliente",
   "Exige un equipo muy grande",
   "No tiene etapas de prueba"
  ],
  "e": "Deriva del mundo del hardware (visión de manufactura); el software evoluciona a medida que se comprende el problema (Curtis et al., 1987).",
  "r": [
   "El problema es el contrario: no hay versión hasta muy avanzado el proyecto.",
   "No exige un tamaño de equipo particular.",
   "Sí tiene pruebas, pero tarde."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Por qué «congelar los requisitos» es un problema en cascada?",
  "c": "Obliga a seleccionar el hardware, que en un proyecto largo puede quedar obsoleto",
  "w": [
   "Impide documentar el diseño",
   "Elimina la fase de mantenimiento",
   "Hace que el cliente no pueda aceptar el producto"
  ],
  "e": "La terminación de un gran proyecto puede llevar años; dada la obsolescencia tecnológica, el software final puede usar hardware obsoleto.",
  "r": [
   "No impide documentar.",
   "El mantenimiento sigue existiendo.",
   "El problema es de obsolescencia y rigidez, no de aceptación."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Qué son los «estados de bloqueo» (Bradac) en el ciclo lineal?",
  "c": "Situaciones en que miembros del equipo esperan a otros para completar tareas dependientes",
  "w": [
   "Errores que bloquean la compilación",
   "Períodos en que el cliente no responde",
   "Fallas de hardware durante las pruebas"
  ],
  "e": "La naturaleza lineal genera esperas; el tiempo de espera puede superar al de trabajo productivo, sobre todo al principio y al final.",
  "r": [
   "No se refiere a la compilación.",
   "No se refiere al cliente.",
   "No se refiere a hardware."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "En el modelo en V, la prueba de aceptación…",
  "c": "Es dirigida por el cliente y valida los requerimientos",
  "w": [
   "La dirige el desarrollador y verifica el diseño del programa",
   "Verifica el diseño del sistema",
   "Se ocupa de la exactitud de los programas"
  ],
  "e": "Unitaria e integración → exactitud de programas/diseño del programa; sistema → diseño del sistema; <b>aceptación</b> → requerimientos, con el cliente.",
  "r": [
   "La dirige el cliente, y valida requerimientos.",
   "Eso corresponde a la prueba de sistema.",
   "Eso corresponde a la unitaria y de integración."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿En qué se diferencia el modelo en V de la cascada?",
  "c": "Hace explícita la iteración y se centra en la actividad y la exactitud, no solo en los documentos",
  "w": [
   "No tiene etapa de codificación",
   "No incluye pruebas",
   "Entrega incrementos funcionales"
  ],
  "e": "La V relaciona cada prueba con una etapa de análisis/diseño; los problemas en V&V permiten re-ejecutar el lado izquierdo.",
  "r": [
   "La codificación es la punta de la V.",
   "Enfatiza las pruebas.",
   "Incrementos son del modelo incremental."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "Un prototipo que usa formatos de entrada/salida encadenados con datos simples y estáticos es…",
  "c": "Una maqueta",
  "w": [
   "Un prototipo desechable",
   "Un prototipo evolutivo",
   "Un incremento operativo"
  ],
  "e": "La <b>maqueta</b> da un ejemplo visual de entradas y salidas con datos estáticos. El desechable usa datos reales y se descarta; el evolutivo se convierte en el sistema final.",
  "r": [
   "El desechable usa datos reales.",
   "El evolutivo usa análisis y diseño detallados y datos reales.",
   "Un incremento es un producto operativo."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Qué prototipo implanta solo los aspectos mal entendidos o desconocidos y luego se descarta por completo?",
  "c": "Prototipo desechable",
  "w": [
   "Maqueta",
   "Prototipo evolutivo",
   "Incremento nuclear"
  ],
  "e": "Sirve para que el cliente identifique requisitos no captados; todos sus elementos se desechan.",
  "r": [
   "La maqueta solo muestra formatos con datos estáticos.",
   "El evolutivo implanta los requisitos bien entendidos y evoluciona.",
   "No es un tipo de prototipo."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "En el modelo incremental, el primer incremento suele ser…",
  "c": "Un producto esencial (núcleo) operativo",
  "w": [
   "Un prototipo que se descarta",
   "El sistema completo con funciones mejoradas",
   "Solo la documentación"
  ],
  "e": "Cada incremento entrega funcionalidades cerradas y operacionales; del uso del núcleo sale el plan del siguiente.",
  "r": [
   "Eso describe al prototipo desechable.",
   "Eso describe al iterativo.",
   "El incremental entrega producto operacional."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "Un procesador de textos se entrega así: V1 solo creación de texto; V2 creación y organización; V3 creación, organización y formato. Es un desarrollo…",
  "c": "Incremental",
  "w": [
   "Iterativo",
   "En cascada pura",
   "En espiral"
  ],
  "e": "En el incremental se agregan funcionalidades. En el iterativo, la V1 trae formas primitivas de las tres funciones y cada versión mejora su calidad.",
  "r": [
   "El iterativo daría las tres funciones primitivas desde V1.",
   "La cascada entrega al final.",
   "El espiral se guía por riesgos."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "El desarrollo iterativo se caracteriza por…",
  "c": "Entregar un sistema completo desde el principio y luego cambiar la funcionalidad de cada subsistema en cada versión",
  "w": [
   "Entregar solo subsistemas aislados",
   "No tener refinamiento",
   "Ser un modelo exclusivamente militar"
  ],
  "e": "También se llama refinamiento sucesivo o mejora iterativa; mismas etapas que la cascada pero por refinamiento continuo.",
  "r": [
   "Eso es incremental.",
   "Es la esencia del iterativo.",
   "No es exclusivo de ámbitos militares."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "El modelo espiral de Boehm (1988) es un enfoque…",
  "c": "Dirigido por el riesgo",
  "w": [
   "Dirigido por la documentación",
   "Dirigido por el hardware",
   "Dirigido por la fecha de entrega"
  ],
  "e": "El análisis de riesgos aparece en cada ciclo; la dimensión radial indica costo acumulado y la angular, el progreso.",
  "r": [
   "No se guía por documentos.",
   "No se guía por hardware.",
   "No se guía por fechas."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "En el modelo espiral, la dimensión radial representa…",
  "c": "Los costos de desarrollo acumulados",
  "w": [
   "El progreso en cada ciclo",
   "El número de personas",
   "La cantidad de requisitos"
  ],
  "e": "La angular indica el progreso hecho en cada espiral.",
  "r": [
   "El progreso es la dimensión angular.",
   "No representa personas.",
   "No representa requisitos."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Cuáles son los tres puntos de fijación del espiral WINWIN?",
  "c": "OCV (objetivos del ciclo de vida), ACV (arquitectura del ciclo de vida) y COI (capacidad operativa inicial)",
  "w": [
   "Análisis, diseño y código",
   "Planificación, riesgo e ingeniería",
   "Comunicación, modelado y despliegue"
  ],
  "e": "Son hitos de decisión: OCV (objetivos), ACV (arquitectura), COI (preparación para instalación/distribución y asistencia).",
  "r": [
   "Son etapas de desarrollo.",
   "Son regiones del espiral clásico.",
   "Son actividades del flujo de proceso lineal."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "La idea central del espiral WINWIN es…",
  "c": "Negociar condiciones «victoria-victoria» entre cliente y desarrollador al inicio de cada paso",
  "w": [
   "Que gane siempre el cliente",
   "Eliminar el análisis de riesgos",
   "Entregar en 60 a 90 días"
  ],
  "e": "El cliente gana un sistema que satisface la mayor parte de sus necesidades; el desarrollador, presupuesto y fecha realistas.",
  "r": [
   "Debe ganar también el desarrollador.",
   "No elimina el riesgo; amplía el espiral.",
   "Eso es del DRA."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Cuál es el plazo típico de desarrollo de un proyecto DRA?",
  "c": "60 a 90 días",
  "w": [
   "6 a 12 meses",
   "1 a 2 años",
   "2 a 3 semanas"
  ],
  "e": "El DRA es una adaptación a alta velocidad de la cascada con componentes; requiere requisitos claros y ámbito limitado.",
  "r": [
   "Es mucho más corto.",
   "Es mucho más corto.",
   "Es más largo."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Cuándo NO es adecuado el modelo DRA?",
  "c": "Cuando los riesgos técnicos son altos (tecnologías nuevas o alta interoperabilidad con programas existentes)",
  "w": [
   "Cuando los requisitos están bien comprendidos",
   "Cuando el sistema se puede modularizar",
   "Cuando hay clientes comprometidos"
  ],
  "e": "También falla si no hay compromiso de las partes o si el sistema no se modulariza bien.",
  "r": [
   "Es una condición favorable.",
   "Es una condición favorable.",
   "Es una condición favorable."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "En el estándar MIL-STD-2167, ¿cómo se divide un sistema?",
  "c": "CSCI, que se divide en CSC, que a su vez se divide en CSU",
  "w": [
   "Subsistema, módulo y función",
   "Clase, objeto y método",
   "Fase, etapa y tarea"
  ],
  "e": "Esta división (Computer Software Configuration Item / Component / Configuration Software Unit) afecta la división en etapas.",
  "r": [
   "No son los términos de la norma.",
   "Son términos de OO.",
   "No son los términos de la norma."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Qué etapa agrega la norma ESA PSS-05-0 respecto del ciclo de vida clásico?",
  "c": "Transferencia de la tecnología al usuario",
  "w": [
   "Prototipado",
   "Análisis de riesgos",
   "Auditoría financiera"
  ],
  "e": "La Agencia da aceptación provisional, se instala en la máquina objetivo y se forma a los usuarios; tiene sentido porque el software se desarrolla en un país y se instala en otro.",
  "r": [
   "No es una etapa de la norma.",
   "No es una etapa de la norma.",
   "No es una etapa de la norma."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "¿Qué critica el apunte de MIL-STD-2167?",
  "c": "Es excesivo en documentación y pide documentos con información redundante",
  "w": [
   "Es demasiado simple",
   "No contempla revisiones",
   "No trata el software"
  ],
  "e": "El estándar especifica documentos y revisiones por etapa; hoy afecta solo al software.",
  "r": [
   "La ventaja de la ESA es su sencillez.",
   "Sí contempla revisiones.",
   "Trata el software (desde la última versión, solo el software)."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "En el modelo de ensamblaje de componentes, el primer paso de ingeniería es…",
  "c": "Identificar clases candidatas y buscarlas en la biblioteca de clases",
  "w": [
   "Escribir todo el código desde cero",
   "Congelar requisitos",
   "Desechar el prototipo"
  ],
  "e": "Se reutilizan las clases existentes y se construyen solo las nuevas; es un modelo evolutivo que incorpora características del espiral.",
  "r": [
   "El modelo promueve la reutilización.",
   "No es el primer paso.",
   "No se trata de prototipos."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "Según la presentación de la cátedra, ¿cuándo conviene el modelo incremental?",
  "c": "Cuando no se tienen todos los requerimientos al inicio y hay urgencia por ver parte del producto",
  "w": [
   "Cuando los requisitos son estables y sin urgencia",
   "Cuando hay que probar un algoritmo y desecharlo",
   "Cuando se dispone de personal ilimitado"
  ],
  "e": "También: se entregan funcionalidades completas, primero lo fundamental, y se puede empezar con poco personal.",
  "r": [
   "Eso favorece a la cascada.",
   "Eso es prototipado.",
   "El incremental sirve justamente cuando falta personal inicial."
  ]
 },
 {
  "t": "Ciclos de vida",
  "p": "Según la cátedra, un riesgo del modelo evolutivo es…",
  "c": "La incertidumbre sobre cuántos ciclos son necesarios y la falta de velocidad de evolución marcada (caos vs. productividad)",
  "w": [
   "Que se entreguen demasiado tarde las primeras versiones",
   "Que exige todos los requisitos al inicio",
   "Que no admite cambios"
  ],
  "e": "Debe ser altamente flexible; se cuestionan calidad y tiempo.",
  "r": [
   "El evolutivo busca salir lo antes posible.",
   "No los exige: cambian durante el desarrollo.",
   "Los admite."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "¿Cuántos criterios propone el artículo de Alexander y Davis para seleccionar un modelo de proceso?",
  "c": "20 criterios, en 5 categorías",
  "w": [
   "10 criterios, en 3 categorías",
   "14 criterios, en 4 categorías",
   "5 criterios, en 20 categorías"
  ],
  "e": "Las categorías son personal, problema, producto, recursos y organización; cada criterio tiene tres valores posibles.",
  "r": [
   "No coincide.",
   "No coincide.",
   "Se invierte el número de criterios y categorías."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "¿En qué único criterio basa la selección el modelo espiral de Boehm, según el artículo?",
  "c": "El riesgo",
  "w": [
   "El costo",
   "El tamaño del equipo",
   "La experiencia del usuario"
  ],
  "e": "Boehm reconoce la necesidad de selección pero usa un solo criterio; recién en 1990 hubo un conjunto completo de criterios.",
  "r": [
   "No es el criterio del espiral.",
   "No es el criterio del espiral.",
   "No es el criterio del espiral."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "¿Cuál es la fórmula del RATING de un modelo?",
  "c": "Σ Σ (s_ij × a_ij) sobre los 20 criterios y sus tres valores",
  "w": [
   "Σ (s_ij + a_ij)",
   "Producto de todos los s_ij",
   "Σ s_ij / Σ a_ij"
  ],
  "e": "s_ij indica qué valor aplica al proyecto; a_ij, la aplicabilidad del modelo (1 apropiado, 0 inapropiado). El mayor RATING gana.",
  "r": [
   "Se multiplican, no se suman.",
   "No es un producto total.",
   "No es un cociente."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "Proyecto: C1=(0,1,0), C2=(0,0,1), C3=(1,0,0). Modelo: C1=(1,1,0), C2=(0,0,1), C3=(1,1,1). ¿Cuál es el RATING?",
  "c": "3",
  "w": [
   "2",
   "4",
   "0"
  ],
  "e": "C1: 0·1+1·1+0·0 = 1; C2: 0·0+0·0+1·1 = 1; C3: 1·1+0·1+0·1 = 1. Total = 3.",
  "r": [
   "Cada criterio suma 1.",
   "La suma es 3.",
   "Hay coincidencias que suman."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "En la presentación, el ciclo de vida ROJO obtiene 18 y el AZUL 15. ¿Qué se recomienda?",
  "c": "Utilizar el ROJO (mayor puntaje)",
  "w": [
   "Utilizar el AZUL",
   "Combinar ambos al 50 %",
   "Descartar los dos"
  ],
  "e": "Se elige el modelo con mayor rating; igualmente debe documentarse la justificación.",
  "r": [
   "Tiene menor puntaje.",
   "El método elige el mayor.",
   "El método selecciona uno solo."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "En el ejemplo del proyecto POST, ¿qué modelos de nivel 3 y nivel 2 resultaron mejor puntuados?",
  "c": "Evolutivo (16) y prototipado híbrido (10)",
  "w": [
   "Convencional (8) y cascada (6)",
   "Incremental (8) y especificación operacional (3)",
   "Evolutivo (16) y cascada (6)"
  ],
  "e": "Aplicación nueva, problema complejo y cambiante, entrega rápida e interfaz crítica favorecen evolutivo y prototipado híbrido.",
  "r": [
   "Tienen puntajes menores.",
   "Tienen puntajes menores.",
   "La cascada tuvo 6; el prototipado híbrido, 10."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "En la jerarquía de modelos de proceso del artículo, ¿cuál es un modelo de nivel 3?",
  "c": "Incremental",
  "w": [
   "Cascada",
   "Prototipado híbrido",
   "Especificación operacional"
  ],
  "e": "Nivel 3: convencional, incremental, evolutivo. Nivel 2: cascada, prototipado híbrido, especificación operacional.",
  "r": [
   "Es de nivel 2.",
   "Es de nivel 2.",
   "Es de nivel 2."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "Diferencia entre modelo incremental y evolutivo (nivel 3):",
  "c": "En el evolutivo los productos intermedios se desarrollan antes de determinar el siguiente subconjunto; en el incremental se subdivide todo el problema antes",
  "w": [
   "Son idénticos",
   "El incremental no entrega productos intermedios",
   "El evolutivo subdivide todo el problema antes de empezar"
  ],
  "e": "Ambos delegan una parte del producto, pero el evolutivo define el siguiente subconjunto luego de ver los productos intermedios.",
  "r": [
   "No son idénticos.",
   "El incremental entrega productos que se usan operativamente.",
   "Eso es del incremental."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "Respecto de la experiencia de los usuarios en el dominio, el artículo indica que…",
  "c": "Cada extremo puede jugar a favor o en contra: novatos aceptan soluciones nuevas pero saben poco; expertos saben mucho pero pueden resistirse",
  "w": [
   "Los novatos son siempre preferibles",
   "Los expertos son siempre preferibles",
   "No influye en la elección"
  ],
  "e": "Es un criterio del grupo «personal» (c1) con valores novato, experimentado y experto.",
  "r": [
   "No es una regla.",
   "No es una regla.",
   "Es un criterio del modelo."
  ]
 },
 {
  "t": "Selección del MCV",
  "p": "¿Qué describe el criterio «perfil de financiación» (c14)?",
  "c": "La forma en que cambian los fondos en el tiempo: bajo-alto, alto-bajo o nivel",
  "w": [
   "Solo el monto total del presupuesto",
   "La cantidad de usuarios",
   "El tamaño del producto"
  ],
  "e": "Los recursos (financiación y personal) se evalúan por su perfil a lo largo del tiempo; aparte se evalúa su disponibilidad (escasa, adecuada, amplia).",
  "r": [
   "Eso es la disponibilidad de fondos.",
   "No es un criterio de recursos.",
   "Es un criterio de producto."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Cuáles son las 4 P de la gestión de proyectos de software?",
  "c": "Personal, producto, proceso y proyecto",
  "w": [
   "Planificación, producción, pruebas y presupuesto",
   "Personas, plazos, precios y productividad",
   "Producto, programa, proveedor y proceso"
  ],
  "e": "El orden no es arbitrario: primero las personas, porque la IS es un esfuerzo humano intenso.",
  "r": [
   "No son las P de la cátedra.",
   "No son las P de la cátedra.",
   "No son las P de la cátedra."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Qué es el People-CMM?",
  "c": "Un modelo de madurez de la capacidad de gestión de personal",
  "w": [
   "Una norma de pruebas",
   "Un modelo de estimación de costos",
   "Un lenguaje de modelado"
  ],
  "e": "Busca mejorar habilidades y atraer, motivar, desarrollar y conservar el talento.",
  "r": [
   "No es de pruebas.",
   "No es de estimación.",
   "No es de modelado."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Quiénes interactúan con el software una vez entregado a producción?",
  "c": "Los usuarios finales",
  "w": [
   "Los gestores superiores",
   "Los clientes",
   "Los profesionales"
  ],
  "e": "Los clientes especifican los requisitos; los usuarios finales usan el software.",
  "r": [
   "Definen aspectos de negocio.",
   "Especifican requisitos.",
   "Aportan capacidades técnicas."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "El modelo MOI de Weinberg para el liderazgo técnico significa…",
  "c": "Motivación, Organización, Ideas o innovación",
  "w": [
   "Medición, Objetivos, Indicadores",
   "Método, Orden, Información",
   "Mejora, Operación, Impacto"
  ],
  "e": "Motivar al personal técnico, amoldar procesos y fomentar la creatividad.",
  "r": [
   "No es el significado.",
   "No es el significado.",
   "No es el significado."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Qué equipo (Mantei) no tiene jefe permanente y decide por consenso?",
  "c": "Descentralizado democrático (DD)",
  "w": [
   "Descentralizado controlado (DC)",
   "Centralizado controlado (CC)",
   "Paradigma cerrado"
  ],
  "e": "En el DD se nombran coordinadores de tareas a corto plazo y la comunicación es horizontal.",
  "r": [
   "El DC tiene jefe definido y jefes secundarios.",
   "El CC tiene un jefe que resuelve problemas.",
   "El paradigma cerrado es jerárquico."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Qué organigrama de equipo es mejor para problemas difíciles y equipos que permanecerán juntos mucho tiempo?",
  "c": "Descentralizado democrático (DD)",
  "w": [
   "Centralizado controlado (CC)",
   "Descentralizado controlado (DC)",
   "Ninguno"
  ],
  "e": "El DD genera más moral, más satisfacción y mejores soluciones, aunque requiere más tiempo y comunicación.",
  "r": [
   "El CC es más rápido y apto para problemas sencillos.",
   "El DC es útil con alta modularidad y proyectos muy grandes.",
   "Sí hay uno más adecuado."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Qué paradigma de organización (Constantine) es excelente cuando se requiere innovación pero puede chocar con el rendimiento ordenado?",
  "c": "Aleatorio",
  "w": [
   "Cerrado",
   "Sincronizado",
   "Abierto"
  ],
  "e": "Depende de la iniciativa individual. El cerrado es jerárquico; el sincronizado compartimenta el problema; el abierto combina control e innovación.",
  "r": [
   "Es jerárquico y menos innovador.",
   "Se basa en la compartimentación natural.",
   "Combina control y creatividad con mucha comunicación."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "Según Jackman, ¿cuál es un factor de «toxicidad» de equipo?",
  "c": "Definición confusa de los roles, con falta de responsabilidad y acusaciones",
  "w": [
   "Equipos pequeños",
   "Revisiones técnicas formales",
   "Mucha comunicación informal"
  ],
  "e": "Los cinco: atmósfera frenética, alta frustración, procedimientos mal coordinados, roles confusos y continua exposición al fallo.",
  "r": [
   "No es una toxina.",
   "Son un antídoto (mecanismos de responsabilidad).",
   "Es valiosa según Kraut y Streeter."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "Según el estudio de Kraut y Streeter, ¿qué técnica de coordinación fue considerada la de mayor valor?",
  "c": "Las redes interpersonales (discusiones informales)",
  "w": [
   "Los documentos de ingeniería",
   "Las inspecciones de código",
   "Los informes de seguimiento de errores"
  ],
  "e": "Los documentos tuvieron más uso que valor percibido; las revisiones tempranas valieron más que las inspecciones de código.",
  "r": [
   "Tuvieron más uso que valor.",
   "Se valoraron menos que las revisiones tempranas.",
   "Son del enfoque formal impersonal."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "Las actividades sombrilla (protectoras o «cross»)…",
  "c": "Ocurren a lo largo de todo el proceso, sin importar el tamaño del software ni el marco elegido",
  "w": [
   "Se aplican solo al final",
   "Solo en proyectos grandes",
   "Reemplazan a las estructurales"
  ],
  "e": "Ejemplos: garantía de calidad, gestión de configuración y medición.",
  "r": [
   "Se aplican durante todo el proceso.",
   "Se aplican a todos.",
   "Son independientes de las estructurales."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "Del estudio de 250 proyectos (1998–2004) mostrado en la presentación, ¿qué porcentaje fue exitoso?",
  "c": "10 %",
  "w": [
   "70 %",
   "20 %",
   "50 %"
  ],
  "e": "El 70 % tuvo demora/exceso menor al 35 % y el 20 %, mayor al 35 %.",
  "r": [
   "Es el porcentaje con demora o exceso menor al 35 %.",
   "Es el porcentaje con demora o exceso mayor al 35 %.",
   "No corresponde."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "La regla 90-90 dice que…",
  "c": "El primer 90 % del sistema absorbe el 90 % del tiempo y esfuerzo, y el último 10 % se lleva el otro 90 %",
  "w": [
   "El 90 % de los proyectos fracasan",
   "El 90 % del código se reutiliza",
   "El 90 % de los errores están en el diseño"
  ],
  "e": "Es una referencia a proyectos particularmente difíciles.",
  "r": [
   "No es esa estadística.",
   "No es esa regla.",
   "No es esa regla."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "En el principio W5HH de Boehm, la pregunta «Where» se refiere a…",
  "c": "¿Dónde están situados organizacionalmente?",
  "w": [
   "¿Dónde se instalará el servidor?",
   "¿Dónde se desarrolla el proyecto?",
   "¿Dónde está el cliente?"
  ],
  "e": "Aclara que no todos los roles residen en el equipo: cliente, usuarios y otros directivos también tienen responsabilidades.",
  "r": [
   "No es la intención de la pregunta.",
   "No es la intención de la pregunta.",
   "No es la intención de la pregunta."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Cuáles son las preguntas del ámbito del software?",
  "c": "Contexto, objetivos de información, función y rendimiento",
  "w": [
   "Costo, tiempo y calidad",
   "Quién, cuándo y dónde",
   "Entradas, procesos y salidas del equipo"
  ],
  "e": "El ámbito debe ser unívoco, entendible y delimitado con datos cuantitativos; si no se puede delimitar una característica, es un riesgo principal.",
  "r": [
   "No son las preguntas del ámbito.",
   "Son del W5HH.",
   "No es la formulación."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "La Estructura Común de Proceso (ECP) se aplica…",
  "c": "A todos los proyectos, sin importar su tamaño, criticidad o tipo; varían las tareas, no la ECP",
  "w": [
   "Solo a proyectos grandes",
   "Solo a modelos lineales",
   "Solo si el cliente lo pide"
  ],
  "e": "Las actividades: comunicación con el cliente, planificación, análisis del riesgo, ingeniería, construcción y entrega, evaluación del cliente.",
  "r": [
   "Se aplica a todos.",
   "Funciona para lineales, iterativos, incrementales, evolutivos y otros.",
   "No depende del pedido del cliente."
  ]
 },
 {
  "t": "Las 4 P y equipos",
  "p": "¿Por qué se planean y controlan los proyectos de software?",
  "c": "Es la única manera conocida de gestionar la complejidad",
  "w": [
   "Porque lo exige la ley",
   "Para reducir el personal",
   "Para eliminar el mantenimiento"
  ],
  "e": "El gerente de proyecto es responsable de planificar, monitorear y controlar, con indicadores como alertas y semáforos.",
  "r": [
   "No es el motivo.",
   "No es el motivo.",
   "No es el motivo."
  ]
 },
 {
  "t": "Planificación",
  "p": "En la planificación, ¿qué es la «fecha resultante»?",
  "c": "La que surge de calcular el esfuerzo y la duración a partir del alcance y los recursos",
  "w": [
   "La fecha impuesta por el cliente",
   "La fecha de inicio del proyecto",
   "La fecha del último hito contractual"
  ],
  "e": "La <b>estipulada</b> la fija el cliente o la dirección; la <b>resultante</b> sale del cálculo. Si difieren, hay que negociar alcance, recursos o fecha.",
  "r": [
   "Esa es la fecha estipulada.",
   "No es la definición.",
   "No es la definición."
  ]
 },
 {
  "t": "Planificación",
  "p": "La EDT/WBS (Work Breakdown Structure) sirve para…",
  "c": "Descomponer el trabajo del proyecto en elementos cada vez más pequeños y manejables",
  "w": [
   "Asignar sueldos al personal",
   "Calcular el camino crítico directamente",
   "Definir el ciclo de vida"
  ],
  "e": "Es una descomposición jerárquica orientada a entregables que facilita estimar, asignar y controlar.",
  "r": [
   "No es su función.",
   "El camino crítico se calcula sobre el diagrama de red con dependencias y duraciones.",
   "El ciclo de vida se elige aparte."
  ]
 },
 {
  "t": "Planificación",
  "p": "En PERT, la estimación esperada de una tarea es…",
  "c": "E = (Eopt + 4·Em + Epes) / 6",
  "w": [
   "E = (Eopt + Em + Epes) / 3",
   "E = (Eopt + Epes) / 2",
   "E = Em × 6"
  ],
  "e": "Se pondera 4 veces el valor más probable (distribución beta). El desvío estándar es σ = (Epes − Eopt) / 6.",
  "r": [
   "Es un promedio simple, no PERT.",
   "Ignora el valor más probable.",
   "No es la fórmula."
  ]
 },
 {
  "t": "Planificación",
  "p": "Si Eopt = 6, Em = 9 y Epes = 18 días, ¿cuál es la estimación PERT?",
  "c": "10 días",
  "w": [
   "11 días",
   "9 días",
   "12 días"
  ],
  "e": "E = (6 + 4·9 + 18)/6 = 60/6 = 10. Con σ = (18−6)/6 = 2.",
  "r": [
   "Resultado erróneo.",
   "Es solo el más probable.",
   "Resultado erróneo."
  ]
 },
 {
  "t": "Planificación",
  "p": "Con Eopt = 6 y Epes = 18, ¿cuál es el desvío estándar σ?",
  "c": "2",
  "w": [
   "12",
   "6",
   "3"
  ],
  "e": "σ = (Epes − Eopt)/6 = 12/6 = 2.",
  "r": [
   "Es la diferencia sin dividir.",
   "Dividir por 2 no es la fórmula.",
   "Resultado erróneo."
  ]
 },
 {
  "t": "Planificación",
  "p": "La holgura de una actividad del camino crítico es…",
  "c": "Cero",
  "w": [
   "Igual a su duración",
   "La mayor de todo el proyecto",
   "Negativa siempre"
  ],
  "e": "El camino crítico es la secuencia de actividades sin holgura que determina la duración mínima del proyecto: cualquier retraso lo retrasa.",
  "r": [
   "No es la definición.",
   "Es al revés: las críticas tienen la menor.",
   "Negativa solo ante un conflicto de fechas."
  ]
 },
 {
  "t": "Planificación",
  "p": "¿Qué dice la ley de Brooks?",
  "c": "Agregar gente a un proyecto atrasado lo atrasa más",
  "w": [
   "Duplicar el personal duplica la velocidad",
   "Los proyectos se terminan siempre en fecha",
   "El último 10 % lleva el 90 % del tiempo"
  ],
  "e": "Se debe a la curva de aprendizaje y a que aumentan los canales de comunicación.",
  "r": [
   "Es lo contrario.",
   "No es la ley.",
   "Eso es la regla 90-90."
  ]
 },
 {
  "t": "Planificación",
  "p": "Distribución típica de esfuerzo «40/20/40» en un proyecto de software:",
  "c": "40 % análisis y diseño, 20 % codificación, 40 % pruebas",
  "w": [
   "40 % codificación, 20 % diseño, 40 % pruebas",
   "20 % análisis, 60 % codificación, 20 % pruebas",
   "33 % cada etapa"
  ],
  "e": "La codificación lleva relativamente poco; el trabajo intenso está antes (análisis/diseño) y después (pruebas).",
  "r": [
   "No coincide.",
   "No coincide.",
   "No coincide."
  ]
 },
 {
  "t": "Planificación",
  "p": "En una relación de dependencia Fin–Comienzo (FC)…",
  "c": "La tarea sucesora no puede comenzar hasta que termine la predecesora",
  "w": [
   "Ambas deben comenzar a la vez",
   "Ambas deben terminar a la vez",
   "La sucesora termina antes de que empiece la predecesora"
  ],
  "e": "FC es la relación «una vez finalizada la otra». CC = comienzo-comienzo (inician juntas); FF = fin-fin; CF = comienzo-fin.",
  "r": [
   "Eso es CC.",
   "Eso es FF.",
   "Eso se parece a CF."
  ]
 },
 {
  "t": "Planificación",
  "p": "La estimación paramétrica se basa en…",
  "c": "Una relación estadística entre variables históricas (p. ej., regresión con coeficiente R²)",
  "w": [
   "La opinión de un solo experto",
   "Dividir el trabajo en tareas",
   "El presupuesto disponible"
  ],
  "e": "Un R² cercano a 1 indica buen ajuste del modelo a los datos históricos.",
  "r": [
   "Eso es juicio experto.",
   "Eso es estimación ascendente.",
   "No es la base."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "¿Qué mide la estimación basada en puntos de función (PF)?",
  "c": "La funcionalidad entregada al usuario, independiente del lenguaje",
  "w": [
   "Las líneas de código físicas",
   "El número de programadores",
   "Las horas de prueba"
  ],
  "e": "Se cuentan entradas, salidas, consultas, archivos lógicos internos e interfaces externas y se ajustan por factores de complejidad.",
  "r": [
   "Eso es LDC.",
   "No es la medida.",
   "No es la medida."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "Ventaja principal de PF sobre LDC:",
  "c": "Es independiente del lenguaje de programación y puede estimarse temprano",
  "w": [
   "Es más exacto siempre",
   "No requiere datos históricos",
   "No necesita al usuario"
  ],
  "e": "LDC depende del lenguaje y de la habilidad del programador; PF se basa en el dominio de información.",
  "r": [
   "No es siempre más exacto.",
   "Sí requiere datos históricos para convertir a esfuerzo.",
   "Se basa en lo que ve el usuario."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "Ejemplo CAD de Pressman: ¿qué estimó el enfoque basado en LDC?",
  "c": "33.200 LDC, ≈54 persona-mes y ≈€431.000",
  "w": [
   "33.200 LDC, ≈46 persona-mes y ≈€230.000",
   "375 PF, ≈58 persona-mes y ≈€461.000",
   "≈53 persona-mes y ≈€300.000"
  ],
  "e": "LDC: 54 pm / €431K; PF (375 PF): 58 pm / €461K; basado en el proceso: 46 pm / €230K; promedio ≈53 pm.",
  "r": [
   "Esos son los datos del enfoque basado en el proceso.",
   "Esos son los datos de PF.",
   "Es el promedio de esfuerzo, no el costo de LDC."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "En la estimación basada en el proceso se estima…",
  "c": "El esfuerzo requerido para cada actividad del proceso",
  "w": [
   "Solo el número de PF",
   "Solo el costo del hardware",
   "El tiempo de respuesta del sistema"
  ],
  "e": "Se descompone en funciones y actividades del marco y se estima persona-mes por celda; luego se aplican tasas laborales.",
  "r": [
   "Eso es PF.",
   "No es el enfoque.",
   "No es el enfoque."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "En COCOMO II, el modelo de «composición de aplicaciones» usa…",
  "c": "Puntos objeto",
  "w": [
   "Líneas de código",
   "Puntos de caso de uso",
   "Horas hombre"
  ],
  "e": "COCOMO II es una jerarquía de modelos; el de composición de aplicación usa puntos objeto (y se ajusta por el % de reutilización: PON).",
  "r": [
   "Se usa en modelos posteriores.",
   "No es lo que usa.",
   "No es lo que usa."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "La ecuación de software de Putnam relaciona…",
  "c": "Esfuerzo, tamaño, tiempo de desarrollo y una constante de tecnología",
  "w": [
   "Solo costo y tamaño",
   "Defectos y pruebas",
   "Personal y salario"
  ],
  "e": "El libro la presenta como E = [LDC × B^0,333 / P]³ × (1/t⁴), simplificada como E = 180·B·t³ (t en años), y define el tiempo mínimo tmin = 8,14·(LDC/P)^0,43 (en meses).",
  "r": [
   "No es solo eso.",
   "No es el tema.",
   "No es el tema."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "En el árbol de decisión hacer/comprar del ejemplo, ¿qué opción tuvo menor costo esperado?",
  "c": "Comprar (≈€267.000)",
  "w": [
   "Construir",
   "Reutilizar",
   "Contratar externamente por completo"
  ],
  "e": "Se calcula el costo esperado ponderando probabilidades de escenarios (simple/difícil, mayores/menores cambios) y se elige el más bajo.",
  "r": [
   "No fue la de menor costo.",
   "No fue la de menor costo.",
   "No fue la de menor costo."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "La estimación de software se vuelve más fiable cuando…",
  "c": "Se usan varias técnicas y se comparan resultados",
  "w": [
   "Se usa solo una técnica",
   "Se estima una sola vez al inicio",
   "Se evitan los datos históricos"
  ],
  "e": "Pressman indica que, idealmente, las técnicas se aplican conjuntamente, usando cada una como comprobación de las otras.",
  "r": [
   "Una sola técnica da menos confianza.",
   "Se debe reestimar.",
   "Los históricos mejoran la estimación."
  ]
 },
 {
  "t": "Estimación (Pressman)",
  "p": "La estimación basada en LDC requiere…",
  "c": "Descomponer el software en funciones y estimar un valor optimista, probable y pesimista de cada una",
  "w": [
   "Contar solamente usuarios",
   "Conocer el lenguaje a usar sólo al final",
   "No tener datos históricos"
  ],
  "e": "Se calcula el valor esperado con PERT y se multiplica por la productividad histórica (LDC/pm).",
  "r": [
   "No es el procedimiento.",
   "El lenguaje influye en las LDC.",
   "Se apoya en históricos."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "En MS Project, una tarea de «duración fija» significa que…",
  "c": "La duración no cambia aunque se agreguen o quiten recursos",
  "w": [
   "El trabajo siempre es constante",
   "Las unidades no pueden cambiarse",
   "No puede tener predecesoras"
  ],
  "e": "El manual distingue tres tipos de tarea: <b>duración fija</b> (independiente del número de recursos), <b>unidades fijas</b> (fija fechas y recursos) y <b>trabajo fijo</b>.",
  "r": [
   "Eso es trabajo fijo.",
   "Eso es unidades fijas.",
   "No es cierto."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "Una restricción «Lo antes posible» (LAP/ASAP) implica que…",
  "c": "La tarea se programa lo más temprano que permitan sus predecesoras",
  "w": [
   "Debe terminar exactamente en una fecha",
   "No puede comenzar antes de una fecha dada",
   "Se programa lo más tarde posible"
  ],
  "e": "El manual lista las restricciones: debe finalizar a una fecha, lo antes posible (se realiza apenas se pueda), lo más tarde posible, etc.",
  "r": [
   "Eso es «debe terminar el».",
   "Eso es «no comenzar antes del».",
   "Eso es «lo más tarde posible»."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "Un recurso está «sobreasignado» cuando…",
  "c": "Se le asigna más trabajo del que puede realizar en su calendario/disponibilidad",
  "w": [
   "Tiene costo cero",
   "No tiene tareas",
   "Su tarifa es muy alta"
  ],
  "e": "En el manual el ejemplo marca sobreasignación cuando la carga supera las 8 horas diarias de trabajo, y luego se «nivela» la carga.",
  "r": [
   "No es sobreasignación.",
   "Sería un recurso ocioso.",
   "No es sobreasignación."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "¿Qué tipo de recurso es, por ejemplo, el papel o el cemento?",
  "c": "Material",
  "w": [
   "Trabajo",
   "Costo",
   "Duración"
  ],
  "e": "Trabajo: personas/equipos (horas). Material: consumibles (unidades). Costo: gastos fijos como viajes.",
  "r": [
   "Son personas o equipos.",
   "Son gastos como viáticos.",
   "No es un tipo de recurso."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "La vinculación «Comienzo a Comienzo (CC)» entre A y B significa que…",
  "c": "B puede comenzar cuando A comienza",
  "w": [
   "B comienza cuando A termina",
   "B termina cuando A termina",
   "B termina cuando A comienza"
  ],
  "e": "FC: fin a comienzo (por defecto); FF: fin a fin; CF: comienzo a fin. Se pueden agregar retardos (+) o adelantos (−).",
  "r": [
   "Eso es FC.",
   "Eso es FF.",
   "Eso es CF."
  ]
 },
 {
  "t": "MS Project 2010",
  "p": "En MS Project, la predecesora «4CC+1d» indica que la tarea…",
  "c": "Inicia cuando inicia la tarea 4, con un día de retraso",
  "w": [
   "Inicia un día antes de que termine la tarea 4",
   "Termina cuando termina la tarea 4, más un día",
   "Dura un día más que la tarea 4"
  ],
  "e": "CC = comienzo a comienzo; el signo + indica retraso (el − sería adelanto), seguido de cantidad y unidad de tiempo.",
  "r": [
   "Eso sería una relación FC con adelanto (4FC-1d).",
   "Eso sería FF.",
   "La duración no se define con la predecesora."
  ]
 }
];
