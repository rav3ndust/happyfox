/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#wrap > p\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src*=\\\"/rklm/\\\"]\"}]]}"],["{\"selector\":\"#contenedor > div[class*=\\\"onceki\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> center > iframe[src*=\\\"/rklm/\\\"]\"}]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"|/video/\"],[\"spath\",\"body > .play-button-outer ~ .pppx\"]]}"],["{\"selector\":\".row > div[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.panel > div#sponsored\"}]]}","{\"selector\":\"div[class^=\\\"col-xs-\\\"] > .row > div[class^=\\\"col-xs-\\\"] > .panel\",\"tasks\":[[\"has\",{\"selector\":\"> #sponsored\"}]]}"],["{\"selector\":\"div.min-h-100vh div.dr\",\"tasks\":[[\"has\",{\"selector\":\"> .dr.bg-gri:empty\"}]]}"],["{\"selector\":\".bx-sidebar-header\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.w-full a[target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\"#main > div[id^=\\\"av_section_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".grid-stack-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.Reklam_001\"}]]}"],["{\"selector\":\"#tdb-autoload-article div.td-pb-row > div.td-stretch-content\",\"tasks\":[[\"has\",{\"selector\":\"a[target=\\\"_blank\\\"][rel=\\\"nofollow\\\"][title] > span\"}]]}"],["{\"selector\":\".bilesen > .w_baslik\",\"tasks\":[[\"has\",{\"selector\":\"> .yazi_golge\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".grid-stack > div.grid-stack-item\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"Reklam_\\\"]\"}]]}"],["{\"selector\":\".owl-dots > div.owl-dot\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}","{\"selector\":\".owl-stage > div.owl-item\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads\"}]]}"],["{\"selector\":\".grid .mb-2[class*=\\\"min-h-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .bikifi_fluid\"}]]}"],["{\"selector\":\".article > .container > .row > .col-12\",\"tasks\":[[\"has\",{\"selector\":\"> div:only-child > .container > .row > .text-center > .adsbygoogle\"}]]}"],["{\"selector\":\".block-pano > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> ins.rkm\"}]]}"],["{\"selector\":\"#genel > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> img[src^=\\\"http://www.boluyankihaber.com/reklam/\\\"]\"}]]}"],["{\"selector\":\".manset > div.manset-img\",\"tasks\":[[\"has\",{\"selector\":\"> a > img[src*=\\\"/reklam/\\\"]\"}]]}","{\"selector\":\".manset-list > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}]]}"],["{\"selector\":\".grid > div[class*=\\\"hidden-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div#right-video-banner\"}]]}","{\"selector\":\"div[class*=\\\"max-h-[300px]\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .empower-ad\"}]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"div > iframe[src=\\\"https://www.cazkolik.com/include/banner_goster.asp?alanId=8\\\"]\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"iframe[src=\\\"https://www.cazkolik.com/include/banner_goster.asp?alanId=1\\\"]\"}]]}"],["{\"selector\":\"#cimri-product ~ section\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"adslot-\\\"]\"}]]}"],["{\"selector\":\"#details > center\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"#PopularSicakFirsatTopicsContent > div[class=\\\"populersatir\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > .populerbaslik > span\",\"tasks\":[[\"has-text\",\"/^\\\\(ilandır\\\\)$/\"]]}]]}"],["{\"selector\":\"#interstitial-close-link-source\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#topic > ul#entry-item-list > li#entry-item\",\"tasks\":[[\"has\",{\"selector\":\"> footer > span.sponsored\"}]]}","{\"selector\":\".ad-banner\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-doubleclickwebinterstital\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"color:\\\"]\"}]]}"],["{\"selector\":\"#main-content > h1\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"http://tiki.com.tr\\\"]\"}]]}"],["{\"selector\":\".swiper-container > div.swiper-wrapper > a[rel^=\\\"sponsored\\\"][class^=\\\"swiper-slide\\\"]\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[data-url^=\\\"https://ensonhaber.me/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://ensonhaber.me/\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"col-\\\"] > div.center\",\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"margin-bottom:20px;\\\"] > div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\".col-md-sidebar > .widget > .pm-section-head\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Advertisment$/\"]]}]]}"],["{\"selector\":\".infinitegallery-picture-container\",\"tasks\":[[\"has\",{\"selector\":\"> div > div._picture > a[href*=\\\"&utm_\\\"]\"}]]}"],["{\"selector\":\"#printable > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[class^=\\\"banner_\\\"]\"}]]}"],["{\"selector\":\".row > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"/kobi\\\"]\"}]]}","{\"selector\":\".row > div[class^=\\\"col-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div.ads-area\"}]]}"],["{\"selector\":\".row > div.col-12\",\"tasks\":[[\"has\",{\"selector\":\"> div.box > div.adpro\"}]]}"],["{\"selector\":\".slick-dots > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://www.haber7.com/advertorial/\\\"]\"}]]}","{\"selector\":\"a[href^=\\\"https://www.haber7.com/advertorial/\\\"].headline-slider-item\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > div.owl-item\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> article > a[href^=\\\"/guncel/\\\"]\"}]]}"],["{\"selector\":\"body > div.container > div.header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mansetSlider li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"img[src*=\\\"//haberkibris.com/banner2/\\\"]\"}]]}"],["{\"selector\":\".bullets > div.bullet\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://rd.yenimedya.com.tr/\\\"]\"}]]}","{\"selector\":\".colPageRight > .hbBoxScope > .sidebox\",\"tasks\":[[\"has\",{\"selector\":\"> .sidebox-content > div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".master-slider > div.swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> div > a[href^=\\\"https://adsp.haberturk.com/\\\"]\"}]]}","{\"selector\":\".sidebar-content-infinite > div.wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div > div.ads-zone\"}]]}"],["{\"selector\":\".swiper > div.swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/reklam/ads/\\\"]\"}]]}"],["{\"selector\":\"#__next > div.relative\",\"tasks\":[[\"has\",{\"selector\":\"> a[target=\\\"_blank\\\"][href^=\\\"https://www.hangikredi.com/basvuru/hkyonlendirme\\\"]\"}]]}","{\"selector\":\".flex > div.relative\",\"tasks\":[[\"has\",{\"selector\":\"> div.native-card-section > a[href*=\\\"&ct=banner\\\"]\"}]]}","{\"selector\":\".flex-col > .relative\",\"tasks\":[[\"has\",{\"selector\":\"> .native-card-section + div.tooltip\"}],[\"spath\",\" + div[class=\\\"relative\\\"]\"]]}","{\"selector\":\".flex-col > .relative\",\"tasks\":[[\"has\",{\"selector\":\"> .native-card-section + div.tooltip\"}],[\"spath\",\":first-of-type\"]]}"],["{\"selector\":\"body > div.fancybox-overlay\",\"tasks\":[[\"has\",{\"selector\":\"> div\"}]]}","{\"selector\":\"html.fancybox-lock\",\"action\":[\"style\",\"overflow: visible!important;\"],\"tasks\":[[\"has\",{\"selector\":\"> body\"}],[\"spath\",\" > body\"]]}","{\"selector\":\"html.fancybox-lock\",\"action\":[\"style\",\"overflow: visible!important;\"],\"tasks\":[[\"has\",{\"selector\":\"> body\"}]]}"],["{\"selector\":\".well-box\",\"tasks\":[[\"has\",{\"selector\":\"> center > ins.adsbygoogle\"}]]}"],["{\"selector\":\".native-kutu\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href] > img[src^=\\\"https://i.hizliresim.com\\\"]\"}]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"*:is(img[src^=\\\"/sahifeler/rkl/\\\"], .adsbygoogle)\"}]]}"],["{\"selector\":\".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"body > div.container\",\"tasks\":[[\"has\",{\"selector\":\"> div.header_big_advert\"}]]}"],["{\"selector\":\"tbody > tr\",\"tasks\":[[\"has\",{\"selector\":\"> td > div[style^=\\\"height:100px;\\\"]\"}]]}"],["{\"selector\":\".col-lg-4 > div.well3\",\"tasks\":[[\"has\",{\"selector\":\"> div.panel > center > a[href=\\\"https://medyabayim.com\\\"]\"}]]}"],["{\"selector\":\"div[style=\\\"float: right;\\\"] > a[href][target=\\\"_blank\\\"] > video\",\"tasks\":[[\"has\",{\"selector\":\"> source[src^=\\\"http://marastahaber.com/wp-content/uploads/\\\"][src$=\\\"/MaviTekReklam.webm\\\"]\"}]]}"],["{\"selector\":\"#s-spotmanset-dots > .row > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://www.dermansut.com.tr/\\\"]\"}]]}","{\"selector\":\"#s-spotmanset-dots > .row > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"https://www.letstr.com/\\\"]\"}]]}"],["{\"selector\":\".recipe-cards-area > div > div#arsiv-native\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".innerContainer div.row > div[class^=\\\"col-\\\"] > div[style^=\\\"margin:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> ins.adsbygoogle\"}]]}"],["{\"selector\":\".facility-list-item + div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"css-\\\"] > div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".MuiGrid-spacing-xs-2 > div.MuiGrid-item\",\"tasks\":[[\"has\",{\"selector\":\"> img[src^=\\\"https://cdn.oggito.com/images/ads/\\\"]\"}]]}"],["{\"selector\":\".sidebar > .widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".layout__main div.bg-\\\\[\\\\#f7f8fb\\\\]\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}","{\"selector\":\"div.bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > .sidebarWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .title\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantı\"]]}]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\".splide__list > li.splide__slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> div.s-gcm-br\"}]]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",2]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > iframe[aria-label=\\\"Google AdSense\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".classifiedOtherDetails > div.uiBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://dimpa.renault.com.tr/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> img[src*=\\\"banner\\\"] + a[href]\"}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[title=\\\"advert\\\"]\"}]]}"],["{\"selector\":\"section.penci-disSticky.elementor-section-items-middle\",\"tasks\":[[\"has\",{\"selector\":\"> .elementor-container:only-child > .penci-sticky-ct:only-child > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .adsbygoogle\"}]]}"],["{\"selector\":\".play-box-iframe > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> iframe[src^=\\\"https://sobreatsesuyp.com/\\\"]\"}]]}"],["{\"selector\":\".p-body-pageContent > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-container > div.block-body > a[href^=\\\"https://gibir.net.tr/\\\"]\"}]]}"],["{\"selector\":\".content-container > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"height:\\\"]:only-child > #reklamGoster:only-child\"}]]}"],["{\"selector\":\".theiaStickySidebar > div.widget_text\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > ins.adsbygoogle\"}]]}"],["{\"selector\":\"#main div[style^=\\\"position:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}","{\"selector\":\"#manset div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"taboola-home-thumbnails\\\"]\"}]]}"],["{\"selector\":\".container > .row > .col-md-6\",\"tasks\":[[\"has\",{\"selector\":\"> .adpro\"}]]}"],["{\"selector\":\".sidebar-content > .sidebar-top > p\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",1]]}"],["{\"selector\":\".products > ul\",\"tasks\":[[\"has\",{\"selector\":\"> li > div#product-item > div.prd-inner > div.prd-body > div.prd-features > span.plp-badge-text\"}]]}"],["{\"selector\":\".CloudWrapper > div[align=\\\"center\\\"] > span.previous_results_class > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sagKolon > .sagItem\",\"tasks\":[[\"has\",{\"selector\":\"> script\"}]]}"],["{\"selector\":\".swiper-wrapper > div\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a > figure.manset-reklam\"}]]}"],["{\"selector\":\".right-wrapper > div.grid-margin\",\"tasks\":[[\"has\",{\"selector\":\"> div.card > div.card-header\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".p-body-sidebar > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div[data-widget-key*=\\\"reklam\\\"]\"}]]}","{\"selector\":\".samOverlay_30\",\"tasks\":[[\"has\",{\"selector\":\"> div.overlay > div.overlay-title\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".flex-col > div.ambilight\",\"tasks\":[[\"has\",{\"selector\":\"> div.backdrop-blur > a > img[src^=\\\"https://images.macellan.online/allads/\\\"]\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> p > a[href^=\\\"https://bit.ly/\\\"]\"}]]}"],["{\"selector\":\".col-lg-4 > .mb-3\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\".box-news > .row > .col-md-4 > .banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ys-headline-carousel-item\",\"tasks\":[[\"has\",{\"selector\":\"div.ys-headline-carousel-media > div.ys-link > a[href^=\\\"https://\\\"][target=\\\"_blank\\\"]\"}]]}"],["{\"selector\":\".content-block > div.block\",\"tasks\":[[\"has\",{\"selector\":\"> div.block-content > a[target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\"div[id^=\\\"edit\\\"] > div[style*=\\\"stylevar\\\"] > table > tbody > tr > .thead\",\"tasks\":[[\"has-text\",\"/^Reklamlar$/\"],[\"upward\",3]]}"],["{\"selector\":\"#leftC > .filmborder\",\"tasks\":[[\"has\",{\"selector\":\"> .filmcontent > .tam > a\",\"tasks\":[[\"has-text\",\"Sponsor Reklam\"]]}]]}"],["{\"selector\":\"#usttekiReklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#sol > #embed\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"iframe\"}],[\"spath\",\" ~ #video-onu2\"]]}"],["{\"selector\":\"div[style=\\\"padding:0px 10px 0px 10px\\\"] > div[id=\\\"posts\\\"] > table[class=\\\"tborder\\\"][width=\\\"100%\\\"][align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td.thead\",\"tasks\":[[\"has-text\",\"Sponsorlu Baglantilar\"]]}]]}"],["{\"selector\":\".home-swiper > div.swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"&utm_\\\"]\"}]]}"],["{\"selector\":\".banner300Soru\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"section > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a > span.auto-promo-text\"}]]}"],["{\"selector\":\"#pagenav_menu ~ div\",\"tasks\":[[\"has\",{\"selector\":\"> font[color] div[id=\\\"slider\\\"] > ul > li > div[style] > a[target=\\\"_blank\\\"] > img\"}]]}"],["{\"selector\":\".gutters-sm > div[class=\\\"col-md-3 d-none d-md-block\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"reklamokul\\\"]:not(#reklamokul2)\"}]]}"],["{\"selector\":\"body > main > div[class] > .rPanel\",\"tasks\":[[\"has\",{\"selector\":\"> .head\",\"tasks\":[[\"has-text\",\"/^Reklam $/\"]]}]]}"],["{\"selector\":\".sidebar > div[id^=\\\"custom_html-\\\"] > .textwidget > .thb-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".sidebar > div.sidebar_list > aside.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.textwidget > a[rel^=\\\"nofollow\\\"]\"}]]}"],["{\"selector\":\".wrap > .maltibanner\",\"tasks\":[[\"has\",{\"selector\":\"> a[href]\"}]]}"],["{\"selector\":\".sag > .anatablo\",\"tasks\":[[\"has\",{\"selector\":\"> .karereklam\"}]]}"],["{\"selector\":\"#sidebar-right > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidebarnav > h3 > div[style]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".module > div.module-inner div.bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.reklam-300x250\"}]]}"],["{\"selector\":\"#preRollBd\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".items > div.item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}"],["{\"selector\":\".col-4 > div[style^=\\\"height\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".s-pagination li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"width:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".contentFrame > .container > .row > .col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"> .advert\"}]]}"],["{\"selector\":\".page-wrapper > .container > .row > .col-md-12 > .row > .col-md-6\",\"tasks\":[[\"has\",{\"selector\":\"> .advers-box\"}]]}","{\"selector\":\".page-wrapper > .container > .row > div[class=\\\"col-12 col-md-6 col-lg-4 view-20\\\"] > .advers-box\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".small-news-block > .item\",\"tasks\":[[\"has\",{\"selector\":\"> figure > figcaption > h3 > a[target=\\\"_blank\\\"][href^=\\\"https://www.youtube.com/\\\"]\"}]]}"],["{\"selector\":\".row > div[style]\",\"tasks\":[[\"has\",{\"selector\":\"> div[style^=\\\"min-height\\\"] > div.dfp-wrapper\"}]]}"],["{\"selector\":\".container > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div[style] > div[class^=\\\"container-ads\\\"]\"}]]}","{\"selector\":\".row > .mb20[style]\",\"tasks\":[[\"has\",{\"selector\":\"> .CHT_VIDEO:only-child:empty\"}]]}","{\"selector\":\".row > div.col-xs-12\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\"> div[class^=\\\"col-\\\"] > div[style*=\\\"aspect-ratio\\\"] > div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\".swiper-reklam\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"div[class^=\\\"col-sm-\\\"] > div.row\",\"tasks\":[[\"has\",{\"selector\":\"> div > div[id^=\\\"div-gpt-ad\\\"]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> .empower-ad:only-child\"}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div:only-child > .empower-ad:only-child\"}]]}"],["{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> div.advers-box\"}]]}","{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> figure.news-box > figcaption > a[href] > span.txt\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://tinyurl.com/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}","{\"selector\":\".view-sm-20\",\"tasks\":[[\"has\",{\"selector\":\"> div.advers-box\"}]]}"],["{\"selector\":\".solbar > .sol-kutu\",\"tasks\":[[\"has\",{\"selector\":\"> .m-baslik > p > b\",\"tasks\":[[\"has-text\",\"/^SPONSOR REKLAMLAR$/\"]]}]]}"],["{\"selector\":\".row > div.col-4\",\"tasks\":[[\"has\",{\"selector\":\"> div.bg-white > div.bg-filigran > div.ads-wrapper\"}]]}"],["{\"selector\":\".box__item\",\"tasks\":[[\"has\",{\"selector\":\"> section.adv\"}]]}","{\"selector\":\".news-right-content > div.sticky-wrapper\",\"tasks\":[[\"has\",{\"selector\":\"> div.sticky > section.adv\"}]]}","{\"selector\":\".swiper-pagination-bullets > span.swiper-pagination-bullet\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\".flex-column > .sosyal-medya-alt\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"#sidebar > .sidebar-box > h4 > span\",\"tasks\":[[\"has-text\",\"/^REKLAM$/\"],[\"upward\",2]]}"],["{\"selector\":\".slick-track > div.slick-slide > div > div.ntv-main-slider-item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}","{\"selector\":\".slick-track > div.slick-slide > div > li.ntv-main-slider-pagination-item\",\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"http://pubads.g.doubleclick.net/\\\"]\"}]]}"],["{\"selector\":\".inner-wrapper-sticky > div.featured-single\",\"tasks\":[[\"has\",{\"selector\":\"> .bannergroup-300\"}]]}"],["{\"selector\":\"#orta > .karisikOyunlarr > div > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".main-headline div.headline-new > .swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"https\\\"][target=\\\"_blank\\\"] > picture > img\"}]]}"],["{\"selector\":\"#s-manset-dots > ul > li\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> a[href^=\\\"/service/advertclick?\\\"]\"}]]}","{\"selector\":\"#s-manset-list div.slick-track > a.item-rkm\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[style^=\\\"height:\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"div-gpt-ad\\\"]\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\"//apps.star.com.tr/advredir\\\"]\"}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://tinyurl.com/\\\"]\"}]]}"],["{\"selector\":\".owl-stage > .owl-item\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has\",{\"selector\":\"> .item > a[target=\\\"_blank\\\"]:not([href^=\\\"https://www.yeniakit.com.tr/\\\"])\"}]]}"],["{\"selector\":\".container > aside.sidebar\",\"tasks\":[[\"has\",{\"selector\":\"> .banner\"}]]}"]];

const hostnamesMap = new Map([["buzz",2],["turkanime.co",3],["1000kitap.com",4],["720pizle10.com",5],["720pizle11.com",5],["720pizle12.com",5],["720pizle13.com",5],["720pizle14.com",5],["720pizle15.com",5],["720pizle16.com",5],["720pizle17.com",5],["720pizle18.com",5],["720pizle19.com",5],["720pizle20.com",5],["720pizle21.com",5],["720pizle22.com",5],["720pizle23.com",5],["720pizle24.com",5],["720pizle25.com",5],["720pizle26.com",5],["720pizle6.com",5],["720pizle7.com",5],["720pizle8.com",5],["720pizle9.com",5],["airturkhaber.com",6],["aksarayhaberci.com",7],["bigahavadis.com",7],["atarita.com",8],["bakirkoydenhaber.com",9],["bandirmamanset.com",10],["basarisiralamalari.com",11],["bikifi.com",12],["bilgiportal.com",13],["bizimyaka.com",14],["boluyankihaber.com",15],["bomba32.com",16],["canlidoviz.com",17],["cazkolik.com",18],["cimri.com",19],["doeda.com",20],["forum.donanimhaber.com",21],["eksisozluk.com",22],["emlakansiklopedisi.com",23],["ensonhaber.com",24],["fotospor.com",25],["sokgazetesi.com.tr",25],["fullhdfilmdeposu.com",26],["gazetevatan.com",27],["girisimhaber.com",28],["gunes.com",29],["haber3.com",30],["haber7.com",31],["haberdairesi.com",32],["haberetanik.com",33],["haberkibris.com",34],["haberler.com",35],["haberturk.com",36],["hakimiyet.com",37],["hangikredi.com",38],["itemci.com",39],["kimintelefonu.com",40],["kimkazandi.com",41],["kocuce.com",42],["konhaber.com",43],["kriptoparapiyasasi.com",44],["larende.com",45],["mackolik.com",46],["manga-tr.com",47],["marastahaber.com",48],["medyabar.com",49],["nefisyemektarifleri.com",50],["neguzelsozler.com",51],["neredekal.com",52],["oggito.com",53],["ogznet.com",54],["onedio.com",55],["otokokpit.com",56],["ozengen.com",57],["paratic.com",58],["poki.com",59],["popkedi.com",60],["sahibinden.com",61],["sehrivangazetesi.com",[62,63]],["wanhaber.com",[63,80]],["seriesturco.com",64],["seriesturkish.com",64],["serieturkisch.com",64],["serietvturche.com",64],["televizyongazetesi.com",64],["tvseriadosturcos.com",64],["setfilmizleyin.com",65],["silicone-forum.com",66],["sondakika.com",67],["sosyola.com",68],["sporx.com",69],["superhaber.com",70],["technoprogram.com",71],["teknosa.com",72],["telesikayet.com",73],["tenceretv.com",74],["timeturk.com",75],["trwebtoon.com",76],["forum.turkmmo.com",77],["unutulmazfilmler4.com",78],["uzaymanga.com",79],["yeniduzen.com",81],["yenisafak.com",82],["yesiligdir.com",83],["ytpara.com",84],["hentaizm.fun",85],["altin.in",86],["webteizle.info",87],["webteizle1.info",87],["webteizle10.info",87],["webteizle2.info",87],["webteizle3.info",87],["webteizle4.info",87],["webteizle5.info",87],["webteizle6.info",87],["webteizle7.info",87],["webteizle8.info",87],["webteizle9.info",87],["agaclar.net",88],["birgun.net",89],["fenokulu.net",90],["memurlar.net",91],["minipassion.net",92],["okultanitimi.net",93],["r10.net",94],["shiftdelete.net",95],["sordum.net",96],["starkibris.net",97],["turkudostlari.net",98],["unyetv.net",99],["21yyte.org",100],["filmizle10.org",101],["filmizle11.org",101],["filmizle12.org",101],["filmizle13.org",101],["filmizle14.org",101],["filmizle15.org",101],["filmizle16.org",101],["filmizle17.org",101],["filmizle18.org",101],["filmizle19.org",101],["filmizle20.org",101],["filmizle21.org",101],["filmizle22.org",101],["filmizle23.org",101],["filmizle24.org",101],["filmizle25.org",101],["filmizle5.org",101],["filmizle6.org",101],["filmizle7.org",101],["filmizle8.org",101],["filmizle9.org",101],["izlekolik.org",102],["ahaber.com.tr",103],["aksam.com.tr",104],["apara.com.tr",105],["aspor.com.tr",106],["beinsports.com.tr",107],["cumhuriyet.com.tr",108],["evimdergisi.com.tr",109],["fotomac.com.tr",110],["freemagazine.com.tr",111],["haber365.com.tr",112],["hurriyet.com.tr",113],["karadenizgazete.com.tr",114],["maisonfrancaise.com.tr",115],["ntv.com.tr",116],["oyungezer.com.tr",117],["oyunu.com.tr",118],["sabah.com.tr",119],["sesgazetesi.com.tr",120],["star.com.tr",121],["takvim.com.tr",122],["yeniakit.com.tr",123],["selcuksportshd1195.xyz",124],["selcuksportshd1219.xyz",124],["selcuksportshd1220.xyz",124],["selcuksportshd1221.xyz",124],["selcuksportshd1222.xyz",124],["selcuksportshd1223.xyz",124],["selcuksportshd1224.xyz",124],["selcuksportshd1225.xyz",124],["selcuksportshd1226.xyz",124],["selcuksportshd1227.xyz",124],["selcuksportshd1228.xyz",124],["selcuksportshd1229.xyz",124],["selcuksportshd1230.xyz",124],["selcuksportshd1231.xyz",124],["selcuksportshd1232.xyz",124],["selcuksportshd1233.xyz",124],["selcuksportshd1234.xyz",124],["selcuksportshd1235.xyz",124],["selcuksportshd1236.xyz",124],["selcuksportshd1237.xyz",124],["selcuksportshd1238.xyz",124],["selcuksportshd1239.xyz",124],["selcuksportshd1240.xyz",124],["selcuksportshd1241.xyz",124],["selcuksportshd1272.xyz",124],["selcuksportshd1277.xyz",124],["selcuksportshd856.xyz",124],["selcuksportshd857.xyz",124],["selcuksportshd858.xyz",124],["selcuksportshd859.xyz",124],["selcuksportshd860.xyz",124],["selcuksportshd861.xyz",124],["selcuksportshd862.xyz",124],["selcuksportshd863.xyz",124],["selcuksportshd864.xyz",124],["selcuksportshd865.xyz",124],["selcuksportshd866.xyz",124],["selcuksportshd867.xyz",124],["selcuksportshd868.xyz",124],["selcuksportshd869.xyz",124],["selcuksportshd870.xyz",124],["selcuksportshd871.xyz",124],["selcuksportshd891.xyz",124]]);

const entitiesMap = new Map([["breakingbadizle",0],["diziyo",1]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
