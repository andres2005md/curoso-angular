import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {
  
  constructor() { }

   ngOnInit(): void {
     this.getUsuarios(); 
    // const promesa = new Promise ((resolve,reject) => {

    //   if ( false ) {
        
    //     resolve('hola mundo');
      
    //   }else {
    //     reject('algo salio mal');

    //   }



    // });

    // promesa.then((mensaje) => {
    //   console.log('mensaje'); 

    // })

    // .catch (error=> console.log('Error en mi promesa',error));

    // console.log('Fin');
    
  }
  
  getUsuarios () {
    fetch ('https://reqres.in/api/users')
    .then( resp => resp.json())
    .then( body => console.log(body.data ));

  }

}
