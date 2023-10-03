$("form").submit(function (e) {
  e.preventDefault();
  var msv = $("input[name='msv']").val();
  var hoten = $("input[name='hoten']").val();
  var malop = $("input[name='malop']").val();
  var tenlop = $("input[name='tenlop']").val();
  var email = $("input[name='email']").val();
  var namsinh = $("input[name='namsinh']").val();
  var phone = $("input[name='phone']").val();
  var gender = $("input[name='gender']").val();

  $(".data-table tbody").append(
    "<tr data-msv='" +
      msv +
      "' data-hoten='" +
      hoten +
      "' data-malop='" +
      malop +
      "' data-tenlop='" +
      tenlop +
      "' data-email='" +
      email +
      "' data-namsinh='" +
      namsinh +
      "' data-phone='" +
      phone +
      "' data-gender='" +
      gender +
      "'><td>" +
      msv +
      "</td><td>" +
      hoten +
      "</td><td>" +
      malop +
      "</td><td>" +
      tenlop +
      "</td><td>" +
      email +
      "</td><td>" +
      namsinh +
      "</td><td>" +
      phone +
      "</td><td>" +
      gender +
      "</td><td style='text-align: center;'><button class='btn btn-info btn-xs btn-edit' style='margin-right: 20px'>Sửa</button><button class='btn btn-danger btn-xs btn-delete'>Xóa</button></td></tr>"
  );

  $("input[name='msv']").val("");
  $("input[name='hoten']").val("");
  $("input[name='malop']").val("");
  $("input[name='tenlop']").val("");
  $("input[name='email']").val("");
  $("input[name='namsinh']").val("");
  $("input[name='phone']").val("");
  $("input[name='gender']").val("");
});

$("body").on("click", ".btn-delete", function () {
  $(this).parents("tr").remove();
});

$("body").on("click", ".btn-edit", function () {
  var msv = $(this).parents("tr").attr("data-msv");
  var hoten = $(this).parents("tr").attr("data-hoten");
  var malop = $(this).parents("tr").attr("data-malop");
  var tenlop = $(this).parents("tr").attr("data-tenlop");
  var email = $(this).parents("tr").attr("data-email");
  var namsinh = $(this).parents("tr").attr("data-namsinh");
  var phone = $(this).parents("tr").attr("data-phone");
  var gender = $(this).parents("tr").attr("data-gender");

  $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html('<input name="edit_msv" value="' + msv + '" style="width: 100px;">');
  $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html(
      '<input name="edit_hoten" value="' + hoten + '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html(
      '<input name="edit_malop" value="' + malop + '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html(
      '<input name="edit_tenlop" value="' + tenlop + '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(4)")
    .html(
      '<input name="edit_email" value="' + email + '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(5)")
    .html(
      '<input name="edit_namsinh" value="' +
        namsinh +
        '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(6)")
    .html(
      '<input name="edit_phone" value="' + phone + '" style="width: 100px;">'
    );
  $(this)
    .parents("tr")
    .find("td:eq(7)")
    .html(
      '<input name="edit_gender" value="' + gender + '" style="width: 100px;">'
    );

  $(this)
    .parents("tr")
    .find("td:eq(8)")
    .prepend(
      "<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>"
    );
  $(this).hide();
});

$("body").on("click", ".btn-cancel", function () {
  var msv = $(this).parents("tr").attr("data-msv");
  var hoten = $(this).parents("tr").attr("data-hoten");
  var malop = $(this).parents("tr").attr("data-malop");
  var tenlop = $(this).parents("tr").attr("data-tenlop");
  var email = $(this).parents("tr").attr("data-email");
  var namsinh = $(this).parents("tr").attr("data-namsinh");
  var phone = $(this).parents("tr").attr("data-phone");
  var gender = $(this).parents("tr").attr("data-gender");

  $(this).parents("tr").find("td:eq(0)").text(msv);
  $(this).parents("tr").find("td:eq(1)").text(hoten);
  $(this).parents("tr").find("td:eq(2)").text(malop);
  $(this).parents("tr").find("td:eq(3)").text(tenlop);
  $(this).parents("tr").find("td:eq(4)").text(email);
  $(this).parents("tr").find("td:eq(5)").text(namsinh);
  $(this).parents("tr").find("td:eq(6)").text(phone);
  $(this).parents("tr").find("td:eq(7)").text(gender);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-update").remove();
  $(this).parents("tr").find(".btn-cancel").remove();
});

$("body").on("click", ".btn-update", function () {
  var msv = $(this).parents("tr").find("input[name='edit_msv']").val();
  var hoten = $(this).parents("tr").find("input[name='edit_hoten']").val();
  var malop = $(this).parents("tr").find("input[name='edit_malop']").val();
  var tenlop = $(this).parents("tr").find("input[name='edit_tenlop']").val();
  var email = $(this).parents("tr").find("input[name='edit_email']").val();
  var namsinh = $(this).parents("tr").find("input[name='edit_namsinh']").val();
  var phone = $(this).parents("tr").find("input[name='edit_phone']").val();
  var gender = $(this).parents("tr").find("input[name='edit_gender']").val();

  $(this).parents("tr").find("td:eq(0)").text(msv);
  $(this).parents("tr").find("td:eq(1)").text(hoten);
  $(this).parents("tr").find("td:eq(2)").text(malop);
  $(this).parents("tr").find("td:eq(3)").text(tenlop);
  $(this).parents("tr").find("td:eq(4)").text(email);
  $(this).parents("tr").find("td:eq(5)").text(namsinh);
  $(this).parents("tr").find("td:eq(6)").text(phone);
  $(this).parents("tr").find("td:eq(7)").text(gender);

  $(this).parents("tr").attr("data-msv", msv);
  $(this).parents("tr").attr("data-hoten", hoten);
  $(this).parents("tr").attr("data-malop", malop);
  $(this).parents("tr").attr("data-tenlop", tenlop);
  $(this).parents("tr").attr("data-email", email);
  $(this).parents("tr").attr("data-namsinh", namsinh);
  $(this).parents("tr").attr("data-phone", phone);
  $(this).parents("tr").attr("data-gender", gender);

  $(this).parents("tr").find(".btn-edit").show();
  $(this).parents("tr").find(".btn-cancel").remove();
  $(this).parents("tr").find(".btn-update").remove();
});
