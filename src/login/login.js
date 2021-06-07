import "./login.scss"
const Login=()=>{
    return <div className="main">
                <div className="oblock">
                    <div className="init_block">
                        <div className="title">
                            <p className="tt">登录</p>
                        </div>
                        <div className="body">
                            <from action=""  method="get">
                                <div className="input_block">
                                    <br/>
                                密码 &nbsp;<input type="text" name="username" className="inputs" />
                                <br/>

                                账号&nbsp;&nbsp;<input type="password" name="username"className="inputs"/>
                                <br/>
                                </div>
                                <input type="submit" value="登录" className="btn"></input>
                                <input type="submit" value="忘记密码" className="btn"></input>
                                
                            </from>
                        </div>
                    </div>
                </div>
            </div>
}
export default Login