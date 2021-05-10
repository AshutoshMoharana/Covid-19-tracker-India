fetch("https://covid-193.p.rapidapi.com/statistics?country=india", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "3cc83a655fmshe4e554343d0b79bp11090ajsnb8a5513e733b",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
.then((response) => {
    // console.log(response);
    return response.json();
})


.then((actualdata)=>{
    console.log(actualdata);
    let CountryName = actualdata.parameters.country;
    let TotalPopulation = actualdata.response[0].population;
    let date = actualdata.response[0].day;
    let TotalCases = actualdata.response[0].cases.total;
    let TotalDeaths = actualdata.response[0].deaths.total;
    let TotalRecovered = actualdata.response[0].cases.recovered;







document.getElementById('CountryName').innerHTML= CountryName.toLocaleString('en');
document.getElementById('Population').innerHTML = TotalPopulation.toLocaleString('en');
document.getElementById('Date').innerHTML = date.toLocaleString('en');
document.getElementById("cases").innerHTML = TotalCases.toLocaleString('en');
document.getElementById("Deaths").innerHTML = TotalDeaths.toLocaleString("en");
document.getElementById("Recovered").innerHTML = TotalRecovered.toLocaleString("en");


})


.catch((err) => {
	console.error(err);
});