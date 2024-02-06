import { pedirCarta, valorCarta,crearCartaHtml } from ".";

export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck ) => {
    let puntosComputadora = 0;
    if(!puntosMinimos){throw new Error('Puntos Minimos Necesarios')}

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        divCartasComputadora.append( crearCartaHtml(carta) );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}