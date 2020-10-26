


import Link from 'next/link'
import Router from 'next/router'

const Dem=()=> {
    //钩子事件
    //routeChangeStart
    //routeChangeComplete
    //beforeHistoryChange
    //routeChangeError
    //hasgChangeStart
    //hashChangeComplete
    //history
    Router.events.on('routeChangeStart',(...args)=>{
        console.log('1.routeChangeStart--当路线开始改变时触发，参数为:',...args)
    })
    Router.events.on('routeChangeComplete',(...args)=>{
        console.log('2.routeChangeComplete--路线完全改变时触发，参数为:',...args)
    })
    Router.events.on('beforeHistoryChange',(...args)=>{
        console.log('3.beforeHistoryChange--在更改浏览器的历史记录之前触发，参数为:',...args)
    })
    Router.events.on('routeChangeError',(...args)=>{
        //404不算
        console.log('4.routeChangeError--更改路线时发生错误或取消路线负载时触发，参数为:',...args)
    })
    //hash
    Router.events.on('hasgChangeStart',(...args)=>{
        console.log('5.hasgChangeStart--当哈希值改变但页面不改变时触发，参数为:',...args)
    })
    Router.events.on('hashChangeComplete',(...args)=>{
        console.log('6.hashChangeComplete--哈希值更改但页面未更改时触发，参数为:',...args)
    })

    function goXiaoMing() {
        Router.push({
            pathname:'/vue3-demo',
            query:{name:'小明'}
        })
    }
    return (
        <>
            <div>Dem</div>
            <div>
                <Link href='/vue3-demo?name=小明&age=18'><a>小明</a></Link><br/>
                <Link href={{pathname:'/vue3-demo',query:{name:'小红'}}}><a>小红</a></Link>
            </div>
            <div><button onClick={goXiaoMing}>选小明</button></div>
            <div><Link href='#demo'><a>hash模式</a></Link></div>
        </>
    )
}


export default Dem