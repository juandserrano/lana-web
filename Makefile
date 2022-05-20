.PHONY: dockerimage
dockerimage:
	docker build -t web:0.0.1 .
