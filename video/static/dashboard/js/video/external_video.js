var videoEraStatic = false;
var videoEditArea = $('#video-edit-area');

$("#open-add-video-btn").click(function(){
    if (!videoEraStatic){
        videoEditArea.show();
        videoEraStatic = true;
    }else{
        videoEditArea.hide();
        videoEraStatic = false;
    }
});