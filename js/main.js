$(document).ready(function () {

    $("#btnSearch").click(function() {
        submitSearch();
    });

});

function submitSearch(){
    console.log("submit search");
    
    if( $("#txtAlbum").val().length > 0 ) {
        console.log("txtAlbum: " + $("#txtAlbum").val() );
        loadAlbum( $("#txtAlbum").val() );
    } else if( $("#txtAmazon").val().length > 0 ) {
        console.log("txtAmazon: " + $("#txtAmazon").val() );
    } else if( $("#txtPlaylist").val().length > 0 ) {
        console.log("txtPlaylist: " + $("#txtPlaylist").val() );
    }
}

function loadAlbum( value ){
    $.get('service.cfc?method=getAlbum&albumName=' + value, function(data) {
        showAlbumResults( data );
    });
}

function showAlbumResults( data ) {
    resultData = JSON.parse( data );
    console.log( resultData );
    foundAlbums = resultData.albums;
    console.log( foundAlbums.length );
}