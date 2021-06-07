import Card  from "./card"

const Contentcenter=()=>{
    let  list=[{title:"行业因素、个人特征与高管薪酬——基于分层模型的研究",summary:"文章选取了2019年沪深两市A股上市公司的高管个人信息和公司信息为样本,利用HLM多层线性回归模型,研究了影响高管薪酬的个人特征和行业因素,并且进一步探讨行业因素是如何通过影响个人特征来影响高管薪酬的。研究结论显示:高管个人特征对其薪酬有着显著影响,高管薪酬整体差异中有16.7%是由行业因素的差异而产生的,并且行业规模对于高管个人特征(性别和年龄)的薪酬回报率具有显著影响。"},
    {title:"国有企业高管薪酬与股价崩盘风险——“有效管制”还是“过度约束”?",summary:"本文以2008～2018年A股国有企业上市公司为研究样本,从股价崩盘风险的视角,探讨国有企业不同时期薪酬管制政策究竟是有效管制还是过度约束。研究发现:在2008～2018年间,国有企业高管货币薪酬与股价崩盘风险显著正相关,在职消费与股价崩盘风险呈U型关系。整体而言,国有企业薪酬在管制背景下表现出过度约束的特征。结合不同样本期间的限薪政策研究发现,2009年限薪令颁布后高..."},
    {title:"基于金融科技上市公司的企业风险研究",summary:"通过广泛阅读相关文献,对发现企业面对的风险、风险出现的原因进行研究,采用Python爬虫获取金融科技上市企业数据及不同种类的风险事件的数据,再进行数据分析和金融科技与企业风险相关性研究。通过数据集对模型的验证,得出模型的正确率为0.834。结果表明:企业刚进入金融科技业务模块,提高了企业效率,降低了企业风险,随着金融科技发展的逐步深入,金融科技在企业中占比越来越多时,企业风险随之变高;同时,企业地区经营范围和企业年限带来的风险容易组合出现,企业规模和高管薪酬造成的风险容易组合出现,企业年限、企业利润和企业高管薪酬带来的风险容易组合出现,要特别注意企业年限和高管薪酬,原因在于容易与别的因素组合带来风险组合效应。 "}]
    const elements=[]
    return <div className="list">
        {list.forEach((item,index)=>{
            elements.push(<Card  index={index+1}title={item.title} summary={item.summary}/>)
        })}
        {elements}
    </div>
 }
export default Contentcenter