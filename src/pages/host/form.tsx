import React, { useState } from 'react';
import Button from '@/components/atom/Button';
import style from '@/styles/pages/host/form.module.css';
import { useRouter } from 'next/router';
import { getDistricts } from '@/services/district';
import { postHost, getCheckIsAHost } from '@/services/host';
import { district } from '@/services/dataTypes';
import { GetServerSideProps as propsGetServerSide } from '@/services/dataTypes/props';
import { postHostPayload } from '@/services/dataTypes/payload';
import RenterPageTemplate from '@/components/page/RenterPageTemplate';

interface HostProps {
  districts: Array<district>;
  accessToken: string;
  refreshToken: string;
}

export default function FormHost(props: HostProps) {
  const { districts, accessToken, refreshToken } = props;
  const [districtId, setDistrictId] = useState(districts[0]._id);
  const router = useRouter();

  const onDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrictId(e.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: postHostPayload = { district_id: districtId };
    const responseData = await postHost(data, accessToken, refreshToken);
    if (responseData.status === 'success') {
      await router.push('/host');
    }
  };

  return (
    <RenterPageTemplate
      isLogin
      pageTitle="Form host"
    >
      <section>
        <form onSubmit={onSubmit}>
          <h1 className={style.h1}>Pendaftaran Host</h1>
          <div className="group-row">
            <div className="group-row-row">
              <label>Kecamatan</label>
              <select name="district_id" onChange={onDistrictChange}>
                {
                  districts.map((d: district) => (
                    <option
                      key={d._id}
                      value={d._id}
                      defaultValue={districtId}
                    >
                      {d.name}
                    </option>
                  ))
                }
              </select>
            </div>
          </div>

          <Button text="Submit" type="submit" className="float-right" />
        </form>
      </section>
    </RenterPageTemplate>
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

  const responseData = await getCheckIsAHost(accessToken, refreshToken);
  if (responseData.data) { // jika sudah menjadi host
    return {
      redirect: {
        destination: '/host',
        permanent: false,
      },
    };
  }

  const { data: districts } = await getDistricts();

  return {
    props: { districts, accessToken, refreshToken },
  };
}
