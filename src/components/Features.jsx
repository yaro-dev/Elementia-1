import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {

    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`


        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('')
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>

        </div>
    )
}

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>Suspendisse iaculis consectetur sem</p>

                    <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>
                        Ut ac pellentesque nunc, ut aliquet metus. Donec sit amet metus et erat cursus faucibus eu et purus. Maecenas suscipit feugiat scelerisque.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                    </p>
                </div>


                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>

                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={
                            <>radia<b>n</b>t</>
                        }
                        description="Maecenas nunc tellus, vulputate at lectus sed, facilisis pretium neque. Integer sit amet convallis quam, ut elementum libero"

                    />
                </BentoTilt>

                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            muted
                            src="videos/features-m.mp4"
                            title={<>Astrum</>}
                            description="Vestibulum quis lacus commodo, volutpat quam id, pharetra quam. In viverra malesuada purus nec iaculis."
                        />
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-s.mp4"
                            title={<>L<b>u</b>xophos</>}
                            description="Duis luctus vestibulum volutpat. Pellentesque ornare risus ac nisl volutpat, et gravida tortor lobortis."
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<><b>A</b>lef</>}
                            description="Fusce sit amet justo at elit rhoncus aliquet. Sed volutpat turpis id lectus tristique viverra. Vestibulum ut vestibulum dui, ut vehicula massa."
                        />
                    </BentoTilt>

                    <BentoTilt className="bento_tilt_2">
                        <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black"> <b>T</b>he essence of M<b>A</b>GICK</h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </BentoTilt>

                    <BentoTilt className="bento-tilt_2">
                        <video src="/videos/feature-5.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </BentoTilt>

                </div>


            </div>
        </section>
    )
}

export default Features
