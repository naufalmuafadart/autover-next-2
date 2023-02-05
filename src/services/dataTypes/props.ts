export interface SVGProps {
  color: string;
  classItem?: string;
  onMouseEnter?: () => void;
  onClick?: () => void;
}

export interface GetServerSideProps {
  req: {
    cookies : {
      accessToken: string;
      refreshToken: string;
    }
  };
}
