$("footer > tab").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $("#" + $(this).attr("id") + "-section").addClass("active").siblings().removeClass("active");
});

$("#request-form").submit(function () {
    postRequest();

    return false;
});

function ajax(option) {
    var originalSuccess = option.success;
    option.success = function (result) {
        var data = JSON.parse(result);
        if (data.code == 0) {
            originalSuccess(data.content);
        }
        else {
            alert("Error " + data.code + ": " + data.msg);
        }
    };
    option.error = function () {
        alert("Internet connection error");
    };
    $.ajax(option);
}

// For side menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// For responsive menu
function menuFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//For listing requests
var ul = $('<ul>').appendTo('body');
$.get('ajax/data.json').each(function(index, item) {
    ul.append($(document.createElement('li')).text(item));
});