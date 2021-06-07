import "./card.scss"
const Card=(props)=>{
    return <div className="mycard">
        <span className="index">{props.index}</span>
        <div className="divtop">{props.title}</div>
        <div className="divbottom">{props.summary}</div>
        
        </div>
}
export default Card;