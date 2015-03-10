# Random Book JSON Generator
Generates Book JSON file with random info.
Uses chancejs library to generate random author names, pick random dates in an array and pick random book genres in an array. You can edit the "main.js" file to add / remove / edit books genres and dates:
```html
var bookGenresArr = ['Adventure', 'Comic', 'Crime', 'Docufiction', 'Epistolary', 'Erotic', 'Fiction', 'Fantasy', 'Historical', 'Horror', 'Magic', 'realism', 'Mystery', 'Paranoid', 'Philosophical', 'Political', 'Romance', 'Saga', 'Satire', 'Science', 'Speculative', 'Superhero', 'Thriller', 'Urban', 'Western'];

var yearsArr = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];
```

By editing
```html
var generateNumberPerCycle = 10;
```
You will control the number of "Books" generated per file.

It will generate 10 files, and automatically download the them.

##Book JSON Format
```html
{
	"name":"Book Title",
	"author":
	{
		"name":"Author Name",
		"gender":"male or female"
	},
	"genre":"Book genre",
	"publish_date":"Date in format: yyyy-mm-dd"
}
```

##Licence
This project is licensed under the [MIT License](http://en.wikipedia.org/wiki/MIT_License) so feel free to hack away :)
