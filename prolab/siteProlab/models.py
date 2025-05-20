from django.db import models
from django.contrib.auth.models import User


class Services(models.Model):
    title_ser = models.CharField(max_length=255)
    content_ser = models.TextField()
    type_ser = models.CharField(max_length=255)
    price_ser = models.IntegerField()
    is_published_ser = models.BooleanField(default=True)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title_ser


class Questions(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='questions', null=True, blank=True)
    question = models.TextField()
    answer = models.TextField()
    is_answered = models.BooleanField(default=False)
    is_published = models.BooleanField(default=False)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f"Вопрос от {self.user.username if self.user else 'анонима'}: {self.question[:50]}..."

class Slider(models.Model):
    SLIDER_CHOICES = [
        (1, 'Основной слайдер (index)'),
        (2, 'Слайдер отзывов (reviews)'),
    ]

    slider_type = models.IntegerField(choices=SLIDER_CHOICES)
    image = models.ImageField(upload_to='sliders/')
    order = models.PositiveIntegerField(default=0, help_text="Порядок отображения (меньшее число - выше)")

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"Слайдер {self.get_slider_type_display()} - {self.image.name}"


class Master(models.Model):
    position_m = models.CharField(max_length=255, verbose_name="Должность")
    full_name_m = models.CharField(max_length=255, verbose_name="ФИО")
    studio_m = models.CharField(max_length=255, verbose_name="Студия")
    content_m = models.TextField(verbose_name="Контент о мастере")
    image_m = models.ImageField(upload_to='masters/', verbose_name="Фото мастера")
    services = models.ManyToManyField(Services, verbose_name="Услуги мастера")

    def __str__(self):
        return f"{self.full_name_m} - {self.position_m} ({self.studio_m})"