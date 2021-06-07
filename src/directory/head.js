import {Link} from 'react-router-dom'
const Head=()=>{
    return <div className="head">
            <div className="btns">
            <span>welcome</span>
                <div className="link_list">
                    <ul><li ><Link to='/'className="le" >Home</Link></li>
                    <li ><Link to='/self'className="le" >个人信息</Link></li>
                    <li ><Link to='/resume'className="le" >简历</Link></li>
                    <li ><Link to='/'className="le" >友链</Link></li>
                    <li ><Link to='/'className="le" >Home</Link></li>
                    <li ><Link to='/'className="le" >写博客</Link></li>
                    </ul>
                </div>
                
        </div>
    </div>
}
export default Head