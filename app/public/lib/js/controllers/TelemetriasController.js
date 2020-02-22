class TelemetriasController{
  constructor()
  {

    let $ = document.querySelector.bind(document);
    this._elementoDoDOM = $('#tabela-telemetrias-view');
    this._inputData = $('#data');
    this._inputTemperatura = $('#temperatura');
    this._inputPressao = $('#pressao');

    this._listaTelemetrias = new ListaTelemetrias()
    this._view = new TelemetriasView(this._elementoDoDOM);
  }

  get view()
  {
    return this._view;
  }

  adiciona(event)
  {
    event.preventDefault();

    this._listaTelemetrias.adiciona(this.criaTelemetria());
    let array = this._listaTelemetrias;
    console.log(array);
    this._view.atualiza(array);

  }


  criaTelemetria()
  {

    return new Telemetria(
      this._inputData.value,
      this._inputTemperatura.value,
      this._inputPressao.value
    );


  }
}
