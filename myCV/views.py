from mailjet_rest import Client
from django.conf import settings
from django.shortcuts import render
from .forms import ContactForm

from mailjet_rest import Client
from django.conf import settings
from django.shortcuts import render
from .forms import ContactForm

def send_contact_email(name, email, message):
    mailjet = Client(auth=(settings.MAILJET_API_KEY, settings.MAILJET_API_SECRET), version='v3.1')

    data = {
        'Messages': [
            {
                'From': {
                    'Email': 'm.tekien02@gmail.com',  # Twój adres e-mail
                    'Name': 'Your Name'  # Twoje imię
                },
                'To': [
                    {
                        'Email': 'm.tekien02@gmail.com',  # Adres e-mail odbiorcy
                        'Name': 'Recipient Name'  # Imię odbiorcy
                    }
                ],
                'Subject': f'Message from {name} <{email}>',
                'TextPart': message,
            }
        ]
    }

    result = mailjet.send.create(data=data)  # Upewnij się, że wywołujesz właściwą metodę
    return result.status_code  # Zwraca kod statusu odpowiedzi

def home(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']

            # Wyślij e-mail
            send_contact_email(name, email, message)
            return render(request, 'contact_success.html')
    else:
        form = ContactForm()
    return render(request, 'index2.html', {'form': form})

def picker(request):
    return render(request, 'skills_combiner.html')
# def home(request):
#     return render(request, 'index2.html')


# def contact_view(request):
#     if request.method == 'POST':
#         form = ContactForm(request.POST)
#         if form.is_valid():
#             name = form.cleaned_data['name']
#             email = form.cleaned_data['email']
#             message = form.cleaned_data['message']
#             subject = f'Message from {name} <{email}>'
#             send_mail(subject, message, email, ['m.tekien02@gmail.com'])
#
#             return render(request, 'contact_success.html')
#
#         else:
#             form = ContactForm()
#
#         return render(request, 'index2.html', {'form': form})
