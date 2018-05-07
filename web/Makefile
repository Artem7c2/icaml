all:
	jekyll serve .
dist:
	jekyll build --config _deploy.yml .
upload: dist
	rm -f _site/Makefile
	tar -czf deploy.tgz _site

