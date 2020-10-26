//使用IntersectionObserver实现图片懒加载

import { useEffect } from "react"
// @ts-ignore  //隐藏下一行报错
import styles from './index.css'


let io:any=null
const lazyImages =()=>{
    useEffect(() => {
        intiateScrollObserver()
    }, [])//当[]变化时执行

        //定义观察
        const intiateScrollObserver = () => {
            let listItems: any  = document.querySelectorAll('#list-item-img');//目标元素
            if(io){
                io.disconnect();
            }
            const options = {
                rootMargin: "10px",
                threshold: [0.1],//0面积的目标元素的相交率要么是 0 要么是 1
            }
            io = new IntersectionObserver(callback, options)
            listItems.forEach(function(item:any) {//开始观察目标元素
                io.observe(item);
              });
        }

        //回调函数
        const callback = (entries: any, observer: any) => {
            entries.map((entry: any, index: any) => {
                if (entry.isIntersecting) {
                    entry.target.src = entry.target.dataset.src;
                    io.unobserve(entry.target)//停止观察
                    console.log(entry)
                    // console.log(entry.target.src)//真正的src
                    // console.log(entry.target.dataset.src)//data-src
                  }
            })
        }
        

    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3311483016,1601079142&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=334728323,881256750&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395899339,2365929056&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2697525647,2177934395&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=389889513,3189949582&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600653034,2500120156&fm=26&gp=0.jpg" /></div>
                </div>
                <div className={styles.right}> 
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2748155661,3227829595&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3033438378,4156670815&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3060701342,3980829113&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2558502568,4025524260&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="/images/WechatIMG14.jpeg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} id="list-item-img" alt="loading" data-src="/images/WechatIMG15.jpeg" /></div>
                </div>
            </div>
        </>
    )

}
export default lazyImages