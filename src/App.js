import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  getPaintings () {
	return [
	  {_id: 1, img: "stefano-veneziano.jpg", artist: "Stefano Veneziano", title: "Madonna and Child Enthroned", year: "1369", place: "Museo Correr, Venice", notes: []},
	  {_id: 2, img: "doges.jpg", artist: "idk", title: "Doges Palace", year: "begun 1340", place: "Venice", notes: ["interesting because structure of facade - unfamiliar for churches or palaces in any other european city, absorbed from east and islamic world, hybrid global art form"]},
	  {_id: 3, img: "chimabue.jpg", artist: "Chimabue", title: "Madonna Enthroned with Angels and Prophets", year: "1280 - 1290", place: "Santa Trinita, Florence", notes: ["climax of byzantine tradition - gold background => other worldliness and glory, symmetrical composition", "attempt to create 3d space and real physical body -- enthroned in a structure & angels grabbing onto 3d throne"]},
	  {_id: 4, img:"annunciation.jpg", artist: "Simone Martini and Lippo Memi", title: "Annunciation", year: "1333", place: "Sienna Cathedral, Sienna", notes: ["probably student of Duccio", "simple exchange of 2 figures that encapsulates psychological complexity", "3d painting, uses plaster to bring up structure of textil"]},
	  {_id: 5, img: "allegory.jpg", artist: "Ambrogio Lorenzetti", title: "The Allegory of Good and Bad Government", year: "1338-9", place: "interior of Sala de Nove (Room of the Nine), Palazzo Pubblico, Siena", notes: ["figures represent different virtues", "turn backs on world well governed, see a city badly governed"]},
	  {_id: 6, img: false, artist: "Chimabue", title: "Virgin and Child with Angels", year: "1280-85", place: "Florence: Uffizi", notes: []},
	  {_id: 7, img: "giotto-virgin.jpg", artist: "Giotto", title: "Virgin and Child with Angels", year: "1310", place: "Florence, Ufizi", notes: ["student and follower of Cimbaue", "giotto takes hint of space around body and renders full 3d", "all figures have heft and reality - quite new"]},
	  {_id: 8, img: "giotto-chapel.jpg", artist: "Giotto", title: "Arena Chapel at Padua", year: "1305", place: "Padua", notes: ["Enrico paid for chapel, was banker and money lender which was dodgy thing to do at the time because the bible shames it", "fresco in brilliant blue - sense of reality under sky instead of gold", "global connection made from ground lapis lazuli which comes from quarries in afghanistan", "shape compared to arch of titus - giotto saw arch of titus and game back and created this structure"]},		{_id: 9, img: "giotto-lamentation.jpg", artist: "Giotto", title: "Lamentation", year: "1304-1313", place: "Padua Chapel", notes: []},
	  {_id: 10, img: "pisano-pulpit.jpg", artist: "Nicola Pisano", title: "Pulpit", year: "1259-60", place: "Baptistery, Pisa", notes: []},
	  {_id: 11, img: "pisano-fortitude.jpg", artist: "Nicola Pisano", title: "Fortitude", year: "1260", place: "Baptisery, Pisa", notes: []},
	  {_id: 12, img: "pisano-nativity.jpg", artist: "Nicola Pisano", title: "Nativity, Annunciation and Annunciation to the Shepherds", year: "1260", place: "Baptistery, Pisa", notes: []},
	  {_id: 13, img: "ghiberti.jpg", artist: "Ghiberti", title: "Sacrifice of Issac - Gates of Paradise doors on the Baptistery", year: "1401-02", place: "Bargello, Florence", notes: ["figure on right - absorbed lessons of classical sculpture - abs and pecs like a roman athlete, not gothic body covered in drapes", "self portrait"]},
	  {_id: 14, img: "george.jpg", artist: "Donatello", title: "St George", year: "1414-15", place: "Bargello, Florence", notes: ["St George face = classical stylization of heroic male beauty", "paid for by metal workers guild -- holding a sword"]},
	  {_id: 15, img: "pazzi.jpg", artist: "Fillipo Brunelleschi", title: "Pazzi Chapel", year: "1423 - 1460", place: "Santa Croce, Florence", notes: ["* alberti definition of beauty = harmony and concert of all the parts = all you want is pure and harmonious essence, nothing excessive", "mathematical promotion & mathematical belonging, renaissance COMPARED to gothic building from same time"]},
	  {_id: 16, img: "george-plus.jpg", artist: "Donatello", title: "St George and the Dragon", year: "1415-17", place: "Beneath St George - relief from tabernacle Or San Michele", notes: ["imaginary 3d space - perspective relies on having horizon line and vanishing point - mathematical relation to vanishing point", "breakthrough in 15th century — place figures in a real space"]},
	  {_id: 17, img: "feast.jpg", artist: "Donatello", title: "Feast of Herod", year: "1425", place: "Baptismal Font, Siena Cathedral", notes: ["Bronze"]},
	  {_id: 18, img: "trinity.jpg", artist: "Masaccio", title: "The Holy Trinity with the Virgin, St John and two Donors", year: "1425", place: "Santa Maria Novella, Florence", notes: ["clumsy Tom", "figure of christ actually occupying a convincing space", "figure of bones at the end - inevitability of death in perfect 3D"]},
	  {_id: 19, img: "tribute_money.jpg", artist: "Masaccio", title: "The Tribute Money", year: "1427", place: "fresco, Brancacci Chapel, Santa Maria del Carmine, Florence", notes: ["spacious landscape, gives space in which christ and disciples can stand", "break through of renaissance humanism"]},
	  {_id: 20, img: "uccello.jpg", artist: "Paolo Uccello", title: "The Battle of San Romano", year: "1438-40", place: "London: National Gallery", notes: ["tempera and silver foil on poplar panel", "elaborate exercise in perspective ever done", "extend out beyond frame so that viewer is incorporated as well"]},
	  {_id: 21, img: "well-moses.jpg", artist: "Klaus Stuter", title: "Well of Moses", year: "1395-1406", place: "Chartreuse de Champmol, Dijon, France", notes: ["Dukes of Burgundy did with their enormous amounts of money", "offering a focus for calm, wings carved out of stone but look weightless", "moses has horns - mistranslation of rays of light thought it meant horns, conclusion of medeival story"]},	
	  {_id: 22, img: "centerpiece.jpg", artist: "Tilman Riemenschneider", title: "The Assumption of the Virgin center panel of the Creglingen Altarpiece", year: "1495-99", place: "Herrgottskirche, Creglingen Germany", notes: ["Annunciation = angel tells mary that she’s going to have the son of god", "German looking Mary"]},	
	  {_id: 23, img: "merode.jpg", artist: "Robert Campin", title: "Merode Altarpiece", year: "1427-32", place: "New York: Metropolitan Museum of Art", notes: ["oil on oak"]},	
	  {_id: 24, img: "goldsmith.jpg", artist: "Petrus Christus", title: "A goldsmith in his shop, possibly Saint Eligius", year: "1449", place: "New York: MET", notes: ["oil on oak", "halo was added by a vendor to increase value of painting making it of a saint rather than a gold smith", "later removed which demonstrates how oil can be changed"]},	
	  {_id: 25, img: "arnolfini.jpg", artist: "Jan Van Eyck", title: "Arnolfini Double Portrait", year: "1434", place: "London national gallery", notes: ["oil on panel", "mirror shows moment of “As Eyck Can”, probably self portrait", "precision of oil shown by chandelleir detail rendered in mirror"]},	
	  {_id: 26, img: "ghent.jpg", artist: "Hubert and Jan Van Eyck", title: "Ghent Altarpiece", year: "1432", place: "San Bravo Catheral, Ghent", notes: ["explore what oil painting can do for a grand religious commission", "Adam and eve in a more realistic manner"]},	
	  {_id: 27, img: "depo.jpg", artist: "Rogier van de Weyden", title: "Deposition", year: "1435", place: "", medium: "oil on wood", notes: ["was commissioned my by the manufactueres guild - christs body is kind of shaped like a cross", "tears! could not have been done with tempera", "deposition = take christ down from cross"]},	
	  {_id: 28, img: "hugo.jpg", artist: "Hugo van der Goes", title: "Portinary Triptych", year: "1475-76", place: "", notes: ["pot in front = statement of globalization, spanish object using islamic north african techniques "]},	
	  {_id: 29, img: "equestrian.jpg", artist: "Donatello", title: "Equestrian Monument of Gattamelata", year: "1445-50", place: "Piazza Di Santo, Padua", medium: "Bronze", notes: ["FIRST equestrian sculpture to be made in bronze since antiquity", "gattamelata = honey cat - like a hunting cat will sneak up behind you sweetly then kill you", "celebrate virtu and magnificenza", "emulating the greeks and romans - written into one of Donatellos contracts "]},	
	  {_id: 30, img: "giovanna.jpg", artist: "Dominico Ghirlandaio", title: "Portrait of Giovanna Tornabuoni", year: "1488", place: "Madrid: Thyssen-Bornemisza Museum", medium: "tempera on panel", notes: ["tempera in background but some detail added in with some of the new oil painting that is coming in", "broach shown twice - must be valuable", "bible = virginity"]},	
	  {_id: 31, img: "casement.jpg", artist: "Fra Filippo Lippi", title: "Women with a man at a Casement", year: "1440-44", medium: "tempera on wood", place: "met", notes: []},	
	  {_id: 32, img: "magi.jpg", artist: "Benozzo Gozzoli", title: "The Journey of the Magi", year: "1449", medium: "Fresco", place: "Chapel of the Palazzo Medici-Riccardi, Florence", notes: []},	
	  {_id: 33, img: "ddavid.jpg", artist: "Donatello", title: "David", year: "1450-60", medium: "Bronze", place: "Florence, Bargello", notes: ["the boy david who has flung at goliath", "was in courtyard at medici palace", "shows how to use bronze to make a gloriously and eroticized"]},	
	  {_id: 34, img: "primavera.jpg", artist: "Sandro Botticelli", title: "Primavera", year: "1482", medium: "Tempera on panel", place: "Florence, Ufizi", notes: ["dead eyes post rape", "humanism - “humanities”"]},	
	  {_id: 35, img: "rez.jpg", artist: "Piero della Francesca", title: "Resurrection", year: "1463", medium: "fresco", place: "Bolgo San Sepolcro", notes: ["christ emerging from the holy sepulcher", "3d christ", "staring at us"]},	
	  {_id: 36, img: "pallas.jpg", artist: "Andrea Mantegna", title: "Pallas expelling the vices from the garden of virtue", year: "1490-02", medium: "tempera on canvas", place: "Louve", notes: []},	
	 // {_id: 37, img: , artist: , title: , year: , medium: , place: , notes: []},	
	 // {_id: 38, img: , artist: , title: , year: , medium: , place: , notes: []},	
	  ]
  }

  renderCards() {
      return this.getPaintings().map((painting) => (
			      <Card key={painting._id} painting={painting} />
			));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Art History Flashcards</h2>
        </div>
        <div className="App-intro">
		  {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default App;
