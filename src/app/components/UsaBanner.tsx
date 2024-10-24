'use client';
import React, { useState } from 'react';
import {
  Banner,
  BannerHeader,
  BannerButton,
  BannerContent,
  BannerGuidance,
  BannerIcon,
  BannerFlag,
  MediaBlockBody,
  Icon,
} from '@trussworks/react-uswds';

export default function USABanner() {
  const basePath: string = '/dibbs-site';
  const [isOpen, setIsOpen] = useState(false);
  const flagImg: string = `${basePath}/images/us-flag.png`;
  const dotGovIcon: string = `${basePath}/images/us-gov-icon.svg`;
  const httpsIcon: string = `${basePath}/images/https-icon.svg`;
  return (
    <Banner aria-label="Official website of the state department of something specific">
      <BannerHeader
        isOpen={isOpen}
        flagImg={<BannerFlag src={flagImg} aria-hidden alt="" />}
        headerText="This is an official website of the state department of something specific"
        headerActionText="Here's how you know"
      >
        <BannerButton
          isOpen={isOpen}
          aria-controls="custom-banner"
          onClick={(): void => {
            setIsOpen((previousIsOpen) => !previousIsOpen);
          }}
        >
          Here&apos;s how you know
        </BannerButton>
      </BannerHeader>
      <BannerContent id="custom-banner" isOpen={isOpen}>
        <div className="grid-row grid-gap-lg">
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={dotGovIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Official websites use .gov</strong>
                <br />A <strong>.gov</strong> website belongs to an official
                government organization in the United States.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
          <BannerGuidance className="tablet:grid-col-6">
            <BannerIcon src={httpsIcon} alt="" />
            <MediaBlockBody>
              <p>
                <strong>Secure .gov websites use HTTPS</strong>
                <br />A{' '}
                <strong>
                  lock (<Icon.Lock aria-label="Locked padlock icon" />)
                </strong>{' '}
                or <strong>https://</strong> means you&apos;ve safely connected
                to the .gov website. Share sensitive information only on
                official, secure websites.
              </p>
            </MediaBlockBody>
          </BannerGuidance>
        </div>
      </BannerContent>
    </Banner>
  );
}
