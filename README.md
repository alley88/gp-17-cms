# 注意的地方
**在element-ui中一般情况下设计到组件嵌套的时候如何进行传值**
```vue
    <template>
         <zujian>
            <template slot-scope="props">
                <p>{{props.row.属性}}</p>
            </template>
         </zujian>
    </template>
```