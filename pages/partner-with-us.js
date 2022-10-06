import { Button } from '@trussworks/react-uswds';
import styles from '../styles/Home.module.scss'

export default function GetInvolved() {
    return (
        <div className='padding-y-9'>
            <div className='margin-bottom-9'>
                <div className="grid-container maxw-desktop-lg">
                    <div className='mb-10'>
                        <h1 className='text-center text-accent-cool-darker font-extrabold font-ui-2xl mb-4'>Partner with us</h1>
                        <div fluid className='mx-auto w-6/12 text-center text-base-darkest font-ui-xs'>
                            Public health agencies have a variety of opportunities to contribute to the development of Building Blocks. Below we've outlined how jurisdictions can get involved at various levels of partnership, including our beta program, focus groups, and Community of Practice (CoP).
                            <br />
                            <br />
                            This is also an opportunity extended to any partner who would like their feedback incorporated into future Building Blocks work, but who may not be immediately available to participate in a pilot.
                        </div>
                    </div>
                    <div className='grid-row'>
                        <div className="desktop:grid-col-6">
                            <div className='margin-right-4 padding-x-4 padding-y-5 bg-primary-lighter radius-md'>
                                <div className="text-center mb-3">Picture placeholder</div>
                                <h4 className="text-center text-accent-cool-darker mb-3 font-ui-xl font-bold">Beta program</h4>
                                <div className="text-base-darkest font-ui-xs">
                                    Our beta program is an opportunity for STLTs to define and iterate on existing Building Blocks. By participating in this program, STLTs will gain a greater awareness about their data architecture strengths and weaknesses and help improve a part of their data process.
                                    <br /> <br />
                                    We invite you to visit our SDK toolkit where you can explore the full range of modular Building Blocks. If interested in getting involved in our beta program, please reach out to our team.
                                </div>
                                <div className="text-center mt-4">
                                    <Button >Learn More</Button>
                                </div>
                            </div>
                        </div>
                        <div className="desktop:grid-col-6">
                            <div className='padding-x-4 padding-y-5 bg-primary-lighter radius-md'>
                                <div className="text-center mb-3">Picture placeholder</div>
                                <h4 className="text-center text-accent-cool-darker mb-3 font-ui-xl font-bold">Focus groups</h4>
                                <div className="text-base-darkest font-ui-xs">
                                    We are conducting a series of focus groups to hear back from public health agency staff who interact with data related to childhood lead poisoning, Legionnaires’ disease, listeria, and HIV surveillance at any point along the data lifecycle (e.g., collection, ingestion, management, analysis, visualization).
                                    <br /> <br />
                                    The purpose of these focus groups is to gather STLT input on how we prioritize and design potential Building Blocks. Each focus group will last for approximately 60 minutes.</div>
                                <div className="text-center mt-4">
                                    <Button >Learn More</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid-container maxw-desktop-lg'>
                <div className="grid-row">
                    <div className='desktop:grid-col-6'>
                        <div>hello</div>
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
