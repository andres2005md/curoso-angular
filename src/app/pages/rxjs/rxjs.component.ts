import { Component, OnDestroy } from '@angular/core';
import { filter, interval, map, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements  OnDestroy{
  
  public intervalSubs : Subscription;

  constructor () {

    // this.retornaObservable().pipe(
    //   retry(2)
    // ).subscribe(
    //   valor => console.log('Subs',valor),
    //   error => console.warn('Error',error),
    //   () => console.info('obs terminado')

    // );  
    this.intervalSubs =  this.retornaIntervalo().subscribe( console.log )

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe(); 
  }
  retornaIntervalo () : Observable <number>  {
    
    return interval (100)
            .pipe(
              // take(10),
              map(valor => valor +1 ),
              filter( valor =>(valor % 2 === 0 ? true:false)),
            );
  }
   
  retornaObservable(): Observable <number> {
    let i = -1;
    return new Observable ( observer => {

      const intervalo = setInterval( () => {

        i++;
        observer.next(i);
        
        if (i === 4) {
          clearInterval(  intervalo );
          observer.complete();
        }
        if (i === 2) {
          observer.error('i llego al valor 2');
        }


      },1000)
      

    });
   
  }

}
