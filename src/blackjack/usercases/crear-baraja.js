import { shuffle } from 'underscore';

/**
 * 
 * @param {Array<String>} tiposCartas 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array}
 */
export const crearBaraja = (tiposCartas, tiposEspeciales) => {
    if (!tiposCartas || tiposCartas.length === 0) {
        throw new Error('Tipo de carta obligatorio');
    } 
    if (!tiposCartas || tiposCartas.length === 0) {
        throw new Error('Tipo de carta obligatorio');
    }

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposCartas) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = shuffle(deck);
    return deck;
}