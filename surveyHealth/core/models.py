from django.db import models

# Create your models here.
class UserSurvey(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False, verbose_name="Nombre", unique=True)
    surveyId = models.CharField(max_length=50, null=True, blank=False, verbose_name="ID de registro", unique=True)
    email = models.EmailField(blank=False, verbose_name="Correo Electrónico", unique=True)
    age = models.SmallIntegerField(blank=False,  null=True, verbose_name="Edad")
    sex = models.CharField(max_length=50, null=True, blank=False, verbose_name="Sexo")
    kids = models.CharField(max_length=50, null=True, blank=False, verbose_name="Niños")
    state = models.CharField(max_length=200, null=True, blank=False, verbose_name="Estado")
    municipality = models.CharField(max_length=200, null=True, blank=False, verbose_name="Municipio")
    typeOfResidence = models.CharField(max_length=200, null=True, blank=False, verbose_name="Tipo de residencia")
    factultyYear = models.CharField(max_length=4, null=True, blank=False, verbose_name="Año de ingreso a la facultad")
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
    created = models.DateTimeField(auto_now_add=True, verbose_name="Fecha y hora de creación")

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"
        ordering = ["-created"]

    def __str__(self):
        return self.name