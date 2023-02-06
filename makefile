PORT ?= 8000
VENV ?= $(shell poetry env info -p)

install:
	poetry install

db:
	docker-compose up

run:
	$(VENV)/bin/python death_bot_panel/manage.py runserver 0.0.0.0:${PORT}



