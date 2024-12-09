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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".text-center.rounded.p-3.border.mb-lg-4.mb-3",".banner-top","#background_bg_link,\n#subRightAboveHome,\n.adv-24h-mid,\n.col:has(a[rel=\"nofollow\"]),\n.col:has(a[rel=\"sponsored\"]),\n.fixad300x600,\n.module3,\n[id^=\"ADS_\"]","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".c-int.d-lg-none.d-block > p.block-int.mb-1,\n.col-12 > p.block-int.mb-1","#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.bookmaker-selector-container,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.gmd-match-footer__odds,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\n.nav-wrap > a[rel=\"nofollow\"],\na.d-lg-none.d-block:nth-of-type(2)","#quangcaopc","#wap_bottombanner",".no-auto-popup","#qc_clgt","#menubentrai,\n.gnartyx-offads","#fbox-background",".gnarty-offads","#invideo_wrapper,\n.Ads,\n.mobile-catfixx,\n.pc-catfixx","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative","#sn-AnchorAd,\n.pAd,\n.relatedPostsAd,\ndiv.pAdin",".adNative","#anchor-ad","a[href^=\"/cgi-bin/to.cgi\"]","#banner3double",".admicro","[href*=\"cellphones.com.vn\"]","div[class*=\"ads\"]",".top-header",".block:has([data-adaptive])",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc","#top_oddd",".underplayer_btn",".button-dangkyngay",".textwidget",".qc-inner,\ndiv[id^=\"qc_M_\"]","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]","#popup-giua-man-hinh",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".footer-banner",".list-dat-cuoc",".banners","#right_float,\n[id$=\"float_banner\"]","[class*=\"_banner\"]",".bgadmtoptotal","#wrapper > [id^=\"adm-slot\"],\n[class^=\"ads_\"],\n[id^=\"adm-slot\"]",".bannertop",".c-ad,\n.container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container","#myModal,\ndiv[id^=\"adsphim-\"]",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]",".chat-header,\n[href=\"https://8xbe52.com\"]",".expand-static-banner,\n.preload-banner,\n.static-banner",".link-gold,\n[id^=\"banner\"]","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#subiz_wrapper,\n.ad-embed",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n.ads-masthead",".bg-gray,\n.sidebar > div[style]",".div_box_adv",".topbanner",".chapter-content .min-h-\\[275px\\]","iframe[src*=\"ads\"]","a[rel=\"nofollow sponsored\"]","#footer_fixed_ads","div[id^=\"adsbg\"]",".ad-pin-right-bottom",".top-right",".line-ads",".ad-container",".banrpstn",".banner-shopee,\na[href^=\"https://shope.ee\"]",".jw-button-image","div.ad",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\na[rel=\"noopener noreferrer nofollow\"],\ndiv[style=\"margin:6px 0px 6px 0px\"]","#player + div[id],\n.playover","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai","#vi-smartbanner,\n.LRBanner,\n.running.adsbyvli",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia",".khw-ads-wrapper.clearfix",".no-ads,\n.parent.special,\n.partner-me",".exp_qc_share",".adv",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai","#bannerContainer1,\n#bannerContainer2,\n#sp-wrapper-hovering-format,\n.wam-banner,\ncenter:has(.adsbygoogle)","#antiblocker,\n#antiblocker_underplayer",".sticky_bottom,\n.t_logo",".code-block-1.code-block,\n.navbar-container + .container",".toogle-ads",".float-ck-center-lt","#top_addd","#header-ads,\n#header-ads + center",".bnqcclm",".btn-fanpage.btn-default.btn-block.btn","#top-banner-pc","#sponsor-balloon",".btn_small_fix_container","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsuggestion",".sticky","#adsposttop","div[class^=\"adbox\"]",".ads-home-feed","#hots-btn,\n.bn-popup-bottom-sdwdwxw,\n[href=\"/top-nha-cai.html\"],\ndiv.row-nhacai,\nli.for-desktop-2 > [href]",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".banner-bot-mobile,\n.banner-top-mobile,\n.preload",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner",".widget",".ads-sponsor,\n.khw-adk14-wrapper",".container > .row > center",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","a[rel=\"nofollow\"]",".box-ads,\n.linkBanner","#qc-kpgame",".sponsor-zone",".ads",".top-banner-mobile",".ezo_ad",".quang_cao_pc_right_hoc_tap",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]",".info-footer:nth-child(4)","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed,\na.btn_fb:nth-of-type(2)",".popup",".grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo-inner,\n.show.fade,\na[href^=\"/go\"]","div[class*=\"size-\"]",".modal",".btn-odds",".mmo",".btnz",".ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)","#m-bet",".fade.show,\n.ibs-bet",".btn-betnow",".jw-logo","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.section-gqc1,\ndiv[style=\"margin: 10px 0 5px 0; min-height: 250px;\"]",".ads-tags,\n.img_side_bar,\n.poka-image",".ads_shortcode","[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".adsphim-mobile-popup","[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","[id^=\"adv\"]",".btn-od",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".ads-embed",".module_single_ads",".adv_phim,\n.fixed_bottom","[class^=\"box_adv_ele\"]",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]","#left_ads_float,\n#right_ads_float","#_pop-nettruyenww-15,\n#catfish-content,\n#pop_nettruyenww","#_pop-nettruyenx-13","#banner-qc_outstream,\n.adv_home_300_250,\n.nqc-zone","#top-adv",".modal-backdrop.show",".show.modal","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-rating","#overlay",".catfish-ck",".ff-banner","#itro_opaco","div[data-value=\"1\"]","#banner","#ads-popup",".adv-300-right",".BanerTop100","#pc-catfix,\n.lightbox-player-pc,\n.mobile-catfix,\n.pc-catfix,\ndiv[id^=\"preload-\"],\nmobile-catfix","a[target=\"_blank\"][rel=\"nofollow noopener\"]","a#banner","#p-GMH","#mobile_content_top",".banner-preload",".catfish-top",".banner-container","#floating_ads_bottom_textcss_container,\n.module_home_ads","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list","#pm_quangcao","#preload",".sda-catfish","#adspm4u","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless","#ads_location,\n.block.ad",".ads-pc,\n.ads-sp","div[data-widget-id]","#fakeDown","div[id^=\"ads_\"]",".shadow-card + .mt-2",".odds-button,\n.odds-button2",".box-banner","#adrighttop","div[class^=\"adv-\"]",".adsbygoogle",".ads-970x280",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]","#pc-bill","#myCarousel,\n.banner-boder-zoom","#scriptDiv","#backgroundPopupp,\n#popupContact","#wap_bottombannerr,\n.grid-match[style]","[id^=\"admzone\"]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#popup_banner_beta",".afw-topbanner","#xs-addd0",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#topbn",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)","#ad_balloon",".adpia_banner",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","#Adsv,\n.right-banner > a[title]",".ai-close-fit.ai-close.code-block-7.code-block",".ads-container","div[class$=\"_ads\"]",".zone-top,\n[id^=\"pos-\"]",".fixed-bottom,\n.popup-banners",".c-banner-item",".c-banner",".__ads_click","#BannerAdv",".stream-item","#footer-widget-area","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left","div[id^=\"adsMobile\"]","div[id^=\"adsWeb\"]",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".fyi",".container .desktopjszone,\n.mobilejszone",".box,\n.pum",".widget.widget_text",".banner",".sbAdv","#sticky_ad,\ndiv.text-center:nth-of-type(2)",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]","div#adsChapterTop","#ad_info_top,\n#catfishAd,\n#floating-banner-left,\n#floating-banner-right,\n#popup-truyenqq,\n#popup-truyenqq-home,\n.ads-banner,\ndiv#ad_info",".footer-info","#topbanner","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center",".catfish-bottom","[src^=\"https://ads.starzd.com/\"]",".banner-ads",".sda-preload-popup,\n.sda-preload-popup-overlay","li.special.parent",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".Flagrow-Ads-under-header",".box-host,\n.btn-bet-top,\n.item-betnow",".btn-action,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item:has(a[rel=\"nofollow\"]),\n.topButton,\n.widget_offer,\nheader > .container","#video_player ~ div[id]",".item-qc","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]","#closeAds","#bnc1",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW",".vfs_banner","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]",".elementor-widget-image","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adbox",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#rich-media-banner-ads,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner-bottom,\n.banner_mobile_300x250,\n.section_ads_300x250",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".adsbypubpower,\n.p-body-sidebar > .block > .block-container:has(.adsbypubpower),\n.p-body-sidebar > .block > .block-container:has([data-widget_id]),\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".Notices.PanelScroller","a.news__item--action:nth-of-type(2)",".sys-ads","div[class*=\"qca\"]","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper","#container-ads",".content_middle_rightbar","#sticky",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wrapper-adv",".wtt-ads",".adsitem","#pos-25,\n#pos-26",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]","[href^=\"https://shope.ee\"]","#mp-adx-b32",".mp-adz","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup",".align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.pc-top,\n.top-ads-16x9","#neo-right-ads",".google-auto-placed",".advertisement","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","#horizontal-ad",".block.translate-x-\\[-50\\%\\].left-2\\/4.z-\\[1\\].bottom-\\[-6px\\].fixed.mx-auto.md\\:container.md\\:px-0.px-4.w-screen","#banner1ab",".truct-catfish,\n.truct-widget","#ouibounce-modal",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#pc-top-banner,\n#quang-cao","#catfish",".popUpBannerBox",".navbar-ex8-collapse","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap",".float-right","[id^=\"Balloon_\"]","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".match-detail__offer",".sk_balloon",".offer__btn",".company","div[id^=\"dnn_\"]",".menu-top-nha-cai",".menu-cuoc-8xbet",".grid-match__footer,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".odds-comp",".d-lg-flex.d-none.p-0.company.flex-1.table",".adLogoPlayer",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1","#bnc0",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".btn-bet",".active.bg-overlay",".banner-ads-cs","#catfish-ads",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".ad_by_yellowpages,\n.banner_add",".code-block-8.code-block,\n.ez-video-wrap",".ezoic-ad","winbox-1","#Zingnews_SiteHeader,\n.znews-banner",".qc",".adsbyvli",".inline-ad","ins.adsbygoogle[data-ad-slot]","#adcontent",".ads_top",".blogAd","#adsContainer,\n.ad-placement",".imageads","#ad-slot",".adheader",".ads-large",".advertiser",".showads","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div",".ads_below_player","#mp-preload-pp-overlay,\n.adpl","#custom_html-42","[id$=\"bnr\"]",".code-block","div#recent-content:nth-of-type(1)",".cashfish","#ad_global_below_navbar",".v4j-header > center",".v4j-watch-1.v4j-content,\nbody > div[class]",".catfix",".hd-tube-desktop,\n.hd-tube-mobile","#AgeModal","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".w1e48c4420b7073bc11916c6c1de226bb",".ads-wrapper",".alldiv ~ div[class]",".body_wrapper1","#popup_fi",".in.fade.modal-backdrop","#haun-player > div[style],\n#primary-nav > div[style],\n.separator","#mp-preload-popup-overlay",".banner-catfish-bottom",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner",".v4j-header > a[target=\"_blank\"]","#f186fb23a33995d91ce3c2212189178c8",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]",".btm_bar",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay",".v4j-header.v4j-content",".top-float-ck",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#tut4ktream_idAdLink",".quang-cao","#popup","#pc-preload-modal",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".a-header,\n.apu,\n.header",".sticky-footer","#bar_float_r,\n.quangcaomb","#hide_float_right","#idAdLink","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile",".popup-overlay",".footer-fixed-br-container",".banner-play",".v4j-watch-1.v4j-content > center",".sdzhead","#divExoLayerWrapper","#adx,\ndiv.banner-catfish-bottom",".xx-ads",".b-player","div#bnads",".adContainer","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#iklan-atas-wrapper",".adx1","#ab_ctl,\n.bannerads","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])",".pum-overlay",".quangcaomobile",".aSlP,\n.bef,\n.hmvD"];

const hostnamesMap = new Map([["10gb.vn",0],["123nhadatviet.net",1],["123nhadatviet.com",1],["tuoitrenews.vn",1],["tuoitre.vn",[1,257]],["nld.com.vn",1],["24h.com.vn",2],["2banh.vn",3],["2game.vn",4],["90phutvs.cc",[5,8,111,336,340]],["90phutz46.live",[6,7,8,47,332,335,338]],["cakhiai.cc",[7,8,44,45,46,47,335,336]],["xoilacxj.cc",[7,8,46,47,116,331,332,333,334,335,336,337,338]],["vebozd.cc",[7,8,36,45,47,133,269,335,336]],["xoilaczz63.live",[8,133,332,337,338,339,340,341]],["xemtivi.tvhayhd.tv",[8,327]],["rakhoir.cc",[8,36,133,333]],["phym18.lol",[8,207,399]],["nhentaivn.online",[8,207,391]],["avvietsub.info",[8,207,371]],["phimsexsub.xyz",8],["abtruyenmoi.com",[9,116]],["anime47.cam",[10,316]],["animet3.info",[11,12,140]],["animetvn4.com",[12,13]],["subnhanh1.org",[12,90,311]],["animevietsub.cx",14],["animew.info",15],["apkmoddone.com",[16,17]],["apkmoddone.phongroblox.com",[17,18,435]],["www.vip1s.top",[18,318]],["asianbookie.com",19],["autodaily.vn",20],["xehay.vn",[20,320]],["autopro.com.vn",21],["bantincongnghe.net",22],["baodauthau.vn",[23,235]],["mmo4me.com",23],["baohaugiang.com.vn",24],["baomoi.com",25],["baonga.com",26],["biphim.now",[27,28,116,167]],["subnhanh.sh",[28,167,213]],["subnhanhvl.li",[28,67,94,167,213]],["hhpanda.li",[28,67,94,97,167]],["blog.abit.vn",[29,40]],["blogkiienthuc.net",30],["blogtruyenvn.org",31],["bluphim.fun",32],["boctem.com",33],["movies.vkoolz.com",[33,311]],["xemphimchill.xyz",[33,72,325,326]],["247phim.cc",[33,72]],["vungtv.us",[33,298]],["phimmoi02.net",33],["tvhay26.com",33],["www.phimmoichilla.xyz",[33,72]],["hayhaytv.cc",[33,72]],["yanhh3d.tv",[33,325,348,349]],["www.ssphim.us",[33,72]],["bimmup.tv",[33,372]],["bongda.rakhooi.tv",[34,35,36,102]],["tructiep.caheo7.link",[35,36,102,247]],["mitomz27.live",[36,133,149,336,341]],["phimmoichillz.my",[36,187]],["bongda12h365.com",37],["bongda365.news",38],["soikeoz.vip",[38,211]],["bongdaso66.net",[39,40]],["tvso1.com",40],["cafebiz.vn",41],["cafef.vn",[42,43]],["ttvn.toquoc.vn",43],["cdnwp.icu",48],["mephim.ink",[48,146]],["chap.vn",49],["chat.vebotv.me",50],["chillphimmoi.pro",51],["chodansinh.net",52],["chotlo3s.com",53],["congan.com.vn",54],["congthucvatly.com",[55,56]],["phuongtrinhhoahoc.com",[56,196]],["contuhoc.com",57],["www5.cbox.ws",57],["cryptoviet.com",58],["daklak24h.com.vn",59],["dantri.com.vn",60],["danviet.vn",61],["diadiem.com",62],["doctruyenchu.info",63],["doctruyenln.com",[64,116]],["domdomtruyen.net",65],["dongphim.la",[66,67,167]],["dongchill.pro",[67,167]],["bichill.video",67],["xemphim18.net",[67,93,140,324]],["vivuphim.info",[67,120,326]],["hhanime3d.net",[67,94,167]],["download.vn",[68,283,322]],["dubaotiente.io",[69,86]],["ebookbkmt.com",70],["ephoto360.com",[71,72]],["thiepmung.com",72],["phiimoi.net",72],["eva.vn",73],["fastscans4.net",74],["fdcdn.xyz",[75,140]],["file.gocmod.com",76],["forum.gocmod.com",77],["freeplayervideo.com",[78,140]],["abysscdn.com",[78,140]],["player-cdn.com",[78,140]],["geoip.redirect-ads.com",[78,140]],["fshare.vn",79],["game24h.vn",80],["game8.vn",81],["gameio.vn",82],["genk.vn",83],["ghienphim.io",[84,120,244,266]],["giadinhonline.vn",[85,86]],["congluan.vn",85],["vietnamnet.vn",[86,280]],["taichinhdoanhnghiep.net.vn",[86,244]],["goal.90phut24.xyz",[87,346,347]],["gocmod.com",88],["hayghe.me",89],["hayhaytv.org",[90,311]],["hayphim.cc",91],["heovktgame.club",92],["hh3dhay.life",93],["xem15.com",[93,322]],["vutruphim.tv",[93,300]],["tram3d.me",93],["cliphotvn69.com",93],["mobiblog123.one",93],["cliphot69.skin",[93,374]],["phevkl.ad",[93,187,393,394]],["www.gvnvh.net",93],["topviet69.video",93],["sayhentai.one",93],["viet69.art",[93,187,393,394,417]],["hhchina.shop",[95,99,325]],["hhhay.ink",[96,325]],["hhtqvietsub.me",[98,99,325]],["hoahoc247.com",100],["hoatieu.vn",[101,102,103,104]],["live.mannhan87.xyz",[102,128,129]],["quantrimang.com",[103,199,283]],["vndoc.com",[104,283]],["hoidap247.com",105],["home1.mannhan14.pro",106],["hsctvn.com",107],["huphimtv.com",108],["ihst.org",[109,110,111]],["xoivo2.online",[110,111,249,342]],["kenh14.vn",112],["keonhacai55.cc",[113,330]],["keoso.me",114],["ketqua04.net",[115,116]],["nghean24h.vn",116],["xem.tructiepnba.me",[116,321]],["vidian.online",[116,273]],["xemtivi4k.com",[116,328,329]],["bongdainfox.tv",116],["live3.thapcam29.net",[116,132,135,137,347]],["live4.thapcam29.net",[116,132,137,347]],["live4.thapcamm.xyz",[116,132,134,135,137,347]],["live3.thapcam27.net",[116,132,347]],["live2.thapcam120.net",[116,132,347]],["chatboxn.com",116],["damconuong.fun",116],["ketqua247vn.vip",117],["khiphach.net",118],["kienthuc.net.vn",[119,120]],["saostar.vn",[120,204]],["bongda24h.vn",120],["cungthi.online",[120,201]],["appvn.com",120],["antt.vn",120],["v.xemphimviet.xyz",[120,244,265,266]],["soikeo365.net",[120,210]],["nghenhinvietnam.vn",120],["mod.lnpchannel.com",120],["phimmoi.ing",120],["vlxx.tech",[120,169,181,182,261,423]],["javtopxx.com",[120,386]],["kinhtedothi.vn",[121,148]],["laptrinhcanban.com",[122,354]],["lazi.vn",123],["lichngaytot.com",124],["lichvannien365.com",125],["linkneverdie.net",126],["linkneverdie.top",126],["linkneverdie2.com",126],["live.7mvn4.com",127],["fullcliphot.com",[129,263,377]],["fulllivehot.live",[129,378]],["live3.thapcam26.net",[130,131,132,133,134,135,137,163,347]],["live4.xoilac34.org",[131,136,137,138,139,140,268]],["vebo4.net",[131,137,138,268]],["xem.vebo31.net",[131,137,138,268]],["xem.banhkhuc120.info",[131,137,138,139,268]],["watch.rkplayer.xyz",[140,301]],["phimss.net",[140,192]],["lmssplus.org",141],["loigiaihay.com",142],["luatduonggia.vn",143],["lucloi.vn",144],["maclife.io",145],["metruyencv.info",147],["metruyencv.net",147],["metruyencv.com",147],["minhngoc.net.vn",148],["vn-z.vn",148],["mn.mediastation.live",150],["motchilltv.la",151],["motchilltvf.com",152],["motphimww.net",[153,184]],["tvphim.li",[153,184,263]],["mphim14.org",154],["muabanraovat.com",155],["muare.vn",156],["myeva.vn",157],["mythethao.net",[158,285]],["nettruyenww.com",[159,244]],["nettruyenx.com",160],["nhaccuatui.com",161],["nhacdj.vn",162],["noitu.pro",[163,164]],["phapluatplus.baophapluat.vn",165],["phim.vkool8.net",[166,167,168]],["motchill.love",[167,213]],["tructiepdabong5.co",[167,248,249,334,342]],["phimbet.biz",[167,172]],["vphims.net",168],["phim1080.in",169],["phim202.com",170],["phim88.tv",171],["phimdacap.tv",[173,325]],["phimdinhcao.net",[174,175]],["phimlongtieng.com",[174,175,179,180]],["phimlongtieng.net",[174,175,179,180,181,182,183]],["www.phimdinhcaoz.com",[174,175,180]],["phimdinhcao.com",[175,183]],["phimgichill.net",176],["phimhaymoi.online",177],["phimhdctv.com",[178,298]],["nungmup.net",[182,382,424]],["sexhihiz.ch",[182,261,424]],["phimmoi.club",184],["phimmoi.tuphim.net",185],["phimmoichillvn.net",186],["phimmoinay.info",[188,211]],["phimmoissz.pro",[188,189]],["tvzinghd.co",[188,264]],["phimnhua.net",190],["phimno1.me",191],["phimvuihd.org",193],["phongroblox.com",194],["phunumoi.net.vn",195],["nhipcaudautu.vn",195],["plcdn.xyz",197],["qdnd.vn",198],["reatimes.vn",200],["romgoc.net",201],["giavang.net",201],["gamehayvl.com",201],["rung.vn",202],["sachmoi.net",203],["sharecode.vn",205],["sieutamphim.com",206],["socolivebongda.net",[207,208]],["soha.vn",209],["gamek.vn",209],["phimtho.net",211],["sport5.vn",212],["afamily.vn",212],["tamlinh247.biz",214],["tapchibitcoin.io",215],["tapchikientruc.com.vn",216],["techrum.vn",217],["tenovi.net",[218,219]],["truyentuan.xyz",[219,256]],["thanhnien.vn",220],["thanhtra.com.vn",221],["thaudiotruyen.com",222],["the.tube",223],["thethao247.vn",224],["thethaovanhoa.vn",225],["thichxemphim1.net",[226,244]],["thitruongtaichinhtiente.vn",[227,228]],["congly.vn",228],["thoidai.com.vn",229],["petrotimes.vn",229],["thuongtruong.com.vn",230],["thuthuatjb.com",231],["thuthuattienich.com",232],["thuysanvietnam.com.vn",233],["tienphong.vn",[234,235,240,244]],["tiin.vn",236],["timdaily.vn",237],["tinhte.vn",238],["tinmoi.vn",239],["tinnhanhchungkhoan.vn",240],["tintucvietnam.vn",241],["toithuthuat.com",242],["topthuthuat.com",243],["canhrau.com",243],["toquoc.vn",244],["baoxaydung.com.vn",244],["truyengihotdo.net",[244,252]],["truyengihotzay.net",[244,252]],["truyengihotnha.com",[244,252]],["truyengihotnha.net",[244,252]],["truyengihotqua.net",[244,252]],["truyengihotqua.com",[244,252]],["truyengihotnay.com",[244,252]],["tenmientruyengi.net",[244,252]],["tracnghiem.net",245],["tram3d.vip",246],["truyenaudiocv.org",250],["truyenfull.io",251],["truyenqqto.com",253],["truyensieuhay.com",[254,255]],["hhtrungquoc6.com",[255,325]],["hhtq8.vip",[255,325]],["animeweb.vip",[255,325]],["hhtq3d.net",[255,325]],["tuyengiao.vn",258],["tvhaiss.com",259],["tvhayd.com",260],["tvhayw.org",[261,262]],["loclipsex.net",261],["v4u.vn",267],["vectorx.top",270],["sextop.asia",[270,405]],["hls.playerfb.xyz",270],["vesotantai.com",271],["videophapluat.baophapluat.vn",272],["vieclam.tv",[274,344]],["vietcetera.com",275],["vietfones.vn",276],["vietgiaitri.com",277],["vietjack.com",278],["vietmoz.net",279],["vietq.vn",281],["viettelstore.vn",282],["download.com.vn",283],["gamevui.vn",283],["khoahoc.tv",283],["vnesports.net",[284,285]],["vnews.gov.vn",286],["vnexpress.net",287],["voh.com.vn",288],["voz.vn",289],["vozer.net",290],["vsc60.com",291],["vtcnews.vn",292],["doisongphapluat.com.vn",292],["vtipster.net",293],["vtruyen.com",294],["vuighe4.com",[295,296]],["xem1080.com",296],["vungoctuan.vn",297],["vuonhoalan.net",299],["web1s.com",302],["webhoctienganh.com",303],["webthethao.vn",304],["webtretho.com",305],["www.anninhthudo.vn",306],["www.baogiaothong.vn",307],["www.clbgamesvn.com",308],["www.iosviet.com",309],["www.mp.com",[310,311]],["motphimtvv.com",311],["motchilltvzz.biz",[311,325]],["www.o-study.net",312],["www.saostar.vn",313],["www.thuocbietduoc.com.vn",314],["www.tiengnhatdongian.com",315],["ycongnghe.com",[315,350]],["www.toptruyento.pro",316],["doctruyen3qk.pro",316],["www.vietjack.com",317],["www.vipfilm.org",319],["xem20.gavang1.net",323],["xem19.gavang1.net",323],["hhninja13.tv",325],["phimhoathinh3d.vip",325],["hoathinhtq.site",325],["motchillday.net",325],["hhtutien.tv",325],["hh3d1.xyz",325],["hoathinh4k3.net",325],["hoathinh3dtq.site",325],["dragonphim.tv",325],["hhh3d.tv",325],["hhtq5.vip",325],["wibu47.com",325],["hhvsub.com",325],["motphim.cv",325],["bieudogiavang.vn",329],["xemtivingon.org",330],["xosodaiphat.com",343],["xskt.com.vn",344],["xxoilac.com",[345,346,347]],["hhtm.site",349],["yeah1.com",351],["yellowpages.vn",352],["yhocdata.com",[353,354]],["zcine.net",355],["znews.vn",356],["livescore.com",357],["msn.com",357],["dm.de",357],["medium.com",357],["cliphot69.pics",373],["dualeotruyenomega.com",375],["finacor.fr",376],["gockhuat.net",379],["hd.javhay.site",380],["jav.sexsub.icu",381],["jav.vc",382],["javhd.shop",383],["vlxxai.net",[383,398]],["trangsexdam.net",[383,387,398]],["javhd.social",[383,398]],["sexsoc.info",[383,398]],["javhd.tech",[384,398]],["javtiful.com",385],["khosex.blog",[387,398]],["sexheovl.com",[387,398]],["quat69.pro",[387,398]],["lxmanga.store",[388,412]],["mobi.ditnhauvietnam.com",389],["ngaytho.me",390],["pheclipsex.com",[392,407,409]],["sexchichnhau.net",[392,403,407,408,409]],["phim18vip.vip",[392,407,408,409]],["viet69.gold",[394,419]],["phim.sexxsub.pro",[395,422]],["phim18hd.in",396],["phimsexhay669.pro",397],["phimsexvl69.net",398],["play.anh.moe",400],["rphang.day",401],["sex.tuoi69.store",402],["sexhd88.club",404],["sexvn2024.pro",406],["sieudam.vin",[407,408,409]],["sieukhung.meme",410],["truyen18.fun",411],["truyensextv.com",412],["tuoi69.vote",413],["tuoinungvn.org",414],["tut4ktream.online",415],["vailonxx.vip",[416,431]],["viet69.ec",418],["vietxxx.xyz",420],["vl.phe.to",[421,422]],["vlxyz.tube",424],["vn.javbabe.net",425],["vn.phym18.lol",426],["vtvgo.vn",427],["www.buomtv.io",428],["www.gaingon18.me",429],["www.vlxxhot.net",[430,431]],["xem.javkche.info",432],["xemphimjav.com",433],["xemphimsexhayhd.pro",434],["sexgaidep69.pro",434]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["phongroblox.com",[318,363]],["game24h.vn",[358]],["gicovietnam.blogspot.com",[359]],["ios.codevn.net",[360]],["ipacrack.com",[360]],["ket-noi.com",[361]],["nhipcaudautu.vn",[362]],["pops.vn",[364]],["thanhnien.vn",[365]],["timvanban.vn",[366]],["tratu.soha.vn",[367]],["truyenaudiocv.org",[368]],["vn2.vn",[369]],["vndoc.com",[370]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
