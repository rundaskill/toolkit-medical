 class CalculateMedication {
  constructor() {}
 
  calculate(dosi, frecuencia, duracion, star, end, isSpanish = false,isPlural=false) {
    let dividento =isSpanish?this.GetTypeTime(
      this.SpanishToEnglish(star.toLowerCase(),isPlural), 
      this.SpanishToEnglish(end.toLowerCase(),isPlural)):this.GetTypeTime(
        star,end
      );
    let resulDivision = this.GetDivision(dividento, frecuencia);
    let resulMultipli = this.GetMultiplication(resulDivision, duracion);
    
  
    return this.GetTotal(resulMultipli, dosi);
  }

  GetTypeTime(start, end) {
    if (start === end) {
      return 1;
    }
    let regla={
      "day":{
        "hour":24,
        "minute":1440
      }
      
    }
    let dividento;
    switch (end) {
      case "day":
        dividento = regla.day[start];
        break;

      default:
        break;
    }
    return dividento;
  }

 

  GetDivision(dividento, frecuencia) {
    if (dividento == 1) {
      return dividento;
    }

    return dividento / frecuencia;
  }

  GetMultiplication(resuldivision, durations) {
    return resuldivision * durations;
  }

  GetTotal(resultMultiplication, dosis) {
    return resultMultiplication * dosis;
  }
  SpanishToEnglish(spna,isPlural=false) {
    let spanish = [
      {
        spanish: "dia",
        english: "day",
      },
      {
        spanish: "hora",
        english: "hour",
      },
      {
        spanish:"minuto",
        english:"minute"
      },
      {
        spanish: "año",
        english: "year",
      },
    ];
    let dato;
    spanish.map((data) => {
      let textoDic=isPlural?data.spanish+"s":data.spanish;
     
     let textoSpanish=spna.slice(-1)=="s"?spna:isPlural?spna+"s":spna
      if (textoDic ==textoSpanish ) {
        dato=data.english;
    
      }
      
    });
    
   return  dato
  }
}
module.exports = { CalculateMedication }
