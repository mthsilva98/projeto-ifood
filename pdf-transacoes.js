// Seleciona o botão pelo ID
var button = document.getElementById('baixar-transacoes');

if (button) {
    button.addEventListener('click', function () {
        var element = document.querySelector('.table-responsive'); 
        var opt = {
            margin: 0.5,
            filename: 'transacoes_completas.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { 
                scale: 2, 
                useCORS: true, 
                scrollY: 0 
            },
            jsPDF: { 
                unit: 'in', 
                format: 'a4', 
                orientation: 'portrait' 
            }
        };

        html2pdf().from(element).set(opt).save();
    });
} else {
    console.error("Botão não encontrado."); 
}