abstract class KrediBase {
  constructor() {}
  kaydet(): void {
    console.log("kaydedildi");
  }

  abstract hesapla(): void;
}
class TuketiciKredi extends KrediBase {
  constructor() {
    super();
  }
  hesapla(): void {
    console.log("Tüketici Kredisine göre hesap yapıldı");
  }
}

class MortgageKredi extends KrediBase {
  constructor() {
    super();
  }
  hesapla(): void {
    console.log("Konut Kredisine göre hesap yapıldı");
  }
  baskaBirOperasyon() {}
}

let tuketiciKredisi = new TuketiciKredi();
tuketiciKredisi.hesapla();
tuketiciKredisi.kaydet();

let mortgageKredisi = new MortgageKredi();
mortgageKredisi.hesapla();
mortgageKredisi.kaydet();

let kredi: KrediBase;
kredi = new TuketiciKredi();

kredi = new MortgageKredi();
