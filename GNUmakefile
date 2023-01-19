# Disable built-in rules and variables
MAKEFLAGS += --no-builtin-rules
MAKEFLAGS += --no-builtin-variables

# Get the root directory of the project and remote trailing slash
ROOT_DIR := $(dir $(realpath $(firstword $(MAKEFILE_LIST))))
ROOT_DIR := $(patsubst %/,%,$(ROOT_DIR))

.DEFAULT_GOAL := build

# Install package dependencies
# node_modules/.package-lock.json is a file that is used to track when contents
# of the node_modules directory are out of date with respect to the package.json
# or package-lock.json files.
$(ROOT_DIR)/node_modules/.package-lock.json: package.json package-lock.json
	npm install

.PHONY: install
install: $(ROOT_DIR)/node_modules/.package-lock.json

.PHONY: build
build: install
	npx @svgr/cli --out-dir ./src/assets/icons -- ./src/assets/icons
	npm run build

.PHONY: clean
clean:
	rm -rf "$(ROOT_DIR)/node_modules"

# Shell that adds node_modules/.bin to PATH
# Having this makes it easy to run commands like `vite` or `tsc`
.PHONY: shell
shell: install
	npx
