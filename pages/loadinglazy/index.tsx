//使用loading="lazy"属性实现图片懒加载-----有待考量

// @ts-ignore  //隐藏下一行报错
import styles from './index.css'


const lazyImages =()=>{
    return (
        <>
            <div className={styles.wrap}>
                <div className={styles.left}>
                    {/* iframe内联框架 ----一般独立页面使用，比如广告*/}
                    {/* <iframe src="/images/WechatIMG14.jpeg"></iframe> */}
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="/images/WechatIMG14.jpeg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="/images/WechatIMG15.jpeg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3311483016,1601079142&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=334728323,881256750&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3395899339,2365929056&fm=26&gp=0.jpg"/></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2697525647,2177934395&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=389889513,3189949582&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600653034,2500120156&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2748155661,3227829595&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3033438378,4156670815&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3060701342,3980829113&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2558502568,4025524260&fm=26&gp=0.jpg" /></div>
                </div>
                <div className={styles.right}> 
                    {/* <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2748155661,3227829595&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3033438378,4156670815&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3060701342,3980829113&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2558502568,4025524260&fm=26&gp=0.jpg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="/images/WechatIMG14.jpeg" /></div>
                    <div className={styles.liItem}><img className={styles.listItemImg} loading="lazy" alt="loading" src="/images/WechatIMG15.jpeg" /></div> */}
                </div>
            </div>
        </>
    )

}
export default lazyImages