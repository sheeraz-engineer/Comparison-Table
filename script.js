
    document.addEventListener("DOMContentLoaded", function () {
        const table = document.querySelector(".comparison-table");
        const rows = table.querySelectorAll("tr");

        rows.forEach(row => {
            Array.from(row.children).forEach((cell, index) => {
                cell.addEventListener("mouseenter", () => {
                    highlightColumn(index);
                });
                cell.addEventListener("mouseleave", () => {
                    removeHighlight(index);
                });
            });
        });

        function highlightColumn(index) {
            rows.forEach(row => {
                const cell = row.children[index];
                if (cell) cell.classList.add("highlight");
            });
        }

        function removeHighlight(index) {
            rows.forEach(row => {
                const cell = row.children[index];
                if (cell) cell.classList.remove("highlight");
            });
        }
    })