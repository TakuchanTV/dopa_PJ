import React from "react";
import dopa_new_logo from "../Images/dopa_new_logo.png";
import styled  from "styled-components"
export const Footer = () => {
    return (
  <div>
    <Scolorfulrod></Scolorfulrod>
    <div>
    <Simg src={dopa_new_logo} />
    </div>
    <Sdivflex>
    <ul>
     <Sli>
       カテゴリー 
     </Sli>
     <Sli2>
       ポケモン
     </Sli2>
     <Sli2>
       ワンピース
     </Sli2>
     <Sli2>
       ドラゴンボール
     </Sli2>
     <Sli2>
       その他
     </Sli2>
     <Sli2>
       遊戯王
     </Sli2>
     <Sli2>
       ヴァイス
     </Sli2>
     <Sli2>
      ユニオンアリーナ
     </Sli2>
    </ul>
    <ul>
     <Sli>
       DOPA!について 
     </Sli>
     <Sli2>
       利用規約
     </Sli2>
     <Sli2>
       FAQ・お問い合わせ
     </Sli2>
     <Sli2>
       プライバシーポリシー
     </Sli2>
     <Sli2>
       特定商取引法に基づく表記
     </Sli2>
    </ul>
    <p>©2023 DOPA all rights reserved</p>
    </Sdivflex>
  </div>
    )
}
const Sli = styled.li`
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    display: flex;
`
const Sli2 = styled.li`
    list-style: none;
    font-size: 20px;
    color: #dd3851e0;
    &:hover{
      text-decoration: underline;
      color: #dd3851e0;
    }
`
const Simg = styled.img`
    width: 150px;
    margin-left: 100px;
    padding: 25px;
`
const Sdivflex = styled.div`
  display: flex;
`
const Scolorfulrod = styled.div`
    border-bottom: 5px solid;
    height: 300px;
    width: 80%;
    margin: 0 auto;
    border-image: linear-gradient(to right, rgb(233, 70, 70), #1ed724d6) 1;
  
`