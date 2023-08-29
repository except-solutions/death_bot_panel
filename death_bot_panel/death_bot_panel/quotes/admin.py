from django.contrib import admin

from death_bot_panel.quotes.models import Quote


@admin.register(Quote)
class AuthorAdmin(admin.ModelAdmin):
    pass
