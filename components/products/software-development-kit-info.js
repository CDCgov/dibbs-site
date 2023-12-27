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
import transport from "../../public/icons/transport.svg";


export const SoftwareDevelopmentKitInfo = () => {
    return (
        <div
            className={`grid-container desktop:radius-md bg-white padding-y-5 desktop:padding-top-5 desktop:padding-bottom-3  padding-x-205 desktop:padding-x-5 ${styles.dynamicShadow}`}
        >
            <h2
                className={`lg:font-semibold text-2xl lg:text-3xl margin-bottom-105 ${styles.headerText} text-accent-cool-darker`}
            >
                Software Development Kit
            </h2>
            <div
                className={`lg:text-base font-public-sans-xs ${styles.subBodyTextLineHeight}`}
            >
                <div className={styles.sdkInfoMaxWidth}>
                    Our software development kit (SDK) is a Python library that contains source code for the Building
                    Blocks. If you want to customize the functionality of our Building Blocks for your own needs, find
                    our&nbsp;
                    <span>
                    <Link
                        className="font-semibold"
                        href="https://github.com/CDCgov/phdi/tree/main/phdi"
                        target="_blank"
                    >
                      SDK code repository
                    </Link>
                  </span>
                    &nbsp;and our documentation below.
                </div>
                <div className={"grid-container padding-0 flex-align-center"}>
                    <div className="grid-row desktop:margin-y-6">
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={cloudIcon}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/cloud.html"
                                    target='_blank'
                                >
                                    Cloud
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={fhirConverter}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/fhir.html"
                                    target='_blank'
                                >
                                    FHIR
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={locationIcon}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/geospatial.html"
                                    target='_blank'>
                                    Geospatial
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center ">
                                    <Image
                                        alt=""
                                        src={organization}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/harmonization.html"
                                    target='_blank'>
                                    Harmonization
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid-row">
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={link}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/linkage.html"
                                    target='_blank'>
                                    Linkage
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={tabulation}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/tabulation.html"
                                    target='_blank'>
                                    Tabulation
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={transport}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/transport.html"
                                    target='_blank'>
                                    Transport
                                </Link>
                            </div>
                        </div>
                        <div className="desktop:grid-col-3">
                            <div className="grid-row">
                                <div className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                                    <Image
                                        alt=""
                                        src={validation}
                                        style={{
                                            maxWidth: "100%",
                                            height: "auto"
                                        }} />
                                </div>
                                <Link
                                    className="font-semibold flex-align-self-center"
                                    href="https://cdcgov.github.io/phdi/latest/sdk/phdi/validation.html"
                                    target='_blank'>
                                    Validation
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
