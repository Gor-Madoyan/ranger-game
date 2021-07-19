cdexport class Ranger{
    name:string;
    power:number;
    constructor(name:string) {
      this.name = name;
      this.power = 100
     };

     RedrangerName:any;
     Redrangerpower:any;
    timeout:any
    randomLastNumber:number = 100;

  rangersConfiguration () {
    console.log(` ${this.name} Ranger  Power is - ${this.power}`);
    
  };

  rangerRandomNumber() {
    this.randomLastNumber = this.randomLastNumber - Math.trunc( Math.random() * 5)
};

finish() {
    clearInterval(this.timeout);
};

  rangerFight(name:any) {
    this.timeout = setInterval(()=>{
      this.rangerRandomNumber();
      console.log(this.randomLastNumber, name);
    }, 500)
  };
}



