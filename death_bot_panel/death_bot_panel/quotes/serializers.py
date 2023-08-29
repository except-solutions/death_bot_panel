from rest_framework import serializers

from death_bot_panel.quotes.models import Quote


class QuoteResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quote
        exclude = []
