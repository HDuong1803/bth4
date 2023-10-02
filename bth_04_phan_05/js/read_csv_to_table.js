$(document).ready(function () {
  $("#file_upload").change(function () {
    var i = $(this).prev("label").clone();
    var file = $("#file_upload")[0].files[0].name;
    $(this).prev("label").text(file);
  });
});

// Hàm tải tệp tin CSV
function upload() {
  var files = document.getElementById("file_upload").files;

  if (files.length == 0) {
    alert("Chọn tệp tin CSV...");
    return;
  }

  var filename = files[0].name;
  var extension = filename.substring(filename.lastIndexOf(".")).toUpperCase();
  if (extension == ".CSV") {
    // chuyển đổi dữ liệu sang dạng cấu trúc JSON
    csvFileToJSON(files[0]);
  } else {
    alert("Không phải tệp tin CSV.");
  }
}

// hàm chuyển đổi dữ liệu sang dạng cấu trúc JSON
function csvFileToJSON(file) {
  try {
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
      var jsonData = [];
      var headers = [];
      var rows = e.target.result.split("\r\n");

      for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].split(",");
        var rowData = {};
        for (var j = 0; j < cells.length; j++) {
          if (i == 0) {
            var headerName = cells[j].trim();
            headers.push(headerName);
          } else {
            var key = headers[j];
            if (key) {
              rowData[key] = cells[j].trim();
            }
          }
        }

        if (i != 0) {
          jsonData.push(rowData);
        }
      }

      // hiển thị dữ liệu lên cấu trúc bảng
      displayJsonToTable(jsonData);

      // hiển thị số lượng sinh viên
      var count = jsonData.length;
      $("#student-count").text(count + " student");
    };
  } catch (e) {
    console.error(e);
  }
}

// hàm hiển thị dữ liệu lên cấu trúc bảng
function displayJsonToTable(jsonData) {
  var table = document.getElementById("display_csv_data");
  if (jsonData.length > 0) {
    var headers = Object.keys(jsonData[0]);
    var htmlHeader = "<thead><tr>";

    for (var i = 0; i < headers.length; i++) {
      htmlHeader += "<th>" + headers[i] + "</th>";
    }
    htmlHeader += "<tr></thead>";

    var htmlBody = "<tbody>";
    for (var i = 0; i < jsonData.length; i++) {
      var row = jsonData[i];
      htmlBody += "<tr>";
      for (var j = 0; j < headers.length; j++) {
        var key = headers[j];
        htmlBody += "<td>" + row[key] + "</td>";
      }
      htmlBody += "</tr>";
    }
    htmlBody += "</tbody>";
    table.innerHTML = htmlHeader + htmlBody;
  } else {
    table.innerHTML = "There is no data in CSV";
  }
}
