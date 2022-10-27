import { Button } from '@trussworks/react-uswds';
import styles from '../styles/Home.module.scss'
import getInvolved1 from '../public/get-involved-1.svg'
import getInvolved2 from '../public/get-involved-2.svg'
import getInvolved3 from '../public/get-involved-3.svg'
import mobileGetInvolved1 from '../public/mobile/get-involved-1.svg'
import mobileGetInvolved2 from '../public/mobile/get-involved-2.svg'
import mobileGetInvolved3 from '../public/mobile/get-involved-3.svg'

import Image from 'next/image';


export default function GetInvolved() {
    return (
        <div className='desktop:padding-y-9'>
            <div className="grid-container -desktop-lg padding-0">
                <div className='padding-y-5 padding-x-2'>
                    <h1 className='text-center text-accent-cool-darker font-extrabold font-ui-2xl mb-4'>Partner with us</h1>
                    <div className='mx-auto desktop:width-tablet lg:text-center text-base-darkest font-ui-xs'>
                        Public health agencies have a variety of opportunities to contribute to the development of Building Blocks. Below we&apos;ve outlined how jurisdictions can get involved at various levels of partnership, including our beta program, focus groups, and Community of Practice (CoP).
                        <br />
                        <br />
                        This is also an opportunity extended to any partner who would like their feedback incorporated into future Building Blocks work, but who may not be immediately available to participate in a pilot.
                    </div>
                </div>
                <div className='grid-row desktop:grid-gap-4'>
                    <div className="border-1px border-accent-cool desktop:border-0 desktop:grid-col-6">
                        <div className='padding-x-2 padding-y-5 bg-primary-lighter desktop:radius-md desktop:padding-x-4'>
                            <div className="text-center mb-3 desktop:display-none">
                                <Image alt='' src={mobileGetInvolved1} layout='fixed' />
                            </div>
                            <div className="text-center mb-3 display-none desktop:display-block">
                                <Image alt='' src={getInvolved1} layout='fixed' />
                            </div>
                            <h4 className="text-center text-accent-cool-darker mb-3 font-ui-xl font-bold">Beta program</h4>
                            <div className="text-base-darkest font-ui-xs">
                                Our beta program is an opportunity for STLTs to define and iterate on existing Building Blocks. By participating in this program, STLTs will gain a greater awareness about their data architecture strengths and weaknesses and help improve a part of their data process.
                                <br /> <br />
                                We invite you to visit our SDK toolkit where you can explore the full range of modular Building Blocks. If interested in getting involved in our beta program, please reach out to our team.
                            </div>
                            <div className="text-center margin-top-2 desktop:margin-top-4">
                                <Button >Learn More</Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-x-1px border-bottom-1px border-accent-cool desktop:border-0 desktop:grid-col-6">
                        <div className='padding-x-4 padding-y-5 bg-primary-lighter radius-md'>

                            <div className="text-center mb-3 display-none desktop:display-block">
                                <Image alt='' src={getInvolved2} layout='fixed' />
                            </div>                            <h4 className="text-center text-accent-cool-darker mb-3 font-ui-xl font-bold">Focus groups</h4>
                            <div className="text-base-darkest font-ui-xs">
                                We are conducting a series of focus groups to hear back from public health agency staff who interact with data related to childhood lead poisoning, Legionnaires’ disease, listeria, and HIV surveillance at any point along the data lifecycle (e.g., collection, ingestion, management, analysis, visualization).
                                <br /> <br />
                                The purpose of these focus groups is to gather STLT input on how we prioritize and design potential Building Blocks. Each focus group will last for approximately 60 minutes.</div>
                            <div className="text-center margin-top-2 desktop:margin-top-4">
                                <Button >Learn More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-container -desktop-lg'>
                <div className="grid-row padding-y-5 desktop:padding-top-5 desktop:padding-bottom-0">
                    <div className='desktop:grid-col-12 text-center desktop:display-none'>
                        <Image alt='' src={mobileGetInvolved3} layout='responsive' />
                    </div>
                    <div className='desktop:grid-col-6 display-none desktop:display-inline-block'>
                        <Image alt='' src={getInvolved3} layout='fixed' />
                    </div>
                    <div className='desktop:grid-col-6'>
                        <h4 className="text-accent-cool-darker mb-3 font-bold font-ui-xl ">You can also help support the Community of Practice</h4>
                        <div className="mb-4 text-base-darkest font-normal font-sm">
                            A CoP partner is a STLT who, in the immediate future, is interested in offering feedback about the design principles and application interface(s) for Building Blocks and, in the near future, is interested in participating to the Building Block ecosystem by contributing code, helping govern the open source community, or offering other services as needed.
                        </div>
                        <Button>Contact Us</Button>

                    </div>
                </div>

            </div>
        </div >
    );
}
