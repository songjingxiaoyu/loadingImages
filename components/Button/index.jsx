

import Link from 'next/link'

const Button=()=> {
    return (
        <>
            <div >
                <Link href="/Login" as="/login"><button >登录</button></Link><br/>
                <Link href="/Register" as="/register"><button>注册</button></Link><br/>
                <Link href="/Dem" as="/dem"><button>dem页面-传参</button></Link><br/>
                <Link href="/Demo" as="/demo"><button>demo页面-发请求</button></Link><br/>
                <Link href="/Time" as="/time"><button>time页面-懒加载</button></Link><br/>
                <Link href="/Header" as="/header"><button>header页面-自定义Head</button></Link><br/>
                <Link href="/Swr" as="/swr"><button>swr页面-天气</button></Link><br/>
                <Link href="/get" as="/get"><button>get页面</button></Link><br/>
                <Link href="/loadingImage" as="/loadingImage"><button>加载更多数据页面</button></Link><br/>
                <Link href="/lazyimages" as="/lazyimages"><button>IntersectionObserver图片懒加载</button></Link><br/>
                <Link href="/loadinglazy" as="/loadinglazy"><button>loading="lazy"图片懒加载</button></Link><br/>
            </div>
        </>
    )
}

export default Button