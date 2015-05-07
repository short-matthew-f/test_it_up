console.log("files linked!");

var rawStudentData = "andrew-garver, anila-alexander, ben-sayeg, bryant-novas, dasha-murauyova, david-neuhaus, devatha-kesarkodigae, domenica-lalima, dor-rubin, fernanda-correa, gab-lubliner, gordon-dugan, james-kim, jeremy-bell, john-mcgillion, junho-rhee, karlyce-edwards, kelly-stevens, kelly-devine, mark-paulson, matt-sullivan, max-peterson, michael-dennis, orin-xie, teo-arana, bobby-king, ryan-burke, sam-hu"

var studentstringtoarray = function (string) {
  var myString = string;
    students = myString.split(", ");
      return students;
    };

var studentarraydehyphenator = function (array) {
  var myArray = array;
  var students = [];
    myArray.forEach(function (s, i) {
    var names = s.split('-');
    students.push(names)
    });
  return students;
};

var studentarraycapitalizer = function (array) {
  var myArray = array;
  myArray.map(function(s, i) {
    var firstName = s[0];
    var lastName = s[1];
    return [firstName.toUpperCase(), lastName.toUpperCase()]
  });
  return myArray;
};

var studentarrayobjectifier = function (array) {
  var myArray = array;
  myArray.map(function(s, i) {
      var firstName = s[0];
          var lastName = s[1];
        var obj = { fName: firstName, lName: lastName };
        return obj;
  });
  return myArray;
};

var studentarrayone = studentstringtoarray(rawStudentData)
var studentarraytwo = studentarraydehyphenator(studentarrayone);
var studentarraythree = studentarraycapitalizer(studentarraytwo);
var studentarrayfour = studentarrayobjectifier(studentarraythree);

