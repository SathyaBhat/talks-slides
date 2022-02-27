.PHONY: build

ifeq ($(DIRECTORY),)
  $(error DIRECTORY is not set)
endif

build:	
	. ./build.sh
