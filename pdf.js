// Função para baixar o Relatório Financeiro
document.getElementById('baixar-relatorio').addEventListener('click', function() {
    var element = document.querySelector('.card-relatorio-financeiro'); // Seleciona o card do relatório financeiro

    // Expandir o card para capturar todo o conteúdo sem rolagem
    element.style.maxHeight = 'none';
    element.style.overflow = 'visible';
    
    var opt = {
        margin: 0.5,
        filename: 'relatorio_financeiro_completo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0 }, // Garante a captura correta sem rolagem
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    // Gerar o PDF
    html2pdf().from(element).set(opt).save().then(function() {
        // Restaurar o estilo original do card
        element.style.maxHeight = '400px';  // Ajuste de acordo com o layout original
        element.style.overflow = 'auto';    // Restaurar a rolagem
    });
});






