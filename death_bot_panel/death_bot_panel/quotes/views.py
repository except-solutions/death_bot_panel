from django.views import View
from django.http import HttpResponse
from django.core import serializers

from death_bot_panel.quotes.models import Quote


class QuotesView(View):
    def get(self, request):
        serialized_response = serializers.serialize("json", Quote.objects.all())
        return HttpResponse(serialized_response)
