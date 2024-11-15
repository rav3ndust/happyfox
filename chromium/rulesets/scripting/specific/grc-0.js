/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: grc-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".adResult",".ad_wrapper",".pub_300x250,\n.pub_300x250m,\n.pub_728x90,\n.text-ad,\n.text-ad-links,\n.text-ads,\n.textAd,\n.text_ad,\n.text_ads","#mainBanner,\n.LeftMenuAd,\n.adForumAdDiv","DIV[id=\"MaxFooterBannerCon\"]","A[href=\"http://www.amnizia.com/advertisement\"],\nA[href=\"http://www.elcid.com/\"],\nA[href=\"http://www.text-link-ads.com/\"]","TABLE#bannerLandscape","#crosscol-overflow",".widget-content","DIV#HTML14,\nDIV#HTML15","#front-banner,\n#front-mobbanner2-container,\n#news-mobdown-title-banner2,\n[id^=\"front-banner\"]",".skinBanner,\n.sw-banner,\nvideo","#af-preloader,\n.adsbygoogle,\n.theiaStickySidebar","DIV[id=\"floatit\"]","P[style=\"color: rgb(255, 0, 0);\"],\ntd[class=\"message-box\"]","[href^=\"https://gml-grp.com/C.ashx\"]",".is-relative.extra-sidebar","A[href*=\"spinpalace\"]","#\\5f widget-5,\n#text-202339834,\nA[href*=\"http://www.ez-smoke.net/\"],\nA[href*=\"http://www.indolucky7.com/sbobet/sbobet.html\"],\nA[href=\"http://www.mp4converter.net/dvd-ripper-mac.html\"]","aside","#secondary","#ad-box-right,\nA[href*=\"http://serve.williamhillcasino.com/\"]","#after-popular,\n#inside-banner-1,\n#inside-banner-2,\n#inside-banner-3,\n#top-banner,\n.banner-min-h-600,\n.inside-articles-banner","A#promoLink","#header_billboard,\n.sticky-diaf.wrap-diaf,\n.top-diaf.wrap-diaf,\ndiv.widget.widget-diaf","a.adv-link,\na.notrack",".OverallBlockBg,\n.ban-box,\n.ban_pushdown,\n.hban,\n.show.catfish_ad,\n.takeover-ban,\ndiv[class*=\"ban_hor_\"]",".banner",".banner-centered,\n.mobile-reverse:has(div[id^=\"div-gpt-\"]),\n.tw-50[style^=\"overflow\"]","A[href*=\"http://bold.adman.gr/\"],\nA[href*=\"http://talos.adman.gr/\"],\nDIV[id*=\"nimbleBuyWidget\"]",".bannergroup",".ads,\n.dockads.left,\n.inlineads","A[href*=\"gamebookers\"],\nA[href*=\"williamhill\"],\nDIV[id=\"MaxFooter\"],\nDIV[id=\"leo14102010e\"],\nDIV[id=\"vavouralis\"],\nIFRAME[src*=\"VistaBet\"]","#block-views-ads-sidebar-block-block","#afdiv","#left-adv,\n#right-adv,\n.disaronnobox","EMBED#efirstPage","strong > a[href^=\"http://autotriti.adman.gr/click\"]","A.fjmdiucexipcopnrmtke",".prices__promoted-separator,\nDIV#shopping-normal,\ndiv[data-is-promoted=\"\"]","A[href*=\"linkwise\"],\nIFRAME.blockrandom","#main-content > .content-wrap:nth-of-type(1) > .content > .candiabanners-index","A[href*=\"http://www.capital.gr/click.asp\"],\nTABLE[style=\"border: 1px solid rgb(194, 210, 216); background-color: rgb(240, 248, 255); font-size: 12px; padding: 2px;\"]",".below-facets-ad,\n.carzilla-ad > li,\n[href*=\"funshop.gr\"],\nol > li:has(.carzilla-ad),\nol > li:has([href*=\"funshop.gr\"])",".infacets.maskshop,\n.inlist.maskshop","#adLinks","div[class=\"story-textlinks row\"]","DIV.banner-side,\nDIV[style=\"width: 285px; float: right; overflow: hidden;\"]","#adtxtlink,\n#editor_link[style*=\"background:transparent url(http://www.sport24.gr/incoming/article\"],\n#top_story_wrap > .grid_12 > div:nth-of-type(7) > a[href^=\"http://www.stoiximan.gr\"],\n.mythos,\nA.cokeLink,\nA.cokeLink2,\nA[href*=\"http://www.betclic.com/\"],\nA[href=\"http://goo.gl/3vrB4h\"],\nDIV#bfair,\nDIV.proan,\nDIV[style=\"border-bottom: 5px solid rgb(0, 102, 204); clear: both;\"],\nIMG[alt=\"in association with betoto\"],\ndiv[class=\"ad468\"],\ndiv[class=\"ad728\"],\ndiv[class=\"betotoTxtPrem\"],\ndiv[class=\"bfairTxtPrem txtLink\"],\ndiv[class=\"intTxtPrem txtLink\"],\ndiv[class=\"trailer\"],\ndiv[class=\"txtLink\"],\ndiv[id=\"ctl00_Div1\"],\ndiv[id=\"s2c\"]","#stoiximan-cont > a[href^=\"http://www.stoiximan.gr\"]",".leftClickable,\n.rightClickable","A[href*=\"http://www.plaisio.gr\"]","#top_story_wrap > .grid_12 > div:nth-of-type(8) > a[href^=\"https://www.stoiximan.gr\"]","[href*=\"adman.gr\"]","#first-big-banner,\n.module-shadow","A.sponsLink","#sma-banner-wide,\n#sponsors-mainmodule",".space3d,\n.td-a-rec,\n.td-pb-span4.tdc-column.vc_column_container.wpb_column.tdi_128.vc_column,\ndiv[id*=\"clever_\"],\niframe[src*=\"unblockia\"]","A[href*=\"http://www.bet-at-home.com/\"]",".side,\n.static",".cart-reminder","#advsliding352,\ndiv[class=\"agores\"]",".deal","DIV#advsliding258","#custom_html-11,\n#custom_html-14,\n#custom_html-17,\n#custom_html-24,\n#custom_html-25,\n#custom_html-30,\n#custom_html-4,\n#custom_html-6,\n.afterheader,\n.background-cover,\n.custom-html-widget,\n.e3lan-top","#header-sidebar,\n#sidebar,\n.wpb_single_image:not(#printCover)",".attachment-full.aligncenter,\n.eng_ads,\n.eng_recs_holder",".left_fixed,\n.right_fixed","[src*=\"/BANNERS/\"],\n[src*=\"/banners/\"],\ndiv.title.sp-module:nth-of-type(5)",".ads-after-article-body","#text-10,\n#text-16,\n.td_block_widget,\n.vc_widget_sidebar",".ad-970-250","DIV#b177,\nDIV#b178,\nDIV#b199,\nDIV#b25,\nDIV#b32,\nDIV#b39,\nDIV#b41,\nDIV#b42,\nIMG#BLOGGER_PHOTO_ID_5491192352761655986,\nTD.content.first","#article-ad-container1,\n#article-ad-container3,\n#article-inread-ad-container,\n.print-hide.post-inline-ad",".sls,\n.srs","DIV#promotext,\nDIV.banner300250,\nDIV.underphoto","#custom_html-2,\n.bos_searchbox_widget_class",".adv,\n.widget_text[class^=\"widget-\"],\n[href^=\"https://casadikouros.gr\"],\n[href^=\"https://istikbalkouros.gr\"],\n[href^=\"https://kriton-energy.com\"],\nimg[src$=\".gif\"]",".td_block_15,\n.td_flex_block,\n.td_mod_wrap,\n.tdi_88_ffb,\n.vc_raw_html",".ad___auto.ad",".banner.medrect,\n.banner.minirect",".bdaia-ad-container,\n.bdaia-bellow-header,\n.bdaia-custom-area > .bd-container > div,\n.bdaia-widget-e3",".superbanner",".header-billboard","div[align=\"left\"]","div[class=\"lad\"],\ndiv[class^=\"ad\"]","#block-block-11,\n#block-block-247,\n#block-wblocks-wblocks_companies,\n#block-wblocks-wblocks_promoted_companies,\n#content-banner-korios,\n.game-center-matches-item-sponsor,\n.linkLeftCntr,\n.linkRightCntr,\nA.betAtHome,\nA[href*=\"http://ads.meridianbet.gr/\"],\nA[href*=\"http://adserving.unibet.com/\"],\nA[href*=\"http://ff.connextra.com/\"],\nA[href*=\"http://media.mybet.com/\"],\nA[href*=\"http://sportingbet.gr/\"],\nA[href*=\"http://www.novibet.com/Handlers/\"],\nA[href*=\"http://www.sportingbet.gr/paradise-poker/\"],\nA[href*=\"https://www.playbet.com/portal/\"],\nA[href^=\"http://www.bet365.gr/\"],\nDIV[id^=\"block-wadman\"]","#block-views-promoted_companies-block_1","A[href*=\"http://partner.sbaffiliates.com/\"]","#textlinks",".bottom-popout.is-open","DIV[id=\"_atssh\"],\niframe[src=\"*\"]","#rightcolumn > div:nth-of-type(1),\nfooter > div:nth-of-type(1) > div:nth-of-type(2)","A[href*=\"stanjames\"]","#full-width-ad,\n#full-width-ad-inner,\n#taboola-alternating-below-article-3","DIV.bannerhptop",".banner--full,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-79c1.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-inner-column.elementor-col-33.elementor-column.elementor-element-7f24.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-top-column.elementor-col-50.elementor-column.elementor-element-fc62ef0.elementor-element.has_ae_slider > .elementor-element-populated.elementor-column-wrap,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.adrotateSmall.elementor-element-1183.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-5032.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-99aff7b.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-aabbe09.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f45669a.elementor-element > .elementor-widget-container,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.elementor-element-f8eec79.elementor-element,\n.elementor-widget-wp-widget-adrotate_widgets.elementor-widget.opapad.elementor-element-48f3775.elementor-element > .elementor-widget-container,\n.post-horizad","#HeaderBanner,\n#HomePageRightBanner3,\n#LeftBanner1,\n#LeftBanner2,\n#LeftBanner3,\n#MiddleBanner1,\n#RightBanner1,\n#RightBanner2,\n#RightBanner4,\n#RightBanner5,\n#RightBanner6,\n#RightBanner8,\n#in-home-rel-banners,\n#middle_banner_1,\n#middle_banner_2,\n.stamps,\nDIV#CenterRectangleBanner.adverticement,\nDIV#RightVerticalBanner.adverticement,\nDIV.admessage,\nDIV[style=\"width: 150px; height: 100px; margin-top: 5px; margin-bottom: 5px;\"],\ndiv[class=\"textlink\"]","DIV[style=\"background: url(\\\"Themes/1/Default/Media/image-ads-sponsor.jpg\\\") no-repeat scroll left center rgb(243, 243, 243); text-align: center; border-bottom: 1px solid rgb(230, 230, 230); padding: 4px 0px;\"],\nDIV[style=\"background:url(Themes/1/Default/Media/image-ads-sponsor.jpg) no-repeat left;  text-align:center;background-color: #F3F3F3;border-bottom:1px solid #E6E6E6;padding:4px 0px;\"]","#RightBanner3,\n#RightBanner7,\n#middlebanner3","#block-dfptaghome-horizontal-2,\n#block-dfptaghome-vertical-1,\n#block-dfptaghome-vertical-2,\n#block-dfptaghome-vertical-3,\n#block-dfptagside-bar-1-article,\n#block-dfptagside-bar-2-article,\n.in_read_read,\n.tag-billboard.admanager-content,\n.tag-hp_sidebar.admanager-content,\n.tag-novi_banner.admanager-content,\n.tag-sidebar1.admanager-content,\n.tag-sidebar2.admanager-content,\ndiv.banner-place-in",".banner-728x90-top,\n.featured-2,\n.insMainAd.ad.grid--entry","#ipbwrapper > .bgad[href=\"http://www.kotsovolos.gr/site/mobile-phones-gps/mobile-phones/smartphones?v=0&company=Apple&11202=44834&utm_source=insomnia.gr&utm_medium=skin&utm_content=NEWiphone6s-6splus-insomnia-skin-2015&utm_campaign=iphone6s-6splus-insomnia-\"]","div[class=\"wp125ad odd\"]",".left,\n.right",".asdbg.wrap-right.inarticle-add-mob.inarticle-add",".boxzilla,\n.boxzilla-overlay,\n.itech-adlabel","#mvp-leader-wrap","#nx-stick-help,\n.ad-block-universal,\n.nxAds,\n.nxsidebar","#text-12",".stream-item-top.stream-item,\n.theiaStickySidebar > .widget_custom_html.widget.container-wrapper.widget_text,\n.theiaStickySidebar > .widget_media_image.widget.container-wrapper,\n[href=\"http://poulos-shop.gr\"],\n[href=\"http://www.toolpoint.gr\"]","div[class=\"RightColumnBanners\"],\ndiv[class=\"bannerTables\"]","#topfeatured,\n.alignleft.size-full.wp-image-16703,\n.box_banner,\n.top_ad_big,\n.wpbrbannerinside","#carousel-1","#banner-top-container,\n#left-dress2,\n.banner-side-collection,\n.categories2:nth-of-type(3)","#underUnderRotator,\n#widgetAD > div,\n.above-row,\n.fixedbottom,\n.head728,\n.home-aggelies,\n.module:nth-of-type(3),\n.underRotatorAd590,\n.underRotatorModuleAd590,\ndiv[id^=\"div-gpt-ad\"]",".custom_area_single_01,\n.elementor-element-3db4f540,\n.elementor-element-5680254d,\n.elementor-element-5716b5fa,\n.elementor-element-c2a8f89,\n.elementor-section-items-middle,\n.elementor-widget-image,\n.jeg_ad,\n.widget_sp_image,\n[class^=\"custom_position_single\"]","#das_out,\n.textads-wrapper,\na[href*=\"/lines/click/\"]","#itrofi-left,\n#itrofi-right,\n.bannerContent","DIV.textLink",".a-42.a-single,\n.a-46.a-single > [href=\"https://www.badrabbit.gr/\"],\n.td_single_image_bg,\n.widget_custom_html.custom_html-2,\n.widget_media_image","#box_text_ads","#text-88 > .textwidget",".float-right.header-ainfo",".cityAdv,\n.newsbeast",".in-feed-banner,\n.mt-0.text-center.banner,\n.order-md-1.order-0.sidebar-widget","#leftboxhome,\n#rightboxhome,\n.leftbox,\n.rightbox,\na[href=\"http://www.myphone.gr/forum/\"] > img","#google_ads_container","DIV.banner",".naxos-pano-apo-tin-epikefalida-se-ola,\n.td-fix-index.tdb-block-inner > .naxos-target.naxos-meta-to-periechomeno",".ctHomesidebar,\n.ctMainPostAds","div.games","#editor_link,\n#link-deliveras,\n#mainContent > .alpha.grid_12 > .bolder.lineborder,\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(4),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(5),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(6),\n#mainContent > .alpha.grid_12 > .main.default.stories:nth-of-type(8),\n.adSlot-height--premium.code-widget,\n.minHeight--400,\n.seatimage,\nDIV[class=\"dheadRightBoxBot\"],\ndiv[class=\"banner\"]","[href*=\"bit.ly\"]","#adFixFooter,\n#artFoot,\n#imgAd,\n.amSlotInReadVideo.jsx-3307064496,\n.doNotPrint.amSlotFeed.jsx-2939975430,\n.icon-popular.nespressoAdd,\n.menuAdd,\n.topShare_textad,\n.txtLinks,\n.undeMenuAmSlot2.skinContained.doNotPrint.amSlot.jsx-426522538,\nA[href*=\"http://bs.serving-sys.com/\"],\ndiv.sidebarAmSlot.jsx-1829390467","#json-textlinks,\n.skin-link,\nDIV[style=\"mergin:5px 0\"]","#left,\n#right,\n#sponsor-link,\nDIV[style=\"margin: 10px 0 0 0; display: block;clear:both;\"]",".sidebar,\naside.pospromo","#ctl00_articleLeftColumn_ctl04_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl05_adRotatorUpdatePanel,\n#ctl00_articleLeftColumn_ctl06_adRotatorUpdatePanel,\n#ctl00_topBannersRight_ctl00_adRotatorUpdatePanel,\n.top_banners_outer",".topClickable","div[class=\"story-textlinks\"]","DIV[style=\"border: 1px solid rgb(224, 224, 224); padding: 2px; margin-left: 20px; background-color: rgb(244, 244, 252); width: 140px; font-size: 12px;\"]","#banners,\n.banners_mid_2","div.banner","#googleNewsBanner,\n#header > .span8,\n#sp-content-top-left > .visible-desktop.module,\n#sp-content-top-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n#sp-right > div.module > .clearfix.mod-wrapper > .clearfix.mod-content > .clearfix.mod-inner > .custom,\n.clever_41786_pushdown,\n.yeslidergroup,\ndiv#sas_placement1119:nth-of-type(5),\ndiv.module:nth-of-type(9),\ndiv[id^=\"hstp-\"]","div[id^=\"epom-\"]","div[id=\"ad-links\"]","#box-sponsors","#block-block-40,\n#block-block-41,\n#left-ad-container,\n#region-sidebar-second,\n#right-ad-container,\n.block-header-728x90","#text-64,\n#text-65,\ndiv.single-subscribe-block",".big-banner-top,\n.main-margin.container > .newstrack-content.row > .post-margin-right.col-xs-8.col-md-8 > .waypoints.post-content > .affiliate > .textwidget",".banneritem",".cs-banner-elementor,\n.cs-sidebar__area.cs-widget-area,\n.elementor-widget-image.elementor-widget.elementor-element-0023e56.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-83f1fd8.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-9f5026d.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-d8db731.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-f67660b.elementor-element,\n.elementor-widget-image.elementor-widget.elementor-element-fda8036.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-187d168.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-697f9a4.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-9b1d83d.elementor-element,\n.elementor-widget-shortcode.elementor-widget.elementor-element-d4636fd.elementor-element,\n.single-ads","div.wrap-prodeals-widget","#provoc_sidebar_1,\n#provoc_sidebar_2,\n#provoc_sidebar_3,\n.billboardCnt,\n.billboardStickyWrap.container,\ndiv.inArticleLG",".wide-banner","#realTopBanner,\n#realTopBannerGap,\n.banner-wrapper","#right_col,\n.gk_tab_container0-style1,\n.gk_tab_wrap-style1","body > table:nth-of-type(2)","DIV.banners","IMG[src=\"images/betathome.jpg\"]","#sp-banners-carousel,\n#sp-banners-top,\n#sp-left,\n#sp-right,\n.sp-page-title,\n.sppb-section-content-center",".skin.news[href=\"https://www.facebook.com/NAIstinEllada\\A \"],\nDIV#jw_wwg,\nDIV#kw_logo,\nDIV[id=\"sony-internet-tv-holder\"],\nSPAN#jwlogo","#banner_160_filters,\n#banner_160_home,\n#banner_728_home,\n#new_contract_online_overlay,\n#sponsorship,\n.labeled-item.with-skus-slider.card.cf,\n.product-ad,\n.s_call_to_action,\n.selected-product-cards,\nDIV[id=\"afc\"],\nDIV[id=\"home_728x90\"],\nli.labeled-product.labeled-item.card.cf","#featurette","DIV.text-link-container.marg-top-10,\nDIV[style=\"float: left; width: 70px; padding-top: 7px;\"]","#backgroundlink,\n.textlinks,\nA.banner,\nA.footballbet,\nA.ga_track,\nA[href*=\"/specials/williamhill?\"],\nA[href*=\"http://www.e-germanos.gr\"],\nA[href=\"#0.1_\"],\nDIV[id=\"seios-link\"],\nLI.blue.casino,\nLI.blue.poker,\nSPAN.icon.icon-latest-news-ad",".bet-logos","#editor_link[style*=\"background:transparent url(http://www.contra.gr/Columns/article\"],\n#page > .content-top-wrap,\n.article-single__body > .content-thirdParty,\n.article-single__body > .creative_placeholder.content-thirdParty,\n.premium_banner,\nA[class=\"ad\"],\nA[href*=\"acidbet.gr\"],\nA[href*=\"betclic.com\"],\nA[href*=\"doubleclick.net\"],\nA[href*=\"e-shop.gr\"],\nA[href*=\"http://www.menperfect.gr\"],\nA[href*=\"http://www.sport24.gr/html/ent/042/ent.374042.asp\"],\nA[href*=\"http://www.sport24.gr/html/ent/765/ent.371765.asp\"],\nA[href*=\"mens-x.gr\"],\nA[href*=\"www.bwin.com\"],\nDIV.code.currentArea-logo,\n[id^=\"ros\"],\ndiv.ad,\ndiv[id^=\"ENGAGEYA\"]","#advertisment","#box-block-block-12",".textlink","#main > .ads,\n.aside","#fasa,\n#text-39,\n.mobile_adv",".ad__desktop.ad__div,\n.ad__div,\ndiv.sticky-el.ad__desktop.ad__div",".custom-html-widget2,\ncenter",".code-block-6,\n.header-promo,\n.thene-prin-to-arthro,\n.thene-widget","#kalogritsas300","#g-content-top-a,\n.customhidden-mobile,\n.moduletable.sideAdvertFix,\n.moduletable.sideFix,\n.sponsor","#sidebar > .widget_block.widget,\n#under-post-content,\n.before-content.section,\n.content-inner > .footer-wide.section,\n.owl-stage-outer,\n.size-full.wp-image-110042.aligncenter,\n.size-full.wp-image-122324.aligncenter,\n.wp-image-120708.size-full.aligncenter,\n.wp-image-120723.size-full.aligncenter","#content > div.center:has(> div.content-wrapper > div.taboola-feed),\n#sma-top-box > .boxHead_TopBar,\n.advert,\n.blog-list > div.blog-post:has(> div.abs),\n.sidebar-wrapper > div.sticky-block:has(> div.advert),\n.sticky-block:has(> div.sticky > div.advert),\ndiv[style=\"height:286px;\"]","#MAINAD-box,\n.ADBox","#BannerCategArticle300Right1,\n#BannerCategArticle300Right2,\n#BannerCategArticle300Right3,\n#BannerCategArticle300Right4,\n#Categheaderbanner728,\n#Homeheaderbanner728","A[href*=\"http://www.kazinoinfo.com/\"],\nDIV.box_main_ads","#wholesite1 > a[href^=\"http://jobby.gr\"],\n.cls-sticky-wrapper,\nDIV[class=\"subBanner\"],\nDIV[id=\"sb-container\"]","#frame_id_1,\n#frame_id_2,\n.central_banner_area,\n.hyperad_iframe,\n.new60sbanners,\n[href=\"http://www.escore.gr/\"],\ndiv.adds_sec:nth-of-type(4),\ndiv.adds_sec:nth-of-type(5)",".HTML.widget:not(:last-child) > div:first-child","#ad_13_left_1",".row.sidebar-nav","#financial_widget > .financial_widget_top_line.financial_widget_line > .financial_widget_top_line_medium.financial_widget_line_medium > .peiraios_link[href=\"http://www.piraeusbankgroup.com/\"],\nEMBED#mymovie",".connxtvscroll",".text-center.local-guides__banner","#AdPremiumSticky","A[href*=\"ad-emea.doubleclick.net/click\"],\nIMG[src*=\"ad-emea.doubleclick.net/\"]","IMG[src=\"images/728_generic_betnow.gif\"]","a[href=\"http://www.kratisinow.gr\"],\niframe[src=\"http://kratisinow.digitup.eu/widget/widget-artists\"]","#page-body-header,\n#sidebar-one",".region-banner-top.region.row","#text-19","#block-kentroxenonglossonlogos,\n#headline","#skin-container"];

const hostnamesMap = new Map([["*",[0,1,2]],["adslgr.com",3],["aek365.com",4],["aek365.gr",[4,17,32]],["amnizia.com",5],["oddbanner.bet-at-home.com",6],["elektronikosanagnostis.blogspot.com",7],["veriotis.gr",[7,145,186]],["fimotro.blogspot.com",8],["tro-ma-ktiko.blogspot.com",9],["crete2day.com",10],["enimerosi.com",11],["filoitexnisfilosofias.com",12],["greekddl.com",13],["greeksubtitlesproject.com",14],["inpaok.com",15],["megatv.com",16],["milaraki.com",[17,18]],["techteam.gr",17],["philenews.com",19],["dialogos.com.cy",[19,25]],["newmoney.gr",[19,131]],["start2click.com",20],["newsauto.gr",20],["subs4free.com",21],["unboxholics.com",22],["williamhill.com",23],["ypodomes.com",24],["kathimerini.com.cy",26],["politis.com.cy",[27,28]],["koutipandoras.gr",[27,112]],["live24.gr",[27,118]],["monobala.gr",[27,125]],["popaganda.gr",[27,150]],["skai.gr",[27,162]],["gr",29],["2810.gr",30],["aegeanews24.gr",31],["alterthess.gr",33],["antenna.gr",34],["athinorama.gr",35],["auto24.gr",36],["autotriti.gr",37],["avgi.gr",38],["bestprice.gr",39],["bno.gr",40],["www.candiadoc.gr",41],["capital.gr",42],["car.gr",43],["www.car.gr",44],["clickatlife.gr",45],["cnn.gr",46],["sfl.com.gr",47],["contra.gr",[48,49,50,51]],["www.sport24.gr",[49,53]],["cosmo.gr",[50,55]],["www.techgear.gr",[50,174]],["sport-fm.gr",[51,128,166]],["sport24.gr",[51,168]],["www.contra.gr",[52,53]],["www.news247.gr",[53,133]],["corfuland.gr",54],["cretalive.gr",56],["cyclades24.gr",57],["derby.gr",58],["gazzetta.gr",[58,86,87,88]],["dokari.gr",59],["www.e-food.gr",60],["e-go.gr",[61,62]],["ethnos.gr",[62,74,75]],["imerisia.gr",[62,74,95]],["new.e-go.gr",63],["e-ptolemeos.gr",64],["e-thessalia.gr",65],["efsyn.gr",66],["www.eklogika.gr",67],["eleftheria.gr",68],["eleftherostypos.gr",69],["emvolos.gr",70],["energypress.gr",71],["enet.gr",72],["enikos.gr",73],["eviaportal.gr",76],["evros-news.gr",77],["filadelfia-xalkidona.gr",78],["www.flash.gr",79],["flix.gr",80],["fonien.gr",81],["forthnet.gr",82],["galinos.gr",83],["gasprice.gr",84],["gato.gr",85],["sportdog.gr",87],["in.gr",[88,97]],["gossip-tv.gr",[89,90]],["newsbomb.gr",[89,135]],["onsports.gr",[89,90]],["hiphop.gr",91],["i-kyr.gr",92],["i-live.gr",93],["iefimerida.gr",94],["imerodromos.gr",96],["news.in.gr",98],["sports.in.gr",99],["insider.gr",100],["insomnia.gr",101],["www.insomnia.gr",102],["interesting.gr",103],["inthevip.gr",104],["ipaidia.gr",105],["itechnews.gr",106],["kalamatatimes.gr",107],["kathimerini.gr",108],["katohika.gr",109],["kavalapoint.gr",110],["kerdos.gr",111],["kozanilife.gr",113],["www.kritikes-aggelies.gr",114],["lamiareport.gr",115],["larissanet.gr",116],["www.lifo.gr",117],["livescores.gr",119],["logotypos.gr",120],["madata.gr",121],["makeleio.gr",122],["mesogianews.gr",123],["meteo.gr",124],["myphone.gr",126],["naftemporiki.gr",[127,128]],["naxospress.gr",129],["naxostimes.gr",130],["news247.gr",132],["newsbeast.gr",134],["newsit.gr",136],["nickelodeon.gr",137],["nooz.gr",138],["oneman.gr",139],["onmed.gr",140],["opensoft.gr",141],["oroskopos.gr",142],["parapolitika.gr",143],["parianostypos.gr",[144,145]],["pathfinder.gr",146],["shopping.pathfinder.gr",147],["patrainews.gr",148],["pcsteps.gr",149],["prismanews.gr",151],["proininews.gr",152],["pronews.gr",153],["provocateur.gr",154],["queen.gr",155],["real.gr",156],["realestatenews.gr",157],["runningnews.gr",158],["www.trinews.gr",158],["sday.gr",159],["sentragoal.gr",160],["serraikanea.gr",161],["skroutz.gr",163],["www.skroutz.gr",164],["sport.gr",165],["www.sport-fm.gr",167],["stonisi.gr",169],["supersyntages.gr",170],["tanea.gr",171],["tovima.gr",[171,182]],["www.taxheaven.gr",172],["techgear.gr",173],["tharrosnews.gr",175],["thenewspaper.gr",176],["thepressproject.gr",177],["thestival.gr",178],["tirnavospress.gr",179],["tlife.gr",180],["toarkoudi.gr",181],["tvsubtitles.gr",183],["tvxs.gr",184],["usay.gr",185],["vimaonline.gr",187],["voicenews.gr",188],["voria.gr",189],["womenonly.gr",190],["xo.gr",191],["www.xo.gr",192],["zoomnews.gr",193],["gamato.info",194],["www.dwrean.net",195],["fileleutheros.net",196],["lesvosnews.net",197],["pitsirikos.net",198],["anagnostis.org",199],["luben.tv",200]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["aggeliestanea.gr",[0]],["athensmagazine.gr",[1]],["www.ediva.gr",[2]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
