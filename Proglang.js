
function selLang()
	{
	var mylist=document.getElementById("langList");
	document.getElementById("lang").value=mylist.options[mylist.selectedIndex].text;
	document.getElementById("show_lang").innerHTML="Du har valgt";
	}


function AlertIt() {
	var answer = confirm ("Denne siden er under konstruksjon.")
	}
