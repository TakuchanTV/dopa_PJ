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

          <div className={styles.yen400}>
            <span className={styles.span1}>60%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span1000}>1,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥400</span>
          </div>

          <div className={styles.yen1500}>
            <span className={styles.span1}>50%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span3000}>3,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥1,500</span>
          </div>

          <div className={styles.yen3000}>
            <span className={styles.span1}>40%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span5000}>5,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥3,000</span>
          </div>

          <div className={styles.yen7000}>
            <span className={styles.span1}>30%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span10000}>10,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥7,000</span>
          </div>

          <div className={styles.yen26100}>
            <span className={styles.span1}>13%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span30000}>30,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥26,100</span>
          </div>

          <div className={styles.yen45000}>
            <span className={styles.span1}>10%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span50000}>50,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥45,000</span>
          </div>

          <div className={styles.yen90000}>
            <span className={styles.span1}>10%OFF
            </span>
            <span className={styles.span2}>
              <span className={styles.span100000}>100,000</span>
              <span className={styles.point}>point</span>
            <img src={Coin} />
            </span>
            <span className={styles.span3}>￥90,000</span>
          </div>
        </div>
    )
}