import Contentcenter from "./content_center"
import Contentright from "./content_right"
import Contentleft from "./content_left"
const Content=()=>{
    return <div className="content">
        <div className="content-right"><Contentright/></div>
        <div className="leftdiv"></div>
        <div className="main-content-center"><Contentcenter/></div>
        <div className="rightdiv"></div>
        <div className="content-left"><Contentleft/></div>
        
        
    </div>
}
export default Content