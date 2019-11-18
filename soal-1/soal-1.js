// baju = 10000
// kelipatanBaju = baju + 20/100 * 10000
// kelipatanBaju4 = kelipatanBaju + 10/100 * kelipatanBaju
// kelipatanBaju = 30000000

lelangBaju = menit => {
	let hargaAwal = 10000;

	for (i = 1; i <= menit; i++) {
		if (i == 4) {
			hargaAwal += Math.floor((hargaAwal * 10) / 100);
		} else {
			hargaAwal += Math.floor((hargaAwal * 20) / 100);
		}
	}
	return hargaAwal;
};

console.log(lelangBaju(4));
