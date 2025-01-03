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
  </div>
    )
}
const Sli = styled.li`
    list-style: none;
    font-size: 20px;
    font-weight: bold;
`
const Sli2 = styled.li`
    list-style: none;
    font-size: 20px;
    color: #dd3851e0;
`
const Simg = styled.img`
    width: 150px;
    margin-left: 100px;
    padding: 25px;
`

const Scolorfulrod = styled.div`
    border-bottom: 5px solid;
    height: 300px;
    width: 80%;
    margin: 0 auto;
`