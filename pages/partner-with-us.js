import styles from '../styles/Home.module.scss'

export default function GetInvolved() {
    return (
        <div>
            <div className='bg-blue-50 py-20'>
                <div className="container max-w-full">
                    <div className='mb-10'>
                        <h1 className='text-center text-blue-700 font-extrabold text-6xl mb-4'>Partner with us</h1>
                        <div fluid className='mx-auto w-7/12 text-center text-blue-700'>
                            Public health agencies have a variety of opportunities to contribute to the development of Building Blocks. Below we've outlined how jurisdictions can get involved at various levels of partnership, including our beta program, focus groups, and Community of Practice (CoP).
                            <br />
                            <br />
                            This is also an opportunity extended to any partner who would like their feedback incorporated into future Building Blocks work, but who may not be immediately available to participate in a pilot.
                        </div>
                    </div>
                    <div className='flex flex-rows justify-center'>
                        <div className={`mr-8 py-8 px-20 bg-blue-100 ${styles.dashRoundedBorder} max-w-lg`}>
                            <div className="text-center mb-3">Picture placeholder</div>
                            <h4 className="text-center text-blue-700 mb-3 text-2xl">Beta program</h4>
                            <div className="text-blue-700 text-sm">
                                Our beta program is an opportunity for STLTs to define and iterate on existing Building Blocks. By participating in this program, STLTs will gain a greater awareness about their data architecture strengths and weaknesses and help improve a part of their data process.
                                <br /> <br />
                                We invite you to visit our SDK toolkit where you can explore the full range of modular Building Blocks. If interested in getting involved in our beta program, please reach out to our team.
                            </div>
                            <div className="text-center mt-4">
                                <div>Learn More</div>
                            </div>
                        </div>
                        <div className={`py-8 px-20 bg-blue-100 ${styles.dashRoundedBorder} max-w-lg`}>
                            <div className="text-center mb-3">Picture placeholder</div>
                            <h4 className="text-center text-blue-700 mb-3 text-2xl">Focus Groups</h4>
                            <div className="text-blue-700 text-sm">
                                We are conducting a series of focus groups to hear back from public health agency staff who interact with data related to childhood lead poisoning, Legionnaires’ disease, listeria, and HIV surveillance at any point along the data lifecycle (e.g., collection, ingestion, management, analysis, visualization).
                                <br /> <br />
                                The purpose of these focus groups is to gather STLT input on how we prioritize and design potential Building Blocks. Each focus group will last for approximately 60 minutes.</div>
                            <div className="text-center mt-4">
                                <div>Learn More</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-blue-100 ${styles.dashBorder}`}>
                <div className='container py-10 max-w-full'>
                    <div className={`max-w-4xl mx-auto`}>
                        <h4 className="text-center text-blue-700 mb-3 text-2xl font-medium">You can also help support the Community of Practice</h4>
                        <div className="text-center mb-4 text-blue-700 font-normal font-sm">
                            A CoP partner is a STLT who, in the immediate future, is interested in offering feedback about the design principles and application interface(s) for Building Blocks and, in the near future, is interested in participating to the Building Block ecosystem by contributing code, helping govern the open source community, or offering other services as needed.
                        </div>
                        <div className="text-center width-fit">
                            <div>
                                Contact us at dmibuildingblocks@cdc.gov
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
}
