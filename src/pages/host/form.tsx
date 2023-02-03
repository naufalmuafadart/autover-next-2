import React from 'react';
import HTMLHead from '@/components/Head';
import Navbar from '@/components/organism/Navbar';
import Button from '@/components/atom/Button';
import style from '@/styles/pages/host/form.module.css';
import { getDistricts } from '@/services/district';
import { GetServerSideProps as propsGetServerSide, district } from '@/services/dataTypes';

interface HostProps {
  districts: Array<district>;
}

export default function Host(props: HostProps) {
  const { districts } = props;

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
                <select name="district_id">
                  {
                    districts.map((d: district) => (
                      <option key={d._id} value={d._id}>{d.name}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <Button text="Submit" type="submit" className="float-right" />
          </form>
        </section>
      </div>
    </>
  );
}

export async function getServerSideProps(props: propsGetServerSide) {
  const { accessToken, refreshToken } = props.req.cookies;

  if (!accessToken && !refreshToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const { data: districts } = await getDistricts();

  return {
    props: { districts },
  };
}
