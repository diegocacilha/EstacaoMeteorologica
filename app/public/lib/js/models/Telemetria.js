class Telemetria {

  constructor(data, temperatura, pressao){
    this._data = new Date(data.getTime());
    this._temperatura = temperatura;
    this._pressao = pressao;
  }

  get data(){
    return this._data;
  }

  get temperatura(){
    return this._temperatura;
  }

  get pressao(){
    return this._pressao;
  }
}
