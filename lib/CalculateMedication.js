export class CalculateMedication {
    constructor() {}
    calculate(dosi, frecuencia, duracion, star, end, isSpanish = false) {
      let dividento = this.GetTypeTime(star, end);
      let resulDivision = this.GetDivision(dividento, frecuencia);
      let resulMultipli = this.GetMultiplication(resulDivision, duracion);
      this.SpanishToEnglish("dia");
    
      return this.GetTotal(resulMultipli, dosi);
    }
  
    GetTypeTime(start, end) {
      if (start === end) {
        return 1;
      }
      let dividento;
      switch (end) {
        case "day":
          dividento = 24;
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
    SpanishToEnglish(spna) {
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
          spanish: "año",
          english: "year",
        },
      ];
      let dato;
      spanish.map((data) => {
        if (data.spanish == spna) {
          dato = data.english;
        }
      });
      console.log(dato);
    }
  }
