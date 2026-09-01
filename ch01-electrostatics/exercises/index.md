# 練習問題 - 第1章 静電場

> 対応: [`../docs/index.md`](../docs/index.md)

---

## 問1

金属のような導体に電場を加え続けたとき、十分に時間がたつと導体内部の電場が 0 になります。最も適切な説明を次から選べ。

**選択: A / B / C**

- A: 自由電子が動いて導体表面に偏るため、その作る電場が外部電場を打ち消すから
- B: 電場が導体中を進むうちに減衰して消えるから
- C: 自由電子が外部電場のため熱運動だけを行い、電荷が動かないから

<details><summary>解答</summary>

**答: A**

自由電子は電場と逆向きに移動して導体表面に蓄積します。この偏りが作る電場は外部電場と逆向きなので、内部の電場は打ち消されて 0 になります。これを静電平衡といいます。

</details>

## 問2

真空中で、$+6.0\ \mu\mathrm{C}$ と $-4.0\ \mu\mathrm{C}$ の点電荷を $0.30\ \mathrm{m}$ 離して置いた。2つの電荷の間にはたらく静電気力の大きさはいくらか。

<details><summary>解答</summary>

**答: 2.4 N**

$$F=k\frac{|q_1q_2|}{r^2}=9.0\times10^9\frac{(6.0\times10^{-6})(4.0\times10^{-6})}{0.30^2}=2.4\ \mathrm{N}$$

異符号なので引力です。

</details>

## 問3

$x$ 軸上、$x=+0.30\ \mathrm{m}$ に $+2.0\ \mathrm{nC}$、$x=-0.30\ \mathrm{m}$ に $-2.0\ \mathrm{nC}$ の点電荷がある。原点における電場の大きさと向きを求めよ。

<details><summary>解答</summary>

**答: $4.0\times10^2\ \mathrm{N/C}$、$+x$ 方向**

各電荷が原点に作る電場の大きさは $9.0\times10^9\times2.0\times10^{-9}/0.30^2=2.0\times10^2\ \mathrm{N/C}$ です。正電荷による電場は $+x$ 向き、負電荷による電場も負電荷に近づく向き（$+x$ 向き）なので、合成は $4.0\times10^2\ \mathrm{N/C}$ で $+x$ 方向になります。

</details>

## 問4

$+4.0\ \mu\mathrm{C}$ の点電荷から $0.20\ \mathrm{m}$ 離れた点の電位を求めよ。

<details><summary>解答</summary>

**答: $1.8\times10^5\ \mathrm{V}$**

$$V=k\frac{Q}{r}=9.0\times10^9\frac{4.0\times10^{-6}}{0.20}=1.8\times10^5\ \mathrm{V}$$

</details>

## 問5

半径 $0.10\ \mathrm{m}$ の導体球に $+3.0\ \mu\mathrm{C}$ の電荷を帯電させた。球表面の電位を求めよ。

<details><summary>解答</summary>

**答: $2.7\times10^5\ \mathrm{V}$**

$$V=k\frac{Q}{R}=9.0\times10^9\frac{3.0\times10^{-6}}{0.10}=2.7\times10^5\ \mathrm{V}$$

導体球の内部と表面では電位は一定です。

</details>

## 問6

面積 $2.0\times10^{-2}\ \mathrm{m^2}$、極板間隔 $1.0\ \mathrm{mm}$ の真空平行板コンデンサの電気容量を求めよ。ただし $\varepsilon_0=8.85\times10^{-12}\ \mathrm{F/m}$ とする。

<details><summary>解答</summary>

**答: 約 $1.8\times10^{-10}\ \mathrm{F}$**

$$C=\varepsilon_0\frac{S}{d}=8.85\times10^{-12}\frac{2.0\times10^{-2}}{1.0\times10^{-3}}=1.77\times10^{-10}\ \mathrm{F}$$

</details>

## 問7

$2.0\ \mu\mathrm{F}$ と $6.0\ \mu\mathrm{F}$ のコンデンサを直列に接続し、$12\ \mathrm{V}$ の電圧を加えた。合成容量を求めよ。

<details><summary>解答</summary>

**答: $1.5\ \mu\mathrm{F}$**

$$C=\frac{C_1C_2}{C_1+C_2}=\frac{2.0\times6.0}{2.0+6.0}=1.5\ \mu\mathrm{F}$$

直列では各コンデンサの電荷の大きさが等しくなります。$Q=CV$（$C$ は合成容量）より $Q=1.5\ \mu\mathrm{F}\times12\ \mathrm{V}=18\ \mu\mathrm{C}$ です。各電圧は $V_1=Q/C_1=9.0\ \mathrm{V}$、$V_2=Q/C_2=3.0\ \mathrm{V}$ となり、その和は $12\ \mathrm{V}$ に一致します。

</details>

## 問8

$10\ \mu\mathrm{F}$ のコンデンサを $50\ \mathrm{V}$ で充電した。蓄えられるエネルギーはいくらか。

<details><summary>解答</summary>

**答: $1.25\times10^{-2}\ \mathrm{J}$**

$$U=\frac12CV^2=\frac12(10\times10^{-6})(50)^2=1.25\times10^{-2}\ \mathrm{J}$$

</details>