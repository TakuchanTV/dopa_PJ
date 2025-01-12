import React from 'react'
import styles from "../ModuleCSS/Termsofservice.module.css"
import { useNavigate } from 'react-router-dom'
import { Makingtab } from '../Header/Makingtab.tsx';
import { Footer } from '../Footer/Footer.tsx';

export const Termsofservice = () => {
  const navigate = useNavigate();
  const navigateBackpage = () => navigate(-1)
  return (
   <div className={styles.terms}>
       <Makingtab />
       <div className={styles.div}>
         <span onClick={navigateBackpage}>戻る</span>
         <h2>利用規約</h2>
         <p>この「利用規約」（以下「本規約」と言う。）は、株式会社sinsa（以下「当社」と言う。）が提供するサイト（以下「本サイト」と言う。）
            <br />
            において、当社が提供するサービス（以下「本サービス」と言う。）に関する条件及び当社とサービス利用者（第1条第3号で定義）との
            <br /> 
            権利義務関係について定めたものである。なお、本規約は、当社が本サービスに関して別に定める規程にも適用される。</p>
         <h3>第1条(用語の定義)</h3>
         <p>本規約における以下の各号の用語の意味は、当該各号に定めるとおりとする。</p>   
         <p>1. 「DOPA!オリパ」とは、当社が提供するサイト(dopa-game.jp)のことを言う。</p>   
         <p>2. 「サービス利用契約」とは、DOPA!オリパの利用に関する契約を言う。</p>   
         <p>3. 「サービス利用者」とは、当社とサービス利用契約を締結した者を言う。</p>   
         <p>4. 「アカウント」とは、サービス利用者がDOPA!オリパに登録したサービス利用者に関する情報を言う。</p>   
         <p>5. 「パスワード」とは、サービス利用者自身で作成した英数字の組み合わせで構成される暗号を言う。</p>   
         <p>6. 「メールアドレス」とは、サービス利用者が本サービスに登録したメールアドレスを言う。</p>   

       </div>
       <Footer /> 
   </div> 
  )
}
