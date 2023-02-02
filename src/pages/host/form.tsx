import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '@/components/organism/Navbar';
import Button from '@/components/atom/Button';
import style from '@/styles/pages/host/form.module.css';

export default function Host() {
  return (
    <>
      <HTMLHead title="Form Host" />
      <div id="mainContent">
        <Navbar isLogin />
        <hr />
        <section>
          <form>
            <h1 className={style.h1}>Form Host</h1>
            <div className="group-row">
              <div className="group-row-row">
                <label>Kecamatan</label>
                <select>
                  <option value="id">Antapani</option>
                  <option value="id">Buah batu</option>
                </select>
              </div>
              <small>Error message</small>
            </div>

            <Button text="Submit" type="submit" className="float-right" />
          </form>
        </section>
      </div>
    </>
  );
}
