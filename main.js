// default global variables
var rows = 2;
var columns = 3;
var spacing = 3;
var htmlTable = '';
var ampTable = ''; 

// click event for the generate template button
$('#generateTemplate').click((e)=>{

  // this code will execute once generate template is clicked
  e.preventDefault();

  htmlTable = `<table class="dh-gallery-table">`;

  for(var i = 0; i < rows; i++) {
    htmlTable = htmlTable + `<tr>`;

    for(var j = 0; j < columns; j++) {
        htmlTable = htmlTable + `
        <td style="padding:` + spacing + `px;">
          <a href="https://hackett.dev">
            <img src="https://placeimg.com/150/150/animals" height="150" />
          </a>
        </td>`;
      }
    htmlTable = htmlTable + `\n</tr>`;
  }
  htmlTable = htmlTable + `</table>`;
  
  $('#formControlTextarea').text( htmlTable );
//  document.getElementById('formControlTextarea').innerHTML = htmlTable;
  document.getElementById('table-preview').innerHTML = htmlTable;
});

// radio button click event
$('.form-check-input').click((e)=>{
  var value = e.currentTarget.value.slice(-1);
  if(e.currentTarget.value.startsWith('row')) {
    rows = value;
    document.getElementById('rowsValue').innerHTML = rows;
  } 
  else {
    columns = value
    document.getElementById('columnsValue').innerHTML = columns;
  };
});

// slider change event
$( ".custom-range" ).change(function(e) {
  spacing = e.currentTarget.value;
  document.getElementById('spacingValue').innerHTML = e.currentTarget.value + 'px';
});