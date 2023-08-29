import json

from django.test import TestCase
from django.test import Client

from death_bot_panel.quotes.models import Quote


class QuotesTest(TestCase):

    def setUp(self):
        self.test_quote = Quote.objects.create(text="text_text", author="test_author")

    def test_animals_can_speak(self):
        c = Client()
        response = c.get("/api/quotes/", follow=True)
        self.assertEqual(response.status_code, 200)
        parsed_response = json.loads(response.content)
        self.assertEqual(len(parsed_response), 1)
        quote = parsed_response[0]
        self.assertEqual(quote["fields"]["text"], self.test_quote.text)
        self.assertEqual(quote["fields"]["author"], self.test_quote.author)
        self.assertEqual(quote["fields"]["active"], self.test_quote.active)
