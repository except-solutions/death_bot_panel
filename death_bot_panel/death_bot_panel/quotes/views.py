from rest_framework import status
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from death_bot_panel.quotes.models import Quote
from death_bot_panel.quotes.serializers import QuoteResponseSerializer, NewQuoteRequestSerializer, \
    DeleteQuoteRequestSerializer, UpdateQuoteRequestSerializer


class QuotesView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response_data = QuoteResponseSerializer(Quote.objects.all(), many=True)
        return Response(response_data.data)

    def post(self, request):
        serializer = NewQuoteRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        quote = Quote.objects.create(text=request.data["text"], author=request.data["author"])
        return Response(
            QuoteResponseSerializer(quote).data,
            status=status.HTTP_201_CREATED
        )

    def put(self, request):
        serializer = UpdateQuoteRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        (
            Quote
            .objects
            .filter(id=request.data["id"])
            .update(
                text=request.data["text"],
                author=request.data["author"]
            )
        )
        updated_quote = Quote.objects.get(id=request.data["id"])
        return Response(
            QuoteResponseSerializer(updated_quote).data,
            status=status.HTTP_200_OK
        )

    def delete(self, request):
        serializer = DeleteQuoteRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Quote.objects.filter(id=request.data["id"]).delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
