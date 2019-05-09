// default global variables
var rows = 2;
var columns = 3;
var spacing = 3;
var htmlTable = '';
var ampTable = '';
var templateType = 'HTML';

// click event for the generate template button
$('#generateTemplate').click((e) => {

  // this code will execute once generate template is clicked
  e.preventDefault();

  htmlTable = `<table class="dh-gallery-table">`;
  ampTable = `<table class="dh-gallery-table">`;

  for (var i = 0; i < rows; i++) {
    htmlTable = htmlTable + `<tr>`;
    ampTable = ampTable + `<tr>`;


    for (var j = 0; j < columns; j++) {
      htmlTable = htmlTable + `
        <td style="padding:` + spacing + `px;">
          <a href="https://hackett.dev">
            <img src="https://placeimg.com/150/150/animals" height="150" />
          </a>
        </td>`;
      ampTable = ampTable + `
        <td style="padding:` + spacing + `px;">
          <a href="https://hackett.dev" target="_blank">
            <amp-img src="https://placeimg.com/150/150/animals" height="150" width="150">
            </amp-img>
          </a>
        </td>`;
    }
    htmlTable = htmlTable + `</tr>`;
    ampTable = ampTable + `</tr>`;
  }
  htmlTable = htmlTable + `</table>`;
  ampTable = ampTable + `
  </table>`;

  if (templateType === 'AMP') {
    $('#formControlTextarea').text(ampTable);
  } else {
    $('#formControlTextarea').text(htmlTable);
  }

  // AMP tables won't render in HTML, so showing HTML preview
  document.getElementById('table-preview').innerHTML = htmlTable;
});

// radio button click event
$('.form-check-input').click((e) => {
  var value = e.currentTarget.value.slice(-1);
  if (e.currentTarget.value.startsWith('row')) {
    rows = value;
    document.getElementById('rowsValue').innerHTML = rows;
  } else {
    columns = value
    document.getElementById('columnsValue').innerHTML = columns;
  };
});

$('#formControlTextarea').click(() => {
  document.getElementById("formControlTextarea").select();
});

// click event for HTML/AMP Toggle
$('.btn-group-toggle').change((e) => {
  templateType = e.target.value;
  document.getElementById('templateValue').innerHTML = e.target.value;
});

// slider change event
$(".custom-range").change((e) => {
  spacing = e.currentTarget.value;
  document.getElementById('spacingValue').innerHTML = e.currentTarget.value + 'px';
});
