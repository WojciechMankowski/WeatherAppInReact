import City from "./components/City";

const Capitals = () => {
  const europe = [
    "Tirana",
    "Andora ",
    "Wiedeń",
    "Bruksela",
    "Mińsk",
    "Sarajewo",
    "Sofia",
    "Zagrzeb",
    "Podgorica",
    "Praga",
    "Kopenhaga",
    "Tallinn",
    "Helsinki",
    "Paryż",
    "Ateny",
    "Madryt",
    "Amsterdam",
    "Dublin",
    "Reykjavík",
    "Vaduz",
    "Wilno",
    "Luksemburg",
    "Ryga",
    "Skopje",
    "Valletta",
    "Kiszyniów",
    "Monako",
    "Berlin",
    "Oslo",
    "Warszawa",
    "Lizbona",
    "Moskwa",
    "Bukareszt",
    "San Marino ",
    "Belgrad",
    "Sztokholm",
    "Kijów",
    "Budapeszt",
    "Londyn",
    "Rzym",
  ];
  
  const europe_city = europe.map((city) => (
    <City city={city}  />
  ));
  return (
    <div className="container" id="weather">
      <h3 > Pogoda na świecie</h3>
      {europe_city}
    </div>
  );
};

export default Capitals;
