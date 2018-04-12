$(document).ready(function () {
  $('#box').fullpage({
    navigation: true,
    css3: true,
    scrollingSpeed: 1000,
    anchors: ["homePage", "CompanyProfile", "productDescription", "joinCooperation", "feedBack", "connectCompany"],

   
    afterLoad: function (anchorLink, index) {

    }
  });






})