# Generated by Django 3.0.7 on 2020-08-05 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_auto_20200804_1850'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usersurvey',
            options={'ordering': ['-created'], 'verbose_name': 'Usuario', 'verbose_name_plural': 'Usuarios'},
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_1',
            field=models.CharField(max_length=100, null=True, verbose_name='Me ha costado mucho descargar la tensión'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_10',
            field=models.CharField(max_length=100, null=True, verbose_name='He sentido que no había nada que me ilusionara'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_11',
            field=models.CharField(max_length=100, null=True, verbose_name='Me he sentido inquieto'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_12',
            field=models.CharField(max_length=100, null=True, verbose_name='Se me hizo difícil relajarme'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_13',
            field=models.CharField(max_length=100, null=True, verbose_name='Me sentí triste y deprimido'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_14',
            field=models.CharField(max_length=100, null=True, verbose_name='No toleré nada que no me permitiera continuar con lo que estaba haciendo'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_15',
            field=models.CharField(max_length=100, null=True, verbose_name='Sentí que estaba al punto de pánico'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_16',
            field=models.CharField(max_length=100, null=True, verbose_name='No me pude entusiasmar por nada'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_17',
            field=models.CharField(max_length=100, null=True, verbose_name='Sentí que valía muy poco como persona'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_18',
            field=models.CharField(max_length=100, null=True, verbose_name='He tendido a sentirme enfadado con facilidad'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_19',
            field=models.CharField(max_length=100, null=True, verbose_name='Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_2',
            field=models.CharField(max_length=100, null=True, verbose_name='Me di cuenta que tenía la boca seca'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_20',
            field=models.CharField(max_length=100, null=True, verbose_name='Tuve miedo sin razón'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_21',
            field=models.CharField(max_length=100, null=True, verbose_name='Sentí que la vida no tenía ningún sentido'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_3',
            field=models.CharField(max_length=100, null=True, verbose_name='No podía sentir ningún sentimiento positivo'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_4',
            field=models.CharField(max_length=100, null=True, verbose_name='Se me hizo difícil respirar'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_5',
            field=models.CharField(max_length=100, null=True, verbose_name='Se me hizo difícil tomar la iniciativa para hacer cosas'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_6',
            field=models.CharField(max_length=100, null=True, verbose_name='Reaccioné exageradamente en ciertas situaciones'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_7',
            field=models.CharField(max_length=100, null=True, verbose_name='Sentí que mis manos temblaban'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_8',
            field=models.CharField(max_length=100, null=True, verbose_name='He sentido que estaba gastando una gran cantidad de energía'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt1_9',
            field=models.CharField(max_length=100, null=True, verbose_name='Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Hike_1',
            field=models.CharField(max_length=100, null=True, verbose_name='Durante los últimos 7 días, ¿En cuántos días caminó por lo menos 10 minutos seguidos?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Hike_2',
            field=models.CharField(max_length=100, null=True, verbose_name='Habitualmente, ¿Cuántas horas dedicó a caminar en uno de esos días?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Intense_1',
            field=models.CharField(max_length=100, null=True, verbose_name='Durante los últimos 7 días, ¿En cuántos realizó actividades físicas intensas tales como levantar pesas, clavar, hacer ejercicios aeróbicos o andar rápido en bicicleta?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Intense_2',
            field=models.CharField(max_length=100, null=True, verbose_name='Habitualmente, ¿Cuántas horas en total dedicó a una actividad física intensa en uno de esos días?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Moderated_1',
            field=models.CharField(max_length=100, null=True, verbose_name='Durante los últimos 7 días, ¿En cuántos días hizo actividades físicas moderadas como transportar pesos livianos, andar en bicicleta a velocidad regular, jugar tenis? No incluya caminar.'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Moderated_2',
            field=models.CharField(max_length=100, null=True, verbose_name='Habitualmente, ¿Cuántas horas en total dedicó a una actividad física moderada en uno de esos días?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt2_Seated_1',
            field=models.CharField(max_length=100, null=True, verbose_name='Durante los últimos 7 días, ¿Cuánto tiempo pasó sentado durante un día hábil?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_1',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha salido habitualmente de casa (su lugar de residencia actual) por cuestiones laborales?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_10',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha mantenido sus cuidados personales habituales?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_2',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha dormido más que antes?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_3',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha visto la TV más que antes?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_4',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha practicado ejercicio físico de forma regular?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_5',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha utilizado las redes sociales más que antes?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_6',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Han cambiado mucho sus rutinas'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_7',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha utilizado internet más que antes?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_8',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha dedicado más tiempo que antes a ver películas, leer, o jugar a videojuegos?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt3_9',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha aprovechado para realizar actividades en casa para las que antes no disponía de tiempo?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_1',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Utiliza siempre o casi siempre guantes cuando sale de casa?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_2',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Mantiene siempre o casi siempre la distancia de seguridad con otras personas fuera de casa (al menos 2 metros)?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_3',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Cree que se lava o desinfecta las manos con excesiva frecuencia?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_4',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Desinfecta habitualmente los objetos y superficies con gel desinfectante, jabón, alcohol, etc.?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_5',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Toma precauciones habitualmente al llegar del supermercado, lavando los alimentos, desinfectando el teléfono celular o las llaves, etc.?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt4_6',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Se protege habitualmente al tocar zonas de posible contagio, como manijas, ascensores, lectores de tarjetas de crédito, etc.?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_1',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha tenido discusiones o conflictos con sus familiares?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_2',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder ver a algunos de sus familiares que veía habitualmente?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_3',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder ver a sus amigos?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_4',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder realizar actividades de ocio fuera de casa (viajar, salir, etc.)?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_5',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Ha tenido problemas para realizar actividades de ocio en casa (leer, escribir, ver películas, videojuegos, etc.)?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_6',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder realizar actividades físicas fuera de casa (deporte, ejercicio físico, ir al campo, etc.)?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_7',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder salir de casa salvo para cosas muy necesarias?'),
        ),
        migrations.AddField(
            model_name='usersurvey',
            name='pt5_8',
            field=models.CharField(max_length=100, null=True, verbose_name='¿Le ha perturbado o alterado no poder disponer de cosas que necesitaba?'),
        ),
    ]
