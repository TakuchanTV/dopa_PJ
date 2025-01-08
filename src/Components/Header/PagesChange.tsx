import React, {  useEffect, useState } from "react"
import styles from "../Header/PagesChangetag.module.css"
import { useLocation, useNavigate } from "react-router-dom"
export const PagesChangetag = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = useState<number | null>(null)
    const PageArray:string[] = [
        "/pokemon",
        "/onepiece",
        "/dragonball",
        "/yuugiou",
        "/vice",
        "/unionarena",
        "/dp",
        "/stepup",
        "/others",
      ];

    const handleActive = (i:number) => {
        navigate(PageArray[i-1])
        setIsActive(i)
    }

    useEffect(() => {
       const index = PageArray.indexOf(location.pathname);
       if (index !== -1) {
        setIsActive(index + 1);
       }
    },[location.pathname, PageArray])
    return (
      <div className={styles.tag}>
        <div className={styles.spandiv}>
          <div>
           <span className={`${styles.span1} ${isActive === 1? styles.active : ""}`} onClick={() =>handleActive(1)} >ポケモン</span>
          </div>
          <div>
           <span className={`${styles.span2} ${isActive === 2? styles.active : ""}`} onClick={() =>handleActive(2)}>ワンピース</span>
          </div> 
          <div>
           <span className={`${styles.span3} ${isActive === 3? styles.active : ""}`} onClick={() =>handleActive(3)}>ドラゴンボール</span>
          </div> 
          <div>
           <span className={`${styles.span4} ${isActive === 4? styles.active : ""}`} onClick={() =>handleActive(4)}>遊戯王</span>
          </div> 
          <div>
           <span className={`${styles.span5} ${isActive === 5? styles.active : ""}`} onClick={() =>handleActive(5)}>ヴァイス</span>
          </div> 
          <div>
           <span className={`${styles.span6} ${isActive === 6? styles.active : ""}`} onClick={() =>handleActive(6)}>ユニオンアリーナ</span>
          </div> 
          <div>
           <span className={`${styles.span7} ${isActive === 7? styles.active : ""}`} onClick={() =>handleActive(7)}>DPガチャ</span>
          </div> 
          <div>
           <span className={`${styles.span8} ${isActive === 8? styles.active : ""}`} onClick={() =>handleActive(8)}>ステップアップガチャ</span>
          </div> 
          <div>
           <span className={`${styles.span9} ${isActive === 9? styles.active : ""}`} onClick={() =>handleActive(9)}>その他</span>
          </div> 
        </div>
      </div>  
    )
}