
$(function () { // wait for document ready

    function scrollToAnchor(anchorName){
      var anchor = $("a[name='"+anchorName+"']");
      $('html,body').animate({scrollTop: anchor.offset().top}, 1000, function(){
        location.href = "#"+anchorName;
      });
    }

    $(".lets-talk").click(function(){scrollToAnchor("lets-talk")});
    $(".back-to-work").click(function(){
      $(".project-detail").hide('slide',{direction:'up'},300, function(){

      });
      scrollToAnchor("work");

    });

    $(".project").click(function(){
      var id = $(this).data("id");
      var title = projectDetailData[id].title;
      var description = projectDetailData[id].description;
      var url = projectDetailData[id].url;
      var imgSrc = $(this).find(".portfolio-image").attr("src");
      var productDetail = $(".project-detail");

      $(".project-detail").hide('slide',{direction:'up'},100, function(){
        productDetail.find($("img")).attr("src",imgSrc);
        productDetail.find($("h1")).html(title);
        productDetail.find($("p")).html(description);
        productDetail.find($("a.cta")).attr("href",url);
        scrollToAnchor('project');
        $(".project-detail").show('slide',{direction:'up'},500);
      });
    });

    var d = new Date();
    var n = d.getFullYear();
    $(".footer p span").html(n);

    // ScrollReveal init
    window.sr = ScrollReveal();
    sr.reveal('.project', { duration: 2000 }, 50);

    angular.bootstrap(document.getElementById('scrollApp'), ['titleScroll']);
    angular.bootstrap(document.getElementById('contactApp'), ['contactApp']);

    var projectDetailData = [
      {
        title: "BTE Racing",
        description: "BTE Racing is an automotive part manufacturing, design, and support company based in north Mississippi. As part of the team at LunaWeb, Inc, I created the HTML and CSS for this website from a PSD design and implemented it into CoreCommerce. This site was fully responsive and involved jQuery animations and use of the CoreCommerce native language.<br /><br /><small>Note: This design was for a previous year. The live site no longer uses this design.</small>",
        url: "http://www.bteracing.com"
      },
      {
        title: "Coleman Tractor Company",
        description: "Coleman Tractor Company is a Kubota dealer with branches throughout middle Tennessee.  I received this project as a PSD design. With the team at LunaWeb, Inc, I implemented the HTML/CSS into CoreCommerce as a responsive website. <br /><br /><small>Note: This site no longer lives on a CoreCommerce platform.</small>",
        url: "http://www.colemantractor.com/"
      },
      {
        title: "Memphis Barbecue Supply",
        description: "Memphis Barebeque Supply is a one-stop shop for barbeque and grilling supplies in Memphis, TN. I coded this site from a PSD and worked with the team at LunaWeb, Inc to implement this responsive site into CoreCommerce using jQuery to enhance the user experience.",
        url: "http://mbbqsupply.com/"
      },
      {
        title: "Memphis Children's Clinic",
        description: "Memphis Children's Clinic is a renown pediatric group serving the metropolitan Memphis area. I received the PSD for this design and coded it from the ground up using PHP for the back-end. The homepage features two synchronized jQuery sliders.",
        url: "http://www.memphischildrensclinic.org/"
      },
      {
        title: "Good News Handicrafts",
        description: "Good News Handicrafts is a wholesale provider of international handicrafts based in Oklahoma City. I designed the logo for this business and built the website on an existing WordPress theme, modifying it as needed and creating custom graphics.",
        url: "http://www.goodnewshandicrafts.com/"
      },
      {
        title: "Piper Orthodontics",
        description: "Piper Orthodontics is a leading orthodontics group in Memphis, TN. This client visualized a very specific design for this project, so I worked closely with them, using the paper materials they provided, to design this website and implemented it in WordPress. ",
        url: "http://piperortho.com/"
      },
      {
        title: "Camp Arc-en-Ciel",
        description: "Camp Arc-en-Ciel is a Christian youth camp in Larodde, France. My wife and I provided all the photography, design, and coding for this project to represent the camp’s location through the elements of the website.",
        url: "http://camp-arcenciel.fr/"
      },
      {
        title: "Southern Heritage Classic",
        description: "Southern Heritage Classic is an annual cultural celebration in Memphis that creates a strong economic impact and promotes higher education. Using the client’s vision, I designed this website and implemented it in WordPress using a custom responsive design.",
        url: "http://southernheritageclassic.com/"
      },
    ];

  });
