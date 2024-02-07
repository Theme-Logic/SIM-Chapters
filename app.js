function setHeader(headerTheme) {
    $("body").addClass("header-" + headerTheme);
    switch (headerTheme) {
        case 1:
            $("#NAV").insertAfter(".headrow");
            $(".HLWelcomeHeader").closest(".inline").addClass("search-sign-up-wrapper");
            $("a.level1.MPAuxNav.static[href*='contact']").insertBefore("#MPSearchBlock");
            $("#searchColumn").removeClass("pull-right").insertAfter(".HLWelcomeHeader");
            break;
        case 2:
            $("#NAV").insertAfter(".headrow");
            $("a.level1.MPAuxNav.static[href*='contact']").insertBefore("#MPSearchBlock");
            $("#searchColumn").removeClass("pull-right").insertAfter(".HLWelcomeHeader");
            break;
        case 3:
            $("<h1 class='head-heading'>Providing high-quality professional<br> development for career advancement</h1>").insertBefore("#NAV");
            $("#NAV").appendTo("#MPOuterHeader");
            $("#searchColumn").removeClass("pull-right").insertBefore("#HEADER");
            $("#searchColumn .input-group-btn").insertBefore("#SearchControl_SearchTerm")
            break;
    }
}

function setNews(newsTheme) {
    $("body").addClass("news-" + newsTheme);
    switch (newsTheme) {
        case 1:
            $(".chapter-news ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".content-row a:first");
                $('<img />', { src: link.attr("href") }).insertBefore(thus.find('.title-row'));
                link.remove();
            })
            break;
        case 2:
            $(".chapter-news ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".content-row a:first");
                /*var str = $(".content-row .margin-bottom-small:first").html().replace(/\="" /g, '/')
                str = str.substring(str.indexOf("<") + 1, str.indexOf(">"));
                link = str.substring(0, str.lastIndexOf('=""')).replace(" ", "//");*/
                var postImage = $('<img />', { src: link.attr("href") });
                var imgWrapper = $('<div />', { class: 'image-wrap' });
                postImage.appendTo(imgWrapper);
                imgWrapper.insertBefore(thus.find('.title-row'));
                link.remove();
            })
            break;
    }
}

function setEvents(eventsTheme) {
    var newsEventsWrapper = (eventsTheme > 1 || newsTheme > 1) ? "-2" : "";
    $("body").addClass("events-" + eventsTheme);
    switch (eventsTheme) {
        case 1:

            $(".chapter-events ul li").each(function () {
                var thus = $(this);
                var link = thus.find(".col-md-3 img");
                var date = thus.find(".col-md-2.no-pad");
                var postImage = $('<img />', { src: link.attr("src") });
                var imgWrapper = $('<div />', { class: 'image-wrap' });
                var text = $.trim(thus.find(".title-row .col-md-9").clone().children().remove().end().text());
                thus.find(".col-md-9 p.break-word").text(text.substring(0, 200) + "...");
                var child = thus.find(".title-row .col-md-9").children("p, h3, div");
                date.insertBefore(thus.find(".title-row .col-md-9"));
                thus.find(".title-row .col-md-9").html('').html(child);
                postImage.appendTo(imgWrapper);
                imgWrapper.insertBefore(thus.find('.title-row'));
                link.closest(".col-md-3").remove();
            });

            $(".chapter-events ul li .timeAgoFormat").each(function () {
                var thus = $(this);
                var sanitizedText = thus.text().split(",").pop();
                var htmlizedText = sanitizedText.replace(/PM/g, '<span class="smallcaps">PM</span>')
                .replace(/AM/g, '<span class="smallcaps">AM</span>')
                .replace("(ET)", '<span class="smallcaps">(ET)</span>');
                thus.insertAfter(thus.closest("li").find(".calendar-month")).html(htmlizedText);
            });
            break;
        case 2:
            $(".chapter-events ul li").each(function () {
                var thus = $(this);
                thus.find(".col-md-3").removeClass("col-md-3").addClass("col-md-5");
                thus.find(".col-md-9").removeClass("col-md-9").addClass("col-md-7");
                thus.find(".col-md-5").insertBefore(thus.find(".col-md-7"));
                var text = $.trim(thus.find(".title-row .col-md-7").clone().children().remove().end().text());
                thus.find(".col-md-7 p.break-word").text(text.substring(0, 200) + "...");
                var child = thus.find(".title-row .col-md-7").children("p, h3, div");
                thus.find(".title-row .col-md-7").html('').html(child);
                var link = thus.find(".col-md-7 h3 a").attr("href");
                //$('<a />', { href: link, class: "sub-link" }).text("View details").insertAfter(thus.find(".timeAgoFormat"));
            })
            break;
    }


    //$(".section6, .section7").wrapAll("<div class='row-wide'></div>");
    //$(".chapter-events").insertBefore(".chapter-news");
}

function setDiscussions(discussionsTheme) {
    var discussionsFilesWrapper = (discussionsTheme > 1 || filesTheme > 1) ? "-2" : "";
    $("body").addClass("discussions-" + discussionsTheme);
    $(".recent-shared-files").closest(".row-wide").removeClass("row-wide").addClass("row-full discussions-files-wrapper" + discussionsFilesWrapper);
}

function setSponsors(sponsorsTheme) {
    $("body").addClass("sponsors-" + sponsorsTheme);
    if ($('.sponsors')) {
        switch (sponsorsTheme) {
            case 1:
                $('.sponsors .HtmlContent').addClass("container").owlCarousel({
                    loop: true,
                    margin: 10,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                break;
            case 2:
                $(".sponsors").addClass("row-full").removeClass("container").insertBefore("#MPOuterFooter");
                $('.sponsors .HtmlContent').addClass("container")
                break;
        }
    }

}

function setLogos(logosTheme) {
    $("body").addClass("logos-" + logosTheme);
    if ($('.logos')) {
        switch (logosTheme) {
            case 1:
                $('.logos .HtmlContent').addClass("container").owlCarousel({
                    loop: true,
                    margin: 10,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3
                        },
                        1000: {
                            items: 5,
                            nav: true
                        }
                    }
                })
                break;
            case 2:
                $(".logos").addClass("row-full").removeClass("container").insertBefore("#MPOuterFooter");
                $('.logos .HtmlContent').addClass("container")
                break;
        }
    }

}

function setFiles(filesTheme) {
    $("body").addClass("files-" + filesTheme);
} $(".chapter-events li .title-row .col-md-9").clone().children().remove().end().text()

function setFooter(footerTheme) {
    $("body").addClass("footer-" + footerTheme);
}

function migrateSubDomain(){
    $('a[href*="national.simnet.org"]').each(function(){
        var newSubAndDomain = "www.simnet.org";
        var oldSubAndDomain = "national.simnet.org";
        var curHref = $(this).attr('href').toLowerCase();
        var newHref = curHref.replace(oldSubAndDomain,newSubAndDomain);
        $(this).attr('href',newHref);
    });
};

$(document).ready(function () {
    $("#MPAuxNav").closest(".pull-right").removeClass("pull-right").addClass("text-center").insertAfter("#MPCopyright");
    $("#MPOuterFooter").addClass("row-full").insertAfter("#MPOuterMost");
    $("#MPOuterHeader").addClass("row-full").insertBefore("#MPOuterMost");
    if ($("body").hasClass("home")) {
        $(".section1").closest(".row-wide").addClass("row-full").insertBefore("#MPContentArea");
    }
    $("#MPOuterHeader .col-md-12:first").wrap("<div class='row row-wide clearfix headrow'></div>");
    $("#NAV").insertAfter("#Logo");
    $("a.level1.MPAuxNav.static[href*='sim-national']").insertBefore("#MPSearchBlock");
    migrateSubDomain();
    setNews(newsTheme);
    setEvents(eventsTheme);
    setDiscussions(discussionsTheme);
    setFiles(filesTheme);
    setFooter(footerTheme);
    setSponsors(sponsorsTheme);
    setHeader(headerTheme);
    setLogos(logosTheme);
    $("#MPOuterHeader").insertBefore("#MasterPageForm .aspNetHidden:first");
	// HIDE REFRESH CONTACT INFO ON OTHER PROFILES 
	if( !$('[id*="upnlProfileImage"] .btn-group').length){$('.tl-update-contact').hide();}
    // ADD "MANAGE MEMBERSHIP" BUTTON TO THE USER'S PROFILE
    if ($('[id*="upnlProfileImage"] .btn-group').length) {
        $('ul[id*="ProfileTabList"]').parent('.ContentUserControl').before('<p style="margin: 15px 0;"><a href="https://members.simnet.org/members/manage_profile.asp" class="btn btn-default btn-block btn-lg">Access YourMembership</a></p>');
    }
    // SET GREY BACKGROUND SECTIONS FOR HOMEPAGE
    $('.home .bg-grey').each(function(){
        //console.log($(this).closest('#MainCopy_ContentWrapper .row-wide').length);
        if( $(this).closest('#MainCopy_ContentWrapper .row-full').length){
            $(this).wrap('<div class="tl-bg-grey">');
        }
        if( $(this).closest('#MainCopy_ContentWrapper .row-wide').length){
            $(this).closest('#MainCopy_ContentWrapper .row-wide').addClass('tl-bg-grey');
        }
    })
    // PAST EVENTS WRAPPERS
    $(".past-events h6").each(function (index) {
        $(this).nextUntil("h6").andSelf().wrapAll("<div class='oneEvent'></div>");
    });
    $('.footer-1 div#MPOuterFooter #FOOTER .col-md-4:nth-child(2) p:first-child').append('<br /><a href="https://higherlogicdownload.s3.amazonaws.com/SIMNET/eb5410ec-81da-4dd4-846f-1d2d08fd6cb2/UploadedImages/shared/SIM-Privacy-Policy.pdf">SIM Privacy Policy</a>')
}
)

$(window).on('load', function () {
    $('#status').fadeOut();
    $('.simnet-preloader').fadeOut('slow');
    // EVENTS OPEN IN NEW TAB
    $('.chapter-events h3 a').attr('target','_blank');
    $('.HLEventList h3 a').attr('target','_blank');
    //PROFILE BUTTONIZE THE REFRESH MEMBER CONTACT INFO LINK
    //$('.prof-ref-default a').addClass('btn btn-success');
});

//THEME LOGIC CUSTOM BLOG WIDGET FOR CHAPTER NEWS SECTION
function initBlogImg() {

        $('.tl-blog li h3 a').each(function () {
            var tlBlogLink = (this).href + ' .blogs-block .col-md-12 img:first'; 
            $(this).closest('.title-row').before('<div class="row tlBlogImg" />');
            $(this).closest('.title-row').prev().load(tlBlogLink, function(){
                $('.tlBlogImg img').removeAttr('style data-mce-hlselector data-mce-hlimagekey data-skipsetcontent').addClass('tl-blog-img');
            });
        });
        $('.tl-blog li').each(function () {
            $(this).addClass('col-md-4');
        });

}
$(document).ready(function () {
    initBlogImg();
    //UPDATE PRIVACY POLICY LINK
    $('a[href*="/SIMNET/eb5410ec-81da-4dd4-846f-1d2d08fd6cb2/UploadedImages/shared/SIM-Privacy-Policy.pdf"]').attr('href','https://higherlogicdownload.s3.amazonaws.com/SIMNET/4e59ce9b-135b-445e-ab7e-48afac9831fd/UploadedImages/SIM-Privacy-Policy.pdf');
});

//var _0x7a49=["\x68\x72\x65\x66","\x20\x2E\x62\x6C\x6F\x67\x73\x2D\x62\x6C\x6F\x63\x6B\x20\x69\x6D\x67\x3A\x66\x69\x72\x73\x74","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x72\x6F\x77\x20\x74\x6C\x42\x6C\x6F\x67\x49\x6D\x67\x22\x20\x2F\x3E","\x62\x65\x66\x6F\x72\x65","\x2E\x74\x69\x74\x6C\x65\x2D\x72\x6F\x77","\x63\x6C\x6F\x73\x65\x73\x74","\x74\x6C\x2D\x62\x6C\x6F\x67\x2D\x69\x6D\x67","\x61\x64\x64\x43\x6C\x61\x73\x73","\x73\x74\x79\x6C\x65\x20\x64\x61\x74\x61\x2D\x6D\x63\x65\x2D\x68\x6C\x73\x65\x6C\x65\x63\x74\x6F\x72\x20\x64\x61\x74\x61\x2D\x6D\x63\x65\x2D\x68\x6C\x69\x6D\x61\x67\x65\x6B\x65\x79\x20\x64\x61\x74\x61\x2D\x73\x6B\x69\x70\x73\x65\x74\x63\x6F\x6E\x74\x65\x6E\x74\x20\x77\x69\x64\x74\x68\x20\x68\x65\x69\x67\x68\x74","\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72","\x2E\x74\x6C\x42\x6C\x6F\x67\x49\x6D\x67\x20\x69\x6D\x67","\x6C\x6F\x61\x64","\x70\x72\x65\x76","\x65\x61\x63\x68","\x2E\x74\x6C\x2D\x62\x6C\x6F\x67\x20\x6C\x69\x20\x68\x33\x20\x61","\x63\x6F\x6C\x2D\x6D\x64\x2D\x34","\x2E\x74\x6C\x2D\x62\x6C\x6F\x67\x20\x6C\x69","\x72\x65\x61\x64\x79"];function initBlogImg(){$(_0x7a49[14])[_0x7a49[13]](function(){var _0xcf0dx2=(this)[_0x7a49[0]]+ _0x7a49[1];$(this)[_0x7a49[5]](_0x7a49[4])[_0x7a49[3]](_0x7a49[2]);$(this)[_0x7a49[5]](_0x7a49[4])[_0x7a49[12]]()[_0x7a49[11]](_0xcf0dx2,function(){$(_0x7a49[10])[_0x7a49[9]](_0x7a49[8])[_0x7a49[7]](_0x7a49[6])})});$(_0x7a49[16])[_0x7a49[13]](function(){$(this)[_0x7a49[7]](_0x7a49[15])})}$(document)[_0x7a49[17]](function(){initBlogImg()})
