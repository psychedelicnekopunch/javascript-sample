
// console.log(crypto.randomUUID())
// console.log(self.crypto.randomUUID())

// console.log(typeof crypto)
// console.log(typeof window)


// google AI
const getUUID = () => {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // localhost以外でcryptoが使えない場合のフォールバック（簡易版）
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

// console.log(getUUID());

/** メモ **

## UUID
https://ja.wikipedia.org/wiki/UUID

以下のxを16進法で表記する文字列。
xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx


### xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx

4はバージョンが4だから。バージョンは現時点で1〜8がある。
色々記事を見た感じ、4が主流で7を推奨としてる感じがする。

yの部分はバリアント。


### バリアント
https://ja.wikipedia.org/wiki/UUID#%E3%83%90%E3%83%AA%E3%82%A2%E3%83%B3%E3%83%88

xxxxxxxx-xxxx-xxxx-Nxxx-xxxxxxxxxxxxのNの桁の上位ビットがバリアントを示す。
Nの桁 = バリアント

RFCでは上位2ビットが102であることが定められているので、16進表記では8、9、A、Bのいずれかとなる。
Nの桁 = 8、9、A、B（16進数）のいずれか

これ以外のバリアントは、RFC制定以前に生成されたUUIDとの後方互換性、あるいは将来のために予約されている。



## ビット論理和演算子 (|)
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR

x | y
ビット論理和演算子（|）は、数値を2進数として扱い、対応するビットのどちらか一方が1であれば「1」、両方とも0であれば「0」を返す演算子です。

警告：数値を整数に切り詰めるために | 0 を使用する人を目にするかもしれません。
代わりに Math.trunc() を使用するよう使用してください。



## ビット論理積演算子 (&)
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND

x & y
ビット論理積演算子（ビットごとのAND演算）とは、数値の2進数の各桁（ビット）を比較し、双方のビットがともに「1」の場合にのみ「1」を返し、それ以外は「0」にする演算子です。



## (r & 0x3) | 0x8

r = 0〜15（16進）
(r & 0x3) | 0x8 = 8〜11（8〜Bになる）


## Number.prototype.toString(radix)

radix = 基数
基数（きすう）とは、位取り記数法（〇進数）における桁上がりの基準となる数のことや、集合の要素の個数（濃度）を表す数学用語です。


## 0x3

16進数で表された数値の3

16進数: 0x3
2進数: 0000 0011
10進数: 3


## 0x8

16進数で表された数値の8

16進数: 0x8
2進数: 0000 1000
10進数: 8

*/


// google AI を編集したもの
const getUUID2 = () => {
	// if (typeof crypto !== 'undefined' && crypto.randomUUID) {
	// 	return crypto.randomUUID();
	// }
	// if (typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID) {
	// 	return window.crypto.randomUUID();
	// }
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		// console.log(c)
		const r = Math.trunc(Math.random() * 16)
		const v = c === 'x' ? r : Math.trunc(Math.random() * 4) + 8
		return v.toString(16)
	})
}

console.log(getUUID2());

// console.log(Math.random())
// console.log((Math.random() * 16) | 0)
// console.log(Math.random() * 16)
// console.log(Math.trunc(Math.random() * 16))

// r = Math.trunc(Math.random() * 16)
// console.log((r & 0x3) | 0x8)

// console.log(0x3)
// console.log(0x8)

// v = 0x3
// v = 0x8
// v = 128
// v = Math.trunc(Math.random() * 4) + 8
// console.log(v.toString(2))
// console.log(v.toString(10))
// console.log(v.toString(16))
// v.toString(16)


