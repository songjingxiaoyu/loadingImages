
//配置对象写法-----暂时不用

import React from 'react'
import { useEffect } from 'react'


// 配置对象写法
type Props={
    config:{
        loadText: string//加载的文字
        bottomText:string//加载完数据的文字
        scrollBack: any//发请求的函数
        isStopObserver: boolean//什么时候停止观察元素，停止加载

    }
    children:any
}

let io:any=null
// 配置对象写法
const LodingMore = ({ config={loadText : "laoding...",bottomText:"end...", isStopObserver:false, scrollBack:()=>{},}, children }: Props) => {
    console.log(config)
    // console.log(scrollback())
    // const io:any = null
    useEffect(() => {
        intiateScrollObserver()
    }, [children.length])//当children.length变化时执行

    //定义观察
    const intiateScrollObserver = () => {
        let ele: any = document.querySelector('#bottom')//目标元素
        if(config.isStopObserver){
            io.unobserve(ele);
            return
        }
        if(io){
            io.disconnect();
        }
        const options = {
            rootMargin: "10px",  //用户传过来
            threshold: [0],//0面积的目标元素的相交率要么是 0 要么是 1
        }
        io = new IntersectionObserver(callback, options)
        io.observe(ele)//开始观察目标元素
    }
    //回调函数
    const callback = (entries: any, observer: any) => {
        entries.map((entry: any, index: any) => {
            if (entry.isIntersecting) {
                // console.log(entry.isIntersecting)//目标元素与视口是否相交/目标元素当前是否可见
                loadNext()
            } else {

            }
        })
    }
    //加载下一页
    const loadNext = () => {
        config.scrollBack()
    }
    //渲染页面
    return (
        <>
            {children}
            <div id="bottom">{!config.isStopObserver ? config.loadText : ""}</div>
            <div>{config.isStopObserver ? config.bottomText : ""}</div>
        </>
    )
}
export default LodingMore