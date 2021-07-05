/**
 * 'export' ist nötig falls wir MyMath in einem anderen Modul importieren wollen.
 * 'class' legt fest dass es sich hierbei um eine Klasse handelt.
 * 'MyMath' ist der Name der Klasse.
 */
export class MyMath {

    /**
     * Der Konstruktor wird aufgerufen um neue Instanzen der Klasse zu generieren.
     * vgl. let myNumber = new MyMath(3);
     * 
     * @param value Unser Initialwert für den Wert von unserer MyMath Instanz.
     */
    constructor(value) {
        // 'this' referenziert den Kontext in dem die aktuelle Funktion aufgerufen wird. 
        // Hier referenziert es die Instanz der Klasse MyMath die wir gerade erstellen.
        // mit 'value * 1' erzwingen wir, dass value als number gelesen wird.
        if (value){
            this.value = value * 1;
            
        } else {
            this.value = 0; 
        }
    }

    add(value) {
        this.value += value;

    }

    add2(param1) {
        this.value += arguments[0];

    }

    subtract(value) {
        this.value -= value

    }

    multiply(value) {
        this.value *= value

    }

    multiply2(value) {
        let helper = this.value;
        
        for (let index = 0; index < value - 1; index++) {
            this.value += helper;
            
        }

    }
    // If you divide by 0 the result is infinity (the constant infinity) but you can do this and javascript will not throw an exception!
    divide(value) {
        if(value == 0){
            console.log("Fehler: Division durch 0 möglich, aber nicht sinnvoll");
        } else {
        this.value /= value;
        }

    }
  

    pow(value) {

        if(value == 0){
            this.value = 1;
        } else {
        let multiplikator = this.value;

        for(let index = 0; index < value - 1; index++){
            this.value *= multiplikator; 
        }
        }   

    }

    faculty() {

        if(this.value % this.value != 0){
            console.log("Fakultaet nur fuer ganze Zahlen definiert")
        } 
        else if (this.value == 1) {
            this.value = 1;
            
        } else {
            let result = 1;
            while(this.value > 1){
                
                result *= this.value ;
                this.value = (this.value - 1);
            }
            this.value = result;
            
        }

    }


    
}
