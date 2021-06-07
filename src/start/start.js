import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BulletScreen, { StyledBullet } from 'rc-bullets';
import "./start.scss"
const headUrl='https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
export default function Start() {
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  useEffect(() => {
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    let s = new BulletScreen('.screen',{duration:20});
    // or
    // let s=new BulletScreen(document.querySelector('.screen));
    setScreen(s);
  }, []);
  
  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };
  // 发送弹幕
  const handleSend = () => {
    if (bullet) {
      // push 纯文本
      //screen.push(bullet);
      // or 使用 StyledBullet
 
      screen.push(
        <StyledBullet
          head={headUrl}
          msg={bullet}
          backgroundColor={'#fff'}
          size='large'
        />
      );
      //style={{ }}
      // or 还可以这样使用，效果等同使用 StyledBullet 组件
     screen.push({msg:bullet,head:headUrl,color:"#eee",  backgroundColor:"rgba(2,2,2,.3)"})
     setBullet("");//input置空
    }
  };//      <input value={bullet} onChange={handleChange} />

  return (
    <main className="total">
      <div className="screen" ></div>
      <div className="btncon">
      <input value={bullet} onChange={handleChange} placeholder="博主真帅(Y/N)" className="myinput" autocomplete="off" />
      <button onClick={handleSend} className="mybtn"><svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>发送给博主的悄悄话</button>
      
      </div>
      <div className="mycon"><Link to="/self" className="mylink">进入博主的秘密小屋</Link></div>
     
    </main>

  );
}