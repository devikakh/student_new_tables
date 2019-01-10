//Javascript
//Javascript



$(document).ready(function () {
    console.log("inside ready function");
    tocall();
});


console.log("First loading!!")


function tocall() {
    $(function () {
        $("#tabs").tabs();
    });


    $(function () {
        var availableTags = [
                "ECE",
                "AERO",
                "CSE",
                "ECE",
                "MECH",
                "CIVIL",
                "E & I"
            ];
        $("#tags").autocomplete({
            source: availableTags
        });
    });
}


var studentdetail = [];
var searchedStudentDetail = [];
document.getElementById("myBtn").addEventListener("click", function () {
    var datas = $("form").serializeArray();
    var dataobject = changetoobj(datas);
    studentdetail.push(dataobject);
    clearTable();
    populateDataIntoTable();
    $("#searchBtnId").click(function () {
        var valueOfSearch = $("#searchId").val();
        var tagName = $( "#myselect" ).val();
        searchingData(studentdetail, tagName, valueOfSearch);
    })

});


function changetoobj(datas) {
    var objectconverted = {};
    for (var i = 0; i < datas.length; i++) {
        var key = datas[i].name;
        var pair = datas[i].value;
        objectconverted[key] = pair;
    }
    return objectconverted;
}

function sort(array, column, order) {

    return a1;
}

function searchingData(studentdetail, tagName, valueOfSearch) {
clearTable();
    for (var i = 0; i < studentdetail.length; i++) {

        if (studentdetail[i].tagName == valueOfSearch) {
            
            searchedStudentDetail.push(studentdetail[i]);
            $.each(searchedStudentDetail, function (i, d) {
                var row = '<tr>';
                $.each(d, function (j, e) {
                    row += '<td>' + e + '</td>';
                });
                row += '</tr>';
                $('#myTable tbody').append(row);
            });
        }

    }

}

function clearTable() {

    $('#myTable tbody').html("");
}

function populateDataIntoTable() {

    $.each(studentdetail, function (i, d) {
        var row = '<tr>';
        $.each(d, function (j, e) {
            row += '<td>' + e + '</td>';
        });
        row += '</tr>';
        $('#myTable tbody').append(row);
    });
}