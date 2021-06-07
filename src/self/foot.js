import { Link } from "react-router-dom"

const Foot=()=>{
    return <div className="foot">
        
        <div className="myby">by Maurice</div>
        <div class="links">
            <Link to="/" className='le'>企业服务</Link>
            &nbsp;|&nbsp;
            <Link to="/"className='le'>品牌介绍</Link>
            &nbsp;|&nbsp;
            <Link to="/"className='le'>关于我们</Link>
            &nbsp;|&nbsp;
            <Link to="/"className='le'>问题反馈</Link>
            &nbsp;|&nbsp;
            <Link to="/"className='le'>帮助中心</Link>
            &nbsp;|&nbsp;
            
            
            <Link to="/"className='le'>使用条例</Link>
            &nbsp;|&nbsp;
            <Link to="/"className='le'>隐私政策</Link>
            
             
            
          </div>
       </div>
}
export default Foot