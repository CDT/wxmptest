# WeChat Mini Program Tutorial (Beginner-Friendly)

This guide walks you through running, understanding, and modifying this repository’s WeChat Mini Program.

## 1) Prerequisites
- Install WeChat DevTools: https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- (Optional) Node.js if you plan to add npm scripts later.

## 2) Open the Project in DevTools
1) Launch WeChat DevTools.
2) Select **Import Project**.
3) Project directory: `d:\dev\wxmptest`
4) AppID: use the one in `project.config.json` or a test AppID.
5) Click **Import**.

DevTools uses `project.config.json` to locate the Mini Program root at `miniprogram/`.

## 3) How a Mini Program Is Structured
Key files and folders:
- `miniprogram/app.json`: global config (pages, window, tab bar, renderer).
- `miniprogram/app.ts`: app lifecycle and global logic.
- `miniprogram/app.wxss`: global styles.
- `miniprogram/pages/*`: pages, each with `.wxml` (layout), `.wxss` (styles), `.ts` or `.js` (logic), and `.json` (page config).
- `miniprogram/components/*`: reusable components.
- `miniprogram/custom-tab-bar/*`: custom tab bar implementation.
- `typings/`: TypeScript typings for the WeChat APIs.

## 4) Run the App Locally
In DevTools:
- Click **Compile** to build and open the first page (currently `pages/login/login`).
- Use the tab bar to navigate the demo pages.
- Use **Preview** or **Upload** to test on a device.

## 5) Pages in This Repo
Main pages configured in `miniprogram/app.json`:
- `pages/login/login` – login screen.
- `pages/work/work` – work list with tabs.
- `pages/home/home` – dashboard with feature cards.
- `pages/messages/messages` – message list with tabs + search.
- `pages/profile/profile` – user profile page.

## 6) Editing a Page (Example)
To edit the Home page:
- Layout: `miniprogram/pages/home/home.wxml`
- Style: `miniprogram/pages/home/home.wxss`
- Logic: `miniprogram/pages/home/home.ts` (and `.js` for runtime)

Example change:
1) Open `miniprogram/pages/home/home.wxml`.
2) Modify a text label.
3) Click **Compile** in DevTools to refresh.

## 7) TypeScript vs JavaScript
This project includes both `.ts` and `.js` page logic files to ensure compatibility in environments that do not compile TS on-device.
- If your DevTools is configured to compile TS, edit `.ts` files.
- If device debugging fails with modern syntax, also update the `.js` counterparts.

## 8) Custom Navigation & Tab Bar
- Navigation bar component: `miniprogram/components/navigation-bar/`
- Custom tab bar: `miniprogram/custom-tab-bar/`
  - Layout: `index.wxml`
  - Style: `index.wxss`
  - Logic: `index.ts`

When switching tabs, each page calls `getTabBar()` to keep the selected state.

## 9) Common Troubleshooting
- **app.json file error**: Ensure every page path listed in `app.json` has a matching `.wxml`, `.wxss`, `.json`, and `.js` file.
- **Syntax errors on device**: Avoid optional chaining (`?.`) in `.js` files for older runtimes.
- **Render issues**: Make sure the page looks correct in both Skyline and WebView modes.

## 10) Next Steps You Can Try
- Add a new page: create a new folder under `miniprogram/pages/` and register it in `miniprogram/app.json`.
- Add an icon set: place images in `miniprogram/` and reference them in `.wxml` or `.wxss`.
- Wire up navigation: use `wx.navigateTo()` for non-tab pages and `wx.switchTab()` for tab pages.

If you want, tell me the page you want to add next, and I’ll scaffold it for you.
