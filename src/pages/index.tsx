import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [kakigoriAmount, setKakigori] = useState(0);
  const [rennyuAmount, setRennyu] = useState(0);
  const [kakehodaiAmount, setKakehodai] = useState(0);
  const [drinkAmount, setDrink] = useState(0);

  const clickHandler = (e: any) => {
    switch (e.target.name) {
      case "kakigori":
        setKakigori(kakigoriAmount + 1);
        break;

      case "rennyu":
        setRennyu(rennyuAmount + 1);
        break;

      case "kakehodai":
        setKakehodai(kakehodaiAmount + 1);
        break;

      case "drink":
        setDrink(drinkAmount + 1);
        break;
    }
  }

  const removeHandler = (e: any) => {
    switch (e.target.name) {
      case "removeKakigori":
        setKakigori(0);
        break;

      case "removeRennyu":
        setRennyu(0);
        break;

      case "removeKakehodai":
        setKakehodai(0);
        break;

      case "removeDrink":
        setDrink(0);
        break;
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <table border={1}>
        <thead>
          <tr>
            <th>商品</th>
            <th>値段</th>
            <th>個数</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {kakigoriAmount != 0 && (
            <tr>
              <td>かき氷</td>
              <td>¥300</td>
              <td>{kakigoriAmount}つ</td>
              <td><button name="removeKakigori" onClick={removeHandler}>削除</button></td>
            </tr>
          )
          }
          {rennyuAmount != 0 && (
            <tr>
              <td>練乳</td>
              <td>¥200</td>
              <td>{rennyuAmount}つ</td>
              <td><button name="removeRennyu" onClick={removeHandler}>削除</button></td>
            </tr>
          )
          }
          {kakehodaiAmount != 0 && (
            <tr>
              <td>かけ放題</td>
              <td>¥100</td>
              <td>{kakehodaiAmount}つ</td>
              <td><button name="removeKakehodai" onClick={removeHandler}>削除</button></td>
            </tr>
          )
          }
          {drinkAmount != 0 && (
            <tr>
              <td>ドリンク</td>
              <td>¥200</td>
              <td>{drinkAmount}つ</td>
              <td><button name="removeDrink" onClick={removeHandler}>削除</button></td>
            </tr>
          )
          }
        </tbody>
      </table>
      <input type="button" name="kakigori" value="かき氷" onClick={clickHandler} />
      <input type="button" name="rennyu" value="練乳" onClick={clickHandler} />
      <input type="button" name="kakehodai" value="かけ放題" onClick={clickHandler} />
      <input type="button" name="drink" value="ドリンク" onClick={clickHandler} />
    </>
  )
}
