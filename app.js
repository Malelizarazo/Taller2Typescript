class Serie {
    constructor(id, name, channel, seasons, description, url, image) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.url = url;
      this.image = image;
    }
  }
  
  // Define un arreglo de objetos Serie
  const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","https://i.imgur.com/GGje0vc.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","https://i.imgur.com/EvKe48G.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "American fantasy drama", "https://www.hbo.com/game-of-thrones",
      "https://i.imgur.com/TDCEV1S.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life. Despite their on-again, off-again relationship in the past, Leonard and Penny have finally gotten married. Even Sheldon has found a female companion, entering into a relationship agreement with neurobiologist Amy Farrah Fowler, and he recently took their relationship to the next level by marrying her after a long courtship. In their free time, Leonard and Sheldon enjoy fantasy role-playing games with their ever-expanding universe of friends, including fellow scientists Koothrappali, Wolowitz, and Wolowitz’s adorable microbiologist wife, Bernadette, who is adjusting to life with their two children.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "https://i.imgur.com/uAEpVWk.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman), who has returned from military service in Afghanistan with the Royal Army Medical Corps",
        "https://www.bbc.co.uk/programmes/b018ttws", "https://i.imgur.com/02B7qhj.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "https://i.imgur.com/D4y3DrQ.jpg"),
  ];
  
  // Función para mostrar las series en una tabla
  function mostrarSeriesEnTabla(series) {
    const tabla = document.createElement("table");
  
    // Crear fila de encabezado
    const encabezado = document.createElement("tr");
    const encabezadoId = document.createElement("th");
    encabezadoId.textContent = "ID";
    const encabezadoName = document.createElement("th");
    encabezadoName.textContent = "Name";
    const encabezadoChannel = document.createElement("th");
    encabezadoChannel.textContent = "Channel";
    const encabezadoSeasons = document.createElement("th");
    encabezadoSeasons.textContent = "Seasons";
  
    encabezado.appendChild(encabezadoId);
    encabezado.appendChild(encabezadoName);
    encabezado.appendChild(encabezadoChannel);
    encabezado.appendChild(encabezadoSeasons);
    tabla.appendChild(encabezado);
  
    // Crear filas de series
    for (const serie of series) {
      const fila = document.createElement("tr");
      const id = document.createElement("td");
      id.textContent = serie.id.toString();
      //const name = document.createElement("td");
      const name = document.createElement("p");
      name.textContent = serie.name; // Establecer el texto del elemento "p"
      name.setAttribute("onclick", "mostrarDetalleSerie(" + serie.id + ")"); // Agregar atributo "onclick"
      //name.appendChild(name_);
      const channel = document.createElement("td");
      channel.textContent = serie.channel;
      const seasons = document.createElement("td");
      seasons.textContent = serie.seasons.toString();

  
      fila.appendChild(id);
      fila.appendChild(name);
      fila.appendChild(channel);
      fila.appendChild(seasons);
      tabla.appendChild(fila);
    }
  
    document.body.appendChild(tabla);
    const resumen = document.createElement("tr");
    const resumenLabel = document.createElement("td");
    resumenLabel.textContent = "Promedio de temporadas:";
    const resumenValue = document.createElement("td");
    const promedioTemporadas = calcularPromedioTemporadas(series);
    resumenValue.textContent = promedioTemporadas;
  
    resumen.appendChild(resumenLabel);
    resumen.appendChild(resumenValue);
    tabla.appendChild(resumen);
  
    document.body.appendChild(tabla);
  }
  
  function calcularPromedioTemporadas(series) {
    const totalTemporadas = series.reduce((total, serie) => total + serie.seasons, 0);
    const promedioTemporadas = totalTemporadas / series.length;
    return promedioTemporadas.toFixed(2);
  }

  function mostrarDetalleSerie(serieId) {

    serie = series.find(serie => serie.id === serieId);
    const detalle = document.getElementById("detalle");
    
  
    // Limpiar el contenido anterior del detalle
    detalle.innerHTML = "";
  
    // Crear el elemento Card de Bootstrap
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Crear el cuerpo de la Card
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    // Agregar la imagen de la serie
    const imagen = document.createElement("img");
    imagen.src = "imagen/" + serie.id + ".jpg";
    imagen.classList.add("card-img-top");
    cardBody.appendChild(imagen);
  
    // Agregar el nombre de la serie
    const nombre = document.createElement("h5");
    nombre.classList.add("card-title");
    nombre.textContent = serie.name;
    cardBody.appendChild(nombre);
  
    // Agregar la descripción de la serie
    const descripcion = document.createElement("p");
    descripcion.classList.add("card-text");
    descripcion.textContent =
      "Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer.";
    cardBody.appendChild(descripcion);
  
    // Agregar el enlace a la serie
    const enlace = document.createElement("a");
    enlace.href = "https://www.amc.com/shows/breaking-bad";
    enlace.target = "_blank";
    enlace.classList.add("btn", "btn-primary");
    enlace.textContent = "Ver serie";
    cardBody.appendChild(enlace);
  
    // Agregar el cuerpo de la Card al elemento Card
    card.appendChild(cardBody);
  
    // Agregar la Card al detalle
    detalle.appendChild(card);
  }
  

  
  // Llamada a la función para mostrar las series en una tabla
  mostrarSeriesEnTabla(series);