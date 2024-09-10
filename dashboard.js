document.addEventListener('DOMContentLoaded', function () {
    // Verifica se o elemento do gráfico existe antes de inicializá-lo
    const salesChartElement = document.getElementById('salesChart');
    if (salesChartElement) {
        // Configuração do Gráfico de Pizza para Total de Vendas
        const ctx = salesChartElement.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Abr'],
                datasets: [{
                    data: [100, 157, 230, 80],
                    backgroundColor: ['#007bff', '#28a745', '#dc3545', '#ffc107']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    datalabels: {
                        formatter: (value, context) => {
                            const sum = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = (value * 100 / sum).toFixed(1) + "%";
                            return percentage;
                        },
                        color: '#fff',
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
        });
    }

    // Alternar entre Relatórios
    const reports = document.querySelectorAll(".report");
    const prevButton = document.getElementById("prev-report");
    const nextButton = document.getElementById("next-report");
    const reportTitle = document.getElementById("report-title");

    let currentReportIndex = 0;

    function updateReportVisibility() {
        reports.forEach((report, index) => {
            if (index === currentReportIndex) {
                report.classList.remove("d-none");
                report.classList.add("active");
            } else {
                report.classList.add("d-none");
                report.classList.remove("active");
            }
        });

        const titles = ["Cardápio", "Região", "Horário", "Pagamentos", "Semana atual"];
        reportTitle.textContent = titles[currentReportIndex];
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener("click", function() {
            currentReportIndex = (currentReportIndex === 0) ? reports.length - 1 : currentReportIndex - 1;
            updateReportVisibility();
        });

        nextButton.addEventListener("click", function() {
            currentReportIndex = (currentReportIndex === reports.length - 1) ? 0 : currentReportIndex + 1;
            updateReportVisibility();
        });
    }

    // Inicializa a visibilidade dos relatórios
    updateReportVisibility();
});
