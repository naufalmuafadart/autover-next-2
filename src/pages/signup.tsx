import React from 'react';
import Head from '@/components/Head';
import style from '@/styles/pages/login.module.css';
import Image from 'next/image';
import localFont from '@next/font/local';
import Button from '@/components/atom/Button';
import signUp from '@/services/auth';
import Small from '@/components/atom/Small';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { toast } from 'react-toastify';

const michroma = localFont({ src: './font/Michroma/Michroma-Regular.ttf' });

interface SignUpProps {
  router: NextRouter;
}

interface SignUpState {
  full_name: string;
  phone_number: string;
  email: string;
  password: string;
  retype_password: string;
  fullNameSmallText: string;
  isFullNameSmallShowed: boolean;
  phoneNumberSmallText: string;
  isPhoneNumberSmallShowed: boolean;
  emailSmallText: string;
  isEmailSmallShowed: boolean;
  passwordSmallText: string;
  isPasswordSmallShowed: boolean;
  retypePasswordSmallText: string;
  isRetypePasswordSmallShowed: boolean;
}

class SignUp extends React.Component<SignUpProps, SignUpState> {
  constructor(props: SignUpProps) {
    super(props);
    this.state = {
      full_name: '',
      phone_number: '',
      email: '',
      password: '',
      retype_password: '',

      fullNameSmallText: 'Nama Lengkap harus diisi',
      isFullNameSmallShowed: false,

      phoneNumberSmallText: 'Nomor telepon harus diisi',
      isPhoneNumberSmallShowed: false,

      emailSmallText: 'Email harus diisi',
      isEmailSmallShowed: false,

      passwordSmallText: 'Password harus diisi',
      isPasswordSmallShowed: false,

      retypePasswordSmallText: 'Password tidak sesuai',
      isRetypePasswordSmallShowed: false,

    };

    this.onFullNameChange = this.onFullNameChange.bind(this);
    this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onRetypePasswordChange = this.onRetypePasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'blue';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.height = '100vh';
  }

  onFullNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      isFullNameSmallShowed: !event.target.value,
      full_name: event.target.value,
    });
  }

  onPhoneNumberChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      isPhoneNumberSmallShowed: !event.target.value,
      phone_number: event.target.value,
      phoneNumberSmallText: 'Nomor telepon harus diisi',
    });
  }

  onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const email = event.target.value;
    const isEmailValid = email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    this.setState({
      isEmailSmallShowed: !event.target.value || !isEmailValid,
      email,
      emailSmallText: !email ? 'Email harus diisi' : 'Email tidak valid',
    });
  }

  onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event.target.value;
    this.setState({
      passwordSmallText: !password ? 'Password harus diisi' : 'Password minimal terdiri dari 8 karakter',
      isPasswordSmallShowed: !password || password.length < 8,
      password: event.target.value,
    });
  }

  onRetypePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { password } = this.state;
    const retype_password = event.target.value;
    this.setState({
      isRetypePasswordSmallShowed: retype_password !== password,
      retype_password,
    });
  }

  async onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      full_name, phone_number, email, password, retype_password,
    } = this.state;
    const data = {
      full_name,
      phone_number,
      email,
      password,
    };
    const { router } = this.props;

    if (!full_name) {
      toast.error('Nama Lengkap harus diisi');
    } else if (!phone_number) {
      toast.error('Nomor telepon harus diisi');
    } else if (!email) {
      toast.error('Email harus diisi');
    } else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      toast.error('Email tidak valid');
    } else if (!password) {
      toast.error('Password harus diisi');
    } else if (password.length < 8) {
      toast.error('Password minimal terdiri dari 8 karakter');
    } else if (password !== retype_password) {
      toast.error('password tidak sesuai');
    } else {
      const response = await signUp(data);
      if (response.status === 'success') {
        toast.success('Berhasil mendaftar akun');
        await router.push('/login');
      } else if (response.message.toLowerCase().includes('email')) {
        toast.error('Email sudah terdaftar');
        this.setState({
          isEmailSmallShowed: true,
          emailSmallText: 'Email sudah terdaftar',
        });
      } else if (response.message.toLowerCase().includes('phone')) {
        toast.error('Nomor telepon sudah terdaftar');
        this.setState({
          isPhoneNumberSmallShowed: true,
          phoneNumberSmallText: 'Nomor telepon sudah terdaftar',
        });
      } else {
        toast.error(response.message);
      }
    }
  }

  render() {
    const {
      fullNameSmallText,
      isFullNameSmallShowed,
      phoneNumberSmallText,
      isPhoneNumberSmallShowed,
      emailSmallText,
      isEmailSmallShowed,
      passwordSmallText,
      isPasswordSmallShowed,
      retypePasswordSmallText,
      isRetypePasswordSmallShowed,
    } = this.state;

    return (
      <>
        <Head title="Sign Up" />
        <div className={style.container}>
          <div className={style.leftSide}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt,@next/next/no-img-element */}
            <img src="/images/img-login.png" alt="image login" className={style.image} />
          </div>
          <div className={`${style.rightSide} no-scrollbar`}>
            <form className="d-flex flex-column ai-center">
              <div className={`${style.brand} d-flex jc-start ai-center`}>
                <Image src="/images/logo.png" alt="Logo" width={70} height={70} className={style.logo} />
                <p className={`${michroma.className} ${style.brandText}`}>AUTOVER</p>
              </div>

              <h1 className={style.h1}>Sign Up</h1>

              {/* Full Name */}
              <div className="form-group group-column">
                <label htmlFor="inputFullName">Nama lengkap</label>
                <input
                  type="text"
                  id="inputFullName"
                  name="full_name"
                  onChange={this.onFullNameChange}
                  required
                />
                <Small
                  id="smallFullNameNumber"
                  text={fullNameSmallText}
                  color="red"
                  isShow={isFullNameSmallShowed}
                />
              </div>

              {/* Phone Number */}
              <div className="form-group group-column">
                <label htmlFor="inputPhoneNumber">Nomor Telepon</label>
                <input
                  type="tel"
                  id="inputPhoneNumber"
                  name="phone_number"
                  onChange={this.onPhoneNumberChange}
                  required
                />
                <Small
                  id="smallPhoneNumber"
                  text={phoneNumberSmallText}
                  color="red"
                  isShow={isPhoneNumberSmallShowed}
                />
              </div>

              {/* Email */}
              <div className="form-group group-column">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="email"
                  id="inputEmail"
                  onChange={this.onEmailChange}
                  required
                />
                <Small
                  id="smallEmail"
                  text={emailSmallText}
                  color="red"
                  isShow={isEmailSmallShowed}
                />
              </div>

              {/* Password */}
              <div className="form-group group-column">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  id="inputPassword"
                  onChange={this.onPasswordChange}
                  minLength={8}
                  required
                />
                <Small
                  id="smallPassword"
                  text={passwordSmallText}
                  color="red"
                  isShow={isPasswordSmallShowed}
                />
              </div>

              {/* Retype Password */}
              <div className="form-group group-column">
                <label htmlFor="inputRetypePassword">Ulangi Password</label>
                <input
                  type="password"
                  id="inputRetypePassword"
                  onChange={this.onRetypePasswordChange}
                  minLength={8}
                  required
                />
                <Small
                  id="smallRetypePassword"
                  text={retypePasswordSmallText}
                  color="red"
                  isShow={isRetypePasswordSmallShowed}
                />
              </div>

              <Button
                text="Sign Up"
                className={`${style.btnSubmit} w-100`}
                onClick={this.onSubmit}
                type="submit"
              />

              <div className={style.alternativeContainer}>
                <p className="alternative">
                  <span>Sudah punya akun?</span>
                  {' '}
                  <Link href="/login" className={style.alternativeContainerAnchor}>Login disini</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

interface SignUpWithRouterProps {
}

function SignUpWithRouter(props: SignUpWithRouterProps) {
  const router = useRouter();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <SignUp {...props} router={router} />;
}

export default SignUpWithRouter;
