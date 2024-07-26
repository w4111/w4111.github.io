TARGET=main
all: $(TARGET)

main: .
	#jekyll build
	#rsync -r _site/* coms4111@clic.cs.columbia.edu:~/html
	#ssh coms4111@clic.cs.columbia.edu 'cd html; chmod -R 775 *'
	git commit -m "updated site" .; git push
