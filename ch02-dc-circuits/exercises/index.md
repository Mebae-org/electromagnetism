# 練習問題 - 第2章 直流回路

> 対応: [`../docs/index.md`](../docs/index.md)

---

## 問1

金属導線を流れる直流電流について、正しい説明を次から選べ。

**選択: A / B / C / D**

- A: 正電荷が電流の向きと同じ方向に平均的に移動する
- B: 自由電子が電流の向きとは逆向きに平均的に移動する
- C: 自由電子が電場と同じ向きに平均的に移動する
- D: 電子は動かず、電荷の流れが生じない

<details><summary>解答</summary>

**答: B**

電流の向きは正電荷が動く向きと定義されます。金属中の自由電子は負電荷なので、平均的な移動方向は電流（電場）と逆向きです。

</details>

## 問2

$12\ \mathrm{V}$ の電圧を $3.0\ \Omega$ の抵抗に加えた。流れる電流はいくらか。

<details><summary>解答</summary>

**答: 4.0 A**

$$I=\frac{V}{R}=\frac{12}{3.0}=4.0\ \mathrm{A}$$

</details>

## 問3

$4.0\ \Omega$ と $6.0\ \Omega$ の抵抗を直列に接続し、$12\ \mathrm{V}$ を加えた。合成抵抗と、$4.0\ \Omega$ の抵抗の両端の電圧を求めよ。

<details><summary>解答</summary>

**答: 合成抵抗 10 Ω、$4.0\ \Omega$ の電圧 4.8 V**

$$R=R_1+R_2=4.0+6.0=10\ \Omega$$

$$V_1=\frac{R_1}{R_1+R_2}V=\frac{4.0}{10}\times12=4.8\ \mathrm{V}$$

</details>

## 問4

$6.0\ \Omega$ と $3.0\ \Omega$ の抵抗を並列に接続し、$12\ \mathrm{V}$ を加えた。合成抵抗と全電流を求めよ。

<details><summary>解答</summary>

**答: 合成抵抗 2.0 Ω、全電流 6.0 A**

$$R=\frac{R_1R_2}{R_1+R_2}=\frac{6.0\times3.0}{6.0+3.0}=2.0\ \Omega$$

$$I=\frac{V}{R}=\frac{12}{2.0}=6.0\ \mathrm{A}$$

枝電流は $12/6.0=2.0\ \mathrm{A}$ と $12/3.0=4.0\ \mathrm{A}$ です。

</details>

## 問5

起電力 $12\ \mathrm{V}$ の電池に、$5.0\ \Omega$ と $7.0\ \Omega$ の抵抗を直列につないだ。内部抵抗は無視できるものとして、回路を流れる電流をキルヒホッフの第2法則を用いて求めよ。

<details><summary>解答</summary>

**答: 1.0 A**

時計回りに一周すると、電池で取得する電圧が $+12\ \mathrm{V}$、抵抗での電圧降下が $-5.0I-7.0I$ なので、

$$\sum\Delta V=+12-5.0I-7.0I=0$$

$$I=\frac{12}{12}=1.0\ \mathrm{A}$$

</details>

## 問6

起電力 $6.0\ \mathrm{V}$、内部抵抗 $0.50\ \Omega$ の電池に $2.5\ \Omega$ の抵抗をつないだ。回路に流れる電流と、電池の端子電圧を求めよ。

<details><summary>解答</summary>

**答: 電流 2.0 A、端子電圧 5.0 V**

$$I=\frac{\mathcal E}{R+r}=\frac{6.0}{2.5+0.5}=2.0\ \mathrm{A}$$

$$V_{\mathrm{terminal}}=\mathcal E-rI=6.0-0.50\times2.0=5.0\ \mathrm{V}$$

</details>

## 問7

定格 $100\ \mathrm{V}$、$40\ \mathrm{W}$ の電球がある。電球に流れる電流と、電球の抵抗を求めよ。

<details><summary>解答</summary>

**答: 電流 0.40 A、抵抗 250 Ω**

$$I=\frac{P}{V}=\frac{40}{100}=0.40\ \mathrm{A}$$

$$R=\frac{V}{I}=\frac{100}{0.40}=250\ \Omega$$

</details>

## 問8

$10\ \Omega$ の抵抗に $2.0\ \mathrm{A}$ の電流を $10$ 分間流した。発生するジュール熱はいくらか。

<details><summary>解答</summary>

**答: 2.4×10^4 J**

$$Q=I^2Rt=(2.0)^2\times10\times600=2.4\times10^4\ \mathrm{J}$$

</details>