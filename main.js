var rows = 2;
var columns = 3;

// click event for the generate template button
$('#generateTemplate').click((e)=>{
    // this code will execute once generate template is clicked
    e.preventDefault();
    console.log(rows + "  " + columns)
    
    for(var i = 0; i < rows; i++) {
        for(var j = 0; j < columns; j++) {
            console.log('*');
        }
        console.log('\n');
    }
});

$('.form-check-input').click((e)=>{
    var value = e.currentTarget.value.slice(-1);
    if(e.currentTarget.value.startsWith('row')) rows = value;
    else columns = value;
});

$( ".custom-range" ).change(function(e) {
    document.getElementById('spacingValue').innerHTML = e.currentTarget.value + 'px';
  console.dir(document.getElementById("spacingValue").value);
});