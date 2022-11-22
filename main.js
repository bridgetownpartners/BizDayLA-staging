var redirectUrl = "https://www.youtube.com/c/BizDayGlobal/videos";
var imgDir = "./assets/automated-images/";
var url = "https://api.github.com/repos/bridgetownpartners/BizDayGlobal-live/git/trees/f60091048b074180d948b5bc62a1f2ccefcfa879"; // master/assets/automated-images
var fileextension = ".png";
var fileextensionJpg = ".jpg";
var fileextensionJpeg = ".jpeg";

$.ajax({
    url: url,
    cors: true,
    type: 'GET',
    secure: true,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "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")
    },
    success: function (data) {
        data.tree.map((imageObj) => {
            if (imageObj.path.includes(fileextension) || imageObj.path.includes(fileextensionJpg) || imageObj.path.includes(fileextensionJpeg)) {
                $('#biz-day-card__wrapper').append(
                    "<a href='" + redirectUrl + "' target='_blank' class='bizday_card_topic bizday_card_topic--has-image' style='background-image: url(" + imgDir + encodeURIComponent(imageObj.path) + "); background-size: cover; background-repeat: no-repeat; background-position: center center;'></a>"
                );
            }
        });
    },
    error: function (error, a) {
        console.log(error);
        console.log(error.responseText);
    }
});