


import {withRouter} from 'next/router'
import Link from 'next/link'
// import styles from '../styles/vue3-demo.css'
import axios from 'axios'
import useSWR from 'swr'


const Demo=({router,city})=> {

    function query() {
        console.log(router)
        console.log(router.query.name)
    }
    const  getData= ()=>{
        fetch('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')
          .then(response => response.json())
          .then(data => console.log(data));
    }

  return (
      <>
          <div >Demo</div>
          <div onClick={query}>接收的参数{router.query.name}</div>
          <div onClick={query}>接收的参数{router.query.age}</div>
          <div>{city}</div>
          <div><button onClick={getData}>点我获取数据</button></div>
      </>
  )
}
//请求只能写在getInitialProps里面
// Demo.getInitialProps = async ()=>{
//     const promise = new Promise((resolve) => {
//         axios('https://www.tianqiapi.com/api/?version=v1&city=%E5%8C%97%E4%BA%AC&appid=23941491&appsecret=TXoD5e8P')
//             .then(
//             (res)=>{
//                 console.log('请求数据结果:',res.data)
//                 resolve(res.data)
//             }
//         )
//     })
//     return await promise
// }



export default withRouter(Demo)