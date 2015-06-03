//2x2のcsvを第一正規化する

var csv_from = '../data/01_workersprice_201502.csv';
var csv_into = '../data_regularized/01_workersprice_201502.csv.regularize.csv';
var dimension = ["id","開始日","終了日","職種","都道府県","労務単価"].join(",");
var appliedDate = "2015-02-01";
var expireDate = "2016-01-31";

var parseCSV = function (){
	var fs = require('fs');
	var results = [dimension];

	fs.readFile(csv_from,'utf8',function(err, text){
		var rowsParsed = text.split("\r\n");
		var header = rowsParsed[0].split(",");
		var colsParsed = [];
		var c = 0;
		for (var i = 1 ; i < rowsParsed.length; i++) {
			colsParsed = rowsParsed[i].split(",");
			for (var j = 1 ; j < colsParsed.length; j++) {
				results.push( (c).toString() + "," + appliedDate + ","+ expireDate + "," + [header[j],colsParsed[0],colsParsed[j]].join(","));
				c++;
			};
		};
		console.log(results.join("\r\n"));
		fs.writeFile(csv_into, results.join("\r\n"), function(err){
			console.log(err);
		});
	});
};

parseCSV();