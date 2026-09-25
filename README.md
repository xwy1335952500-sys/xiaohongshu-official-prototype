# 小红书官网内容原型

一个面向普通用户的小红书产品官网原型，从真实生活内容、内容与直播、用户价值、品牌合作案例和联系合作等角度，展示完整的官网信息架构与交互方向。

## 功能

- 首页图片相册与视频笔记切换
- 真实生活内容和明星买手直播展示
- 汽车、美妆、服饰、户外等行业案例筛选
- 卡片堆叠、滚动显现、平滑滚动和悬停微交互
- 桌面端与移动端响应式布局
- 对“减少动态效果”系统偏好的降级支持

## 本地预览

项目是纯静态网站，可直接打开 `dist/index.html`，或在项目根目录启动任意静态文件服务：

```bash
python3 -m http.server 4173 --directory dist
```

然后访问 `http://127.0.0.1:4173/`。

## 目录

```text
dist/                  可直接发布的静态网站
dist/assets/           样式、脚本、图片和开源依赖
REQUIREMENTS.md        需求分析与交互说明
```

## 声明与素材许可

本项目是学习与产品原型，与小红书官方无关，不代表官方立场或正式上线版本。

MIT 许可仅适用于本仓库中的原创代码。小红书名称、Logo、商标，以及 `dist/assets/real/` 中的用户照片、品牌案例图、视频封面和其他第三方素材不在 MIT 许可范围内，其权利归原权利人所有。正式商业使用前请另行获得授权。素材来源见 [`dist/assets/real/SOURCES.md`](dist/assets/real/SOURCES.md)。

## License

Original code is available under the [MIT License](LICENSE). Brand names, trademarks, photographs, campaign imagery, video covers, and other third-party assets are excluded.
