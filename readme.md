<div align="center">

<img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="Logo UPC">


# Universidad Peruana de Ciencias Aplicadas

Ingeniería de Software

Ciclo 2024-01

<hr>

# <center>Desarrollo de Aplicaciones Open Source</center>

## TF1 REPORT

**Sección:** SW51

**Profesor**: Angel Augusto Velasquez Nuñez

**StartUp Name**: NinjaCode

**Producto**: 

### Team Members:

| Member                            |    Code    |
| :-------------------------------- | :--------: |
| Claudio Sandro Quispesivana Torres| U202215099 |
| Jherson David Astuyauri Calderon  | U202218451 |
| Estefano Sebastian Lostaunau Pereira | U202211742 |
| Chinchihualpa Saldarriaga Luis Sebastian | U202212112 |
| |  |

<br>
</div>









































1. ## Solution Profile
   1. ### Antecedentes y problemática
Las enfermedades hormonales representan una creciente preocupación en el ámbito de la salud pública, impactando a personas de todas las edades y géneros. En la urbe limeña, al igual que en numerosos entornos urbanos, se enfrenta a retos significativos en la atención y seguimiento de pacientes aquejados por estas condiciones médicas. Desde la menopausia hasta el hiperandrogenismo, estas patologías demandan una atención integral, vigilancia constante y ajustes regulares en la medicación para salvaguardar el bienestar de los pacientes. La relevancia epidemiológica de las enfermedades hormonales en el Perú, la escasez de acceso oportuno a la atención especializada debido a las deficiencias del sistema de salud peruano y la escasez de médicos especializados, así como la baja adherencia al tratamiento y el incumplimiento de los objetivos terapéuticos, se suman como factores que dificultan el manejo efectivo de estas enfermedades en la población de Lima.

Los estudios realizados por Farías y Bardales (2021) sobre el conocimiento y adherencia al tratamiento en pacientes con Diabetes Mellitus tipo 2 en el Hospital Reátegui, y por Pocohuanca-Ancco, Villacorta y Hurtado-Roca (2021) sobre la no-adherencia al tratamiento antihipertensivo en pacientes de un hospital del seguro, subrayan la preocupante realidad de la baja adherencia al tratamiento en enfermedades crónicas con tasas de no-adherencia del 40% y 27% respectivamente. Estas cifras evidencian la problemática que enfrentan los médicos endocrinólogos para realizar un seguimiento adecuado a pacientes con enfermedades hormonales, la cual, en muchos casos, es de por vida. Adicionalmente cabe recalcar los largos tiempos de espera, ya que en una encuesta realizada por el INEI (2014), a nivel nacional el promedio de días que los usuarios esperan para obtener una cita es de 17 días. Asimismo en los establecimientos del Ministerio de Salud (MINSA), el promedio de tiempo es de 12 días, en el Seguro Social de Salud (EsSalud) es de 19 días, en Fuerzas Armadas y Policiales es de 21 días y en las clínicas 8 días. Por otro lado El 49,3% de los encuestados identificaron como principal problema la demora en la atención de salud, el 34,4% indicó el maltrato en la atención y el 18,1% la falta de medicamentos en las farmacias de los establecimientos de salud. 

Asimismo, las estadísticas muestran una situación preocupante: solo hay contratados en locales del Minsa unos 42 médicos especialistas para cada 100 mil ciudadanos (Minsa, 2023) y solo hay 10 médicos endocrinólogos por cada medio millón de peruanos (Manrique, 2015), mientras que el porcentaje de población de 15 años a más con obesidad, hipertensión arterial y diabetes mellitus continúa en aumento, alcanzando cifras alarmantes en el año 2020 del 24,6%, 21,7% y 4,5%, respectivamente (INEI, 2020)

En consecuencia, frente a esta problemática, nuestro grupo ha visto la oportunidad de crear una aplicación que permita una gestión eficiente y eficaz de los registros médicos, un seguimiento de los niveles hormonales y una comunicación fluida entre los profesionales de la salud involucrados en el tratamiento de pacientes con enfermedades hormonales. Esta solución tecnológica busca agilizar el proceso de ajuste de tratamientos, reducir los tiempos de espera y de traslado, además de brindar una atención más coordinada, inmediata y personalizada a los pacientes con enfermedades hormonales en la ciudad de Lima. Esta solución se plantea debido a las experiencias positivas del piloto “Teletriaje y Teleurgencias” implementado por Centro Nacional de Telemedicina – CENATE, quienes indican que lograron reducir el tiempo de espera de 4 o 5 horas a 15 minutos, además de la digitalización de las historias clínicas lo cual permite que la evaluación médica sea mucha más ágil (EsSalud, 2022) y gracias a que el acceso a Internet en el Perú ha experimentado un significativo aumento, con un 71.1% de la población conectada en el 2021, lo que sugiere una oportunidad para la implementación de soluciones tecnológicas en el ámbito de la salud (OPS, 2023).

A continuación, se evidencia la utilización del método de las 5W’s y 2H’s para detallar la problemática:

**What:** ¿Cuál es el problema?

El principal problema es el manejo deficiente de las enfermedades hormonales en la ciudad de Lima. Estas condiciones requieren un seguimiento constante, ajustes frecuentes de medicación y una atención especializada. Sin embargo, factores como la falta de acceso oportuno a médicos endocrinólogos, la baja adherencia al tratamiento, los largos tiempos de espera para obtener citas y la escasez de recursos en el sistema de salud dificultan el manejo adecuado de estas enfermedades.

**Why:** ¿Por qué es un problema?

Esta problemática es preocupante porque las enfermedades hormonales, si no se tratan de manera adecuada, pueden provocar complicaciones graves y afectar significativamente la calidad de vida de los pacientes. Según los estudios mencionados, la baja adherencia al tratamiento en enfermedades crónicas como la diabetes mellitus tipo 2 e hipertensión arterial alcanza tasas alarmantes del 40% y 27%, respectivamente. Esto aumenta el riesgo de complicaciones como resistencia a la insulina, dislipidemia, problemas cardiovasculares y renales.

**Who:** ¿Quiénes se ven involucrados en el problema?

Los principales afectados son los pacientes con enfermedades hormonales en la ciudad de Lima, quienes enfrentan dificultades para acceder a una atención médica especializada y un seguimiento adecuado de su condición. También se ven involucrados los profesionales de la salud, especialmente los endocrinólogos, quienes deben lidiar con la escasez de recursos y la falta de herramientas para realizar un seguimiento eficiente y eficaz de sus pacientes.

**Where:** ¿Dónde se produce el problema?

El problema se produce principalmente en la ciudad de Lima y, en general, en el ámbito urbano peruano. Según las estadísticas citadas, la situación es preocupante en los establecimientos del Ministerio de Salud (MINSA) y del Seguro Social de Salud (EsSalud), donde los tiempos de espera para obtener una cita médica son considerables.

**When:** ¿Cuándo se convierte en un problema?

Esta problemática se convierte en un problema crítico cuando los pacientes no reciben un diagnóstico oportuno, un tratamiento adecuado y un seguimiento continuo de su enfermedad hormonal. Esto puede ocurrir desde el mismo momento en que se manifiestan los primeros síntomas, pero se agrava con el tiempo debido a la falta de atención médica especializada y la baja adherencia al tratamiento.

**How:** ¿Cómo puede ayudar esta aplicación a abordar esta problemática?

La aplicación propuesta busca abordar esta problemática de varias maneras:

1\. Facilitando el acceso a médicos endocrinólogos y reduciendo los tiempos de espera mediante la implementación de videoconsultas y la gestión eficiente de citas médicas.

2\. Permitiendo un seguimiento continuo de los niveles hormonales, síntomas y medicación de los pacientes, lo que ayudará a los médicos a realizar ajustes oportunos en el tratamiento.

3\. Brindando información personalizada y educación sobre las enfermedades hormonales, lo que puede mejorar la adherencia al tratamiento y el empoderamiento de los pacientes.

4\. Facilitando la comunicación entre pacientes y profesionales de la salud, lo que mejorará la coordinación y la calidad de la atención.

**How much:** ¿Cuál sería el impacto al implementar esta aplicación?

La implementación de esta aplicación podría tener un impacto significativo en el manejo de las enfermedades hormonales en la ciudad de Lima y, potencialmente, en todo el Perú. Algunas de las consecuencias positivas incluyen:

1\. Mejor acceso a la atención médica especializada y reducción de los tiempos de espera, lo que permitiría un diagnóstico y tratamiento más oportunos.

2\. Mayor adherencia al tratamiento gracias al seguimiento continuo, la educación y el empoderamiento de los pacientes, lo que disminuiría el riesgo de complicaciones.

3\. Optimización de los recursos del sistema de salud al facilitar la coordinación entre profesionales y reducir la necesidad de desplazamientos físicos.

4\. Mejora en la calidad de vida de los pacientes con enfermedades hormonales al recibir una atención más personalizada y eficiente.

5\. Reducción de los costos asociados a las complicaciones y hospitalizaciones derivadas del mal manejo de estas enfermedades.