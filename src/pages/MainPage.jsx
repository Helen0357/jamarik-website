import { Container } from '@mui/material'
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
function MainPage() {
  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  });
  const [slideshow , setSlide] = useState(3);
  const [slideshow2 , setSlide2] = useState(2);
  useEffect(() =>  {
    function handleResize() {
      setDimensions({
        height: window.innerHeight, 
        width: window.innerWidth
      })
    
}
console.log(dimensions.width ,dimensions.height);
if(dimensions.width < 480){
setSlide(1);
setSlide2(1);
}
else if (dimensions.width > 481 && dimensions.width < 980){
setSlide(2);
setSlide2(1);

}
else{
setSlide(3);
setSlide2(2);

}

    window.addEventListener('resize', handleResize);
    return _ => {
      window.removeEventListener('resize', handleResize) }
  },[dimensions.width]);
  return (
    <section className='main-page'>
        
        <section className='landing'>
            <Container>
             <NavBar />
          <section className='text-center landing-text'>
          <h2>منصة ماتريكس للتخليص الجمركي لكافية اجازات الاستيراد</h2>
             <Link to='#' className='main-btn' >ميزات المنصة</Link>
          </section>

            </Container>
        </section>

   <div className='bg'>
   <section className='aboutus py-16' id='about'>
        <Container>
        <section className=' flex items-center justify-between flex-wrap md:flex-nowrap'>
            <section >
                <h5>حول المنصة</h5>
                <h3>تعرف اكثر على منصتنا</h3>
                    <h2>شركة خدمات ERP لادارة و تخطيط موارد المؤسسات مع خدمة الربط الالكتروني المعنمد من وزارة المالية</h2>
                    <p> من نوعها بنردود  مالي مميز ونسب 
بيعة محفزة تطرح شركة ماتريكس الخيار الأمثل
مميز ونسب  بيعة محفزة تطرح شرك من نوعها بنردود  مالي مميز ونسب 
بيعة محفزة تطرح شركة ماتريكس الخيار الأمثل
مميز ونسب  بيعة محفزة تطرح شركة</p>
            </section>
            <section className='about-imgs'>
                <img src='/assets/about1.png' />
            
            </section>
        </section>
        </Container>
     </section>

     <section className='advantages py-36' id='advan'>
        <Container>
            <section>  
            <h4 className='h4main'>ميزات المنصة</h4> 
            <p>تعرف اكثر عن منصتنا و ميزاتها</p>
            <Swiper
        slidesPerView={slideshow}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-20"
      
      >
        
        <SwiperSlide>  <div className='box'>
          <img src='/assets/pic1.png' alt=''  />
          <h3>السرعة</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني البيع و المتجر الالكتروني البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className='box'>
          <img src='/assets/pic2.png' alt=''  />
          <h3>الخصوصية</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
        <SwiperSlide>  <div className='box'>
          <img src='/assets/pic3.png' alt='' />
          <h3>الاحترافية</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
      
        <SwiperSlide>  <div className='box'>
          <img src='/assets/pic1.png' alt=''  />
          <h3>السرعة</h3>
          <p>ألمبيعات المستهدفة و العمولات , الاقساط و العروض , التامينات و الفاتورة الالكترونيةوالضريبة , نقاط البيع و المتجر الالكتروني البيع و المتجر الالكتروني البيع و المتجر الالكتروني</p>
        </div></SwiperSlide>
      </Swiper>
            </section>
        </Container>
     </section>
   </div>

     <section className='products py-12' id='products'>
        <Container>
            <section className='text-center'>
            <h4 className='h4main'>منتجاتنا</h4> 
            <p className='mb-10'>تعرف اكثر عن منصتنا و ميزاتها</p>
            <Swiper
        slidesPerView={slideshow2}
        spaceBetween={100}
        loop={true}
        pagination={{
          clickable: true,
        }}
      
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='swiper-div s1'>
                <h2>منصة التخليص الجمركي</h2>
                <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة مل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-div s2'>
            <h2>منصة التخليص الجمركي</h2>
            <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة مل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='swiper-div s1'>
            <h2>منصة التخليص الجمركي</h2>
                <p>تطرح شركة ماتريكس الخيار الامثل في صناعة الترويج و التسويق حيث تتيح لك فرصة عمل قريدة من نوعها بمردود مالي مميز و نسب بيع محفزة تطرح شركة  شركة ماتريكس الخيار الامثل في صناعة مل قريد ماتريكس الخيار الامثل</p>
            </div>
        </SwiperSlide>
      </Swiper>
       
            </section>
        </Container>
     </section>



     <section className='counter mt-28 mb-24 relative' id='who'>
        <Container>
            <section>
                <div>
                    <h2>+150</h2>
                    <span>تاجر</span>
                </div>
                <div>
                    <h2>+30</h2>
                    <span>اجازات استيراد</span>
                </div>
                <div>
                    <h2>+30</h2>
                    <span>عدد التحميلات</span>
                </div>
                <div>
                    <h2>+70</h2>
                    <span>مكتب تخليص جمركي</span>
                </div>
            </section>
        </Container>
     </section>
<Footer />
    </section>
  )
}

export default MainPage