

import { GetStaticProps } from 'next'
import {demo} from '../interfaces/index'
import { useEffect, useState} from 'react'

type Props = {
    posts:demo
}
const Get =({posts}:Props)=>{
    // @ts-ignore
    let data = posts.data
    const [name,setName]=useState(data[0].name)
    useEffect(()=>{
             setName('haha')
        console.log(name)
         },[])
     function getData() {
         console.log( data instanceof  Array )
         console.log(data)
         console.log(name)
    }

    return(
        <>
            <div>Get页面</div>
            <div><button onClick={getData}>点击获取数据</button></div>
            <div>{name}</div>
              {data.map((item:any) => {
                  return (
                      <ul key={item.id}>
                          <li>{item.name}</li>
                          <li>{item.age}</li>
                      </ul>
                  )
              })}
        </>
    )


}
export const getStaticProps: GetStaticProps = async () =>{
    try{
        const res = await fetch('http://localhost:3001/demo')
        let posts = await res.json()
        return {
            props:{
                posts
            }
        }
    }catch (e) {
        console.error(e)
        return {props:{}}
    }

}


export default Get