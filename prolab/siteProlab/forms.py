from django import forms
from .models import Questions


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Questions
        fields = ['question']
        widgets = {
            'question': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Введите ваш вопрос...',
                'rows': 4
            })
        }