class TelemetriasView{

	constructor(elemento){
		this._elementoDOM = elemento;
	}

	template(model){
		return `
			<table class="table table-striped table-bordered table-borderless shadow-lg tabela-telemetrias">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Temperatura</th>
                        <th>Pressão</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                	${model.telemetrias.map((t) => {
                		return `
                			<tr>
                				<td>${t.data}</td>
                				<td>${t.temperatura}</td>
                				<td>${t.pressao}</td>
                				<td>
	                				<button class="btn btn-danger dropdown-toggle" data-toggle="dropdown">Ações</button>
	                            	<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
	                                <a class="dropdown-item" href="/telemetrias/editar/*ver com resolver precisa pegar o indice e passar como id*/>">Editar</a>
	                                <a class="dropdown-item" data-telemetria="<%=lista[i].id%>" id="excluir-telemetria">Excluir</a>
	                            	</div>
                        		</td>
                			</tr>

                		`
	                	}).join('')
                	}

                </tbody>
            </table>
		`;
	}

	atualiza(model){
		this._elementoDOM.innerHTML = this.template(model);
	}
}