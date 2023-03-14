class bankAccount {
    nomorRekening;
    saldo;

    setRekeningSaldo(nomorRekening, saldo) {
        this.nomorRekening = nomorRekening;
        this.saldo = saldo;
    }

    setDeposit(nominal){
        return this.saldo += nominal
    }

    setTarikSaldo(nominal){
        if (nominal > this.saldo){
            console.log("Maaf saldo anda kurang")
        } else{
            return this.saldo -= nominal
        }
    }

    getSaldo(){
        return this.saldo
    }
}

const rekening1 = new bankAccount()
rekening1.setRekeningSaldo(123456789, 1000000);
rekening1.setDeposit(500000);
rekening1.setTarikSaldo(200000);

let saldoRekening1 = rekening1.getSaldo()
console.log("Saldo Rekening1 = " + saldoRekening1)

console.log("==========")

const rekening2 = new bankAccount()
rekening2.setRekeningSaldo(1234567899999, 2000000);
rekening2.setDeposit(300000);
rekening2.setTarikSaldo(50000000);

let saldoRekening2 = rekening2.getSaldo()
console.log("Saldo rekening2 = " + saldoRekening2)