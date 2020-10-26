

// @ts-ignore
import styles from './image.css'
import LoadingMore from '../../components/LoadingMore/index'
import { useState } from 'react'
// import Example from '../../components/Example/index'

const data1 = [11,12,13,14,15,16,17,18,19,20]
const data2 = [21,22,23,24,25]

const Image=()=> {
    const [observer,setObserver] = useState(false)
    const [items,setItems]=useState([1,2,3,4,5,6,7,8,9,10])
    let liItem = items.map((item,index)=><li key={index} className={styles.item} >{item}</li>)


    const  getData=()=>{
        console.log(items.length,'000000')//方法里面的items.length一直是初始值
        if (items.length<11) {
            // debugger
            // setItems(items.concat(data2).slice())
            // setItems(Object.assign([], items, data2))
            let news = items.slice()
            news.push(...data1)
            setItems(news)
        }else if(items.length<21){
            let newd = items.slice()
            newd.push(...data2)
            setItems(newd)
        }else if(items.length>24){
            setObserver(true)
        }
    }
    console.log(items.length)
    return (
        <>
            {/*<ul className={styles.wrap}>*/}
            {/*{liItem}*/}
            {/*</ul>*/}
            {/*<div onClick={getData}>加载更多</div>*/}

            
            <div>--------------------------------</div>
            <LoadingMore
            loadText={"加载中..."}
            bottomText={"到底了·····"}
            scrollBack={getData}
            isStopObserver={observer}
            >{liItem}</LoadingMore>


            {/* 配置对象写法----暂时不用 */}
            {/* <Example
            config={}
            loadText={"加载中..."}
            bottomText={"到底了·····"}
            scrollBack={getData}
            isStopObserver={observer}
            >{liItem}</Example> */}
        </>
        )
}

export default Image

