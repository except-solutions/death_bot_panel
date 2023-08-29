from django.urls import path

from death_bot_panel.auth.views import CustomAuthToken

urlpatterns = [
    path("token/", CustomAuthToken.as_view()),
]
