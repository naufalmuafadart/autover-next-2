export interface SVGProps {
  color: string;
}

export interface GetServerSideProps {
  req: {
    cookies : {
      accessToken: string;
      refreshToken: string;
    }
  };
}
