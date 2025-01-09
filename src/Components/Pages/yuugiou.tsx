import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/dragonball.module.css"
import yuugiouimg1 from "../Images/遊戯王ページの写真/yuugiouimg1.png"
import yuugiouimg2 from "../Images/遊戯王ページの写真/yuugiouimg2.png"
import yuugiouimg3 from "../Images/遊戯王ページの写真/yuugiouimg3.png"
import yuugiouimg4 from "../Images/遊戯王ページの写真/yuugiouimg4.png"
import yuugiou1    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg1.png"
import yuugiou2    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg2.png"
import yuugiou3    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg3.png"
import yuugiou4    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg4.png"
import yuugiou5    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg5.png"
import yuugiou6    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg6.png"
import yuugiou2_1    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg1.png"
import yuugiou2_2    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg2.png"
import yuugiou2_3    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg3.png"
import yuugiou2_4    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg4.png"
import yuugiou2_5    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王2のリスト写真/yuugiouimg5.png"
import yuugiou3_1    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg1.png"
import yuugiou3_2    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg2.png"
import yuugiou3_3    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg3.png"
import yuugiou3_4    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg4.png"
import yuugiou3_5    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg5.png"
import yuugiou3_6    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王3のリスト写真/yuugiouimg6.png"
import yuugiou4_1    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg1.png"
import yuugiou4_2    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg2.png"
import yuugiou4_3    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg3.png"
import yuugiou4_4    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg4.png"
import yuugiou4_5    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg5.png"
import yuugiou4_6    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王4のリスト写真/yuugiouimg6.png"
import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
export const Yuugiou = () => {
  const [isVisable, setIsVisable] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
     setIsVisable(false);
    },2500)
    return () => clearTimeout(timer)
  },[]);
    return (
      isVisable ? (
        <div className={spinerstyles.spindiv}>
                          <div className={spinerstyles.spinnerbox}>
                             <div className={spinerstyles.pulsecontainer}>
                                <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble1}`}></div>
                                <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble2}`}></div>
                                <div className={`${spinerstyles.pulsebubble} ${spinerstyles.pulsebubble3}`}></div>
                            </div>
                          </div>
                        </div>
      ) : (
        <div>
            <Makingtab />
            <Banner />
            <PagesChangetag />
            <div>
               <div className={styles.Div1}>
                 <div className={styles.div1}>
                  <img src={yuugiouimg1} className={styles.img} /> 
                   <div className={styles.list1}>
                    <span className={styles.span1}>
                    <img src={yuugiou1} className={styles.img1}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={yuugiou2} className={styles.img2}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={yuugiou3} className={styles.img3}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={yuugiou4} className={styles.img4}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={yuugiou5} className={styles.img5}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={yuugiou6} className={styles.img6}/>
                    </span>
                   </div> 
                   <button className={styles.button1}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>
                 </div>
                 <div className={styles.div2}>
                  <img src={yuugiouimg2} className={styles.img} /> 
                  <div className={styles.list2}>
                  <span className={styles.span2}>
                    <img src={yuugiou2_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={yuugiou2_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={yuugiou2_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={yuugiou2_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={yuugiou2_5} className={styles.img5}/>
                    </span>
                   </div>
                   <button className={styles.button2}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>  
                 </div>
               </div>
               <div className={styles.Div2}>
                 <div className={styles.div3}>
                  <img src={yuugiouimg3} className={styles.img} /> 
                  <div className={styles.list3}>
                  <span className={styles.span3}>
                    <img src={yuugiou3_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={yuugiou3_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={yuugiou3_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={yuugiou3_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={yuugiou3_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={yuugiou3_6} className={styles.img6}/>
                    </span>
                   </div>
                   <button className={styles.button3}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>  
                 </div>
                 <div className={styles.div4}>
                  <img src={yuugiouimg4} className={styles.img} />
                  <div className={styles.list4}>
                  <span className={styles.span4}>
                    <img src={yuugiou4_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={yuugiou4_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={yuugiou4_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={yuugiou4_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={yuugiou4_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={yuugiou4_6} className={styles.img6}/>
                    </span>
                   </div>
                   <button className={styles.button4}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>    
                 </div>
               </div>
             </div>
           <Footer />
        </div>
      )
    )
};