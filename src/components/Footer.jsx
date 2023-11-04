import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
function Footer() {
 
  return (
    <footer >
      <Container>
    <section className='flex foter gap-12 '>
    <div className='ssocial'>
      <img src='/assets/logo.png' alt='' />
      <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة ماتريكس الخيار الامثل</p>
      <ul className='social flex items-center gap-5'>
                    <li><a><img src='/assets/facebook.png' /></a></li>
                    <li><a><img src='/assets/insta.png' /></a></li>
                    <li><a><img src='/assets/whatsapp.png' /></a></li>
                    <li><a><img src='/assets/linkedin.png' /></a></li>
                 </ul>
    </div>
    <div className='pt-7'>
      <h2 className='footerhead'>تواصل معنا</h2>
      <ul>
        <li>
          <img src='/assets/location.png' alt='' />
          Syria, Tartus
        </li>
        <li>
          <img src='/assets/phone.png' alt='' />
         +9873276423
        </li>
        <li>
          <img src='/assets/email.png' alt='' />
          matrix@info.erp.sy
        </li>
      </ul>
    </div>

    <div className='pt-7'>
    <h2 className='footerhead'>وصول سريع</h2>
<ul>
  <li><a>كيف تعمل المنصة</a></li>
  <li><a>من نحن</a></li>
  <li><a>المنتجات</a></li>
  <li><a>الميزات</a></li>
  <li><a>حول المنصة</a></li>
  <li><a>الرئيسية</a></li>
</ul>
    </div>

    <div className='text-center'>
      <h3 className='mb-12'>لتحميلالتطبيق الخاص بلمريض</h3>

      <div>
        <div>
          <img src='/assets/qr.png' alt='' />
          <span>For IOS</span>
        </div>
        <div>
          <img src='/assets/qr2.png' alt='' />
          <span>For Android</span>
        </div>
      </div>
    </div>
    </section>
    <section className='copyrights'>
    Copyright 2023 Medical Matrix All Rights Reserved
    </section>
      </Container>
    </footer>
  )
}

export default Footer