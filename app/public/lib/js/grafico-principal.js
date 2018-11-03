

var ctx = document.getElementById("grafico-principal").getContext('2d');

(function(obj){
    new Chart(ctx, obj);
})(obj);

var obj = {
    type: 'line',
    data: {
        labels: ["10/10", "11/10", "12/10", "13/10", "14/10", "15/10", "16/10", "17/10", "18/10", "19/10", "20/10", "21/10",], //neste array teremos que mandar as datas da tabela
        datasets: [{
            label: 'Temperatura dos últimos 30 dias', //títlo da bagaça
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
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
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
}