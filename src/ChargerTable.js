import React, { Component } from 'react'

const TableHeader = () => { 
    return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
            </thead>
            )
    }
    const TableBody = props => {
        const rows = props.chargerData.map((row, index) => {
            return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                </tr>
              )
        })
    return <tbody>{rows}</tbody>
    
    }        

class ChargerTable extends Component{    
    render(){
        const { chargerData } = this.props

        return(
        <div className='tableForm'>
            <table>
                <TableHeader />
                <TableBody chargerData={chargerData}/>
            </table>
        </div>
        )
    }
}

export default ChargerTable