from django.db import models

# Create your models here.
class UserSurvey(models.Model):
    # General Data.
    name = models.CharField(max_length=200, null=True, blank=False, verbose_name="Nombre", unique=True)
    surveyId = models.CharField(max_length=50, null=True, blank=False, verbose_name="ID de registro", unique=True)
    email = models.EmailField(blank=False, verbose_name="Correo Electrónico", unique=True)
    age = models.SmallIntegerField(blank=False,  null=True, verbose_name="Edad")
    sex = models.CharField(max_length=50, null=True, blank=False, verbose_name="Sexo")
    kids = models.CharField(max_length=50, null=True, blank=False, verbose_name="Niños")
    state = models.CharField(max_length=200, null=True, blank=False, verbose_name="Estado")
    municipality = models.CharField(max_length=200, null=True, blank=False, verbose_name="Municipio")
    typeOfResidence = models.CharField(max_length=200, null=True, blank=False, verbose_name="Tipo de residencia")
    facultyYear = models.CharField(max_length=4, null=True, blank=False, verbose_name="Año de ingreso a la facultad")
    civilStatus = models.CharField(max_length=100, null=True, blank=False, verbose_name="Estado civil")
    occupation = models.CharField(max_length=200, null=True, blank=False, verbose_name="Ocupación")
    semester = models.CharField(max_length=200, null=True, blank=False, verbose_name="Semestre (si aplica)")
    worked = models.CharField(max_length=50, null=True, blank=False, verbose_name="Trabajó mientras estudió")
    seriousWorkProblems = models.CharField(max_length=200, null=True, blank=False, verbose_name="Problemas graves en el trabajo")
    workDifficulties = models.CharField(max_length=200, null=True, blank=False, verbose_name="Dificultades en el trabajo")
    accessToInternetAndDevices_Doctor = models.CharField(max_length=200, null=True, blank=False, verbose_name="Acceso a internet y dispositivos (doctores)")
    accessToInternetAndDevices_Student = models.CharField(max_length=200, null=True, blank=False, verbose_name="Acceso a internet y dispositivos (estudiantes)")
    academicPerformance = models.CharField(max_length=200, null=True, blank=False, verbose_name="Desempeño académico (si aplica)")
    difficultiesToStudy = models.CharField(max_length=200, null=True, blank=False, verbose_name="Dificultades para estudiar")
    typeOfActivity = models.CharField(max_length=200, null=True, blank=False, verbose_name="Actividad que realiza")
    useOfMask = models.CharField(max_length=200, null=True, blank=False, verbose_name="Uso de cubrebocas")
    typeOfMask = models.CharField(max_length=200, null=True, blank=False, verbose_name="Tipo de cubrebocas")
    image = models.ImageField(blank=False, upload_to='usersSign', verbose_name="Firma", unique=True)
    # Questions part 1.
    pt1_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Me ha costado mucho descargar la tensión")
    pt1_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Me di cuenta que tenía la boca seca")
    pt1_3 = models.CharField(max_length=100, null=True, blank=False, verbose_name="No podía sentir ningún sentimiento positivo")
    pt1_4 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Se me hizo difícil respirar")
    pt1_5 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Se me hizo difícil tomar la iniciativa para hacer cosas")
    pt1_6 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Reaccioné exageradamente en ciertas situaciones")
    pt1_7 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Sentí que mis manos temblaban")
    pt1_8 = models.CharField(max_length=100, null=True, blank=False, verbose_name="He sentido que estaba gastando una gran cantidad de energía")
    pt1_9 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo")
    pt1_10 = models.CharField(max_length=100, null=True, blank=False, verbose_name="He sentido que no había nada que me ilusionara")
    pt1_11 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Me he sentido inquieto")
    pt1_12 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Se me hizo difícil relajarme")
    pt1_13 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Me sentí triste y deprimido")
    pt1_14 = models.CharField(max_length=100, null=True, blank=False, verbose_name="No toleré nada que no me permitiera continuar con lo que estaba haciendo")
    pt1_15 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Sentí que estaba al punto de pánico")
    pt1_16 = models.CharField(max_length=100, null=True, blank=False, verbose_name="No me pude entusiasmar por nada")
    pt1_17 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Sentí que valía muy poco como persona")
    pt1_18 = models.CharField(max_length=100, null=True, blank=False, verbose_name="He tendido a sentirme enfadado con facilidad")
    pt1_19 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico")
    pt1_20 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Tuve miedo sin razón")
    pt1_21 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Sentí que la vida no tenía ningún sentido")
    # Questions part 2.
    pt2_Intense_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Durante los últimos 7 días, ¿En cuántos realizó actividades físicas intensas tales como levantar pesas, clavar, hacer ejercicios aeróbicos o andar rápido en bicicleta?")
    pt2_Intense_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Habitualmente, ¿Cuántas horas en total dedicó a una actividad física intensa en uno de esos días?")
    pt2_Moderated_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Durante los últimos 7 días, ¿En cuántos días hizo actividades físicas moderadas como transportar pesos livianos, andar en bicicleta a velocidad regular, jugar tenis? No incluya caminar.")
    pt2_Moderated_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Habitualmente, ¿Cuántas horas en total dedicó a una actividad física moderada en uno de esos días?")
    pt2_Hike_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Durante los últimos 7 días, ¿En cuántos días caminó por lo menos 10 minutos seguidos?")
    pt2_Hike_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Habitualmente, ¿Cuántas horas dedicó a caminar en uno de esos días?")
    pt2_Seated_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="Durante los últimos 7 días, ¿Cuánto tiempo pasó sentado durante un día hábil?")
    # Questions part 3.
    pt3_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha salido habitualmente de casa (su lugar de residencia actual) por cuestiones laborales?")
    pt3_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha dormido más que antes?")
    pt3_3 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha visto la TV más que antes?")
    pt3_4 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha practicado ejercicio físico de forma regular?")
    pt3_5 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha utilizado las redes sociales más que antes?")
    pt3_6 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Han cambiado mucho sus rutinas")
    pt3_7 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha utilizado internet más que antes?")
    pt3_8 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha dedicado más tiempo que antes a ver películas, leer, o jugar a videojuegos?")
    pt3_9 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha aprovechado para realizar actividades en casa para las que antes no disponía de tiempo?")
    pt3_10 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha mantenido sus cuidados personales habituales?")
    # Questions part 4.
    pt4_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Utiliza siempre o casi siempre guantes cuando sale de casa?")
    pt4_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Mantiene siempre o casi siempre la distancia de seguridad con otras personas fuera de casa (al menos 2 metros)?")
    pt4_3 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Cree que se lava o desinfecta las manos con excesiva frecuencia?")
    pt4_4 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Desinfecta habitualmente los objetos y superficies con gel desinfectante, jabón, alcohol, etc.?")
    pt4_5 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Toma precauciones habitualmente al llegar del supermercado, lavando los alimentos, desinfectando el teléfono celular o las llaves, etc.?")
    pt4_6 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Se protege habitualmente al tocar zonas de posible contagio, como manijas, ascensores, lectores de tarjetas de crédito, etc.?")
    # Questions part 5.
    pt5_1 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha tenido discusiones o conflictos con sus familiares?")
    pt5_2 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder ver a algunos de sus familiares que veía habitualmente?")
    pt5_3 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder ver a sus amigos?")
    pt5_4 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder realizar actividades de ocio fuera de casa (viajar, salir, etc.)?")
    pt5_5 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Ha tenido problemas para realizar actividades de ocio en casa (leer, escribir, ver películas, videojuegos, etc.)?")
    pt5_6 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder realizar actividades físicas fuera de casa (deporte, ejercicio físico, ir al campo, etc.)?")
    pt5_7 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder salir de casa salvo para cosas muy necesarias?")
    pt5_8 = models.CharField(max_length=100, null=True, blank=False, verbose_name="¿Le ha perturbado o alterado no poder disponer de cosas que necesitaba?")

    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha y hora de creación")

    class Meta:
        verbose_name = "Encuestado"
        verbose_name_plural = "Encuestados"
        ordering = ["-created"]

    def __str__(self):
        return self.name