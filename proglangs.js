function langList()
{
var språktype="";

språktype = document.getElementById("select_id").value;

if(språktype==""){
document.getElementById("outputbox").innerHTML="Velg et språk ";}

else{document.getElementById("outputbox").innerHTML="Du har valgt programeringsspråket " + språktype;
}
}

function Underkonstruksjon()
{
alert("Denne siden er under konstruksjon");
}
