from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from death_bot_panel.quotes.models import Quote
from death_bot_panel.quotes.serializers import QuoteResponseSerializer


class QuotesView(APIView):

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response_data = QuoteResponseSerializer(Quote.objects.all(), many=True)
        return Response(response_data.data)
