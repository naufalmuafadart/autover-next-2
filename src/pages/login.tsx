import React from 'react';
import Head from '@/components/Head';
import style from '@/styles/pages/login.module.css';
import Image from 'next/image';
import Button from '@/components/atom/Button';
import fonts from '@/fonts';
import { signIn } from '@/services/auth';
import Small from '@/components/atom/Small';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface LoginProps {
  router: NextRouter;
}

interface LoginState {
  email: string;
  password: string;
  emailSmallText: string;
  isEmailSmallShowed: boolean;
  passwordSmallText: string;
  isPasswordSmallShowed: boolean;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: '',

      emailSmallText: 'Email harus diisi',
      isEmailSmallShowed: false,

      passwordSmallText: 'Password harus diisi',
      isPasswordSmallShowed: false,
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'blue';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.height = '100vh';
  }

  componentWillUnmount() {
    const body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = 'inherit';
    body.style.display = 'inherit';
    body.style.height = 'inherit';
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

  async onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const {
      email, password,
    } = this.state;
    const data = {
      email,
      password,
    };
    const { router } = this.props;

    if (!email) {
      toast.error('Email harus diisi');
    } else if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
      toast.error('Email tidak valid');
    } else if (!password) {
      toast.error('Password harus diisi');
    } else if (password.length < 8) {
      toast.error('Password minimal terdiri dari 8 karakter');
    } else {
      const response = await signIn(data);
      if (response.status === 'success') {
        toast.success('Berhasil login');

        const { accessToken, refreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        router.push('/');
      } else if (response.message.toLowerCase().includes('email')) {
        toast.error('Email tidak terdaftar');
        this.setState({
          emailSmallText: 'Email tidak terdaftar',
          isEmailSmallShowed: true,
        });
      } else if (response.message.toLowerCase().includes('password')) {
        toast.error('Password salah');
        this.setState({
          passwordSmallText: 'Password salah',
          isPasswordSmallShowed: true,
        });
      } else {
        toast.error(response.message);
      }
    }
  }

  render() {
    const {
      emailSmallText,
      isEmailSmallShowed,
      passwordSmallText,
      isPasswordSmallShowed,
    } = this.state;

    return (
      <>
        <Head title="Login" />
        <div className={style.container}>
          <div className={style.leftSide}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt,@next/next/no-img-element */}
            <img src="/images/img-login.png" alt="image login" className={style.image} />
          </div>
          <div className={`${style.rightSide} no-scrollbar`}>
            <form className="d-flex flex-column ai-center">
              <div className={`${style.brand} d-flex jc-start ai-center`}>
                <Image src="/images/logo.png" alt="Logo" width={70} height={70} className={style.logo} />
                <p className={`${fonts.michroma.className} ${style.brandText}`}>AUTOVER</p>
              </div>

              <h1 className={style.h1}>Login</h1>

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

              <Button
                text="Login"
                className={`${style.btnSubmit} w-100`}
                onClick={this.onSubmit}
                type="submit"
              />

              <div className={style.alternativeContainer}>
                <p className="alternative">
                  <span>Belum punya akun?</span>
                  {' '}
                  <Link href="/signup" className={style.alternativeContainerAnchor}>Daftar disini</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

interface LoginWithRouterProps {
}

function LoginWithRouter(props: LoginWithRouterProps) {
  const router = useRouter();
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Login {...props} router={router} />;
}

export default LoginWithRouter;
