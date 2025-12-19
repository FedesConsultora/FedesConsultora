// src/pages/OnboardingEmpresas.js
import React, { useState, useEffect, useMemo } from 'react';
import OnboardingStep0 from '../components/Onboarding/OnboardingStep0';
import OnboardingStep1 from '../components/Onboarding/OnboardingStep1';
import {
  enviarOnboardingStep0,
  enviarOnboardingStep1,
} from '../services/googleApi';

const STEP0_STORAGE_KEY = 'fedes_onboarding_step0';

const STEP0_FIELDS = [
  'fantasyName',
  'cuit',
  'mainContactName',
  'address',
  'email',
  'taxpayerType',
  'facebookUrl',
  'facebookAdminUser',
  'facebookGrantPermission',
  'facebookBMId',
  'instagramUser',
  'instagramPassword',
  'instagramFollowers',
  'tiktokUser',
  'tiktokPassword',
  'tiktokFollowers',
  'youtubeUrl',
  'youtubeAddAdmin',
  'linkedinUrl',
  'linkedinAddFede',
  'usesOtherChannels',
  'otherChannelsDetail',
  'driveBrandFolderUrl',
  'driveRawContentFolderUrl',
];

const OnboardingEmpresas = () => {
  const [currentStep, setCurrentStep] = useState(0); // 0 = Legajo, 1 = Preguntas
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // ===== Step 0 - Legajo de cliente =====
    fantasyName: '',
    cuit: '',
    mainContactName: '',
    address: '',
    email: '',
    taxpayerType: '',

    facebookUrl: '',
    facebookAdminUser: '',
    facebookGrantPermission: 'si',
    facebookBMId: '629423051411438',

    instagramUser: '',
    instagramPassword: '',
    instagramFollowers: '',

    tiktokUser: '',
    tiktokPassword: '',
    tiktokFollowers: '',

    youtubeUrl: '',
    youtubeAddAdmin: 'si',

    linkedinUrl: '',
    linkedinAddFede: 'si',

    usesOtherChannels: 'no',
    otherChannelsDetail: '',

    driveBrandFolderUrl: '',
    driveRawContentFolderUrl: '',

    // ===== Step 1 - Preguntas Onboarding =====
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    q6: '',
    q7: '',
    q8: '',
    q9: '',
    q10: '',
    q11: '',
    q12: '',
    q13: '',
    q14: '',
    q15: '',
    q16: '',
    q17: '',
    q18: '',
    q19: '',
    q20: '',
  });

  const isDirty = useMemo(
    () => Object.values(formData).some((value) => value && String(value).trim() !== ''),
    [formData]
  );

  // Cargar Step 0 desde localStorage si existe
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const stored = window.localStorage.getItem(STEP0_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setFormData((prev) => ({
          ...prev,
          ...parsed,
        }));
      }
    } catch (err) {
      console.error('Error leyendo step0 de localStorage', err);
    }
  }, []);

  // 🔒 No dejar salir si hay cambios y no enviaron
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!isSubmitted && isDirty) {
        event.preventDefault();
        event.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isSubmitted, isDirty]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updated = { ...prev, [name]: value };

      // Si es un campo del Step 0, lo persistimos en localStorage
      if (STEP0_FIELDS.includes(name) && typeof window !== 'undefined') {
        try {
          const step0Data = {};
          STEP0_FIELDS.forEach((field) => {
            step0Data[field] = updated[field] || '';
          });
          window.localStorage.setItem(STEP0_STORAGE_KEY, JSON.stringify(step0Data));
        } catch (err) {
          console.error('Error guardando step0 en localStorage', err);
        }
      }

      return updated;
    });

    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Validaciones mínimas para pasar de Step 0 a Step 1
  const validateStep0 = () => {
    const newErrors = {};
    if (!formData.fantasyName.trim()) newErrors.fantasyName = 'Este campo es obligatorio.';
    if (!formData.cuit.trim()) newErrors.cuit = 'Este campo es obligatorio.';
    if (!formData.mainContactName.trim()) newErrors.mainContactName = 'Este campo es obligatorio.';
    if (!formData.email.trim()) newErrors.email = 'Este campo es obligatorio.';
    if (!formData.taxpayerType.trim()) newErrors.taxpayerType = 'Seleccioná una opción.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = async () => {
    if (currentStep === 0) {
      if (!validateStep0()) return;

      try {
        await enviarOnboardingStep0(formData);
      } catch (error) {
        console.error('Error enviando STEP 0:', error);
        // No bloqueamos el avance si falla
      }

      setCurrentStep(1);
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      setCurrentStep(0);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await enviarOnboardingStep1(formData);
      console.log('Onboarding enviado:', formData);
      setIsSubmitted(true);

      // Limpiamos el step0 persistido
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(STEP0_STORAGE_KEY);
      }
    } catch (error) {
      console.error('Error enviando formulario (STEP 1):', error);
    }
  };

  const renderStepIndicator = () => (
    <div className="onboarding-steps">
      <div
        className={`step-item ${currentStep === 0 ? 'active' : ''} ${isSubmitted ? 'completed' : ''
          }`}
      >
        <div className="step-circle">0</div>
        <div className="step-label">Legajo de cliente</div>
      </div>
      <div
        className={`step-item ${currentStep === 1 ? 'active' : ''} ${isSubmitted ? 'completed' : ''
          }`}
      >
        <div className="step-circle">1</div>
        <div className="step-label">Preguntas de onboarding</div>
      </div>
    </div>
  );

  return (
    <main className="onboarding-section">
      <section className="onboarding-container">
        <header className="onboarding-header">
          <p className="overline">Onboarding Fedes</p>
          <h1>
            Empecemos por conocerte <span>en serio.</span>
          </h1>
          <p className="description">
            Esta sección es exclusiva para nuevos clientes. Son sólo dos pasos: primero completás tu legajo,
            después respondés algunas preguntas estratégicas. Con eso, podemos entenderte de verdad y preparar un proceso que nos lleve lejos a las dos partes.
          </p>
        </header>

        <div className="onboarding-layout">
          <aside className="onboarding-sidebar">
            {renderStepIndicator()}
            <div className="sidebar-card">
              <h3>¿Por qué te pedimos esto?</h3>
              <p>
                Porque no trabajamos con supuestos. Cuanta más información tengamos desde el inicio,
                más precisa y útil va a ser la estrategia.
              </p>
              <p><strong>Nos permite:</strong></p>
              <ul>
                <li>Configurar correctamente tus cuentas.</li>
                <li>Hacer un diagnóstico claro.</li>
                <li>Diseñar un plan ajustado a tu realidad.</li>
              </ul>

              {!isSubmitted && (
                <p className="sidebar-note">
                  Hasta que no envíes el formulario, te vamos a pedir que sigas en esta ventana.
                  Después sí: sos libre de recorrer toda la landing.
                </p>
              )}

              {isSubmitted && (
                <div className="sidebar-success">
                  <strong>¡Listo! 🎉</strong>
                  <p>
                    Recibimos tu información. Ahora ya podés navegar por la landing y seguir
                    conociendo cómo trabajamos.
                  </p>
                </div>
              )}
            </div>
          </aside>

          <form className="onboarding-form" onSubmit={handleSubmit}>
            {currentStep === 0 && (
              <OnboardingStep0 formData={formData} errors={errors} onChange={handleChange} />
            )}

            {currentStep === 1 && (
              <OnboardingStep1 formData={formData} onChange={handleChange} />
            )}

            <div className="onboarding-actions">
              {currentStep === 1 && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleBack}
                  disabled={isSubmitted}
                >
                  Volver al paso anterior
                </button>
              )}

              {currentStep === 0 && (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                  disabled={isSubmitted}
                >
                  Continuar al Paso 1
                </button>
              )}

              {currentStep === 1 && !isSubmitted && (
                <button type="submit" className="btn-primary">
                  Enviar formulario
                </button>
              )}

              {isSubmitted && (
                <a href="/" className="btn-link">
                  Ir a la landing principal
                </a>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default OnboardingEmpresas;