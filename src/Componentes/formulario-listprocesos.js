import React from 'react'
import Formulario from './formulario'
import FormularioRow from './formulario-row'
import FormularioRowprocesos from './formulario-rowprocesos'
import TableHeaderFormulario from './Table-Header-Formulario'
import TableHeaderFormularioprocesos from './Table-Header-Formularioprocesos'
import {browserHistory} from 'react-router-3';

class FormularioListprocesos extends React.Component{

    
        


    render(){
        if(this.props.lista.length >0){
        return(
            
           <div className="">     
            <table className="table">
            <TableHeaderFormularioprocesos/>
                <tbody>
                {
                    this.props.lista.map((beneficio,key)=>{
                      // this.state.arreglo.push(key)
                        return (
                            
                            <FormularioRowprocesos lista={beneficio} numero={key} codigo={this.props.codigo}/>
                            
                         )
                        
                        
                    })
                    
                    
                }

            </tbody>
            </table>
            </div>
            
        ) }    
        else {
            return <div className="mensaje central">No hay datos que mostrar</div>
        }
        }
        
}
export default FormularioListprocesos