import React from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/vice.module.css"
import viceimg1 from "../Images/ヴァイスページの写真/vicepageimg1.png"
import viceimg2 from "../Images/ヴァイスページの写真/vicepageimg2.png"
import viceimg3 from "../Images/ヴァイスページの写真/vicepageimg3.png"
import viceimg4 from "../Images/ヴァイスページの写真/vicepageimg4.png"
import viceimg5 from "../Images/ヴァイスページの写真/vicepageimg5.png"
import viceimg6 from "../Images/ヴァイスページの写真/vicepageimg6.png"
import vice1    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg1.png"
import vice2    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg2.png"
import vice3    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg3.png"
import vice4    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg4.png"
import vice5    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg5.png"
import vice6    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg6.png"
import vice2_1    from "../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg1.png"
import vice2_2    from "../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg2.png"
import vice2_3    from "../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg3.png"
import vice2_4    from "../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg4.png"
import vice2_5    from "../Images/ヴァイスページの写真/ヴァイス2のリスト写真/vicepageimg5.png"
import vice3_1    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg1.png"
import vice3_2    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg2.png"
import vice3_3    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg3.png"
import vice3_4    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg4.png"
import vice3_5    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg5.png"
import vice3_6    from "../Images/ヴァイスページの写真/ヴァイス3のリスト写真/vicepageimg6.png"
import vice4_1    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg1.png"
import vice4_2    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg2.png"
import vice4_3    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg3.png"
import vice4_4    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg4.png"
import vice4_5    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg5.png"
import vice4_6    from "../Images/ヴァイスページの写真/ヴァイス4のリスト写真/vicepageimg6.png"
import vice5_1    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg1.png"
import vice5_2    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg2.png"
import vice5_3    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg3.png"
import vice5_4    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg4.png"
import vice5_5    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg5.png"
import vice5_6    from "../Images/ヴァイスページの写真/ヴァイス5のリスト写真/vicepageimg6.png"
import vice6_1    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg1.png"
import vice6_2    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg2.png"
import vice6_3    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg3.png"
import vice6_4    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg4.png"
import vice6_5    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg5.png"
import vice6_6    from "../Images/ヴァイスページの写真/ヴァイス6のリスト写真/vicepageimg6.png"
export const Vice = () => {
    return (
        <div>
            <Makingtab />
            <Banner />
            <div>
               <div className={styles.Div1}>
                 <div className={styles.div1}>
                  <img src={viceimg1} className={styles.img} /> 
                   <div className={styles.list1}>
                    <span className={styles.span1}>
                    <img src={vice1} className={styles.img1}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={vice2} className={styles.img2}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={vice3} className={styles.img3}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={vice4} className={styles.img4}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={vice5} className={styles.img5}/>
                    </span>
                    <span className={styles.span1}>
                    <img src={vice6} className={styles.img6}/>
                    </span>
                   </div> 
                   <button className={styles.button1}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>
                 </div>
                 <div className={styles.div2}>
                  <img src={viceimg2} className={styles.img} /> 
                  <div className={styles.list2}>
                  <span className={styles.span2}>
                    <img src={vice2_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={vice2_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={vice2_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={vice2_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span2}>
                    <img src={vice2_5} className={styles.img5}/>
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
                  <img src={viceimg3} className={styles.img} /> 
                  <div className={styles.list3}>
                  <span className={styles.span3}>
                    <img src={vice3_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={vice3_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={vice3_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={vice3_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={vice3_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span3}>
                    <img src={vice3_6} className={styles.img6}/>
                    </span>
                   </div>
                   <button className={styles.button3}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>  
                 </div>
                 <div className={styles.div4}>
                  <img src={viceimg4} className={styles.img} />
                  <div className={styles.list4}>
                  <span className={styles.span4}>
                    <img src={vice4_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={vice4_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={vice4_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={vice4_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={vice4_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span4}>
                    <img src={vice4_6} className={styles.img6}/>
                    </span>
                   </div>
                   <button className={styles.button4}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>    
                 </div>
               </div>
               <div className={styles.Div3}>
               <div className={styles.div5}>
                  <img src={viceimg5} className={styles.img} /> 
                  <div className={styles.list5}>
                  <span className={styles.span5}>
                    <img src={vice5_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span5}>
                    <img src={vice5_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span5}>
                    <img src={vice5_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span5}>
                    <img src={vice5_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span5}>
                    <img src={vice5_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span5}>
                    <img src={vice5_6} className={styles.img6}/>
                    </span>
                   </div>
                   <div className={styles.button}>
                   <button className={styles.button5_1}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>  
                   <button className={styles.button5_2}>
                    <span className={styles.gacha}></span>
                    <span>10連ガチャ</span>
                   </button>  
                   </div>
                 </div>
                 <div className={styles.div6}>
                  <img src={viceimg6} className={styles.img} /> 
                  <div className={styles.list6}>
                  <span className={styles.span6}>
                    <img src={vice6_1} className={styles.img1}/>
                    </span>
                    <span className={styles.span6}>
                    <img src={vice6_2} className={styles.img2}/>
                    </span>
                    <span className={styles.span6}>
                    <img src={vice6_3} className={styles.img3}/>
                    </span>
                    <span className={styles.span6}>
                    <img src={vice6_4} className={styles.img4}/>
                    </span>
                    <span className={styles.span6}>
                    <img src={vice6_5} className={styles.img5}/>
                    </span>
                    <span className={styles.span6}>
                    <img src={vice6_6} className={styles.img6}/>
                    </span>
                   </div>
                   <button className={styles.button6}>
                    <span className={styles.gacha}></span>
                    <span>1回ガチャ</span>
                   </button>  
                 </div>
               </div>
             </div>
           <Footer />
        </div>
    )
};