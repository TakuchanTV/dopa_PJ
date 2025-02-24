import React, { useEffect, useState } from "react"
import { Footer } from "../Footer/Footer.tsx";
import { Makingtab } from "../Header/Makingtab.tsx";
import { Banner } from "../Header/Banner.tsx";
import styles from "../ModuleCSS/vice.module.css"
import viceimg1 from "../Images/ヴァイスページの写真/vicepageimg1.png"

import vice1    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg1.png"
import vice2    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg2.png"
import vice3    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg3.png"
import vice4    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg4.png"
import vice5    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg5.png"
import vice6    from "../Images/ヴァイスページの写真/ヴァイス1のリスト写真/vicepageimg6.png"

import { PagesChangetag } from "../Header/PagesChange.tsx";
import spinerstyles from "../Loading/Loadingdots.module.css"
import { Loadingsquares } from "../Loading/Loadingsquares.tsx";
import { Gachadpvice } from "../Header/Navigatedp/Gachadpvice.tsx";
import { ResVice } from "../Responsivepages/ResVice.tsx";
export const Vice = () => {
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
      ) : (<ResVice />)
    )
};