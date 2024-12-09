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

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// annoyances-others

const toImport = [[3491667,"#FooterboardMobile"],[2643162,"#ac-lre-player"],[13469623,"#ac-lre-player-ph"],[848853,"#amp-smart-banner-download"],[296635,"#article_sharing_footer"],[16176126,"#cxense_widget"],[16521278,"#envato-widget"],[10750263,"#feedback-bottomentry"],[12393430,"#feedback_callout"],[4590364,"#feedback_widget_tab"],[5434650,"#feedbacklinktab"],[6768180,"#feedburner_left"],[10506299,"#feedburner_right"],[7414602,"#feedburneremailwidget-3"],[15396026,"#gc_message_bar"],[16564781,"#hellobar-container,#hellobar_container"],[9209859,"#hellobar-takeover"],[2645331,"#hellobar-wrapper"],[4194013,"#jbb_widget_customizable"],[12817118,"#meebo-iframe"],[11405212,"#mvp-prev-next-wrap"],[12149617,"#noti_msg"],[14658214,"#oneSignalBell"],[8290161,"#onesignal-bell-container"],[3638864,"#onesignal-popover-container"],[13918386,"#phxtags-belowcontent"],[4335209,"#piano_bottom_ribbon_wrapper"],[1121892,"#ppsPopupBgOverlay"],[14741618,"#prev-next-wrap"],[14961336,"#prev-post-wrap"],[10141067,"#primeABBUpsell_feature_div"],[15080520,"#pubexchange_widget2"],[3790078,"#readNextWidget"],[15534445,"#sdac_feedburner_widget-3"],[13994531,"#simplereach-slide-element"],[14742143,"#sumotest-badge"],[13873846,"#uservoice-feedback"],[16430045,"#uservoice-feedback-tab"],[12253099,"#widget_detail_postlinks"],[8287150,"#wpd-bubble-wrapper"],[3025307,"#wpfront-notification-bar-spacer"],[9928174,"#wpl-likebox"],[4040863,"#zerg-target"],[15337065,".UpNext-Wrapper"],[8924366,".abicon-feed"],[15057936,".android-smart-banner"],[11225416,".article-next-sticky"],[4120133,".bbccom_text"],[16584179,".block-simplenews"],[14937417,".dailydeal_wrapper"],[3290967,".dd_ajax_float"],[795409,".feedbackTab"],[12838575,".floatingfeedback"],[14358762,".fyre-notifier-container"],[9121034,".grecaptcha-badge[data-style]"],[7696434,".gt-popup"],[11297082,".homeDonateCta"],[7471861,".house-ad-wrap"],[8053703,".inlinkz-widget"],[5434054,".ione-widget-jobs"],[5062787,".jnews_popup_post_container"],[2247735,".klarna-banner"],[5952393,".notifyjs-corner"],[9239152,".ntfc_overlay"],[3632841,".ntfc_popup"],[13272348,".onesignal-bell-container"],[2706137,".onesignal-customlink-container"],[14147151,".onesignal-slidedown-container"],[1782005,".partage_reseaux_sociaux"],[13868608,".pin-it-btn-wrapper"],[7192617,".plista-suggestions"],[9954208,".ppsPopupShell"],[3036489,".prev-next-article"],[1232034,".prevNextPost"],[14771794,".readmore-pop-up"],[8179105,".recommended-flyout-wrap"],[9543081,".sailthruRecommendation"],[878155,".td-more-articles-box"],[10634857,".trustpilot-widget"],[1282151,".upNext-container"],[3692777,".vf-conversation-starter"],[15686012,".vf-starter"],[13580375,".widget-feedburner"],[1104513,".widget_al2fb"],[14953295,".widget_feedburnerformwidget"],[1104810,".widget_feeds"],[13061591,".widget_ione-jobs_v2"],[4716866,".widget_mailster_signup"],[14559817,".widget_mc4wp_widget"],[14528970,".widget_mybloglog"],[16677302,".widget_pushpad_widget"],[2773113,".widget_sdac_feedburner_widget"],[12612525,".widget_social_icons"],[10574668,".widget_tpd_dappier_widget"],[5815844,".widget_wpjb-recent-jobs"],[1900635,".widget_wysija"],[7765032,".wpmchimpa-overlay-bg"],[14125034,".preezie-widget-modal"],[10682847,"#cb-widget-sales-pop"],[1565383,"#goodreviews-wrapper"],[9670481,"#message-purchased.wn-background-template-type-2,#message-purchased.wn-extended"],[12413875,"#mps-sales-notification"],[5599290,"#recent_sales_ticker"],[8532275,"#sales-pop-plugin"],[15068329,".cbSalesPopContainer"],[3600967,".ck-sp-app-wrapper"],[3160760,".fomo-notification-container"],[16180033,".js-pn.payment-notification"],[14939602,".noti-container-main"],[6197760,".source-woocommerce.nx-notification"],[10711324,".wpcsn-notification-inner"],[2743036,".yo-notification"],[2946651,".vjs-pip-y-bottom"],[50083,"div.l > .acu.act"],[9982692,"#credential_picker_container"],[2225696,"#credential_picker_iframe"],[16646639,"#consumer-app > #navbar-wrap > .pm-root-announcement,#consumer-app > .modals-wrap > .pm-follow-v2"],[5161247,".pm-follow-wrap"],[5058133,".bp-banner"],[13571265,"#hot-jobs"],[12780801,".js-stickyFooter.u-bottom0.u-fixed"],[14261456,".postActionsBar-container"],[10643084,".u-zIndexMetabar.u-fixed"],[8635497,"#back-to-home > .back-to-home-button"],[2616265,"#close-btn-wrapper > #close-back-btn"],[13376421,".article-section > .ui-button-close"],[14553435,".close-wrap > .close-overlay"],[13124963,".gnt_m_fs.gnt_m"],[1388805,"#nca-behavioural-banner-wrapper"],[5665871,".RelatedStoriesSupportUsComboInlineContentresponsive"],[3020418,".cm-failsafe"],[7585872,".cm-hero-container"],[10796371,".cn_ecom_placement"],[5992896,".consumer-marketing-unit--article-mid-content"],[10380183,".cta_magazine_subscription_wrap"],[6355851,".ecom-placement"],[8186383,".ecom-promo2"],[5244189,".featured-post-banner__newsletter-signup"],[10753946,".g-cta-subscribe"],[7577429,".hdr-sub-ad-01"],[15241703,".nca-block-promo-banner"],[4669605,".newsblock-support-cta"],[13715259,".newsltter-iframe"],[10482464,".pn-single-post-wrapper__newsletter-signup"],[2388167,".subscription-tout"],[15597898,"#floaty-rss"],[15765106,"#follow-rss"],[15583515,"#footer-rss"],[7916295,"#footerrss"],[12038613,"#rightSocialRss"],[11376817,"#rss-subscribe"],[12879035,"#rsslisting"],[6210222,"#sidebar-rss"],[2624595,"#social-links-rss"],[13127770,".addthis-rss"],[15417002,".follow-link-rss"],[11086207,".follow-rss"],[15169123,".followRSS"],[984958,".follow__rss"],[5357419,".follow_us_rss"],[11128150,".footer-rss"],[11097845,".footerButtonRSS"],[15143946,".footerRSS"],[7610526,".p-footer-rssLink"],[7194288,".rss-blogroll"],[293641,".rss-footer"],[6423685,".widget_rssiconwidget"],[8240909,"#ArrowToTop"],[1416571,"#BackToTop"],[13078268,"#BtmToPageTopArea"],[5981160,"#Imgback2top"],[12301426,"#J_returntop"],[5021300,"#PAGE_TOP_LINK"],[3290924,"#ReturnToTop"],[1136399,"#ScrollToTopButton"],[14066555,"#ScrollToTopContainer"],[4354607,"#T-Hoch-Btn"],[2112916,"#ToTopButtom"],[4398629,"#WidgetScrollToTop"],[9775288,"#arrow-scroll-top"],[8918161,"#arrow_to_site_top"],[11227383,"#ast-scroll-top"],[7505846,"#auto-top-link"],[6394810,"#back-to-the-top"],[7453141,"#back-to-top-arrow"],[6381159,"#back-to-top-btn"],[9164078,"#back-to-top-button"],[12565458,"#back-to-top-icon"],[9163524,"#back-to-top-scroll"],[12581094,"#back-top"],[8637333,"#back-top-btn"],[8637326,"#back-top-top"],[12943769,"#back2top"],[12554770,"#backToTopButton"],[10561388,"#backToTop_RT"],[11890240,"#back_to_top_now"],[8478991,"#backtotop-scroll"],[10456658,"#backtotopbutton"],[6820477,"#backtotoplink"],[1622941,"#base_scrollToTop"],[3796156,"#bigslam-footer-back-to-top-button"],[12140623,"#bktotopbtn"],[5493083,"#block-backtotop"],[8897027,"#bt-backtop"],[14613989,"#bt-scroll-top,#bw-scroll-top"],[577966,"#btn--back-to-top"],[12477984,"#btn-back-top"],[11085216,"#btn-go-top"],[15878418,"#btn-scroll-up"],[11099507,"#btn-to-top"],[11086064,"#btn_backtt"],[11843381,"#btn_control_totop"],[16441105,"#button-to-top"],[519003,"#button-totop"],[16691900,"#buttonScrollTop"],[11641554,"#c-backtotop-btn"],[4361103,"#cb-to-top"],[1624509,"#cw_to_top"],[11342099,"#divGoTop"],[11542836,"#div_gotop_outer"],[11905823,"#dynamic-to-top"],[16421834,"#edgtf-back-to-top"],[1842138,"#eltdf-back-to-top"],[1650319,"#fav-backtotop"],[5555402,"#fl-to-top"],[1588228,"#float-btn-backtotop"],[2099731,"#footer-0-BackToTop"],[2132013,"#footer-back-to-top"],[15826877,"#footer-to_top_button"],[7606798,"#footer_scroll_top"],[6246651,"#g1-back-to-top"],[9141042,"#gh-bt"],[9417982,"#gkBackToTop"],[6379371,"#gkTopLink"],[7602451,"#go-to-bottom"],[8825739,"#go-to-top,#gp-to-top"],[4052407,"#goDownFooter"],[10742428,"#goToTop"],[6605942,"#goToTopButton"],[5400851,"#goToUp"],[3839490,"#goTopFooter"],[12209790,"#goto-top"],[14261558,"#goto-top-page"],[8784700,"#gotoTop"],[12376317,"#gotoTopWrapper"],[8817500,"#gototop:not(body)"],[15909158,"#imPageToTop"],[16530919,"#img_goTop"],[6062288,"#inline-related-post"],[15121597,"#int-btn-top"],[5240555,"#iron-back-top"],[12497548,"#jGoTop"],[15789204,"#jas-backtop"],[808975,"#jiordano-totop"],[4579233,"#jm-back-top"],[5684022,"#js-back-to-top"],[10619650,"#js-backtoTop"],[5024536,"#js-btnGoTop"],[6288696,"#js-pagetop-btn"],[11123467,"#jsn-gotoplink"],[15259817,"#jump-to-top"],[10152623,"#jump-top"],[9293598,"#jwDisqusBackToTop"],[10443854,"#ktz-backtotop"],[9949285,"#layoutscrolltop"],[8819791,"#linkbacktop_top"],[11199084,"#mainToTopAnchor"],[11356654,"#main_scroll_icon"],[3293377,"#menu-back-to-top"],[2748809,"#mgs-scrollup"],[8333762,"#mkd-back-to-top"],[15915339,"#mkdf-back-to-top"],[11627477,"#move-to-top"],[7607911,"#move_to_top"],[6291160,"#mt-scrollup"],[486109,"#navBackToTop"],[14152863,"#neklo_scrolltotop_arrow"],[3284798,"#nino-scrollToTop"],[714619,"#np-scrollup,#nv-scrollup"],[8673052,"#onTop3"],[6834761,"#page-go-up"],[13694921,"#pageStick-Backtop-btn"],[595856,"#pagescrolltop"],[5096837,"#picto-to-top"],[5750444,"#pix--totop"],[1249597,"#pl_common_scrollToTop"],[12311023,"#pojo-scroll-up"],[7118045,"#pro-scroll-top"],[1495695,"#qodef-back-to-top"],[2963804,"#return-to-top"],[7630423,"#returnOnTop"],[1100462,"#return_to_top"],[5698936,"#sbttBacktotop"],[10973347,"#scrl-top"],[15617129,"#scroll-top-button"],[11654188,"#scroll-top-link"],[14902080,"#scroll-top-top"],[14899872,"#scroll-toplink"],[6266554,"#scroll-up-button"],[15131055,"#scrollToTopButton"],[971633,"#scroll_back_to_top"],[13129591,"#scroll_to_top"],[16762630,"#scroll_top_div"],[5141068,"#scroll_top_wrap"],[16190909,"#scroll_totop"],[16222313,"#scrolltoptop"],[8890677,"#scrolltotop"],[2369056,"#scrolltotop_button"],[1326116,"#scrollup_button"],[12972514,"#site-scroll-top"],[674000,"#siteBackToTop_small_box"],[13642469,"#spnGoTop"],[2516687,"#sticky-back-to-top"],[8699123,"#sttotop"],[11321065,"#tab-to-top"],[9220071,"#tbScrollToTop"],[6488523,"#tc-footer-btt-wrapper"],[14937625,"#theme-go-to-top"],[823546,"#to-top-button"],[15385087,"#to-top-container"],[4352017,"#to-top-link"],[8634125,"#toPagetop"],[11800504,"#toTo_button"],[8510456,"#toTopLink"],[8876074,"#to_top:not(body)"],[6918663,"#to_top_scrollup"],[10848315,"#top-to-top"],[14862308,"#tornasu"],[3650882,"#tothetop"],[8349870,"#tothetopbtn"],[7428214,"#totop-btn"],[13795637,"#totop-scroller"],[12822563,"#totopBtn"],[484428,"#totopscroller"],[645032,"#ts-back-to-top"],[2350513,"#tweScrollTop"],[13393945,"#ui-to-top,#up-to-top"],[14771496,"#uiGoToTop"],[12732968,"#uix_jumpToFixed"],[14917809,"#uix_jumpToTopFixed"],[2258346,"#ultra-go-top"],[10802594,"#up_scroll_arrow"],[4404198,"#volver-arriba"],[2532111,"#w2b-StoTop"],[5841038,"#wp-smooth-scroll"],[3800465,"#wpfront-scroll-top-container"],[7678443,"#wrap-scroll-toplink"],[6086824,"#xb_ScrollDown"],[1362079,"#xb_ScrollUp"],[778230,".BackToTop"],[812022,".Backtotop"],[10354284,".Bt_Gotop"],[6359136,".Button-BackToTop"],[15109097,".ButtonBackToTop"],[10842580,".Footer__backToTopButton"],[15526814,".GlobalFooter-backToTop"],[14753758,".GlobalFooter-backToTopSection"],[9631408,".JumpToTop"],[1146506,".NextCheatButton"],[6214479,".Page-footer-back-to-top"],[12777149,".PageHeaderWithMenu-backTop"],[3508206,".ScrollTop"],[2302193,".SiteScrollToTopButton"],[11661710,".TopGoTop"],[5179906,".W_gotop"],[12852037,".a-back-to-top"],[13568519,".a-core-scroll-to-top"],[14630367,".ab__scroll_to_top"],[13599284,".ant-back-top"],[8347623,".arrow_scroll_up"],[6756069,".arrow_up"],[4410866,".artee-back-to-top"],[11092225,".article-back-to-top"],[9056993,".article-return-to-top"],[11572171,".aside-backtop"],[14726691,".aside-item-top"],[6618863,".aux-goto-top-btn"],[15955967,".axScrollToTop"],[14157446,".b-back-to-top"],[9608156,".b-button-to-top"],[5394518,".b-footer__btn_up"],[12290952,".b-scroll-to-top"],[16454522,".b-scroll_to_top"],[16478474,".back-to-top-btn"],[4735939,".back-to-top-button,.back-to-top_button"],[9034731,".back-to-top-container"],[16478692,".back-to-top-cta"],[6314267,".back-to-top-link"],[4735461,".back-to-top-sticky"],[6314223,".back-to-top-wrap"],[8643873,".back-to-top-wrapper"],[1707202,".back-to-top:not(body):not(html)"],[8611473,".back-to-top__button"],[12248843,".back-top"],[1910264,".back-top-btn"],[1910243,".back-top-top"],[15435922,".back-top_button"],[13110004,".back2top"],[2729494,".backToTop"],[11299263,".backToTopButton"],[11570367,".backToTopIcon"],[8740803,".backToTopVisible"],[5255138,".backTopLink"],[16280089,".back_Top"],[4579968,".back_Top_Icon"],[5728187,".back_Top_wp"],[5726768,".back_to_top"],[805161,".back_to_top_link"],[5728172,".back_top_bg"],[3639843,".back_top_top"],[5719805,".back_up_but"],[15461523,".backto-top"],[8463241,".backtopbutton"],[2695702,".backtotop"],[10840163,".backtotop-bubble"],[4875711,".backtotopbutton"],[15458741,".backtotopx"],[8569404,".bc_goto_top"],[1451125,".bcp-block-back-to-top"],[4877352,".bd-backtotop-1"],[4063438,".bfc-scroll-to-top,.btn-scroll-to-top"],[8762929,".bigslam-footer-back-to-top-button"],[903360,".block_to_top"],[11381378,".blog-back-to-top"],[11909065,".body-back-to-top"],[755007,".body-btn-top"],[1835989,".body-scrollToTop"],[8821611,".bof-scroll-top"],[8611861,".bottom-scroll-top"],[16418566,".box-scrollToTop"],[1181312,".bt-pagetop"],[2626819,".btn--move-to-top"],[15552997,".btn--toTop"],[12961802,".btn-back-to-top"],[9233314,".btn-cmn-pagetop-wrap"],[15630765,".btn-go-top"],[9954879,".btn-goto-top"],[13808605,".btn-pb-back-to-top"],[4332282,".btn-return-top"],[7896119,".btn-scroll-to-top-container"],[3120739,".btn-scroll-top"],[13015903,".btn-scroll-up"],[15647230,".btn-to-top"],[12852471,".btn-top[href^=\"#\"]"],[15905889,".btn-tw-backtotop"],[4290933,".btn.gotop"],[12067272,".btn2top"],[15622317,".btnBackTop"],[15630077,".btn_backtt"],[7508638,".btn_gototop"],[8320092,".button--scroll-top"],[5416487,".button--toTop"],[10786683,".button-back-top"],[5227948,".button-go-up"],[3438143,".button-scroll-to-top"],[5435228,".button-to-top"],[13362664,".bw-scroll-top"],[7361607,".c-back-to-top"],[721145,".c-back-to-top-cta"],[14369252,".c-back-top"],[13964174,".c-footer__back-to-top"],[2167831,".c-totop"],[4408631,".c_pagetop"],[9661907,".category-page__back-to-top--button"],[14478141,".ccm_go_top"],[9027447,".cp-footer-scroll-top"],[14706994,".crc-backToTop"],[14059709,".ct-js-btnScrollUp"],[3025327,".ct-scrollUpButton"],[766956,".ct-totop"],[5115493,".custom-back-to-top"],[2959109,".dc-go-top"],[2830441,".dmtop"],[9500022,".dp-footer__to-top"],[13614833,".dvt-go-top"],[933346,".eb-toc-go-top"],[11265200,".ef3-back-to-top"],[13043183,".enigma_scrollup"],[10869243,".et_pb_scroll_top"],[9658800,".eut-back-top"],[16777170,".f-footer__btn_up"],[7805379,".f-go-top"],[9062967,".fi-back-to-top"],[7995722,".fjs-scroll-to-top"],[6635748,".fk-ui-goTop"],[5209889,".fk_siteBackToTop"],[12246912,".footer--scrolltop"],[11816306,".footer--totop"],[11973824,".footer-back-to-top"],[9499182,".footer-back-top"],[13806229,".footer-backtotop"],[12271701,".footer-button-top"],[11985613,".footer-link-to-top"],[10728067,".footer-scroll-totop"],[11809641,".footer-to-top"],[11995924,".footer-top-of-page"],[10544540,".footerBackToTop"],[10463925,".footerBackToTopLink"],[16712833,".footer__back-to-top"],[14238209,".footer__back-to-top-button"],[1662619,".footer__back-to-top-container"],[6954318,".footer__backtotop-btn"],[9523613,".footer__go-to-top"],[11260464,".footer__nav-to-top"],[10248493,".footernavigation__scrollUp"],[6183704,".fwscrolltotop"],[14845814,".g1-back-to-top"],[1171614,".g1-back-to-top-on"],[1211438,".ga-scrolltop-anchor"],[11501433,".gantry-totop-wrapper"],[13327365,".generate-back-to-top"],[2008506,".glyphicon-arrow-up"],[10452546,".gn-backtotop"],[14094278,".go-to-top"],[13187416,".go-to-top--btn"],[4991396,".go-to-top-arrow"],[767590,".go-to-top-button"],[14121193,".go-to-top-desktop"],[13189750,".go-to-top-page"],[10184454,".go-top"],[6455268,".go-top-button"],[15752232,".go-top-footer-btn"],[10532559,".go-top-wrapper"],[10005909,".go-top2"],[14116625,".go-up-btn"],[10268601,".go2top"],[377253,".goBackTop"],[15912017,".goToTop"],[15891177,".goTopButton"],[1336628,".go_to_top"],[8878155,".go_top_scroll"],[9315695,".goto-anchor-top"],[16311827,".goto-top"],[3095202,".goto-top-container"],[16568040,".gotop-btn,.gotop_btn"],[9955284,".gotop-wrapper"],[13995281,".gototop"],[9562152,".goup-container"],[11170424,".gpe_movetop"],[10494579,".gr-footer-back-top"],[4716945,".greatwp-scroll-top"],[12550815,".gs18-GoTop"],[12856885,".hestia-scroll-to-top"],[1304635,".hm_go_top"],[7726225,".hse-scrolltotop"],[14005246,".icon--totop"],[8972009,".icon-back-to-top"],[12768600,".infinite-footer-back-to-top-button"],[10277160,".ins-backtotop"],[11467745,".is-totop"],[1478686,".itemBackToTop"],[15281844,".itw-scrollTop"],[9028989,".ivu-back-top"],[9269086,".j-footer__btn_up"],[3277341,".jquery-back-to-top"],[757000,".js--scroll-top"],[13802299,".js-back-to-top"],[12570712,".js-back-to-top-story"],[16569967,".js-backToTop"],[11425177,".js-button-totop"],[10093704,".js-pageTop"],[6520199,".js-persistent-nav-top"],[3165579,".js-s-f-back-to-top"],[5489632,".js-scroll-top:not(html):not(body)"],[16772810,".js-scrollTop"],[2270898,".js-scroll_to_bottom"],[8064029,".js-scroll_to_top"],[11673058,".js-toTop"],[10106325,".js-top-btn"],[14866528,".jsButtonToTop"],[1390983,".js_Link_GoUp"],[13470259,".js__back-to-top"],[425948,".js_btn_gotop"],[8212946,".js_go_up"],[12664210,".js_scroll_top"],[11245241,".js_to-top"],[16396943,".jsbd-Backtotop"],[8375310,".jscroll-to-top_link"],[1211716,".jump-to-top"],[1017677,".jupiterx-scroll-top"],[216666,".kleanity-footer-back-to-top-button"],[15583021,".kleo-go-top"],[4177160,".layout__scroll-to-top"],[6780296,".layoutscrolltop"],[4746508,".lia-component-common-widget-scroll-to"],[14348261,".link_GoUp"],[14205939,".link_to_top"],[12021736,".m-ButtonScrollTop"],[7483465,".m-back-to-top"],[10364072,".m-go-top"],[2415392,".m-scroll-top"],[3951364,".main-icon--pagetop"],[5447133,".material-scrolltop"],[15339692,".menu-back-to-top"],[12488700,".mh-back-to-top"],[15451962,".mintwp-scroll-top"],[8610124,".mk-go-top"],[15271139,".mnmd-go-top"],[6500798,".mod-totop"],[10377186,".ms-scroll-to-top-button"],[8865347,".mvp-fly-top"],[5054447,".mvp-to-top"],[11074557,".mypresta_scrollup"],[10975703,".nav--back-to-top"],[4037932,".navigate-to-top"],[1993035,".o-back-to-top"],[8789741,".o-backtop"],[6247125,".on--totop"],[6989694,".os-back-to-top"],[6503968,".oui-back-to-top"],[6778988,".p-pagetop-btn"],[10669394,".page-to-top-visible"],[15311546,".pagetop-btn"],[4302753,".pb-back-to-top"],[9011305,".penci-go-to-top-floating"],[2983686,".pgevoke-backtotop"],[5061353,".pi-scroll-top-arrow"],[268776,".picto-to-top"],[2829217,".pix--totop"],[11877640,".prodToTop"],[8313696,".q-back-to-top-button"],[1957559,".q-mod-back-to-top-button"],[10085600,".qc-back-to-top"],[3196411,".qw-scrollbutton-top"],[10198545,".remonter-la-page"],[8859548,".retour_haut"],[6362385,".return-to-top"],[8676129,".returnToTop"],[132288,".return_top"],[14661973,".rh-footer-back-to-top"],[10951883,".rlx-back-top"],[900612,".rtp-back-to-top"],[13199376,".ruby-back-top"],[11411353,".s-btn-gotop"],[16448243,".s-f-back-to-top"],[3098916,".s-gotop-wrap"],[6453580,".s5_scrolltotop"],[4586594,".sc-back-to-top,.sf-back-to-top,.sh-back-to-top"],[14493894,".scroll-back-to-top-wrapper"],[4746420,".scroll-to-top-arrow"],[1063015,".scroll-to-top-btn"],[14307500,".scroll-to-top-button"],[4747374,".scroll-to-top-class"],[8493689,".scroll-to-top-link"],[8493688,".scroll-to-top-show"],[14307637,".scroll-to-top-square:not(body)"],[8118024,".scroll-to-top.btn"],[5668872,".scroll-to.top"],[995553,".scroll-top-arrow"],[9801494,".scroll-top-btn"],[1019268,".scroll-top-button"],[995703,".scroll-top-inner"],[8456703,".scroll-top-wrapper"],[872279,".scroll-up-button"],[15614642,".scroll-up-button-wrapper"],[8119025,".scroll-up-cta"],[15993300,".scroll2top"],[9331672,".scrollToTop"],[9486601,".scrollToTopBtn"],[4780802,".scrollToTopButton"],[14800062,".scrollToTopLink"],[14800173,".scrollToTopText"],[13004203,".scrollTo_top"],[13585383,".scrollTopButton"],[9495057,".scrollUp-child"],[10056284,".scroll__to__top"],[9327347,".scroll__top"],[12281594,".scroll_to_top"],[10305779,".scroll_to_top_icon"],[9225046,".scroll_top_btn"],[12953548,".scrollbtntop"],[12965195,".scrollto_top"],[11423910,".scrolltop-btn"],[3698466,".scrolltotopbutton"],[11169132,".scrollup-container"],[5671693,".scroolTop:not(body):not(html)"],[8935069,".show-top-button"],[15821390,".shunno-top"],[6325319,".simplifytotop"],[9934519,".single-scroll-top"],[1871158,".site-footer__back-to-top"],[14356751,".site-scroll-top"],[12839899,".siteAside_toTop"],[5334492,".siteFooter__goTop"],[40475,".slideToTop"],[14039698,".sm-page-scroll-to-top"],[3228009,".sp-scroll-up"],[9958498,".st-site-scroll-top"],[5030562,".sticky-back-to-top"],[4572064,".sticky_totop_box"],[8145035,".stotop"],[14507400,".stp--nav-to-top"],[11555573,".stt-gototop"],[8541964,".styliumToTop"],[15028476,".sublink_back_top"],[799474,".sunfw-scrollup"],[2554327,".ta_back-to-top"],[15294820,".tab-to-top"],[8978545,".tb-scroll-to-top"],[8484517,".tc-back-to-top"],[11821703,".tc-btt-wrapper"],[3442958,".td-scroll-up"],[14854253,".td-scroll-up-visible"],[11397158,".tdr-backtop"],[5747852,".ti_scroll"],[11020286,".tm-scroll-top"],[13331990,".to-pagetop"],[13324567,".to-the-top"],[13319627,".to-top-btn"],[761340,".to-top-link"],[4583599,".toTheTop"],[8661934,".toTopBtn"],[5649893,".toTopBtnF"],[7768794,".toTopButton"],[14042647,".to_the_top"],[760537,".top-of-page-button"],[1752254,".top-of-page-link"],[6569665,".topofpage"],[14598379,".torna-su"],[11470921,".tornaSu"],[14734434,".tornaSuBtn"],[14719193,".torna_su"],[11469929,".tornasu"],[10483119,".tothetop"],[14729963,".totop_button"],[2354169,".totopbuttom"],[2354170,".totopbutton"],[13955507,".txt_back_top"],[12511315,".u-scrollButtons"],[14267364,".ui-back-to-top"],[10381584,".ui-backtotop"],[2870283,".ui-fixed-panel-go-top"],[1876820,".ui-go-top,.ui-to-top,.up-to-top"],[12054392,".ui-scrollToTop"],[4755692,".verso-go-top"],[14657831,".visible.scroll-to-top"],[2095027,".vw-scroll-to-top"],[6572898,".vw_m511_back_top"],[15605321,".vw_m520_topbar"],[10733840,".w-gotop"],[873238,".w-toplink"],[2682142,".widget-goto-top"],[16290774,".wp-to-top"],[14960376,".yjscroll"],[11371762,".yukari_git"],[9457437,"div#back_to_top"],[1249441,"#zipsearch_container"],[15257275,".zr_alerts_widget_container"],[11509140,".zr_alerts_widget_link"],[6109350,".format-standard > .fixed-article-nav"],[7375482,".ad400"],[13255722,"#inner-wrap > .slide-dock-on"],[733565,".site-content > .slide-dock-on"],[1940316,".rail > .ad_spot + .most-popular"],[14717932,"#searchform > #gb > #gbw .gb_Mc[aria-label=\"promo\"] > .gb_ea,#searchform > #gb > #gbw .gb_Vc[aria-label=\"promo\"] > .gb_ga"],[8056286,".promotional.header--offset.header-breaking__wrapper"],[16582824,".gnt_ar_xb"],[15934939,".screenContent > .u-bottom0"],[121242,".odkl-klass-stat"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
