function addRows() {
  var table = document.getElementById("emptbl");
  var rowCount = table.rows.length;
  var cellCount = table.rows[0].cells.length;
  var row = table.insertRow(rowCount);
  var prevGender = "";
  if (rowCount > 2) {
    var prevRow = table.rows[rowCount - 2];
    prevGender = prevRow.cells[5].querySelector(
      'input[name^="gender"]:checked'
    ).value;
  }
  for (var i = 0; i <= cellCount; i++) {
    var cell = "cell" + i;
    cell = row.insertCell(i);
    var copycel = document.getElementById("col" + i).innerHTML;
    cell.innerHTML = copycel;
    if (i == 5) {
      var radioinput = cell.getElementsByTagName("input");
      for (var j = 0; j < radioinput.length; j++) {
        if (radioinput[j].type == "radio") {
          var rownum = rowCount - 1;
          radioinput[j].name = "gender[" + rownum + "]";
          radioinput[j].id = "gender_" + rownum + "_" + j;
          if (prevGender == radioinput[j].value) {
            radioinput[j].checked = true;
          }
        }
      }
    }
  }
  rowCount++;
}

function deleteRows() {
  var table = document.getElementById("emptbl");
  var rowCount = table.rows.length;
  if (rowCount > "2") {
    var row = table.deleteRow(rowCount - 1);
    rowCount--;
  } else {
    alert("There should be atleast one row");
  }
}

function saveRow() {
  var data = $("#emptbl tbody tr")
    .slice(1)
    .map(function () {
      var row = $(this);
      return {
        msv: row.find("td:eq(0) input").val(),
        hoten: row.find("td:eq(1) input").val(),
        ngaysinh: row.find("td:eq(2) input").val(),
        mlcn: row.find("td:eq(3) select").val(),
        tlcn: row.find("td:eq(4) input").val(),
        gender: row.find("td:eq(5) input[name^='gender']:checked").val(),
      };
    })
    .get();
  var output = $("<table>").append(
    $("<tr>")
      .append($("<th>").text("MSV"))
      .append($("<th>").text("Họ tên"))
      .append($("<th>").text("Ngày sinh"))
      .append($("<th>").text("MLCN"))
      .append($("<th>").text("Tên lớp chuyên ngành"))
      .append($("<th>").text("Giới tính"))
  );
  $.each(data, function (index, value) {
    output.append(
      $("<tr>")
        .append($("<td>").text(value.msv))
        .append($("<td>").text(value.hoten))
        .append($("<td>").text(value.ngaysinh))
        .append($("<td>").text(value.mlcn))
        .append($("<td>").text(value.tlcn))
        .append($("<td>").text(value.gender))
    );
  });
  $("#myForm").html(output);
}

$(document).on("change", "select[name='mlcn[]']", function () {
  var selectedRow = $(this).closest("tr");
  var mlcn = $(this).val();
  var tlcn = "";
  switch (mlcn) {
    case "1":
      tlcn = "lớp Sales";
      break;
    case "2":
      tlcn = "lớp IT";
      break;
    case "3":
      tlcn = "lớp Warehouse";
      break;
    default:
      tlcn = "lớp chuyên ngành";
      break;
  }
  selectedRow.find("td:eq(4) input").val(tlcn);
});
