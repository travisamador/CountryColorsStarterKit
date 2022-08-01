class Country {
    constructor(name, lang, greeting, colors, flagURL) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagURL = flagURL
    }
    ChangeInfo(){
        document.getElementById("CountryName").innerText = this.name;
        document.getElementById("OfficialLanguage").innerText = this.lang;
        document.getElementById("HelloWorld").innerText = this.greeting;
    };
    ChangeColors(){
        document.getElementById("Color1").style.backgroundColor = this.colors[0];
        document.getElementById("Color2").style.backgroundColor = this.colors[1];
        document.getElementById("Color3").style.backgroundColor = this.colors[2];
    }
    ChangeFlag(){
        document.getElementById("Flag").src = this.flagURL;
    }

}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"], "USAFlag.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"], "MexicoFlag.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"], "AlgeriaFlag.png");
let chad = new Country("Chad", "Arabic and French", "Marhaban bialealam", ["blue", "yellow", "red"], "ChadFlag.png");
let italy = new Country("Italy", "Italian", "Ciao mondo", ["green", "white", "red"], "ItalyFlag.png");
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "red", "gold"], "GermanyFlag.png");
let yemen = new Country("Yemen", "Arabic", "Marhaban bialealam", ["red", "black", "white"], "YemenFlag.png");

function SwitchCountry() {
    let input = document.getElementById("CountryList").value;
    let country;
    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Chad") {
        country = chad;
    }
    else if (input === "Italy") {
        country = italy;
    }
    else if (input === "Germany") {
        country = germany;
    }
    else if (input === "Yemen") {
        country = yemen;
    }
    country.ChangeInfo();
    country.ChangeColors(); 
    country.ChangeFlag(); 

}
