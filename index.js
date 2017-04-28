var fetch = require('node-fetch');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());
const pcUrl = 'https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json';
var pc = {};
var ttt = {};
var volumes = {};
pars(pcUrl);


app.get('/board/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли board");
	//console.log(ttt.os);
	res.send(pc.board);
});
app.get('/board/vendor', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли board.vendor");
	//console.log(ttt.os);
	res.send('"' + pc.board.vendor + '"');
});
app.get('/board/model', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли board.model");
	//console.log(ttt.os);
	res.send('"' + pc.board.model + '"');
});
app.get('/board/cpu', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли CPU");
	//console.log(ttt.os);
	res.send(pc.board.cpu);
});
app.get('/board/cpu/hz', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли CPU hz");
	//console.log(ttt.os);
	res.send(pc.board.cpu.hz + '');
});
app.get('/board/image', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли board.image");
	//console.log(ttt.os);
	res.send('"' + pc.board.image + '"');
});
app.get('/board/video', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли board.video");
	//console.log(ttt.os);
	res.send('"' + pc.board.video + '"');
});
app.get('/ram/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли ram");
	//console.log(ttt.os);
	res.send(pc.ram);
});
app.get('/ram/vendor', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли ram.vendor");
	//console.log(ttt.os);
	res.send('"' + pc.ram.vendor + '"');
});
app.get('/ram/volume', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли ram.volume");
	//console.log(ttt.os);
	res.send(pc.ram.volume + '');
});
app.get('/ram/pins', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли ram.pins");
	//console.log(ttt.os);
	res.send(pc.ram.pins + '');
});
app.get('/os/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли os");
	//console.log(ttt.os);
	res.send('"' + pc.os + '\"');
});
/*app.get('/hdd/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли hdd");
	//console.log(ttt.os);
	res.send(volumes{
		C: 
	});
});*/
app.get('/volumes/', function(req, res){
	var ttt = getVolumes(pc.hdd);
	//pc = JSON.pars(ttt);
	console.log("Зашли volumes hdd");
	//console.log(ttt.os);
	res.send(ttt);
});
app.get('/hdd/', function(req, res){
	
	//pc = JSON.pars(ttt);
	console.log("Зашли hdd");
	//console.log(ttt.os);
	res.send(pc.hdd);
});
app.get('/hdd/:id', function(req, res){
	//console.log(req.params.id);
	var from = parseInt(req.params.id);
	if(from < 3 && from > -1){
		var to = pc.hdd;
		var temp2 = to.slice(from, from+1);
		//console.log(temp2[0]);
		//pc = JSON.pars(ttt);
		console.log("Зашли hdd id=" + from);
		//console.log(ttt.os);
		res.send(temp2[0]);
	}else{
		res.status(404).send('Not Found');
	}
});
app.get('/hdd/:id/vendor', function(req, res){
	//console.log(req.params.id);
	var from = parseInt(req.params.id);
	var to = pc.hdd;
	var temp2 = to.slice(from, from+1);
	//console.log(temp2[0]);
	//pc = JSON.pars(ttt);
	console.log("Зашли hdd id=" + from + ' vendor');
	//console.log(ttt.os);
	res.send('"' + temp2[0].vendor + '"');
});
app.get('/hdd/:id/size', function(req, res){
	//console.log(req.params.id);
	var from = parseInt(req.params.id);
	var to = pc.hdd;
	var temp2 = to.slice(from, from+1);
	console.log("Зашли hdd id=" + from + ' size');
	res.send(temp2[0].size + '');
});
app.get('/hdd/:id/volume', function(req, res){
	//console.log(req.params.id);
	var from = parseInt(req.params.id);
	var to = pc.hdd;
	var temp2 = to.slice(from, from+1);
	console.log("Зашли hdd id=" + from + ' volume');
	res.send('"' + temp2[0].volume + '"');
});
app.get('/floppy/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли floppy");
	//console.log(ttt.os);
	res.send(pc.floppy + '');
});
app.get('/monitor/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли monitor");
	//console.log(ttt.os);
	res.send(pc.monitor);
});
app.get('/length/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли length");
	//console.log(ttt.os);
	res.send(pc.length + '');
});
app.get('/height/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли height");
	//console.log(ttt.os);
	res.send(pc.height + '');
});
app.get('/width/', function(req, res){
	//pc = JSON.pars(ttt);
	console.log("Зашли width");
	//console.log(ttt.os);
	res.send(pc.width + '');
});
app.get('/', function (req, res) {
	
	var promise = new Promise(function(resolve, reject){
		pars(pcUrl);		
 		res.send(ttt);
	})
	.catch(function(err){
		console.log('Ошибка: ', err);
	});
});
app.get('*', function(req, res, next) {
  res.status(404).send('Not Found');
});




app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function pars(bar){
	
	fetch(bar)
  .then(async (res) => {
  	console.log('res ' + res);
    pc = await res.json();
	
    console.log('pc ' + pc.length);
    ttt = await JSON.stringify(pc);
    //console.log(ttt);
    
  })
  .catch(err => {
    console.log('Чтото пошло не так:', err);
  });
  
}

function getVolumes(argument) {
	// body...
	console.log(argument);
	var obj ={};
	var arrayDisk = [];
	var sizeDisk = [];
	for (var key in argument) {
		console.log(argument[key].volume);
		if(arrayDisk.length != 0){
			var Disk = argument[key].volume;
			var Size = argument[key].size;
			for (var key2 in arrayDisk) {
				if(arrayDisk[key2] == Disk){
					console.log('Такой диск есть');
					var temp = argument[key].size;
					console.log(temp);
					sizeDisk[key2] += argument[key].size;
					break;
				}else{
					arrayDisk.push(argument[key].volume);
					sizeDisk.push(argument[key].size);
				}
			}
		}else{
			arrayDisk.push(argument[key].volume);
			sizeDisk.push(argument[key].size);
		}
	}
	for (var i in arrayDisk) {
		// obj[disk + i] = arrayDisk[i];
		// obj.razm[i] = sizeDisk[i]; 
		store(arrayDisk[i], sizeDisk[i])
	}
	console.log('Volumes' + volumes);
	console.log(arrayDisk);
	console.log(sizeDisk);
	return volumes;
}

function store(event, dis){
	volumes[event] = '' +  dis + 'B';
}

