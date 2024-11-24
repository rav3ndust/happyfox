# happyfox

![image](https://github.com/user-attachments/assets/f8bef03c-5798-4223-a0bc-64108c9304ea)

## Description

**happyfox** is a fork of [uBlock Origin Lite](https://github.com/uBlockOrigin/uBOL-home). It is a **permissionless** content blocker based on the [MV3 API](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3).

happyfox operates entirely declaratively, meaning no permanent process is required for filtering. The browser handles CSS/JS injection for content filtering, ensuring that happyfox does not consume CPU or memory resources while blocking content. The service worker process is only active when interacting with the popup panel or options pages.

happyfox does not require broad "read/modify data" [permissions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/permissions) at install time, limiting its capabilities compared to uBlock Origin or other content blockers that need such permissions upfront.

**However**, users can *explicitly* grant extended permissions for specific sites to enhance filtering using declarative cosmetic and scriptlet injections. 

To grant permissions on a given site, open the popup panel and select a higher filtering mode like **Optimal** or **Complete**.

The browser will alert you to the implications of granting additional permissions, and you must decide whether to accept or decline.

If you accept the request, happyfox can better filter content on the current site.

You can set the default filtering mode from happyfox's options page. If you choose **Optimal** or **Complete** as the default, you will need to grant happyfox permission to modify and read data on all websites.

The default ruleset includes at least uBlock Origin's default filter set:

- uBlock Origin's built-in filter lists
- EasyList
- EasyPrivacy
- Peter Lowe’s Ad and tracking server list

### Why fork uBO Lite?

The original uBOL used to exist for firefox, but there was a bit of [drama between gorhill and the mozilla add-ons team](https://discuss.privacyguides.net/t/ublock-origin-lite-maker-ends-firefox-store-support/21204). Because of this, gorhill decided to no longer list the uBOL extension on the add-ons store, instead opting to distribute a self-updating version through GitHub. 

This is, of course, a fine choice for gorhill to make. However, I still want to ensure that the extension is on the store and easily downloadable for people who don't know how to/aren't comfortable with manually adding extensions into their browser. This way, they can hit the add-ons store, type in "happyfox", and still have the same experience they'd have on the original uBOL, were it still in the store.

uBlock Origin is the gold standard for adblockers. However, many folks like using uBOL on mobile, as it is less demanding resource-wise. I want to make sure they still have this choice, as I also run uBOL on mobile firefox versions for resource efficiency.

This fork is brand new and something I'll be working on getting added into the add-ons store soon. When it's up, I will update this repo with the link to it.

### changes from uBOL

happyfox will remain as close as possible to the original uBOL, though some new features may be added in, in the future. The aesthetics will look a little different, too. If you're on a clean page with no ads and trackers detected, you will see a smiling fox icon. If ads and trackers *are* detected on the page, you will notice your extension changes to a frowning fox icon. This is a fun way to add some expressiveness to the extension.

### credits

gorhill for creating the original, magnificent uBO and uBOL extensions, without which happyfox wouldn't be possible.

blocklists and list maintainers for their great work.

### contributing 

I have no plans to accept donations for this project. If you want to donate, please direct those donations towards the maintainers of ad and tracker blocking lists, like those mentioned above! 

I will happily accept pull requests, however - if you have a cool idea for happyfox, feel free to contribute some code and make a PR!
