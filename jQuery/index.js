$("h1").addClass("big-title  margin50");

$("h1").text("bye");

$("button").html("<em>Hey</em>");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color", "green")
});

$("button").click(function(){
    $("h1").animate({opacity: 0.5});
})

$("input").keydown(function(event){
    $("h1").text(event.key);
});

$(document).keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").css("color", "blue");
});

$("h1").before("<button>New</button>");

$("h1").after("<button>New2</button>");

$("h1").prepend("<button>New3</button>");

$("h1").append("<button>New4</button>");

