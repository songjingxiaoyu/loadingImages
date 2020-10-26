
import {useRouter} from "next/router";

const Bag =()=>{
    let isLogin = false
    const ruter = useRouter()
    function login() {
        ruter.push('/login')
    }

    return(
        <>
            <div>Bag页面</div>
            {isLogin?(
                <div><button>SHOP NOW</button></div>
            ):(
                <div>
                    <div><button onClick={login}>SIGN IN / REGISTER</button></div>
                    <div><button>SHOP NOW</button></div>
                </div>
            )}
        </>
    )
}

export  default Bag