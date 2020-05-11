import React, {Component}from 'react';
 

class MiComponente extends Component{



    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido '],
            calorias: 400
        };

        return(
                <div className="MiComponente">
                <h1>{'receta: ' + receta.nombre}</h1>
                <h2>{'calorias:' + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) =>{
                            console.log(ingrediente);
                            return(
                                <li key={i}>
                                    {ingrediente}
                                </li>
                            );
                        })
                    }
                    </ol>
                <hr/>
                </div>
            

        );

    }


}

export default MiComponente;