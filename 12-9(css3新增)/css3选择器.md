# css3选择器
- 权重的顺序：！important(10000) > 行内样式(1000)>id选择器>类选择器> 标签选择器>通配符>继承> 默认
- nth-child() 这个代表的是选中所有儿子元素中的第几个
  - first-child:第一个子元素
  - last-child: 最后一个子元素
  - nth-last-child():倒着数第几个元素
```
/*不确定你要找的元素是那个标签可以直接写，不带标签*/
#box :nth-child(4){
        color: red;
    }
#box div:nth-child(4){
        color: red;
    }
```
- nth-of-type() 是选中儿子元素中特定类型中的第几个
  - nth-last-of-type(2)倒着数
  - first-of-type 第一个
  - last-of-type 最后一个
```
<style>  
    #box div:nth-of-type(2){
        color: red;
    }
    </style>
</head>
<body>
    <div id="box">
        <p>5</p>
        <p>6</p>
        <p>7</p>
       <div >1</div>
       <div>2</div>
       <div class="aa">3</div>
       <div class="bb">4</div>
       <p>8</p>
       <p>9</p>
       <p>10</p>
    </div>
```
- :empty 表示选择没有子元素的元素，并且没有任何文本节点的元素(伪类选择器，本身权重10，组合选择器之和)
```
 <style>
    :empty{
        height: 100px;
        width: 100px;
        background: red;
    }
    
    </style>
</head>
<body>
    <div></div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
</body>
```
- even:偶数
- odd:奇数
- 在改变组件的样式时可以使用!important
```
#box{
            background: lawngreen ! important
        }
``` 