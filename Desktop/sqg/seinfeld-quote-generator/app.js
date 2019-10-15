$.ajax({
    url:"https://seinfeld-quotes.herokuapp.com/quotes",
    dataType:"JSON",
    method:"GET"
    }).then(function(res){
        console.log(res)
});