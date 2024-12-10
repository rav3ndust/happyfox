# happyfox

![image](https://github.com/user-attachments/assets/f8bef03c-5798-4223-a0bc-64108c9304ea)

## Description

**happyfox** is a fork of [uBlock Origin Lite](https://github.com/uBlockOrigin/uBOL-home) (also referred to as 'uBOL' in this readme, for short). It is a **permissionless** content blocker based on the [MV3 API](https://developer.chrome.com/docs/extensions/develop/migrate/what-is-mv3).

happyfox is all about keeping things simple, or should I say, declarative? No need for a brain-draining, resource-hogging process for filtering content here. The browser does the heavy lifting with CSS/JS injections, so happyfox just sits back, conserving that sweet CPU and memory for your actual browsing. The service worker only wakes up when you're playing with the popup panel or poking around in the options pages.

Now, about permissions - happyfox isn't the type to ask for the keys to your digital house right off the bat. Unlike some privacy-hungry blockers, it doesn't demand broad "read/modify data" permissions at install. This keeps things a bit more limited, but hey, privacy first, right?

But, if you want happyfox to go full ninja mode on a specific site, you can totally grant it extra powers. Just pop open the panel, switch to '**Optimal**' or '**Complete**' mode, and the browser will give you the lowdown on what you're about to allow. You get to choose: give happyfox the green light or keep it on a tight leash.

If you decide to let happyfox loose, it'll do a stellar job filtering content on that page. And if you're feeling adventurous, you can set 'Optimal' or 'Complete' as your default mode in the options page - just remember, that means giving happyfox permission to read and modify data across all websites.

Our default filter set? It's nothing less than the best from uBlock Origin:

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

### why 'happyfox'?

Because: 

- When we block ads and trackers in our browser, it makes us happy
- Because it's for firefox!

*happy* + *fox* = **happyfox**! :) 

### credits

gorhill for creating the original, magnificent uBO and uBOL extensions, without which happyfox wouldn't be possible.

blocklists and list maintainers for their great work.

### contributing 

I have no plans to accept donations for this project. If you want to donate, please direct those donations towards the maintainers of ad and tracker blocking lists, like those mentioned above! 

I will happily accept pull requests, however - if you have a cool idea for happyfox, feel free to contribute some code and make a PR!
