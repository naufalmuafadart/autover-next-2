import React, { useState } from 'react';
import Navbar from '@/components/organism/Navbar';
import CheckoutRow from '@/components/molecule/CheckoutRow';
import style from '@/styles/pages/renter/checkout.module.css';
import Image from 'next/image';
import Button from '@/components/atom/Button';
import CheckoutFormPaymentMethodBadge from '@/components/atom/CheckoutFormPaymentMethodBadge';
import Head from '@/components/Head';

export default function Checkout() {
  const [paymentMethodId, setPaymentMethodId] = useState('xx');

  const onPaymentMethodChange = (paymentId: String) => {
    // @ts-ignore
    setPaymentMethodId(paymentId);
  };

  return (
    <>
      <Head title="Checkout" />
      <div id="mainContent">
        <Navbar isLogin />
        <hr />
        <div className={style.container}>
          <form>
            <CheckoutRow
              leftSideContent={<h1>Checkout</h1>}
              rightSideContent={null}
            />

            <CheckoutRow
              leftSideContent={<h2>Mobil</h2>}
              rightSideContent={null}
            />

            {/* Car image */}
            <CheckoutRow
              leftSideContent={null}
              rightSideContent={
                <Image src="/images/_development/nissan_navara.jpeg" alt="Car" width={100} height={50} />
              }
            />

            <CheckoutRow
              leftSideContent={<p>Nama</p>}
              rightSideContent={<p>Nissan Navara</p>}
            />

            <CheckoutRow
              leftSideContent={<p>No polisi</p>}
              rightSideContent={<p>D 1234 ABC</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Tipe</p>}
              rightSideContent={<p>Kuro Edition</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Tahun keluaran</p>}
              rightSideContent={<p>2016</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Warna</p>}
              rightSideContent={<p>Merah</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Tipe transmisi</p>}
              rightSideContent={<p>Otomatis</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Kapasitas penumpang</p>}
              rightSideContent={<p>3</p>}
            />

            {/* Host */}
            <CheckoutRow
              leftSideContent={<h2>Host</h2>}
              rightSideContent={null}
            />

            <CheckoutRow
              leftSideContent={<p>Nama</p>}
              rightSideContent={<p>John Doe</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Alamat</p>}
              rightSideContent={<p>Kec. Antapani</p>}
            />

            <CheckoutRow
              leftSideContent={<p>No HP</p>}
              rightSideContent={<p>08123456789</p>}
            />

            {/* Penyewaan */}
            <CheckoutRow
              leftSideContent={<h2>Penyewaan</h2>}
              rightSideContent={null}
            />

            <CheckoutRow
              leftSideContent={<p>Tanggal mulai</p>}
              rightSideContent={<input type="date" />}
            />

            <CheckoutRow
              leftSideContent={<p>Tanggal selesai</p>}
              rightSideContent={<input type="date" />}
            />

            <CheckoutRow
              leftSideContent={<p>Metode pengambilan</p>}
              rightSideContent={(
                <select>
                  <option value="1">Di antar</option>
                  <option value="2">Ambil sendiri</option>
                </select>
              )}
            />

            <CheckoutRow
              leftSideContent={<p>Metode pengembalian</p>}
              rightSideContent={(
                <select>
                  <option value="1">Di jemput</option>
                  <option value="2">Antar sendiri</option>
                </select>
              )}
            />

            {/* Penyewaan */}
            <CheckoutRow
              leftSideContent={<h2>Tarif</h2>}
              rightSideContent={null}
            />

            <CheckoutRow
              leftSideContent={<p>Tarif perhari</p>}
              rightSideContent={<p>Rp. 500.000</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Durasi sewa</p>}
              rightSideContent={<p>3 hari</p>}
            />

            <CheckoutRow
              leftSideContent={<p>Total tarif</p>}
              rightSideContent={<p>Rp. 1.500.000</p>}
            />

            {/* Metode pembayaran */}
            <CheckoutRow
              leftSideContent={<h2>Metode pembayaran</h2>}
              rightSideContent={null}
            />

            <CheckoutRow
              leftSideContent={(
                <>
                  <CheckoutFormPaymentMethodBadge
                    text="Saldo Autover (Rp. 100.000)"
                    mode="disabled"
                    onClick={() => {}}
                  />
                  <CheckoutFormPaymentMethodBadge
                    text="Indomaret"
                    mode={paymentMethodId === 'xx' ? 'selected' : 'inherit'}
                    onClick={() => onPaymentMethodChange('xx')}
                  />
                  <CheckoutFormPaymentMethodBadge
                    text="BNI Virtual Account"
                    mode={paymentMethodId === 'cc' ? 'selected' : 'inherit'}
                    onClick={() => onPaymentMethodChange('cc')}
                  />
                  <input type="hidden" name="payment_method_id" defaultValue={paymentMethodId} />
                </>
              )}
              rightSideContent={null}
            />

            <input type="hidden" name="car_id" value="car_123" />

            <CheckoutRow
              leftSideContent={null}
              rightSideContent={<Button text="Buat pesanan" type="submit" />}
            />
          </form>
        </div>
      </div>
    </>
  );
}
