import {Link} from 'react-router-dom'
const Head=()=>{
    return <div className="head">
            <div className="btns">
            <span>welcome</span>
                <div className="link_list">
                    <ul><li ><Link to='/'className="le" >Home</Link></li>
                    <li ><Link to='/directory'className="le" >文章</Link></li>
                    <li ><Link to='/'className="le" >友链</Link></li>
                    <li ><Link to='/'className="le" >Home</Link></li>
                    <li ><Link to='/'className="le" >写博客</Link></li>
                    </ul>
                </div>
                
        </div>
    </div>
}
export default Head