

import React from 'react'
import { useEffect } from 'react'

type Props = {
    loadText: string//加载的文字
    bottomText:string//加载完数据的文字
    scrollBack: any//发请求的函数
    isStopObserver: boolean//什么时候停止观察元素，停止加载
    children: any//渲染的元素
}

let io:any=null
const LodingMore = ({ loadText = "laoding...",bottomText="end...", isStopObserver=false, scrollBack, children }: Props) => {
    useEffect(() => {
        intiateScrollObserver()
    }, [children.length])//当children.length变化时执行

    //定义观察
    const intiateScrollObserver = () => {
        let ele: any = document.querySelector('#bottom')//目标元素
        if(isStopObserver){
            io.unobserve(ele);//停止观察
            return//如果停止加载则直接返回，不再执行以下代码
        }
        if(io){
            io.disconnect();//如果有，就关闭观察器
        }
        const options = {
            rootMargin: "10px",  //可以用户传过来
            threshold: [0],//0面积的目标元素的相交率要么是 0 要么是 1
        }
        io = new IntersectionObserver(callback, options)
        io.observe(ele)//开始观察目标元素
    }
    //回调函数
    const callback = (entries: any, observer: any) => {
        entries.map((entry: any, index: any) => {
            console.log(entry)
            if (entry.isIntersecting) {
                console.log(entry.isIntersecting)//目标元素与视口是否相交/目标元素当前是否可见
                loadNext()
            } else {

            }
        })
    }
    //加载下一页
    const loadNext = () => {
        scrollBack()
    }
    //渲染页面
    return (
        <>
            {children}
            <div id="bottom">{!isStopObserver ? loadText : ""}</div>
            <div>{isStopObserver?bottomText:""}</div>
        </>
    )
}
export default LodingMore