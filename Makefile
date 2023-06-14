.PHONY: clean
clean: 
	@echo Deep cleanning project environment...
	@echo Purging .next...
	@rm -fr .next
	@echo Purging .vscode...
	@rm -fr .vscode
	@echo Purging node_modules...
	@rm -fr node_modules
	@echo Reinstalling dependencies modules...
	yarn

.PHONY: dev
dev:
	yarn dev

dev-clean: clean dev

.PHONY: production
production:
	@echo Building production Syns client app...
	yarn build
	@echo Starting production Syns client app...
	yarn start

production-clean: clean production
