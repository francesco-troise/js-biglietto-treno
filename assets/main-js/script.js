
/*INTRODUZIONE PER L'UTENTE*/

alert(`Salve, benvenuto a bordo!
seguite le istruzioni per compilare il biglietto`)
//-alert mi permette di stampare semplici messaggi a schermo//

/*ACQUISIZIONE DATI*/

let full_name = prompt("Inserire nome e cognome separati da uno spazio")
//dichiaro e ,tramite -prompt, assegno valore alla variabile -full_name(inizializzata all'atto dell'assegnazione)

let eta = Number(prompt("inserire età"))
//dichiaro e, tramite -prompt, assegno valore alla varibabile -eta(inizializzata all'atto dell'assegnazione)

let lunghezza_tratta = Number(prompt(`Inserire la lunghezza, in km, della tratta che si desidera percorrere`))
//dichiaro e, tramite -prompt, assegno valore alla variabille -eta(inizializzata all'atto dell'assegnazione)

/*CALCOLO PREZZO PIENO*/

const prezzo_km = 0.21
//dichiaro ed inizilizzo la constante(-prezzo_km è il prezzo al km della tratta)

let prezzo_pieno = prezzo_km * lunghezza_tratta
//calcolo il prezzo pieno della tratta, lo userò poi con eventuali sconti




