from django.contrib import admin

from .models import Slider, Services, Master, Questions


@admin.register(Slider)
class SliderAdmin(admin.ModelAdmin):
    pass

@admin.register(Services)
class ServicesAdmin(admin.ModelAdmin):
    pass

@admin.register(Master)
class MasterAdmin(admin.ModelAdmin):
    pass

@admin.register(Questions)
class QuestionsAdmin(admin.ModelAdmin):
    pass