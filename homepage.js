
function myFunction() {
    var x = document.getElementById("split_table");
    var y = document.getElementById("joined_table");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
      y.style.display = "block";
    }
}

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  //Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
    const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();

    return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the sorted rows
  tBody.append(...sortedRows);

  // Remember the current sort order
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}

function sortTableByNumber(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  //Sort each row
  const sortedRows = rows.sort((a, b) => {
    const aColText = a.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
    const bColText = b.querySelector(`td:nth-child(${ column + 1})`).textContent.trim();
    const aNum = parseInt(aColText);
    const bNum = parseInt(bColText);

    return aNum - bNum ? (1 * dirModifier) : (-1 * dirModifier);
  });

  // Remove all existing TRs from the table
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  // Re-add the sorted rows
  tBody.append(...sortedRows);

  // Remember the current sort order
  table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
  table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}



document.querySelectorAll('.table_sortable th').forEach(headerCell => {
	headerCell.addEventListener("click", () => {
		const tableElement = headerCell.parentElement.parentElement.parentElement;
		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
		const currentIsAscending = headerCell.classList.contains("th-sort-asc");

		sortTableByNumber(tableElement, headerIndex, !currentIsAscending);
	});
});

// document.querySelectorAll(".table-sortable th").forEach(headerCell => {
// 	headerCell.addEventListener("click", () => {
// 		const tableElement = headerCell.parentElement.parentElement.parentElement;
// 		const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
// 		const currentIsAscending = headerCell.classList.contains("th-sort-asc");

// 		sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
// 	});
// });

// table-sortable || table_sortable
// sortTableByColumn(document.getElementById("table_sortable"), 1, true);