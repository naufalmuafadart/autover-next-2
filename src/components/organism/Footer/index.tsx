import React from 'react';
import Image from 'next/image';
import style from '@/styles/component/organism/footer.module.css';

export default function Footer() {
  return (
    <section id="s-footer" className={style.sFooter}>
      <footer className="d-flex jc-space-between ai-center">
        <div className="left-side d-flex jc-start ai-center">
          <Image src="/images/logo.png" alt="Logo" width={70} height={70} className={style.image} />
          <p>AUTOVER</p>
        </div>
        <div className="right-side">
          <p>© 2023 Autover</p>
        </div>
      </footer>
    </section>
  );
}
