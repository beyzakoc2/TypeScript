function selam(isim: string) {
  return "merhaba " + isim;
}
let kisi = selam("sertuğ");

console.log(kisi);

let sayi: number = 11;
sayi = 10.4;
sayi = 10;

let sehir: string = "izmir";
sehir = "izmit";
sehir = "kütahya";

let dogruMu: boolean = true;
dogruMu = true;
dogruMu = false;

let sayilar: number[] = [1, 2, 3];
let sayilar2: Array<number> = [1, 2, 3];

let dizi: [number, string] = [2, "Ankara"];

enum Renk {
  kirmizi,
  mavi,
  beyaz,
}
let renk: Renk = Renk.kirmizi;

let deger: any = "Ankara";
deger = 2;
deger = {};

function selamver(): void {
  console.log("merhaba");
}
//void geriye değer döndürmeyecek demek

let yas: number;
yas = 10;
