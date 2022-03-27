all: ts

node_modules:
	npm install

step%.js: node_modules step%.ts
	./node_modules/.bin/tsc -p ./

clean:
	rm -rf dist/
