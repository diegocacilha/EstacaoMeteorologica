class Header{

	constructor(elemento){
		this.elemento = elemento;
	}

	templateMenu(){
		return `<nav class="navbar navbar-expand-lg menu shadow bg-topo">
            <div class="container">

                <ul class="navbar-nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="/">Home</a>
                    </li>

                    <li class="nav-item active">
                        <a class="nav-link" href="/telemetrias">Telemetrias</a>
                    </li>
 
                    <li class="nav-item">
                        <a class="nav-link" href="/cadastro">Cadastro</a>
                    </li>
                </ul>  

                <ul class="navbar-nav">

 
                    <li>
                        <a class="nav-link" href="/">
                            <i class="material-icons">search</i>
                        </a> 
                    </li>

                    <li>
                        <a class="nav-link" href="/">
                            <i class="material-icons">settings</i>
                        </a> 
                    </li>

                    <li>
                        <a class="nav-link" href="/">
                            <i class="material-icons">more</i>
                        </a> 
                    </li>

                    <li>
                        <a class="nav-link" href="/">
                            <i class="material-icons">thumb_up</i>
                        </a> 
                    </li>

                    <li class="nav-item dropdown">
                        <button class="btn dropdown-toggle" data-toggle="dropdown">
                            <img class="rounded avatar" src="lib/img/perfil.jpg" alt="avatar">
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/editar/perfil">Meu perfil</a>
                            <a class="dropdown-item" href="/logoff">Sair</a>
                        </div>

                    </li>
                </ul>
            </div>
        </nav>
        
        <div class="jumbotron cabecalho bg-topo">
            <div class="container">
                <h1 class="display-4 text-light">Dashboards</h1>
                
            </div>
        </div>    `;
	}

	update(){
		this.elemento.innerHTML = this.templateMenu();
	}
}