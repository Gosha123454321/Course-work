# Generated by Django 4.2.20 on 2025-04-23 05:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('siteProlab', '0002_questions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slider',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slider_type', models.IntegerField(choices=[(1, 'Основной слайдер (index)'), (2, 'Слайдер отзывов (reviews)')])),
                ('image', models.ImageField(upload_to='sliders/')),
                ('order', models.PositiveIntegerField(default=0, help_text='Порядок отображения (меньшее число - выше)')),
            ],
            options={
                'ordering': ['order'],
            },
        ),
    ]
