var submitCount = 0;

// Lưu dữ liệu khi submit form
$("form").submit(function (e) {
  e.preventDefault();
  var formData = $(this).serializeArray();
  var dataObj = {};
  $.each(formData, function (index, field) {
    dataObj[field.name] = field.value;
  });
  var newRow = $("<tr>");
  $.each(dataObj, function (key, value) {
    newRow.attr("data-" + key, value);
    newRow.append("<td>" + value + "</td>");
  });
  if (submitCount === 0) {
    var headerRow = $("<tr>");
    headerRow.append("<th>Mã sinh viên</th>");
    headerRow.append("<th>Họ tên</th>");
    headerRow.append("<th>Mã lớp</th>");
    headerRow.append("<th>Tên lớp</th>");
    headerRow.append("<th>Email</th>");
    headerRow.append("<th>Năm sinh</th>");
    headerRow.append("<th>Số di động</th>");
    headerRow.append("<th>Giới tính</th>");
    headerRow.append("<th>Thao Tác</th>");
    $(".data-table thead").append(headerRow);
  }
  newRow.append(
    "<td style='text-align: center;'><button class='btn btn-info btn-xs btn-edit' style='margin-right: 20px'>Sửa</button><button class='btn btn-danger btn-xs btn-delete'>Xóa</button></td>"
  );
  $(".data-table tbody").append(newRow);
  $(this)[0].reset();
  submitCount++;
});

// Xóa hàng
$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

// Chỉnh sửa hàng
$("body").on("click", ".btn-edit", function () {
  var row = $(this).parents("tr");
  row.find("td").each(function () {
    var value = $(this).text();
    var key = $(this).index();
    if (key === 8) {
      return false;
    }
    $(this).html(
      "<input type='text' name='edit-" +
        key +
        "' value='" +
        value +
        "' style='width: 100px;'>"
    );
  });
  row.find(".btn-edit").hide();
  row.find("td:last-child").prepend(
    "<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>"
  );
});

// Hủy chỉnh sửa hàng
$("body").on("click", ".btn-cancel", function () {
  var row = $(this).parents("tr");
  row.find("td").each(function () {
    var value = $(this).parent().attr("data-" + $(this).index());
    $(this).html(value);
  });
  row.find(".btn-edit").show();
  row.find(".btn-update").remove();
  row.find(".btn-cancel").remove();
});

// Cập nhật hàng
$("body").on("click", ".btn-update", function () {
  var row = $(this).parents("tr");
  row.find("td").each(function () {
    var input = $(this).find("input");
    if (input.length > 0) {
      var value = input.val();
      var key = $(this).index();
      $(this).html(value);
      row.attr("data-" + key, value);
    }
  });
  row.find(".btn-edit").show();
  row.find(".btn-update").remove();
  row.find(".btn-cancel").remove();
});