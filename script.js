document.addEventListener("DOMContentLoaded", function() {
    // Código para alternar relatórios
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

    prevButton.addEventListener("click", function() {
        currentReportIndex = (currentReportIndex === 0) ? reports.length - 1 : currentReportIndex - 1;
        updateReportVisibility();
    });

    nextButton.addEventListener("click", function() {
        currentReportIndex = (currentReportIndex === reports.length - 1) ? 0 : currentReportIndex + 1;
        updateReportVisibility();
    });

    updateReportVisibility();
});
