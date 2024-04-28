# uni-app

## 自定义字体图标
- 所有的自定义图标都是基于[阿里图标库](https://www.iconfont.cn/)进行扩展，其他图标库同理，明白原理即可方便扩展，[参考](https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html)
- [预览字体图标库](static/iconfont/demo_index.html)
- 使用方式如下：
```vue
<!-- 根据 static/iconfont/iconfont.json 文件下的图标对象的 unicode 属性在 unicode 属性的前面加入 `\u` 或者 '&#x' -->
<uni-icons fontFamily="iconfont" size="30" color="#2979ff">{{ '\ue632' }}</uni-icons>
<uni-icons fontFamily="iconfont" size="30" color="#2979ff">{{ '&#xe632' }}</uni-icons>
```