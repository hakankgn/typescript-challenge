namespace division {
  // Challenge 2
  //
  // Beklenenler:
  // TypeScript'in JavaScript'ten farkı nedir?
  // TypeScript, dinamik bir dil olan JavaScript'i statikleştirmeye yarar, hata ayıklamada yardımcı olur ve hatayı daha kodu yazarken yakalamamıza yardımcı olur. Tip tanımlamaları sayesinde hata payımızı düşürür.
  // 1'den 100'e kadar sayılardan 3'e ve 5'e aynı anda bölünebilen numaraların sayısı ve toplamı nedir ?
  //
  // Örnek Çıktı:
  // Koşula uyan toplam numara sayısı: 17
  // Koşula uyan numaraların toplamı: 48
  function findAndSumDivisibleNumbers(): void {
    let divisibleCount: number = 0;
    let divisibleSum: number = 0;

    for (let number: number = 1; number <= 100; number++) {
      if (number % 3 === 0 && number % 5 === 0) {
        divisibleCount++;
        divisibleSum += number;
      }
    }

    console.log("Koşula uyan toplam numara sayısı:", divisibleCount);
    console.log("Koşula uyan numaraların toplamı:", divisibleSum);
  }

  findAndSumDivisibleNumbers();
}
