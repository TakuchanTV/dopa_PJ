import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/dragonball.module.css"
import yuugiouimg1 from "../Images/遊戯王ページの写真/yuugiouimg1.png"

import yuugiou1    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg1.png"
import yuugiou2    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg2.png"
import yuugiou3    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg3.png"
import yuugiou4    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg4.png"
import yuugiou5    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg5.png"
import yuugiou6    from "../Images/遊戯王ページの写真/遊戯王ページのリスト/遊戯王1のリスト写真/yuugiouimg6.png"

import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadpyuugiou } from "../Header/Navigatedp/Gachadpyuugiou.tsx";
import { ResYuugiou } from "../Responsivepages/ResYuugiou.tsx";
export const Yuugiou = () => {
  const GachaConfirm = ()  => {
    if (window.confirm("使用ポイント確認 \n 500PT消費して1枚引く")){
     window.alert("ありがとうございます")
    }else{
    }
  }
  const GachaConfirm10 = ()  => {
    if (window.confirm("使用ポイント確認 \n 5000PT消費して1枚引く")){
     window.alert("ありがとうございます")
    }else{
    }
  }
  const GachaConfirm100 = ()  => {
    if (window.confirm("使用ポイント確認 \n 50000PT消費して1枚引く")){
     window.alert("ありがとうございます")
    }else{
    }
  }
  const [isVisable, setIsVisable] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
     setIsVisable(false);
    },2500)
    return () => clearTimeout(timer)
  },[]);
    return (
      isVisable ? (
        <Loadingsquares />
      ) : (<ResYuugiou />)
    )
};