from django.urls import path

from death_bot_panel.quotes.views import (
    QuotesView,
)

urlpatterns = [
    path("quotes/", QuotesView.as_view()),
]
