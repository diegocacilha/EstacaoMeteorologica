class ListaTelemetrias {
    
    constructor() 
    {
        
        this._telemetrias = [];
    }
    
    adiciona(telemetria) 
    {
        
        this._telemetrias.push(telemetria);
    }
    
    get telemetrias() 
    {
        
        return this._telemetrias;
    }


}
