function timer(){
	var anni;
	var mesi;
	var giorni;
	var ore;
	var minuti;
	var secondi;
	const data=new Date();
	anni=data.getFullYear();
	
	
	anni= data.getFullYear();
	mesi= data.getMonth()+1;
	giorni= data.getDate();
	ore= data.getHours();
	minuti= data.getMinutes();
	secondi= data.getSeconds();
	anni=2050-anni;
	mesi=12-mesi;
	giorni=31-giorni;
	ore=24-ore;
	minuti=60-minuti;
	secondi=60-secondi;
	document.getElementById("clessidra").innerHTML =(anni+"Y / "+mesi+"M / "+giorni+"D / "+ore+"H / "+minuti+"M / "+secondi+"S");
}
function start(){
	timer();
	setInterval(timer, 1*1000);
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
  }