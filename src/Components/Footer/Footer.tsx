import React from "react";
import dopa_new_logo from "../Images/dopa_new_logo.png";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate()
  const PageArray: string[] = [
    "/pokemon",
    "/onepiece",
    "/dragonball",
    "/others",
    "/yuugiou",
    "/vice",
    "/unionarena",
    "/"
  ]
  console.log(PageArray);


  const navigateEachPages = (i: number) => {
    navigate(PageArray[i])
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Scolorfulrod></Scolorfulrod>
      <Simgdiv>
        <Simg src={dopa_new_logo} onClick={() => navigateEachPages(7)} />
      </Simgdiv>
      <Sdivflex>
        <ul>
          <Sli>
            カテゴリー
          </Sli>
          <Sli2 onClick={() => navigateEachPages(0)}>
            ポケモン
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(1)}>
            ワンピース
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(2)}>
            ドラゴンボール
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(3)}>
            その他
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(4)}>
            遊戯王
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(5)}>
            ヴァイス
          </Sli2>
          <Sli2 onClick={() => navigateEachPages(6)}>
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
        <Copyright>©2023 DOPA all rights reserved</Copyright>
      </Sdivflex>
    </div>
  )
}

const Sli = styled.li`
    /* list-style: none; */
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px,
`
const Sli2 = styled.li`
    list-style: none;
    font-size: 20px;
    color: #dd3851e0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &:hover{
      text-decoration: underline;
      color: #dd3851e0;
    }
`
const Simgdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-10%);
`
const Simg = styled.img`
    width: 150px;
    margin-left: 100px;
    padding: 25px;
   
`
const Sdivflex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  transform: translateX(30px);
`
const Scolorfulrod = styled.div`
    border-bottom: 5px solid;
    height: 150px;
    width: 80%;
    margin: 0 auto;
    border-image: linear-gradient(to right, rgb(233, 70, 70), #1ed724d6) 1;
  
`
const Copyright = styled.p`
  font-size: 10px;
  transform: translateX(50px);
`