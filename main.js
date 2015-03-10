function Book(name, author, genre, publish_date) {
	this.name = name;
	this.author = author;
	this.genre = genre;
	this.publish_date = publish_date;
}
function Author(name, gender) {
	this.name = name;
	this.gender = gender;
}

var myJsonString = "";

$(document).ready(function () {

	var textFile = null,
	makeTextFile = function (text) {
		var data = new Blob([text], {type: 'text/plain'});

		// If we are replacing a previously generated file we need to
		// manually revoke the object URL to avoid memory leaks.
		if (textFile !== null) {
		window.URL.revokeObjectURL(textFile);
		}

		textFile = window.URL.createObjectURL(data);

		// returns a URL you can use as a href
		return textFile;
	};

	var startTime = new Date();
	var initialCountingVal = 0;
	var maxCount = initialCountingVal;
	var genderType = ["male", "female"];
	var bookGenresArr = ['Adventure', 'Comic', 'Crime', 'Docufiction', 'Epistolary', 'Erotic', 'Fiction', 'Fantasy', 'Historical', 'Horror', 'Magic', 'realism', 'Mystery', 'Paranoid', 'Philosophical', 'Political', 'Romance', 'Saga', 'Satire', 'Science', 'Speculative', 'Superhero', 'Thriller', 'Urban', 'Western'];
	var yearsArr = [2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000];

	var generateNumberPerCycle = 10;

	var existingbookName = [];

	for (var outsideCycleCounter = 1; outsideCycleCounter <= 10; outsideCycleCounter++) {
		var AllBooks = [];

		maxCount = initialCountingVal;
		for (var countCycle = 0; countCycle < generateNumberPerCycle; countCycle++) {
			for (var genderCount = 0; genderCount < genderType.length - 1; genderCount++) {
				var authorName = chance.name({ gender: genderType[genderCount] });

				var bookAuthor = new Author(authorName, genderType[genderCount]);

				var bookName = RandomTitle();

				//Check for already existing -> this could be improved later
				if ($.inArray(bookName, existingbookName) != -1) {
					var i = initialCountingVal;

					bookName = bookName + " " + i;

					//Pick random until not existing...
					while($.inArray(bookName, existingbookName) != -1) {
						i++;
						bookName = bookName + " " + i;
					}

					if(i > maxCount)
						maxCount = i;
				}
				existingbookName.push(bookName);

				var bookGenre = chance.pick(bookGenresArr);

				var randYear = chance.pick(yearsArr);

				var date = chance.date({year: randYear});

				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();

				month = "0" + month.toString();
				month = month.substr(month.length-2);
				day = "0" + day.toString();
				day = day.substr(day.length-2);
				var bookPublishDate = year + "-" + month + "-" + day;

				var bookObj = new Book(bookName, bookAuthor, bookGenre, bookPublishDate);

				AllBooks.push(bookObj);
			}
		}
		initialCountingVal = maxCount + 1;
		var link = document.getElementById('download' + outsideCycleCounter + 'link');
		link.href = makeTextFile(JSON.stringify(AllBooks));
		link.style.display = 'block';
		//"Simulate" click for "auto" download
		link.click();
	}

	var endTime = new Date();
	var timeDiff = endTime - startTime;
	var timeDiff = timeDiff / 1000;
	var seconds = Math.round(timeDiff % 60);

	console.log(seconds);
	console.log("Max count: " + maxCount);
});