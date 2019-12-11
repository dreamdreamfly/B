- opacity:透明度
  - 0:完全透明（transparent）
  - 1：完全不透明
- 渐变：
  - liner-gradient：线性渐变（至少两种颜色）
  - to left 从右向左
  - to right 从左向右
  - to top 从下向上
  - to bottom 从上向下（默认的）
  - 对角的
  - to left top 从右下向左上等
```
background:linear-gradient(to left,red,green)
background:linear-gradient(rgba(225,100,255,0.2),rgba(225,100,255,0.8))
```
  - radial-gradients：径向渐变（至少两种颜色）
  - ellipse椭圆（默认的），circle圆
```
background:radial-gradient(circle,red,green,yellow)
```
- rgba:是代表Red（红色） Green（绿色） Blue（蓝色）和 Alpha（不透明度）四个单词的缩写,前三个是0~225，第四个值是0到1
- 高斯模糊
```
filter: blur(5px);
```