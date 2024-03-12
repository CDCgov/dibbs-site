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
import orchestration from "../../public/icons/orchestration.svg";


export const BuildingBlocksInfo = () => {
    return (
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
                <div className={`${styles.sdkInfoMaxWidth}`}>
                    Below, you will find a description of how the five core Building
                    Blocks work to clean and transform data as part of the DIBBs
                    pipeline. To see the full suite of containerized services,
                    check out our&nbsp;
                    <span>
                    <Link
                        className="font-semibold"
                        href="https://github.com/CDCgov/phdi/tree/main/containers"
                        target="_blank"
                    >
                      containers repository.
                    </Link>
                  </span>
                </div>
                <div className={"grid-container padding-0 flex-align-center"}>
                    <div className="grid-row padding-top-3">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                            <Image
                                alt=""
                                src={validation}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/validation.html"
                            target='_blank'>
                            Validation
                        </Link>
                        Reads and validates all eCR fields of interest based on
                        specified, custom preferences; ensures that its XML structure is
                        valid, that the required fields are present and in the correct
                        format, and that the data is trustworthy
                    </div>
                    <div className="grid-row padding-top-3">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                            <Image
                                alt=""
                                src={fhirConverter}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/fhir-converter.html"
                            target='_blank'
                        >
                            FHIR Converter
                        </Link>
                        Converts incoming messages into the FHIR (Fast Healthcare
                        Interoperability Resources) standard, which acts as a common
                        language between data streams, thereby standardizing data
                        streams for record linkage and making 1:1 comparisons
                    </div>
                    <div className="grid-row padding-top-3">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                            <Image
                                alt=""
                                src={organization}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/ingestion.html"
                            target='_blank'>
                            Ingestion
                        </Link>
                        <div>
                            <p className={""}>Consists of two separate steps: (1) Standardization; (2)
                                Geocoding</p>
                            <p className={"padding-top-1"}><span
                                className={"font-semibold"}>Standardization:</span> Standardizes
                                data fields (including record
                                name, date of birth, phone number, and geolocation)
                                based on
                                preset defaults to ensure consistency</p>
                            <p className={"padding-top-1"}><span
                                className={"font-semibold"}>Geocoding:</span> Enriches
                                data by providing precise geographic
                                locations based on patient street addresses from input
                                data</p>
                        </div>
                    </div>
                    <div className="grid-row padding-top-3">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                            <Image
                                alt=""
                                src={link}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/record-linkage.html"
                            target='_blank'>
                            Record Linkage
                        </Link>
                        Identifies multiple records referring to the same individual and
                        combines them into a single, more complete patient record
                    </div>
                    <div className="grid-row padding-top-3 padding-bottom-2">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center ">
                            <Image
                                alt=""
                                src={messageParser}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/message-parser.html"
                            target='_blank'>
                            Message Parser
                        </Link>
                        Extracts relevant data from an eCR into a tabular format (i.e.
                        spreadsheet); customizable depending on user needs
                    </div>
                    <div className="grid-row padding-top-3">
                        <div
                            className="display-none desktop:display-inline-block margin-right-2 flex-align-self-center">
                            <Image
                                alt=""
                                src={orchestration}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto"
                                }} />
                        </div>
                        <Link
                            className="font-semibold flex-align-self-center padding-bottom-1"
                            href="https://cdcgov.github.io/phdi/latest/containers/orchestration.html"
                            target='_blank'>
                            Orchestration
                        </Link>
                            Enables coordinated execution of DIBBs Building Blocks in
                            any order, allowing for fully automated workflows
                    </div>
                </div>
            </div>
        </div>
    );
}
