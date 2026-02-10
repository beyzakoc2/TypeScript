class Ev {
  odaSayisi: number; //privet tanımı yapsaydık gizlenirdi
  pencereSayisi: number;
  kat: number;
  constructor(odaSayisi: number, pencereSayisi: number, kat: number) {
    this.odaSayisi = odaSayisi;
    this.pencereSayisi = pencereSayisi;
    this.kat = kat;
  }
  yemekYe() {
    console.log(this.kat + " katlı evde " + "yemek yenildi");
  }
}

let ev = new Ev(3, 4, 5);
ev.yemekYe();
console.log(ev.kat);

class Kisi {
  private _isim: string;
  constructor(isim: string) {
    this._isim = isim;
  }
  get isim(): string {
    return "Sayın : " + this._isim;
  }
  set isim(ad: string) {
    this._isim = ad;
  }
  kaydet() {
    console.log("Kişi Kaydedildi");
  }
}

class Musteri extends Kisi {
  satisyap() {
    console.log("Satış Yapıldı");
  }
}

class Personel extends Kisi {
  maasode() {
    console.log("Maaş Ödendi");
  }
}

let musteri = new Musteri("beyza");
console.log(musteri.isim);
musteri.kaydet();
musteri.satisyap();

let personel = new Personel("sertuğ");
personel.kaydet();
personel.maasode();

//getter ve setter (kapsülleme tekniği)
