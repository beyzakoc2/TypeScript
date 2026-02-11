function deger(x: number, y: number): number {
  return x + y;
}

function deger2(x: string): string {
  return x;
}

let sayi = deger(10, 11);
console.log(sayi);

let sehir = deger2("izmit");
console.log(sehir);

function deger3<T>(x: T): T {
  return x;
}

let sayi3 = deger3<number>(2);
let sehir3 = deger3<string>("merhaba");
console.log(sayi3, sehir3);

class GenericClass<T> {
    degisken:T,
    fonksiyon(params:T):T {
        return params;
    }

}

let sinif=new GenericClass<string>()

sinif.fonksiyon("ankara");