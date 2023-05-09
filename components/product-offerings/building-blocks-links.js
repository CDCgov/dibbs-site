import styles from "../../styles/Home.module.scss";
import {Link} from "@trussworks/react-uswds";
import Image from "next/image";
import cloudIcon from "../../public/icons/cloud.svg";
import fhirConverter from "../../public/icons/fhirConverter.svg";
import locationIcon from "../../public/icons/location.svg";
import organization from "../../public/icons/organization.svg";
import link from "../../public/icons/link.svg";
import tabulation from "../../public/icons/tabulation.svg";
import validation from "../../public/icons/validation.svg";
import messageParser from "../../public/icons/messageParser.svg";


export const BuildingBlocksInfo = () => {
    return(
        <div
            className={`grid-container margin-bottom-5 desktop:radius-md bg-white padding-y-5 desktop:padding-top-5 desktop:padding-bottom-3  padding-x-205 desktop:padding-x-5 ${styles.dynamicShadow}`}
        >
            <h2
                className={`lg:font-semibold text-2xl lg:text-3xl margin-bottom-105 ${styles.headerText} text-accent-cool-darker`}
            >
                Building Blocks
            </h2>
            <div
                className={`lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
            >
                <div className={styles.sdkInfoMaxWidth}>
                    Access the range of modular Building Blocks as containerized services, which can be imported out of
                    the box to ingest and report on public health data. To see the full suite of containerized services,
                    check out our&nbsp;
                    <span>
                    <Link
                        className="font-semibold"
                        href="https://github.com/CDCgov/phdi/tree/main/containers"
                        target="_blank"
                    >
                      containers repository
                    </Link>
                  </span>
                    &nbsp;and learn how to integrate them into your data system with our
                    documentation below.
                </div>
                <div className={"grid-container padding-0 flex-align-center"}>
                    <div className="grid-row desktop:margin-y-6">
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={cloudIcon}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/alerts.html"
                                    target='_blank'
                                >
                                    Alerts BB
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={fhirConverter}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/fhir-converter.html"
                                    target='_blank'
                                >
                                    FHIR Converter BB
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={organization}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/ingestion.html"
                                    target='_blank'>
                                    Ingestion BB
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center ">
                                    <Image alt="" src={messageParser}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/message_parser.html"
                                    target='_blank'>
                                    Message Parser BB
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={link}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/record_linkage.html"
                                    target='_blank'>
                                    Record Linkage BB
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={tabulation}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/tabulation.html"
                                    target='_blank'>
                                    Tabulation BB
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image alt="" src={validation}/>
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/containers/validation.html"
                                    target='_blank'>
                                    Validation BB
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}