from rest_framework import serializers

from death_bot_panel.quotes.models import Quote


class QuoteResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Quote
        exclude = []


class NewQuoteRequestSerializer(serializers.Serializer):

    text = serializers.CharField(
        max_length=300,
        allow_null=False,
    )
    author = serializers.CharField(
        max_length=30,
        allow_null=False,
    )


class UpdateQuoteRequestSerializer(serializers.Serializer):

    text = serializers.CharField(
        max_length=300,
        allow_null=False,
    )
    author = serializers.CharField(
        max_length=30,
        allow_null=False,
    )
    id = serializers.IntegerField(
        allow_null=False
    )


class DeleteQuoteRequestSerializer(serializers.Serializer):

    id = serializers.IntegerField(
        allow_null=False
    )