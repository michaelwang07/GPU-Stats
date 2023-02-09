
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
    console.log(a);
    console.log(b);
  });
}

//table-sortable || table_sortable
sortTableByColumn(document.getElementById("table_sortable"), 1);