import React from 'react'
import Slider from 'react-slick';

function HomePageBanner() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        speed: 2300,
        beforeChange: function (currentSlide, nextSlide) {
            // console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            // console.log("after change", currentSlide);
        }
    };
    const flexContainerStyle = {
        display: 'flex',
      };
    return (
        <>

            <div className=" bg-slate-100 h-[90vh] w-full">
                <div className="flex h-full md:mx-20 sm:mx-0">
                    <div className="w-1/2 px-4 flex h-full flex-col items-start justify-center ">
                        <h4 className='font-bold text-6xl my-3'>The Ultimate Resume Builder</h4>
                        <span className='leading-6'>Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</span>
                        <button className='h-10 w-auto bg-blue-600 text-white font-bold px-3 leading-3 my-3 hover:bg-sky-700 rounded transition duration-300 ease-in-out '>Try For Free</button>
                    </div>
                    <div className="w-1/2 px-4 overflow-hidden">
                        <Slider {...settings}>
                            <div className='flex my-5 homepageBannerSlider ' style={flexContainerStyle}>
                                <img src="/images/demo1.webp" className='h-80 w-1/2 mx-3' alt='logo' />
                                <img src="/images/demo2.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                            </div>
                            <div className='flex my-5 homepageBannerSlider' style={flexContainerStyle}>
                                <img src="/images/demo3.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                                <img src="/images/demo4.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                            </div>
                            <div className='flex my-5 homepageBannerSlider ' style={flexContainerStyle}>
                                <img src="/images/demo5.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                                <img src="/images/demo6.png" className='h-80 w-1/2 mx-3' alt='logo' />
                            </div>
                            <div className='flex my-5 homepageBannerSlider' style={flexContainerStyle}>
                                <img src="/images/demo7.webp" className='h-80 w-1/2 mx-3' alt='logo' />
                                <img src="/images/demo8.png" className='h-80 w-1/2 mx-3' alt='logo' />
                            </div>   <div className='flex my-5 homepageBannerSlider ' style={flexContainerStyle}>
                                <img src="/images/demo9.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                                <img src="/images/demo10.jpg" className='h-80 w-1/2 mx-3' alt='logo' />
                            </div>
                        </Slider>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageBanner; 