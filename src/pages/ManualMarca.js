import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const ManualMarca = () => {
  const { t } = useTranslation();

  const [activeBenefit, setActiveBenefit] = useState(null);
  const [activeImpact, setActiveImpact] = useState(null);

  const toggleBenefit = (index) => {
    setActiveBenefit(activeBenefit === index ? null : index);
  };

  const toggleImpact = (index) => {
    setActiveImpact(activeImpact === index ? null : index);
  };

  const benefits = [
    { emoji: '🚀', content: t('manual_page.benefits.identity') },
    { emoji: '🚀', content: t('manual_page.benefits.communication') },
    { emoji: '🚀', content: t('manual_page.benefits.value_proposal') },
    { emoji: '🚀', content: t('manual_page.benefits.efficiency') },
  ];

  const impacts = [
    { emoji: '✅', content: t('manual_page.impact.marketing_sales') },
    { emoji: '✅', content: t('manual_page.impact.employees') },
    { emoji: '✅', content: t('manual_page.impact.internal_external_comms') },
    { emoji: '✅', content: t('manual_page.impact.employer_branding') },
  ];

  return (
    <main className="manualSection">
      <div className="cardsContainer">

        <div className="manualCard introCard">
          <h2 className="cardTitle">{t('manual_page.title')}</h2>
          <p className="cardText uno">{t('manual_page.intro_text')}</p>
          <h2 className="cardTitleDos">{t('manual_page.more_than_visual')}</h2>
          <p className="cardText"><Trans i18nKey="manual_page.more_than_visual_text_1" /></p>
          <p className="cardText">{t('manual_page.more_than_visual_text_2')}</p>
        </div>

        <div className="manualCard benefitsCard">
          <h3 className="cardSubtitle">{t('manual_page.why_fundamental')}</h3>
          <p className="cardText">{t('manual_page.why_fundamental_text')}</p>
          <p className="aclaracion">{t('manual_page.click_emojis')}</p>

          <div className="benefitsCarousel">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`benefitPill ${activeBenefit === index ? 'open' : ''}`}
                onClick={() => toggleBenefit(index)}
              >
                <span className="emoji">{benefit.emoji}</span>
                <div className="pillContent">
                  <p><Trans i18nKey={`manual_page.benefits.${Object.keys(t('manual_page.benefits'))[index]}`} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="manualCard impactCard">
          <h3 className="cardSubtitle">{t('manual_page.impact_organization')}</h3>
          <p className="cardText">{t('manual_page.impact_text')}</p>
          <p className="aclaracion">{t('manual_page.click_emojis_details')}</p>

          <div className="impactChecklist">
            {impacts.map((impact, index) => (
              <div
                key={index}
                className={`checkItem ${activeImpact === index ? 'open' : ''}`}
                onClick={() => toggleImpact(index)}
              >
                <span className="emoji">{impact.emoji}</span>
                <div className="pillContent">
                  <p><Trans i18nKey={`manual_page.impact.${Object.keys(t('manual_page.impact'))[index]}`} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="manualCard conclusionCard">
          <div className="cardContent">
            <h3 className="cardSubtitle">{t('manual_page.challenge_2025')}</h3>
            <p className="cardText"><Trans i18nKey="manual_page.challenge_title" /></p>
            <p className="cardText">{t('manual_page.challenge_text_1')}</p>
            <p className="cardText">{t('manual_page.challenge_text_2')}</p>
            <p className="cardText">{t('manual_page.challenge_text_3')}</p>
            <p className="cardText"><Trans i18nKey="manual_page.challenge_contact" /></p>
          </div>
          <div className="cardImage">
            <img src="https://fedesagency.com/fedes-consultora/landing/fotoBlogPubli3.jpg" alt="Publicación" loading="lazy" />
          </div>
        </div>

      </div>
    </main>
  );
};

export default ManualMarca;
