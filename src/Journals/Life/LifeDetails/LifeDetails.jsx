import img from '../../../assets/img/book (2).png'

const LifeDetails = () => {
    return (
        <div className="">
            <div className="border-2 rounded p-8">
                <div className='flex flex-wrap lg:gap-12 gap-6'>
                    <div className='w-1/4'>
                        <img src={img} alt="" />
                    </div>

                    <div>
                        <h2 className='text-lg font-medium text-[#072159]'>Journal of Agriculture & Life Sciences</h2>
                        <div className='text-[15px]'>
                            <p className='font-medium text-[#91000cae]'>Editor-in-Chief:</p>
                            <p>Dr. Fang Wang</p>
                            <p>University of Colorado Boulder, United States of America</p>
                        </div>

                        <div className='py-2 space-y-2 text-[15px]'>
                            <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                                <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                <p>2375-4214 (Print Version)</p>
                            </div>

                            <div className='flex flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                                <p className='font-medium text-[#91000cae]'>ISSN:</p>
                                <p>2375-4222 (Electronic Version)</p>
                            </div>
                        </div>

                        <div className='flex text-[15px] flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                            <p className='font-medium text-[#91000cae]'>Frequency:</p>
                            <p>Semi-annually (2 issues per year)</p>
                        </div>

                        <div className='flex text-[15px] items-center space-x-2 py-2'>
                            <p className='font-medium text-[#91000cae]'>Nature:</p>
                            <p>Print and Online</p>
                        </div>

                        <div className='flex text-[15px] flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1'>
                            <p className='font-medium text-[#91000cae]'>Submission E-mail:</p>
                            <p>editor@aripd.net</p>
                        </div>

                        <div className='flex text-[15px] flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap items-center lg:space-x-2 gap-1 py-2'>
                            <p className='font-medium text-[#91000cae]'>Language of Publication:</p>
                            <p>English</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeDetails;