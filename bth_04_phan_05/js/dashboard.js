const csvFilePath = "../Exported_Table.csv";
Papa.parse(csvFilePath, {
  header: true,
  download: true,
  complete: function (results) {
    const studentCount = results.data.length - 1;
    const studentCountElement = document.getElementById("student-count");
    studentCountElement.textContent = `${studentCount} student`;
  },
});
