import React from "react";
import Translate from "react-translate-component";

import GoogleAds from "../../images/google_ads.png";
import GoogleAnalytics from "../../images/google_analytics.png";
import FacebookAds from "../../images/facebook_ads.png";
import InstagramAds from "../../images/instagram_ads.jpg";
import TikTokAds from "../../images/tiktok_ads.jpg";
import Roistat from "../../images/roistat.png";
import AmoCRM from "../../images/amo_crm.png";
import Bitrix from "../../images/bitrix.png";
import CallTouch from "../../images/calltouch.jpg";

export const Companies = () => {
  return (
    <div className="partners-companies">
      <div className="partners-companies-header">
        <Translate
          component="h2"
          content="partnersTitle"
          className="partners-companies-title"
        />
      </div>
      <div className="partners-companies-list">
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={GoogleAds}
              className="partners-companies-company-logo google-ads-logo"
              alt="Google Ads"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyGoogleAds"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={GoogleAnalytics}
              className="partners-companies-company-logo google-analytics-logo"
              alt="Google Analytics"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyGoogleAnalytics"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={FacebookAds}
              className="partners-companies-company-logo facebook-ads-logo"
              alt="Facebook Ads"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyFacebookAds"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={InstagramAds}
              className="partners-companies-company-logo instagram-logo"
              alt="Instagram Ads"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyInstagramAds"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={TikTokAds}
              className="partners-companies-company-logo tik-tok-logo"
              alt="TikTok Ads"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyTikTokAds"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={Roistat}
              className="partners-companies-company-logo roistat-logo"
              alt="Roistat"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyRoistat"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={AmoCRM}
              className="partners-companies-company-logo amo-crm-logo"
              alt="Amo CRM"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyAmoCRM"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={Bitrix}
              className="partners-companies-company-logo bitrix-logo"
              alt="Bitrix"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyBitrix"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
        <div className="partners-companies-company">
          <div className="partners-companies-company-logo-box">
            <img
              src={CallTouch}
              className="partners-companies-company-logo calltouch-logo"
              alt="CallTouch"
            />
          </div>
          <div className="partners-companies-company-title-box">
            <Translate
              component="h3"
              content="partnersCompanyCallTouch"
              className="partners-companies-comapany-title"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
