var path = './01_workersprice_201502.csv';
var dimension = "職種,都道府県,労務単価";

var parseCSV = function (path){
	var fs = require('fs');
	var result = dimension + '\r\n';

	fs.readFile(path,'utf8',function(err, text){
		var rowsParsed = text.split("\r\n");
		var header = rowsParsed[0].split(",");
		var colsParsed = [];

		for (var i = 1 ; i < rowsParsed.length; i++) {
			colsParsed = rowsParsed[i].split(",");
			for (var j = 1 ; j < colsParsed.length; j++) {
				result += [header[j],colsParsed[0],colsParsed[j]].join(",")+"\r\n";
			};
		};
		fs.writeFile(path + '.regularized.csv', result, function(err){
			console.log(err);
		});
	});
	return result;
};

parseCSV(path);