//primeiro grafico secundário
var contexto1 = document.getElementById("grafico-secundario-1").getContext('2d');
var grafico1 = new Chart(contexto1, {
    type: 'bar',
    data: {
        labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10", "17/10", "18/10", "19/10", "20/10", "21/10",], //neste array teremos que mandar as datas da tabela
        datasets: [{
            label: 'Pressão do ar', //títlo da bagaça
            data: [23, 22, 25, 31, 28, 25, 25, 27, 14, 15, 16, 24], //aqui teremos que importar as informações do banco que registrou a temperatura
            backgroundColor: [ //cores de fundo
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [ //cores das bordas
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, 
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


//segundo grafico secundário
var contexto2 = document.getElementById("grafico-secundario-2").getContext('2d');
var grafico2 = new Chart(contexto2, {
    type: 'line',
    data: {
        labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10", "17/10", "18/10", "19/10", "20/10", "21/10",], //neste array teremos que mandar as datas da tabela
        datasets: [{
            label: 'Pressão do ar', //títlo da bagaça
            data: [23, 22, 25, 31, 28, 25, 25, 27, 14, 15, 16, 24], //aqui teremos que importar as informações do banco que registrou a temperatura
            backgroundColor: [ //cores de fundo
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [ //cores das bordas
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 4
        }]
    },
    options: {
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, 
        },
        
        legend : {
            display: false
        },

        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});