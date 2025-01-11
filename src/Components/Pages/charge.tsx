import React from "react";
import styles from "../ModuleCSS/charge.module.css"
import Coin from "../Images/Coin.png"

export const Charge = () => {
    return (
        <div className={styles.charge}>
          <p>ポイントを選択</p>
          <br />
          <span>クレジットカード、バーコード決済、デジタルウォレット、銀行振込等で決済が可能です。</span>
          <div className={styles.yen60}>
            <span className={styles.span1}>88%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span500}>500</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥60</span>
          </div>
        </div>
    )
}