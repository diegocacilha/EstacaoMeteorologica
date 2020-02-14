class TelemetriasController{
  constructor()
  {

    let $ = document.querySelector.bind(document);
    this._telemetria = new Telemetria();
    this._inputData = $('#data');
    this._inputTemperatura = $('#temperatura');
    this._inputPressao = $('#pressao');

  }

  adiciona(){
    event.preventDefault();
    //instanciar classes da view passando como parametro this.criaTelemetria;

  }



  criaTelemetria(){

    return new Telemetria(
      this._inputData.value,
      this._inputTemperatura.value,
      this._inputPressao.value
    );


  }
}
