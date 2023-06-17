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
	pnpm i

.PHONY: dev
dev:
	pnpm dev

dev-clean: clean dev

.PHONY: production
production:
	@echo Building production Syns client app...
	pnpm build
	@echo Starting production Syns client app...
	pnpm start

production-clean: clean production
