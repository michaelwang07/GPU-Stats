
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

$jQuery(function () {
  $('#joined_table').DataTable();
});