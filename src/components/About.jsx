import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';

gsap.registerPlugin(ScrollTrigger)

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'top top',
                end: '+=800 top',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,

            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0
        })
    })

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general !text-base uppercase md:text-[10px]'>Convallis volutpat amet!</h2>

                <AnimatedTitle title="Lorem ipsum <b>c</b>olor sit <b>amet, consectetur adipiscing elit." containerClass="mt-5 !text-black text-center"></AnimatedTitle>
               

                <div className='about-subtext'>
                    <p>Morbi commodo sem vel justo dictum, in laoreet leo finibus</p>

                    <p>hasellus sit amet mi ac neque convallis volutpat. Mauris dignissim finibus nunc</p>
                </div>
            </div>

            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src='img/about.webp' alt='Background' className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>

        </div>
    )
}

export default About
