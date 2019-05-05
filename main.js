// click event for the generate template button
$('#generateTemplate').click((e)=>{
    // this code will execute once generate template is clicked
    e.preventDefault();
});

$( ".custom-range" ).change(function(e) {
    document.getElementById('spacingValue').innerHTML = e.currentTarget.value + 'px';
  console.dir(document.getElementById("spacingValue").value);
});