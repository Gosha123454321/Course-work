from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages

from .forms import QuestionForm
from .models import Services, Questions, Slider, Master


def index(request):
    main_slider = Slider.objects.filter(slider_type=1).order_by('order')
    reviews_slider = Slider.objects.filter(slider_type=2).order_by('order')

    return render(request, 'siteprolab/index.html', {
        'main_slider': main_slider,
        'reviews_slider': reviews_slider,
    })


def services_view(request):
    services_list = Services.objects.all()
    categories = Services.objects.order_by('type_ser').values_list('type_ser', flat=True).distinct()
    return render(request, 'siteProlab/services.html', {
        'services': services_list,
        'categories': categories
    })


@staff_member_required
def toggle_service_status(request, service_id):
    if not request.user.is_staff:
        return redirect('services')

    service = get_object_or_404(Services, id=service_id)
    service.is_published_ser = not service.is_published_ser
    service.save()
    return redirect('services')


@staff_member_required
def delete_service(request, service_id):
    service = get_object_or_404(Services, id=service_id)
    service.delete()
    messages.success(request, 'Услуга успешно удалена')
    return redirect('services')


def masters_view(request):
    masters = Master.objects.all().order_by('full_name_m')
    return render(request, 'siteProlab/masters.html', {'masters': masters})


@staff_member_required
def delete_master(request, master_id):
    master = get_object_or_404(Master, id=master_id)
    master.delete()
    messages.success(request, f'Мастер {master.full_name_m} успешно удален')
    return redirect('masters')


def questions_view(request):
    questions = Questions.objects.filter(is_published=True)
    unanswered_count = 0

    if request.user.is_staff:
        unanswered_count = Questions.objects.filter(is_answered=False).count()

    if request.method == 'POST' and request.user.is_authenticated:
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.user = request.user
            question.save()
            return redirect('questions')
    else:
        form = QuestionForm()

    return render(request, 'siteProlab/questions.html', {
        'questions': questions,
        'form': form,
        'unanswered_count': unanswered_count
    })


def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')
    else:
        form = UserCreationForm()
    return render(request, 'registration/register.html', {'form': form})