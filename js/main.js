$(document).ready(function(){

    var removedData = [];
    $('#tableData tbody').on('click','button', function(){
        let row = $(this).closest('tr')
        removedData.push(row[0].outerHTML);
        row.fadeOut(500, function(){
            row.remove();
        });
    });

$('#add').click(function(event){
    let newSkill = $('#input').val();
    let newData = `<tr>
        <td style="border:none;"> <button type="button" class="btn btn-danger">X</button></td>
        <td style="border:none;">${newSkill}</td>
            </tr>`;
        $('#tableData').append(newData);
    });
})