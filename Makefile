include config.mk

HOMEDIR = $(shell pwd)
PROJECTNAME = clone-quest-recap
SSHCMD = ssh $(USER)@$(SERVER)

pushall: sync
	git push origin main

sync:
	rsync -avz --exclude .git . $(USER)@$(SERVER):/$(APPDIR)/

set-up-server-dir:
	ssh $(USER)@$(SERVER) "mkdir -p $(APPDIR)"
