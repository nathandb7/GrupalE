var artistas = [
    {
      nombre: 'Miguel Bosé',
      biografia: 'Miguel Bosé es un cantante, actor y compositor español. Nació en San Fernando, Cádiz, España, el 3 de abril de 1956. Es hijo del actor italiano Luis Miguel Dominguín y de la actriz española Lucía Bosé. Su nombre completo es Luis Miguel González Bosé.'
    },
    {
      nombre: 'Enrique Iglesias',
      biografia: 'Enrique Iglesias es un cantante, compositor y productor discográfico español. Nació en Madrid, España, el 8 de mayo de 1975. Es hijo del cantante Julio Iglesias y de la filántropa y socialité Isabel Preysler. Su nombre completo es Enrique Miguel Iglesias Preysler.'
    },
    {
      nombre: 'Alejandro Sanz',
      biografia: 'Alejandro Sanz es un cantante, compositor y productor discográfico español. Nació en Madrid, España, el 18 de diciembre de 1968. Es hijo de María Pizarro Medina y Jesús Sánchez Madero. Su nombre completo es Alejandro Sánchez Pizarro.'
    },
    {
      nombre: 'Ricky Martin',
      biografia: 'Ricky Martin es un cantante, compositor, actor, productor discográfico y empresario puertorriqueño. Nació en San Juan, Puerto Rico, el 24 de diciembre de 1971. Es hijo de Nereida Morales y Enrique Martín Negroni. Su nombre completo es Enrique Martín Morales.'
    },
    {
      nombre: 'Juanes',
      biografia: 'Juanes es un cantante, compositor y productor discográfico colombiano. Nació en Carolina del Príncipe, Antioquia, Colombia, el 9 de agosto de 1972. Es hijo de Margarita Muñoz y Juan Esteban Aristizábal Vásquez. Su nombre completo es Juan Esteban Aristizábal Vásquez.'
    },
    {
      nombre: 'Juan Luis Guerra',
      biografia: 'Juan Luis Guerra es un cantante, compositor y productor discográfico dominicano. Nació en Santo Domingo, República Dominicana, el 7 de junio de 1957. Es hijo de Olga Seijas y Juan Ramón Guerra. Su nombre completo es Juan Luis Guerra Seijas.'
    },
    {
      nombre: 'Juan Gabriel',
      biografia: 'Juan Gabriel es un cantante, compositor y productor discográfico mexicano. Nació en Parácuaro, Michoacán, México, el 7 de enero de 1950. Es hijo de Gabriel Aguilera y Victoria Rasgado. Su nombre completo es Alberto Aguilera Valadez.'
    },
    {
      nombre: 'José José',
      biografia: 'José José es un cantante, compositor y productor discográfico mexicano. Nació en Azcapotzalco, Ciudad de México, México, el 17 de febrero de 1948. Es hijo de José Sosa Esquivel y Margarita Ortiz. Su nombre completo es José Rómulo Sosa Ortiz.'
    },
    {
      nombre: 'Luis Miguel',
      biografia: 'Luis Miguel es un cantante, compositor y productor discográfico mexicano. Nació en Puerto Rico, Estados Unidos, el 19 de abril de 1970. Es hijo del cantante Luisito Rey y de la socialité Marcela Basteri. Su nombre completo es Luis Miguel Gallego Basteri.'
    },
    {
        nombre: 'Miguel',
        biografia: 'Miguel es un cantante de R&B y soul estadounidense. Su nombre real es Miguel Jontel Pimentel. Nació el 23 de octubre de 1985 en San Pedro, California. Su padre es mexicano y su madre es afroamericana. Su padre es un músico de jazz y su madre es una cantante de ópera. Miguel comenzó a cantar a los 5 años de edad. A los 13 años, Miguel comenzó a escribir canciones y a los 14 años, comenzó a tocar la guitarra. Miguel se graduó de la escuela secundaria en 2003 y asistió a la Universidad de California en San Diego. Miguel dejó la universidad para seguir su carrera musical. Miguel firmó con la compañía discográfica Jive Records en 2007. Su primer álbum, All I Want Is You, fue lanzado en 2010. Su segundo álbum, Kaleidoscope Dream, fue lanzado en 2012. Su tercer álbum, Wildheart, fue lanzado en 2015. Su cuarto álbum, War & Leisure, fue lanzado en 2017.'
      },
      {
        nombre: 'Rihanna',
        biografia: 'Rihanna es una cantante, compositora, actriz y diseñadora de moda de Barbados. Su nombre real es Robyn Rihanna Fenty. Nació el 20 de febrero de 1988 en Saint Michael, Barbados. Su padre es un contador y su madre es una ama de casa. Rihanna comenzó a cantar a los 7 años de edad. A los 15 años, Rihanna firmó con la compañía discográfica Def Jam Recordings. Su primer álbum, Music of the Sun, fue lanzado en 2005. Su segundo álbum, A Girl Like Me, fue lanzado en 2006. Su tercer álbum, Good Girl Gone Bad, fue lanzado en 2007. Su cuarto álbum, Rated R, fue lanzado en 2009. Su quinto álbum, Loud, fue lanzado en 2010. Su sexto álbum, Talk That Talk, fue lanzado en 2011. Su séptimo álbum, Unapologetic, fue lanzado en 2012. Su octavo álbum, Anti, fue lanzado en 2016. Su noveno álbum, ANTI, fue lanzado en 2016. Su décimo álbum, ANTI, fue lanzado en 2016.'
      },
      {
        nombre: 'Frida Kahlo',
        biografia: 'Frida Kahlo de Rivera fue una pintora mexicana nacida el 6 de julio de 1907 en Coyoacán, Ciudad de México, y fallecida el 13 de julio de 1954 en la misma ciudad. Es considerada una de las más importantes pintoras mexicanas del siglo XX. Su obra está inspirada en la cultura mexicana y en los conflictos emocionales que la aquejaron durante toda su vida. Su pintura se caracteriza por su colorido y su originalidad, y por el uso de símbolos que reflejan sus propias vivencias y su visión del mundo.'
      },
      {
        nombre: 'Diego Rivera',
        biografia: 'Diego María de la Concepción Juan Nepomuceno Estanislao de la Rivera y Barrientos Acosta y Rodríguez, conocido como Diego Rivera, fue un muralista, pintor y escultor mexicano, uno de los más importantes del siglo XX. Fue uno de los fundadores del movimiento muralista mexicano junto con José Clemente Orozco y David Alfaro Siqueiros. Su obra se caracteriza por su realismo social y por su compromiso político con el movimiento obrero y el comunismo.'
      },
      {
        nombre: 'José Clemente Orozco',
        biografia: 'José Clemente Orozco González fue un pintor mexicano, uno de los tres grandes muralistas mexicanos del siglo XX, junto con Diego Rivera y David Alfaro Siqueiros. Su obra se caracteriza por su realismo social y por su compromiso político con el movimiento obrero y el comunismo.'
      },
      {
        nombre: 'David Alfaro Siqueiros',
        biografia: 'David Alfaro Siqueiros fue un pintor, escultor y muralista mexicano, uno de los tres grandes muralistas mexicanos del siglo XX, junto con Diego Rivera y José Clemente Orozco. Su obra se caracteriza por su realismo social y por su compromiso político con el movimiento obrero y el comunismo.'
      },
      {
        nombre: 'Roberto Matta',
        biografia: 'Roberto Sebastián Antonio Matta Echaurren, conocido como Roberto Matta, fue un pintor y dibujante chileno, uno de los más importantes del siglo XX. Su obra se caracteriza por su surrealismo y por su compromiso político con el movimiento obrero y el comunismo.'
      },
      {
        nombre: 'Joaquín Torres García',
        biografia: 'Joaquín Torres García fue un pintor, escultor, grabador, dibujante, escritor y teórico del arte uruguayo. Fue uno de los fundadores del movimiento constructivista y uno de los más importantes artistas latinoamericanos del siglo XX.'
      },
      {
        nombre: 'Fernando Botero',
        biografia: 'Fernando Botero Angulo es un pintor y escultor colombiano, uno de los más importantes artistas latinoamericanos del siglo XX. Su obra se caracteriza por su estilo propio, conocido como "Boterismo", en el que las figuras humanas y los animales se representan con una exageración de las formas.'
      },
    ];

    var lista = document.createElement('ul');
    for (var i = 0; i < artistas.length; i++) {
      var item = document.createElement('li');
      var nombre = document.createElement('h2');
      var biografia = document.createElement('p');
      nombre.innerHTML = artistas[i].nombre;
      biografia.innerHTML = artistas[i].biografia;
      item.appendChild(nombre);
      item.appendChild(biografia);
      lista.appendChild(item);
    }
    document.body.appendChild(lista);