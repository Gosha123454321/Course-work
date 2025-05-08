from . import views
from django.urls import path
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='home'),
    path('services/', views.services_view, name='services'),
    path('toggle-service/<int:service_id>/', views.toggle_service_status, name='toggle_service_status'),
    path('delete-service/<int:service_id>/', views.delete_service, name='delete_service'),
    path('masters/', views.masters_view, name='masters'),
    path('delete-master/<int:master_id>/', views.delete_master, name='delete_master'),
    path('questions/', views.questions_view, name='questions'),
    path('ask-question/', views.questions_view, name='ask_question'),
    path('login/', auth_views.LoginView.as_view(template_name='registration/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),
    path('register/', views.register, name='register'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
