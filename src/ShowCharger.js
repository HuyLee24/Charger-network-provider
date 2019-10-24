import React, { Component } from 'react'
import ChargerTable from './ChargerTable'

class ShowCharger extends Component {
    render(){
        const chargers = [
            {
                id: '1',
                name: 'Neste K-Liikenneasema Linnatuuli',
                location:'Helsingintie',
            },
            {
                id: '2',
                name: 'ABC Särkisalmi',
                location:'Rinnekatu',
            },
            {
                id: '3',
                name: 'Lapland Hotels Oulu',
                location:'Kirkkokatu',
            },
            {
                id: '4',
                name: 'Oulun Energian toimitalon piha',
                location:'Kasarmintie',
            },
            {
                id: '5',
                name: 'Kivisydän',
                location:'Hallituskatu',
            },
            {
                id: '6',
                name: 'P-Stockmann',
                location:'Kirkkokatu',
            },
            {
                id: '7',
                name: 'K-Citymarket Oulu Kaakkuri',
                location:'Metsokankaantie',
            },
            {
                id: '8',
                name: 'Kempeleen Ekokortteli',
                location:'Koivikkohaka',
            },
            {
                id: '9',
                name: 'Pilot Business Park',
                location:'lentokatu',
            },
            {
                id: '10',
                name: 'Hesburger Pulkkila',
                location:'Jokivarrentie',
            },
            {
                id: '11',
                name: 'Centrian parkkipaikka',
                location:'Vierimaantie',
            },
            {
                id: '12',
                name: 'Kärkkäisen parkkialue',
                location:'Ollilanojankatu',
            },
            {
                id: '13',
                name: 'Tapion Tupa',
                location:'Ollilanojankatu',
            },
            {
                id: '14',
                name: 'Tapion Tupa',
                location:'Matkailutie',
            },
            {
                id: '15',
                name: 'Anorak',
                location:'Brahenkatu',
            },
            {
                id: '16',
                name: 'Tahko Spa Hote',
                location:'Keitaankatu',
            },
            {
                id: '17',
                name: 'Jari-Pekka Hankasalmi',
                location:'Pieksämäentie',
            },
            {
                id: '18',
                name: 'Hämeen Auto',
                location:'Kuormaajantie',
            },
            {
                id: '19',
                name: 'Serlachius-museo',
                location:'Joenniementie',
            },
            {
                id: '20',
                name: 'Neste Jämsän Portti',
                location:'Kauhkialantie',
            },
        ]
        return(
            <table>
            <ChargerTable chargerData={chargers} />
            </table>
        )
    }
}

export default ShowCharger