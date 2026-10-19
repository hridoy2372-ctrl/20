# THE LAST SIGNAL — CINEMATIC EDITION v1.1
## বাংলা ইনস্টল ও হোস্টিং গাইড

একটি upgraded, cinematic browser-based story mystery game। ৮টি chapter, detailed environment artwork, atmospheric rain/fog/scan effects, clickable evidence hotspots, frequency tuning, cipher, circuit sequence, identity check, coordinate decode, memory pattern, ৩টি ending, Easy/Hardcore mode, local auto-save, sound toggle এবং PWA install support আছে। নতুন forest, cabin এবং bunker scene image offline cache-এও যোগ করা হয়েছে। কোনো paid API বা external game library লাগবে না।

## ১) এখনই খেলতে

- `THE_LAST_SIGNAL_CINEMATIC_PLAY_NOW.html` একাই Chrome-এ খুলে playable standalone version চালাতে পারবে; অথবা ZIP extract করে `index.html` খুলবে। এক-ফাইল version-এ art embedded থাকে, কিন্তু PWA install করতে পারবে না।
- পুরো ফোল্ডার রাখবে; `assets/` এবং `icons/` মুছবে না।
- ইনস্টলেবল অ্যাপ ও offline cache কাজ করাতে HTTPS-এ host করতে হবে; `file://` থেকে PWA install হয় না।
- Progress একই browser/device-এর `localStorage`-এ save হয়; browser data clear করলে progress মুছে যেতে পারে।

## ২) GitHub Pages-এ ফ্রি host (Recommended)

1. https://github.com/new এ গিয়ে public repository বানাও, নাম দিতে পারো `the-last-signal`।
2. ZIP extract করে **ফোল্ডারের ভেতরের সব ফাইল** repository root-এ upload করো: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`, `assets/`, `icons/`। ZIP ফাইলটা একা upload করবে না।
3. GitHub repository → **Settings → Pages** খোলো।
4. **Build and deployment → Deploy from a branch**, branch `main`, folder `/(root)` বেছে **Save** করো।
5. কিছুক্ষণ পর ঠিকানা হবে `https://YOUR-USERNAME.github.io/the-last-signal/`। GitHub Pages পেজে যে live URL দেখায় সেটাই ব্যবহার করবে।
6. Android Chrome-এ link খোলো → ⋮ → **Install app** অথবা **Add to Home screen**। প্রথমবার online থাকো, যাতে game assets cache হয়।

## ৩) Update করলে

Repository-তে নতুন ফাইল upload/commit করো। Offline cache update-এর জন্য `sw.js`-এর `CACHE_NAME`-এ `the-last-signal-v1.1.0` থেকে পরের build-এ নতুন version (যেমন `the-last-signal-v1.2.0`) লিখে দাও। তারপর live page reload করো।

## ৪) Gameplay

- **Begin Transmission → Easy / Hardcore** নির্বাচন করো।
- প্রতিটি chapter-এ তিনটি field target থেকে clue উদ্ধার করো। তারপর **Decode the Signal** চাপো।
- Journal-এ clue দেখো। Easy-তে timer নেই, hint বেশি; Hardcore-এ puzzle timer, কম hint, কড়া puzzle tolerance।
- Chapter 8 শেষে ending বেছে নাও।
- Keyboard shortcut: `J` = journal, `Esc` = modal বন্ধ। Canvas-এ চিহ্নিত target-এ tap/click করলেও investigate হবে।

## Notes

এটি detailed artwork ও animated effects-সহ 2D cinematic browser game—real-time full 3D/voice acting দাবি করা হচ্ছে না। কোনো login, server বা paid API নেই; game progress device-local। GitHub Pages public repository static hosting বিনামূল্যে দেয়, তবে GitHub account লাগবে।

## Facebook / Messenger share thumbnail

`og-cover.png` হলো share cover image। `index.html`-এর `og:image` লাইনে `YOUR-USERNAME`-এর জায়গায় তোমার GitHub username বসাও। Repository name `the-last-signal` রাখলে link preview-এর জন্য absolute image URL ঠিক হবে। Social platform-এর cache-এর কারণে preview update হতে কিছুটা সময় লাগতে পারে।
