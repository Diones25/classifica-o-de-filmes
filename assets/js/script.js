function pegarFilmes(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let categoria = document.querySelector('input[name="categoria"]:checked').value;

    console.log(nome);
    console.log(idade);
    console.log(categoria);

    if(categoria == "Ação"){
        let content = document.getElementById("content");
        content.innerHTML = `
        <div style="width: 400px;">
            <h3> Olá ${nome} temos estas indicações de filmes para você!</h3>
            <h3>Categoria: ${categoria}</h3>
            
            <div class="card-filme">
                <div class="card-filme-item">
                    <img src="assets/img/acao01.jpeg" alt="">                   
                    <div class="tooltip">    
                        <p>Resgate</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/acao02.jpeg" alt="">            
                    <div class="tooltip">    
                        <p>Rambo</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/acao03.jpeg" alt="">
                    <div class="tooltip">    
                        <p>Velozes e Furiosos - Robs e Shaw</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/acao04.jpg" alt="">
                    <div class="tooltip">    
                        <p>Jhon Wick 3</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>
                
            </div>           

        </div>
        `
        document.getElementById("container").style.backgroundColor = "#e74c3c";
    }
    if(categoria == "Drama"){
        let content = document.getElementById("content");
        content.innerHTML = `
        <div style="width: 400px;">
            <h3> Olá ${nome} temos estas indicações de filmes para você!</h3>
            <h3>Categoria: ${categoria}</h3>
            
            <div class="card-filme">
                <div class="card-filme-item">
                    <img src="assets/img/drama01.jpeg" alt="">                 
                    <div class="tooltip">    
                        <p>1917</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div> 
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/drama02.jpeg" alt="">                 
                    <div class="tooltip">    
                        <p>O primeiro homem</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/drama03.jpeg" alt="">
                    <div class="tooltip">    
                        <p>Coringa</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/drama04.jpeg" alt="">              
                    <div class="tooltip">    
                        <p>Até o último homem</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>
                
            </div>          

        </div>
        `
        document.getElementById("container").style.backgroundColor = "#2ed573";
    }
    if(categoria == "Comédia"){
        let content = document.getElementById("content");
        content.innerHTML = `
        <div style="width: 400px;">
            <h3> Olá ${nome} temos estas indicações de filmes para você!</h3>
            <h3>Categoria: ${categoria}</h3>
            
            <div class="card-filme">
                <div class="card-filme-item">
                    <img src="assets/img/comedia01.jpeg" alt="">
                    <div class="tooltip">    
                        <p>Tom e Jerry</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #2ecc71;"> 14 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/comedia02.jpeg" alt="">                
                    <div class="tooltip">    
                        <p>Wifi ralf</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #2ecc71;"> 14 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/comedia03.jpeg" alt="">               
                    <div class="tooltip">    
                        <p>Gente grande 2</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #2ecc71;"> 14 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/comedia04.jpeg" alt="">
                    <div class="tooltip">    
                        <p>O poderoso chefinho</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #2ecc71;"> 14 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>                   
            </div>          

        </div>
        `
        document.getElementById("container").style.backgroundColor = "#ff7f50";
    }
    if(categoria == "Terror"){
        let content = document.getElementById("content");
        content.innerHTML = `
        <div style="width: 400px;">
            <h3> Olá ${nome} temos estas indicações de filmes para você!</h3>
            <h3>Categoria: ${categoria}</h3>
            
            <div class="card-filme">
                <div class="card-filme-item">
                    <img src="assets/img/terror01.jpeg" alt="">              
                    <div class="tooltip">    
                        <p>A freira</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/terror02.jpeg" alt="">                
                    <div class="tooltip">    
                        <p>Annabelle 3</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/terror03.jpeg" alt="">            
                    <div class="tooltip">    
                        <p>Brightburn</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/terror04.jpeg" alt="">             
                    <div class="tooltip">    
                        <p>A maldição da chorona</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 18 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>                   
            </div>          

        </div>
        `
        document.getElementById("container").style.backgroundColor = "#9b59b6";
    }
    if(categoria == "Romance"){
        let content = document.getElementById("content");
        content.innerHTML = `
        <div style="width: 400px;">
            <h3> Olá ${nome} temos estas indicações de filmes para você!</h3>
            <h3>Categoria: ${categoria}</h3>
            
            <div class="card-filme">
                <div class="card-filme-item">
                    <img src="assets/img/romance01.jpeg" alt="">
                    <p>Como eu era antes de você</p>
                    <div class="tooltip">    
                        <p>Como eu era antes de você</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/romance02.jpeg" alt="">
                    <div class="tooltip">    
                        <p>Sol da meia noite</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/romance03.jpeg" alt="">
                    <div class="tooltip">    
                        <p>Amor sem fim</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>

                <div class="card-filme-item">
                    <img src="assets/img/romance04.jpeg" alt="">
                    <div class="tooltip">    
                        <p>After</p>
                        <span>Sipnose</span>
                        <span>Classificação: <div style="color: #e74c3c;"> 16 anos</div></span>
                        <span>Filme não indicado para sua idade</span>
                        <span>Consulte outra opção</span>
                    </div>
                </div>                   
            </div>          

        </div>
        `
        document.getElementById("container").style.backgroundColor = "#ff6b81";
    }
    

}  