let admin = () => location.replace(`${window.origin}/admin`);
let results = () => location.replace(`${window.origin}/results`);
let home = () => location.replace(window.origin.replace("results",""));

$('.sv-footer__complete-btn').css('value', 'Completar');

Survey
    .StylesManager
    .applyTheme("modern");

//var json = {surveyId: '94387b63-0439-4f57-8270-9dc86d876319'}
var json = {
    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Escudobuappositivo2.png",
    "locale": "es",
    "pages": [
        {
        "name": "page1",
        "elements": [
        {
        "type": "html",
        "name": "question2",
        "html": {
            "default": "<h1>BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA.</h1>\n<br><h2>CONSENTIMIENTO INFORMADO (ADULTOS).</h2>\n<br>\n<div id='consentId'>\n<h3>Nombre del estudio</h3>\n<p>Evaluación de los niveles de depresión y ansiedad por confinamiento, en estudiantes universitarios y docentes de la FMBUAP, relacionada a la pandemia de COVID-19.</p>\n<h3>Número de registro</h3>\n<p>REGISTRO VIEP PENDIENTE.</p>\n<h3>Justificación y objetivo del estudio</h3>\n<p>La situación a nivel mundial ocasionada por la enfermedad de COVID-19, ha generado un\ngran impacto en las personas, el presente estudio pretende evaluar los niveles de depresión\ny ansiedad, en estudiantes universitarios y docentes de la FMBUAP , debido al\nconfinamiento relacionada a la pandemia.</p>\n<h3>Procedimientos</h3>\n<p>Se aplicarán instrumentos que evalúan ansiedad, depresión y estrés, actividad física, conductas asociadas al confinamiento y medidas preventivas.</p>\n<h3>Posibles riesgos y molestias</h3>\n<p>Vulnerabilidad al responder con honestidad las preguntas de los instrumentos aplicados. Hastío al contestar las preguntas.</p>\n<h3>Posibles beneficios que recibirá al participar en el estudio</h3>\n<p>El participante conocerá sus niveles de ansiedad, estrés y depresión, de así conceder, se\npodrá canalizar al Departamento de Psiquiatría de la Facultad de medicina para su\nevaluación y posterior seguimiento buscando la mejoría del estado de salud mental del encuestado y/o revertir daños a la misma.</p>\n<h3>Confidencialidad</h3>\n<p>La información de los resultados es estrictamente confidencial y estará resguardada por el equipo de salud. Será utilizada para este único estudio de investigación.</p>\n<h3>Participación o retiro</h3>\n<p>Usted podrá retirarse sin ninguna consecuencia en el momento que lo decida (cuestionarios incompletos serán eliminados del estudio).</p>\n<h3>Privacidad y confidencialidad</h3>\n<p>Nuestra responsabilidad y obligación como investigadores será el respetar su privacidad y\nmantener la confidencialidad de la información proporcionada que se derive de su participación en el estudio. Siguiendo el Artículo 14.1 de la ley federal de protección de\ndatos personales y siguiendo los lineamientos de la convención de Helsinki.</p>\n<h3>En caso de colección de material biológico (si aplica)</h3>\n<p>No colectaremos material biológico.</p>\n</div>\n<h3>En caso de dudas o aclaraciones relacionadas con el estudio podrá dirigirse a:</h3><br>\n<h4>Investigador Responsable</h4>\n<p><u>D.C. Martha Elba González Mejía</u>. Departamento de Genética\nde la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100519099. WhatsApp: <a>22-25-24-44-97</a>. Email: <a>elba.gonzalezmejia@gmail.com</a></p>\n<h4>Colaboradores</h4>\n<p><u>D.C Ricardo Pérez Fuentes</u>. Departamento de Metodología de la\ninvestigación de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100170644. WhatsApp: <a>22-21-94-57-58</a>. Email: <a>rycardoperez@hotmail.com</a></p>\n<p><u>Denilson Xipe Pacheco Tobón</u>. Alumno de la Licenciatura en Medicina de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201612501. WhatsApp: <a>22-26-70-05-65</a>. Email: <a>xipept@gmail.com</a></p>\n<p><u>Claudia Arellano Ramírez</u>. Alumna de la Licenciatura en Medicina de la de Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201605314. Email: <a>clau_a_r@outlook.com</a></p>",
            "es": "<h1>BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA.</h1>\n<br>\n<h3>Esta es una invitación a participar en un proyecto de investigación, que se está desarrollando en la Facultad de Medicina BUAP, por parte de alumnos y docentes. Esta participación se desarrollará a  través de un cuestionario en línea que nos permita recopilar información valiosa sobre nuestra población estudiantil y docente.</h3>"
        }
        },
        {
        "type": "boolean",
        "name": "firstMessagge",
        "title": {
            "es": "Estoy de acuerdo."
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": {
            "es": "Sí"
        },
        "labelFalse": {
            "es": "No"
        }
        },
        {
        "type": "html",
        "name": "consentText",
        "visibleIf": "{firstMessagge} = true",
        "html": {
            "es": "<h2>CONSENTIMIENTO INFORMADO.</h2>\n<br>\n<div id='consentId'>\n<h3>Nombre del estudio</h3>\n<p>Evaluación de los niveles de depresión y ansiedad por confinamiento, en estudiantes universitarios y docentes de la FMBUAP, relacionada a la pandemia de COVID-19.</p>\n<h3>Número de registro</h3>\n<p>REGISTRO VIEP PENDIENTE.</p>\n<h3>Justificación y objetivo del estudio</h3>\n<p>La situación a nivel mundial ocasionada por la enfermedad de COVID-19, ha generado un\ngran impacto en las personas, el presente estudio pretende evaluar los niveles de depresión\ny ansiedad, en estudiantes universitarios y docentes de la FMBUAP , debido al\nconfinamiento relacionado a la pandemia, a partir de marzo de 2020 a la fecha.</p>\n<h3>Procedimientos</h3>\n<p>Se aplicarán instrumentos que evalúan ansiedad, depresión y estrés, actividad física, conductas asociadas al confinamiento y medidas preventivas.</p>\n<h3>Posibles riesgos y molestias</h3>\n<p>Vulnerabilidad al responder con honestidad las preguntas de los instrumentos aplicados y/o hastío al contestar las preguntas.</p>\n<h3>Posibles beneficios que recibirá al participar en el estudio</h3>\n<p>El participante conocerá sus niveles de ansiedad, estrés y depresión, de así conceder, se\npodrá canalizar al Departamento de Psiquiatría de la Facultad de medicina para su\nevaluación y posterior seguimiento buscando la mejoría del estado de salud mental del encuestado y/o revertir daños a la misma.</p>\n<h3>Confidencialidad</h3>\n<p>La información de los resultados es estrictamente confidencial y estará resguardada por el equipo de investigadores. La información será utilizada para este único estudio de investigación.</p>\n<h3>Participación o retiro</h3>\n<p>Usted podrá retirarse sin ninguna consecuencia en el momento que lo decida (cuestionarios incompletos serán eliminados del estudio).</p>\n<h3>Privacidad y confidencialidad</h3>\n<p>Nuestra responsabilidad y obligación como investigadores será el respetar su privacidad y\nmantener la confidencialidad de la información proporcionada que se derive de su participación en el estudio. Siguiendo el Artículo 14.1 de la ley federal de protección de\ndatos personales y siguiendo los lineamientos de la convención de Helsinki.</p>\n<h3>En caso de colección de material biológico</h3>\n<p>No colectaremos material biológico.</p>\n</div>\n<h3>En caso de dudas o aclaraciones relacionadas con el estudio podrá dirigirse a:</h3><br>\n<h4>Investigador Responsable</h4>\n<p><u>D.C. Martha Elba González Mejía</u>. Departamento de Genética\nde la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100519099. WhatsApp: <a>22-25-24-44-97</a>. Email: <a>elba.gonzalezmejia@gmail.com</a></p>\n<h4>Colaboradores</h4>\n<p><u>D.C Ricardo Pérez Fuentes</u>. Departamento de Metodología de la\ninvestigación de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100170644. WhatsApp: <a>22-21-94-57-58</a>. Email: <a>rycardoperez@hotmail.com</a></p>\n<p><u>Denilson Xipe Pacheco Tobón</u>. Alumno de la Licenciatura en Medicina de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201612501. WhatsApp: <a>22-26-70-05-65</a>. Email: <a>xipept@gmail.com</a></p>\n<p><u>Claudia Arellano Ramírez</u>. Alumna de la Licenciatura en Medicina de la de Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201605314. Email: <a>clau_a_r@outlook.com</a></p>"
        }
        },
        {
        "type": "boolean",
        "name": "consent",
        "visibleIf": "{firstMessagge} = true",
        "title": {
            "default": "Sí autorizo participar y que se utilicen mis datos, así como la información derivada en estricta confidencialidad.",
            "es": "Participaré y autorizo que se utilicen mis datos, así como la información derivada de estos en estricta confidencialidad."
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "imageText",
        "visibleIf": "{consent} = true",
        "html": {
            "es": "<h3>A continuación tome una foto de su nombre completo con su firma como se muestra en la siguiente imagen</h3>"
        }
        },
        {
        "type": "image",
        "name": "imageExample",
        "visibleIf": "{consent} = true",
        "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlQRNA4UBgFEmIXNhDM4-COeYMucr3iaRw5w&usqp=CAU"
        },
        {
        "type": "file",
        "name": "image",
        "visibleIf": "{consent} = true",
        "title": {
            "default": "Tome una foto de su firma con su nombre completo.",
            "es": "Nombre y firma"
        },
        "hideNumber": true,
        "isRequired": true,
        "maxSize": 0
        },
        {
        "type": "html",
        "name": "idMessage",
        "visibleIf": "{consent} = true",
        "html": "<h2>Por favor ingrese los siguientes datos para generar un ID de registro.</h2>"
        },
        {
        "type": "html",
        "name": "thankYouMessage",
        "visibleIf": "{consent} = false or {firstMessagge} = false",
        "html": {
            "default": "<b style='font-size:30px'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. </b>",
            "es": "<b style='font-size:30px'>Muchas gracias por el tiempo invertido. </b>"
        }
        },
        {
        "type": "text",
        "name": "facultyYear",
        "visibleIf": "{consent} = true",
        "title": "Año de ingreso a la facultad de medicina (generación)",
        "hideNumber": true,
        "isRequired": true,
        "placeHolder": "AAAA"
        },
        {
        "type": "text",
        "name": "name",
        "visibleIf": "{consent} = true",
        "title": {
            "default": "Nombre completo",
            "es": "Iniciales de su nombre"
        },
        "description": {
            "es": "Ejemplo: Pablo Ramírez González - PRG"
        },
        "hideNumber": true,
        "isRequired": true,
        "size": 50,
        "placeHolder": {
            "default": "Pepito Gonzáles Pérez",
            "es": " "
        }
        },
        {
        "type": "html",
        "name": "generalData",
        "visibleIf": "{name} notempty",
        "html": "<h1>DATOS GENERALES</h1><br>\n<h2>Por favor contesta las siguientes preguntas.</h2>"
        },
        {
        "type": "text",
        "name": "age",
        "visibleIf": "{name} notempty",
        "title": "Edad",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "number",
        "min": "0",
        "max": "100",
        "placeHolder": "¿Cuántos años tiene?"
        },
        {
        "type": "radiogroup",
        "name": "sex",
        "visibleIf": "{name} notempty",
        "title": "Sexo",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Masculino",
            "text": "Masculino"
            },
            {
            "value": "Femenino",
            "text": "Femenino"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "civilStatus",
        "visibleIf": "{name} notempty",
        "title": "Estado civil",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Soltero (a)",
            "text": "Soltero (a)"
            },
            {
            "value": "Casado (a)",
            "text": "Casado (a)"
            },
            {
            "value": "Divorciado (a)",
            "text": "Divorciado (a)"
            },
            {
            "value": "Unión Libre",
            "text": "Unión Libre"
            }
        ],
        "otherText": "Unión libre"
        },
        {
        "type": "boolean",
        "name": "kids",
        "visibleIf": "{name} notempty",
        "title": {
            "default": "¿Tienes hijos?",
            "es": "¿Tiene hijos?"
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "dropdown",
        "name": "state",
        "visibleIf": "{name} notempty",
        "title": "Estado de residencia",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Aguascalientes",
            "text": "Aguascalientes"
            },
            {
            "value": "Baja California",
            "text": "Baja California"
            },
            {
            "value": "Baja California Sur",
            "text": "Baja California Sur"
            },
            {
            "value": "Campeche",
            "text": "Campeche"
            },
            {
            "value": "Chiapas",
            "text": "Chiapas"
            },
            {
            "value": "Chihuahua",
            "text": "Chihuahua"
            },
            {
            "value": "Ciudad de México",
            "text": "Ciudad de México"
            },
            {
            "value": "Coahuila",
            "text": "Coahuila"
            },
            {
            "value": "Colima",
            "text": "Colima"
            },
            {
            "value": "Durango",
            "text": "Durango"
            },
            {
            "value": "Guanajuato",
            "text": "Guanajuato"
            },
            {
            "value": "Guerrero",
            "text": "Guerrero"
            },
            {
            "value": "Hidalgo",
            "text": "Hidalgo"
            },
            {
            "value": "Jalisco",
            "text": "Jalisco"
            },
            {
            "value": "Estado de México",
            "text": "Estado de México"
            },
            {
            "value": "Michoacán",
            "text": "Michoacán"
            },
            {
            "value": "Morelos",
            "text": "Morelos"
            },
            {
            "value": "Nayarit",
            "text": "Nayarit"
            },
            {
            "value": "Nuevo León",
            "text": "Nuevo León"
            },
            {
            "value": "Oaxaca",
            "text": "Oaxaca"
            },
            {
            "value": "Puebla",
            "text": "Puebla"
            },
            {
            "value": "Querétaro",
            "text": "Querétaro"
            },
            {
            "value": "Quintana Roo",
            "text": "Quintana Roo"
            },
            {
            "value": "San Luis Potosí",
            "text": "San Luis Potosí"
            },
            {
            "value": "Sinaloa",
            "text": "Sinaloa"
            },
            {
            "value": "Sonora",
            "text": "Sonora"
            },
            {
            "value": "Tabasco",
            "text": "Tabasco"
            },
            {
            "value": "Tamaulipas",
            "text": "Tamaulipas"
            },
            {
            "value": "Tlaxcala",
            "text": "Tlaxcala"
            },
            {
            "value": "Veracruz",
            "text": "Veracruz"
            },
            {
            "value": "Yucatán",
            "text": "Yucatán"
            },
            {
            "value": "Zacatecas",
            "text": "Zacatecas"
            }
        ],
        "otherText": "Ciudad de México"
        },
        {
        "type": "text",
        "name": "municipality",
        "visibleIf": "{name} notempty",
        "title": "Municipio",
        "hideNumber": true,
        "isRequired": true,
        "placeHolder": "Nombre completo del municipio donde vive"
        },
        {
        "type": "radiogroup",
        "name": "typeOfResidence",
        "visibleIf": "{name} notempty",
        "title": "Tipo de lugar de residencia (en este momento)",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Urbano",
            "text": "Urbano"
            },
            {
            "value": "Rural",
            "text": "Rural"
            }
        ]
        },
        {
        "type": "text",
        "name": "email",
        "visibleIf": "{name} notempty",
        "title": "Correo electrónico",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "email",
        "placeHolder": "Introduzca un correo electrónico válido que use con frecuencia"
        },
        {
        "type": "radiogroup",
        "name": "occupation",
        "visibleIf": "{name} notempty",
        "title": "Seleccione la opción que mejor le describa",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Alumno",
            "text": "Alumno activo de la Facultad de medicina BUAP"
            },
            {
            "value": "MIP",
            "text": "MIP activo de la Facultad de medicina BUAP"
            },
            {
            "value": "MPSS",
            "text": "MPSS activo de la Facultad de medicina BUAP"
            },
            {
            "value": "Docente",
            "text": "Docente activo de la Facultad de medicina BUAP"
            }
        ],
        "otherText": "Unión libre"
        },
        {
        "type": "dropdown",
        "name": "semester",
        "visibleIf": "{occupation} = 'Alumno'",
        "title": "Indica el semestre que cursaste durante el periodo PRIMAVERA 2020",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "1ro",
            "text": "Primero"
            },
            {
            "value": "2do",
            "text": "Segundo"
            },
            {
            "value": "3er",
            "text": "Tercero"
            },
            {
            "value": "4to",
            "text": "Cuarto"
            },
            {
            "value": "5to",
            "text": "Quinto"
            },
            {
            "value": "6to",
            "text": "Sexto"
            },
            {
            "value": "7mo",
            "text": "Séptimo"
            },
            {
            "value": "8vo",
            "text": "Octavo"
            },
            {
            "value": "9no",
            "text": "Noveno"
            },
            {
            "value": "10mo",
            "text": "Décimo"
            }
        ]
        },
        {
        "type": "boolean",
        "name": "worked",
        "visibleIf": "{occupation} = 'Alumno'",
        "title": "¿Trabajó además de tomar clases en línea?",
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "radiogroup",
        "name": "seriousWorkProblems",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente'] or {worked} = true and {occupation} notempty",
        "title": "¿Ha tenido problemas laborales graves?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "workDifficulties",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente']",
        "title": "¿Ha tenido dificultades en el trabajo?",
        "description": {
            "default": "Relacionados con el desplazamiento, cambios de horarios, funciones a desempeñar, problemas con compañeros o superiores, problemas con clientes (pacientes o alumnos), etc.",
            "es": "Relacionados con el desplazamiento, cambios de horarios, funciones a desempeñar, problemas con compañeros o superiores, problemas con pacientes o alumnos, etc."
        },
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "accessToInternetAndDevices_Doctor",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente'] and {workDifficulties} notempty",
        "title": "El acceso a internet y dispositivos electrónicos como computadora, tablet, celular etc. para impartir clases en línea fue:",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Difícil de obtener",
            "text": "Difícil de obtener"
            },
            {
            "value": "Fácil de obtener",
            "text": "Fácil de obtener"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "accessToInternetAndDevices_Student",
        "visibleIf": "{worked} notempty",
        "title": "El acceso a internet y dispositivos electrónicos como computadora, tablet, celular etc. para tomar clases en línea fue:",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Difícil de obtener",
            "text": "Difícil de obtener"
            },
            {
            "value": "Fácil de obtener",
            "text": "Fácil de obtener"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "academicPerformance",
        "visibleIf": "{worked} notempty",
        "title": "¿Cómo fue tu rendimiento académico en el periodo pasado (formato en línea) respecto a otros semestres?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Tuve menor aprovechamiento",
            "text": "Tuve menor aprovechamiento"
            },
            {
            "value": "Tuve el mismo aprovechamiento",
            "text": "Tuve el mismo aprovechamiento"
            },
            {
            "value": "Tuve mejor aprovechamiento",
            "text": "Tuve mejor aprovechamiento"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "difficultiesToStudy",
        "visibleIf": "{worked} notempty",
        "title": "¿Ha tenido dificultades en los estudios?",
        "description": "Dificultades para estudiar, falta de concentración, bajo rendimiento al realizar exámenes, etc.",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "html",
        "name": "indication_1",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Por favor lea las siguientes afirmaciones y seleccione qué grado le ha ocurrido a usted esa afirmación durante la semana pasada.</h2>"
        },
        {
        "type": "radiogroup",
        "name": "pt1_1",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Me ha costado mucho descargar la tensión.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_2",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Me di cuenta que tenía la boca seca.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_3",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "No podía sentir ningún sentimiento positivo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_4",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Se me hizo difícil respirar.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_5",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Se me hizo difícil tomar la iniciativa para hacer cosas.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_6",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Reaccioné exageradamente en ciertas situaciones.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_7",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Sentí que mis manos temblaban.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_8",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "He sentido que estaba gastando una gran cantidad de energía.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_9",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_10",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "He sentido que no había nada que me ilusionara.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_11",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Me he sentido inquieto.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_12",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Se me hizo difícil relajarme.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_13",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Me sentí triste y deprimido.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_14",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "No toleré nada que no me permitiera continuar con lo que estaba haciendo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_15",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Sentí que estaba al punto de pánico.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_16",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "No me pude entusiasmar por nada.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_17",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Sentí que valía muy poco como persona.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_18",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "He tendido a sentirme enfadado con facilidad.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_19",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_20",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Tuve miedo sin razón.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_21",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevices_Doctor} notempty",
        "title": "Sentí que la vida no tenía ningún sentido.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "html",
        "name": "indication_2",
        "visibleIf": "{pt1_21} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Las siguientes preguntas se refieren al tiempo que usted destinó a estar físicamente activo en los últimos 7 días.</h2>\n<br><h4><u>Por favor</u> responda a cada pregunta aún si no se considera una persona activa. Por favor, piense acerca de las actividades que realiza en su trabajo, como parte de sus tareas en el hogar, jardín, moviéndose de un lugar a otro, o en su tiempo libre para la recreación, el ejercicio o el deporte.</h4>"
        },
        {
        "type": "radiogroup",
        "name": "typeOfActivity",
        "visibleIf": "{pt1_21} notempty",
        "title": "Tipo de actividad que realiza",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Actividad física intensa",
            "text": "Actividad física intensa"
            },
            {
            "value": "Actividad física moderada",
            "text": "Actividad física moderada"
            },
            {
            "value": "Caminatas",
            "text": "Caminatas"
            },
            {
            "value": "Sentado (nula actividad física)",
            "text": "Sentado (nula actividad física)"
            }
        ]
        },
        {
        "type": "html",
        "name": "intensePhysicActivity",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "html": "<h2>Actividad física intensa</h2><br>\n<h3>Se refieren a aquellas que implican un esfuerzo físico intenso y\nque lo hacen respirar mucho más intensamente que lo normal. Piense solo en aquellas actividades físicas que realizó durante por lo menos 10 minutos seguidos.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Intense_1",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "title": "Durante los últimos 7 días, ¿En cuántos realizó actividades físicas intensas tales como levantar pesas, clavar, hacer ejercicios aeróbicos o andar rápido en bicicleta?",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Intense_2",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas en total dedicó a una actividad física intensa en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "ModeratedPhysicActivity",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "html": "<h2>Actividad física moderada</h2><br>\n<h3>Son aquellas que requieren un esfuerzo físico moderado que lo hace respirar algo más intensamente que lo normal. Piense en aquellas actividades\nfísicas que realizó durante por lo menos 10 minutos seguidos.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Moderated_1",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "title": "Durante los últimos 7 días, ¿En cuántos días hizo actividades físicas moderadas como transportar pesos livianos, andar en bicicleta a velocidad regular, jugar tenis? No incluya caminar.",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Moderated_2",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas en total dedicó a una actividad física moderada en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "hike",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "html": "<h2>Caminata</h2><br>\n<h3>Esto incluye caminar en el trabajo o en la casa, para trasladarse de un lugar a\notro, o cualquier caminata que usted podría hacer solamente para recreación, deporte,\nejercicio u ocio.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Hike_1",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "title": "Durante los últimos 7 días, ¿En cuántos días caminó por lo menos 10 minutos seguidos?",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Hike_2",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas dedicó a caminar en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "seated",
        "visibleIf": "{typeOfActivity} = 'Sentado (nula actividad física)'",
        "html": "<h2>Sentado</h2><br>\n<h3>Esto incluye el tiempo dedicado al trabajo, en la casa, clase, durante tiempo libre. Puede incluir el tiempo que pasó sentado en el escritorio, visitando a un amigo, leyendo, viajando en bus, sentado o recostado mirando televisión.</h3>"
        },
        {
        "type": "text",
        "name": "pt2_Seated_1",
        "visibleIf": "{typeOfActivity} = 'Sentado (nula actividad física)'",
        "title": {
            "es": "Durante los últimos 7 días, ¿Cuántas horas pasó sentado durante un día hábil?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "indication_3",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>A continuación se indican varias conductas relacionadas con periodo de confinamiento y el coronavirus. Por favor conteste seleccionando Sí o No, según sea su caso.</h2>"
        },
        {
        "type": "boolean",
        "name": "pt3_1",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha salido habitualmente de casa (su lugar de residencia actual) por cuestiones laborales?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_2",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha dormido más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_3",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha visto la TV más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_4",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha practicado ejercicio físico de forma regular?",
        "description": "3 o más días a la semana.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_5",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha utilizado las redes sociales más que antes?",
        "description": "WhatsApp, Instagram, Facebook, Twitter, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_6",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Han cambiado mucho sus rutinas",
        "description": "Horas de acostarse y levantarse, comer/cenar, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_7",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha utilizado internet más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_8",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha dedicado más tiempo que antes a ver películas, leer, o jugar a videojuegos?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_9",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha aprovechado para realizar actividades en casa para las que antes no disponía de tiempo?",
        "description": "3 o más días a la semana.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_10",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha mantenido sus cuidados personales habituales?",
        "description": "Aseo personal, vestirse, arreglarse, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "indication_4",
        "visibleIf": "{pt3_10} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Estas son algunas de las conductas para evitar el contagio del coronavirus. Por favor conteste seleccionando Sí o No, según sea su caso.</h2>"
        },
        {
        "type": "radiogroup",
        "name": "useOfMask",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Utiliza siempre o casi siempre cubrebocas cuando sale de casa?",
        "isRequired": true,
        "choices": [
            {
            "value": "Siempre",
            "text": "Siempre"
            },
            {
            "value": "Casi siempre",
            "text": "Casi siempre"
            },
            {
            "value": "No uso",
            "text": "No uso"
            }
        ]
        },
        {
        "type": "imagepicker",
        "name": "typeOfMask",
        "visibleIf": "{pt3_10} notempty and {useOfMask} anyof ['other', 'item2', 'Siempre', 'Casi siempre']",
        "title": "Seleccione qué tipo de cubrebocas utiliza",
        "description": {
            "es": "(Quirúrgico, Neopreno, KN95, Tela)"
        },
        "isRequired": true,
        "choices": [
            {
            "value": "Quirúrgico",
            "text": {
            "default": "Tela",
            "es": "Quirúrgico"
            },
            "imageLink": "https://resources.claroshop.com/medios-plazavip/mkt/5e9f69756401d_cubre-azul-1jpg.jpg"
            },
            {
            "value": "Neopreno",
            "text": "Neopreno",
            "imageLink": "https://www.soriana.com/medias/sys_master/images/images/h15/h4e/9120655573022/7506392815510-A-300x300.jpg"
            },
            {
            "value": "KN95",
            "text": "KN95",
            "imageLink": "https://resources.claroshop.com/medios-plazavip/mkt/5ea7503991c23_300109-800-2jpg.jpg"
            },
            {
            "value": "Tela",
            "text": {
            "es": "Tela"
            },
            "imageLink": "https://images-na.ssl-images-amazon.com/images/I/71LYJPLi-uL._AC_UL320_SR214,320_.jpg"
            }
        ]
        },
        {
        "type": "boolean",
        "name": "pt4_1",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Utiliza siempre o casi siempre guantes cuando sale de casa?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_2",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Mantiene siempre o casi siempre la distancia de seguridad con otras personas fuera de casa (al menos 2 metros)?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_3",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Cree que se lava o desinfecta las manos con excesiva frecuencia?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_4",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Desinfecta habitualmente los objetos y superficies con gel desinfectante, jabón, alcohol, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_5",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Toma precauciones habitualmente al llegar del supermercado, lavando los alimentos, desinfectando el teléfono celular o las llaves, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_6",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Se protege habitualmente al tocar zonas de posible contagio, como manijas, ascensores, lectores de tarjetas de crédito, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "indication_5",
        "visibleIf": "{pt4_6} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>¿Ha perturbado su vida el coronavirus o el confinamiento? Indique la frecuencia con\nque le ha ocurrido</h2>"
        },
        {
        "type": "radiogroup",
        "name": "pt5_1",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Ha tenido discusiones o conflictos con sus familiares?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_2",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder ver a algunos de sus familiares que veía habitualmente?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_3",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder ver a sus amigos?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_4",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder realizar actividades de ocio fuera de casa (viajar, salir, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_5",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Ha tenido problemas para realizar actividades de ocio en casa (leer, escribir, ver películas, videojuegos, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_6",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder realizar actividades físicas fuera de casa (deporte, ejercicio físico, ir al campo, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_7",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder salir de casa salvo para cosas muy necesarias?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_8",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder disponer de cosas que necesitaba?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "text",
        "name": "emailConfirmation",
        "visibleIf": "{pt5_8} notempty",
        "title": {
            "default": "Correo electrónico",
            "es": "Confirmación de correo electrónico"
        },
        "hideNumber": true,
        "isRequired": true,
        "inputType": "email",
        "placeHolder": {
            "default": "Introduzca un correo electrónico válido que use con frecuencia",
            "es": "Introduzca nuevamente su correo electrónico"
        }
        },
        {
        "type": "html",
        "name": "question1",
        "visibleIf": "{emailConfirmation} notempty",
        "html": {
            "default": "<b style='font-size:30px;'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. En breve se le mostrará el ID con el que fue registrado junto con su número de folio.</b>",
            "es": "<b style='font-size:30px;'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. En breve se le mostrará el ID con el que fue registrado.</b>"
        }
        }
        ]
        }
    ]
    };

window.survey = new Survey.Model(json);

// Capitalize each word
let capitalizeWords = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// Create an ID
function getId(name, facultyYear) {
    let initials = capitalizeWords(name).split(' ');
    let abrev;
    if (!(initials.length <= 2)) {
        try {
            if (initials.length > 3)
                abrev = initials[2][0] + initials[3][0] + initials[0][0] + initials[1][0];
            else
                abrev = initials[1][0] + initials[2][0] + initials[0][0] + '0';
        } catch (error) {
            console.log(error);
            location.replace(`${window.origin}/?name`);
        }
    }
    let surveyId = facultyYear + abrev + '_';
    return surveyId;
}

survey
    .onComplete
    .add(function (result) {
        console.log(JSON.stringify(result.data, null, 3));
        let imageBase64 = result.data.image[0].content;
        let surveyId = getId(result.data.name, result.data.facultyYear);

        // Render and Send Data
        $('#form').removeClass('hidden');
        $('#result').removeClass('hidden');
        $('#yearAndName').html(`${surveyId}`);
        $('.user').html(`
            <input name='name' type='text' value='${result.data.name}' hidden/>
            <input name='age' type='text' value='${result.data.age.toString()}' hidden/>
            <input name='sex' type='text' value='${result.data.sex}' hidden/>
            <input name='kids' type='text' value='${result.data.kids === false ? 'No' : 'Sí'}' hidden/>
            <input name='state' type='text' value='${result.data.state}' hidden/>
            <input name='municipality' type='text' value='${result.data.municipality}' hidden/>
            <input name='typeOfResidence' type='text' value='${result.data.typeOfResidence}' hidden/>
            <input name='facultyYear' type='text' value='${result.data.facultyYear}' hidden/>
            <input name='civilStatus' type='text' value='${result.data.civilStatus}' hidden/>
            <input name='email' type='email' value='${result.data.email}' hidden/>
            <input name='occupation' type='text' value='${result.data.occupation}' hidden/>
            <input name='semester' type='text' value='${result.data.semester}' hidden/>
            <input name='worked' type='text' value='${result.data.worked === false ? 'No' : 'Sí'}' hidden/>
            <input name='seriousWorkProblems' type='text' value='${result.data.seriousWorkProblems}' hidden/>
            <input name='workDifficulties' type='text' value='${result.data.workDifficulties}' hidden/>
            <input name='accessToInternetAndDevices_Doctor' type='text' value='${result.data.accessToInternetAndDevices_Doctor}' hidden/>
            <input name='accessToInternetAndDevices_Student' type='text' value='${result.data.accessToInternetAndDevices_Student}' hidden/>
            <input name='academicPerformance' type='text' value='${result.data.academicPerformance}' hidden/>
            <input name='difficultiesToStudy' type='text' value='${result.data.difficultiesToStudy}' hidden/>
            <input name='typeOfActivity' type='text' value='${result.data.typeOfActivity}' hidden/>
            <input name='useOfMask' type='text' value='${result.data.useOfMask}' hidden/>
            <input name='typeOfMask' type='text' value='${result.data.typeOfMask}' hidden/>
            <input name='image' type='text' value='${imageBase64}' hidden/>

            <input name='pt1_1' type='text' value='${result.data.pt1_1}' hidden/>
            <input name='pt1_2' type='text' value='${result.data.pt1_2}' hidden/>
            <input name='pt1_3' type='text' value='${result.data.pt1_3}' hidden/>
            <input name='pt1_4' type='text' value='${result.data.pt1_4}' hidden/>
            <input name='pt1_5' type='text' value='${result.data.pt1_5}' hidden/>
            <input name='pt1_6' type='text' value='${result.data.pt1_6}' hidden/>
            <input name='pt1_7' type='text' value='${result.data.pt1_7}' hidden/>
            <input name='pt1_8' type='text' value='${result.data.pt1_8}' hidden/>
            <input name='pt1_9' type='text' value='${result.data.pt1_9}' hidden/>
            <input name='pt1_10' type='text' value='${result.data.pt1_10}' hidden/>
            <input name='pt1_11' type='text' value='${result.data.pt1_11}' hidden/>
            <input name='pt1_12' type='text' value='${result.data.pt1_12}' hidden/>
            <input name='pt1_13' type='text' value='${result.data.pt1_13}' hidden/>
            <input name='pt1_14' type='text' value='${result.data.pt1_14}' hidden/>
            <input name='pt1_15' type='text' value='${result.data.pt1_15}' hidden/>
            <input name='pt1_16' type='text' value='${result.data.pt1_16}' hidden/>
            <input name='pt1_17' type='text' value='${result.data.pt1_17}' hidden/>
            <input name='pt1_18' type='text' value='${result.data.pt1_18}' hidden/>
            <input name='pt1_19' type='text' value='${result.data.pt1_19}' hidden/>
            <input name='pt1_20' type='text' value='${result.data.pt1_20}' hidden/>
            <input name='pt1_21' type='text' value='${result.data.pt1_21}' hidden/>

            <input name='pt2_Intense_1' type='text' value='${result.data.pt2_Intense_1}' hidden/>
            <input name='pt2_Intense_2' type='text' value='${result.data.pt2_Intense_2}' hidden/>
            <input name='pt2_Moderated_1' type='text' value='${result.data.pt2_Moderated_1}' hidden/>
            <input name='pt2_Moderated_2' type='text' value='${result.data.pt2_Moderated_2}' hidden/>
            <input name='pt2_Hike_1' type='text' value='${result.data.pt2_Hike_1}' hidden/>
            <input name='pt2_Hike_2' type='text' value='${result.data.pt2_Hike_2}' hidden/>
            <input name='pt2_Seated_1' type='text' value='${result.data.pt2_Seated_1}' hidden/>

            <input name='pt3_1' type='text' value='${result.data.pt3_1 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_2' type='text' value='${result.data.pt3_2 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_3' type='text' value='${result.data.pt3_3 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_4' type='text' value='${result.data.pt3_4 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_5' type='text' value='${result.data.pt3_5 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_6' type='text' value='${result.data.pt3_6 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_7' type='text' value='${result.data.pt3_7 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_8' type='text' value='${result.data.pt3_8 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_9' type='text' value='${result.data.pt3_9 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt3_10' type='text' value='${result.data.pt3_10 === false ? 'No' : 'Sí'}' hidden/>

            <input name='pt4_1' type='text' value='${result.data.pt4_1 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt4_2' type='text' value='${result.data.pt4_2 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt4_3' type='text' value='${result.data.pt4_3 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt4_4' type='text' value='${result.data.pt4_4 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt4_5' type='text' value='${result.data.pt4_5 === false ? 'No' : 'Sí'}' hidden/>
            <input name='pt4_6' type='text' value='${result.data.pt4_6 === false ? 'No' : 'Sí'}' hidden/>

            <input name='pt5_1' type='text' value='${result.data.pt5_1}' hidden/>
            <input name='pt5_2' type='text' value='${result.data.pt5_2}' hidden/>
            <input name='pt5_3' type='text' value='${result.data.pt5_3}' hidden/>
            <input name='pt5_4' type='text' value='${result.data.pt5_4}' hidden/>
            <input name='pt5_5' type='text' value='${result.data.pt5_5}' hidden/>
            <input name='pt5_6' type='text' value='${result.data.pt5_6}' hidden/>
            <input name='pt5_7' type='text' value='${result.data.pt5_7}' hidden/>
            <input name='pt5_8' type='text' value='${result.data.pt5_8}' hidden/>
        `);
    });

$("#surveyElement").Survey({model: survey});
$('#consentId').removeAttr('style');