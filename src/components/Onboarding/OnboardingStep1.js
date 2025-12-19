// src/components/Onboarding/OnboardingStep1.js
import React from 'react';

const OnboardingStep1 = ({ formData, onChange }) => {
  const handleChange = onChange;

  return (
    <div className="step-content">
      <h2 className="step-title">Preguntas de onboarding</h2>
      <p className="step-subtitle">
        Estas preguntas nos ayudan a entender en profundidad tu marca, tu historia y tus objetivos.
      </p>

      <div className="onboarding-block">
        <h3>A nivel interno: Proceso de autoconocimiento</h3>
        <div className="questions-grid">
          <Question
            label="1. ¿Quién soy y qué hago? Detallá las diferentes actividades/unidades de negocio."
            name="q1"
            value={formData.q1}
            onChange={handleChange}
          />
          <Question
            label="2. ¿Cuál es mi historia? Desde el comienzo hasta hoy (origen, equipo, hitos, desafíos)."
            name="q2"
            value={formData.q2}
            onChange={handleChange}
          />
          <Question
            label="3. ¿Cómo soy percibido por mis clientes y no clientes?"
            name="q3"
            value={formData.q3}
            onChange={handleChange}
          />
          <Question
            label="4. ¿Cuáles son mis objetivos principales como empresa? (comerciales, posicionamiento, internos, etc.)."
            name="q4"
            value={formData.q4}
            onChange={handleChange}
          />
          <Question
            label="5. ¿Cuáles son mis principales 5 fortalezas?"
            name="q5"
            value={formData.q5}
            onChange={handleChange}
          />
          <Question
            label="6. ¿Cuáles son mis principales 5 debilidades?"
            name="q6"
            value={formData.q6}
            onChange={handleChange}
          />
          <Question
            label="7. ¿Cuál es mi propuesta de valor diferencial?"
            name="q7"
            value={formData.q7}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="onboarding-block">
        <h3>A nivel externo: Investigación de mercado</h3>
        <div className="questions-grid">
          <Question
            label="8. ¿Cuál es mi público objetivo?"
            name="q8"
            value={formData.q8}
            onChange={handleChange}
          />
          <Question
            label="9. ¿Quién es mi cliente ideal?"
            name="q9"
            value={formData.q9}
            onChange={handleChange}
          />
          <Question
            label="10. ¿Quiénes son mis principales competidores? (5 principales, con puntos fuertes y débiles)."
            name="q10"
            value={formData.q10}
            onChange={handleChange}
          />
          <Question
            label="11. ¿Cuáles son las 3 principales oportunidades de crecimiento que percibo?"
            name="q11"
            value={formData.q11}
            onChange={handleChange}
          />
          <Question
            label="12. ¿Cuáles son las 3 principales amenazas que percibo como empresa?"
            name="q12"
            value={formData.q12}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="onboarding-block">
        <h3>A nivel comunicacional</h3>
        <div className="questions-grid">
          <Question
            label="13. ¿Cómo me siento cómodo comunicando? (formatos, tono, ejemplos)."
            name="q13"
            value={formData.q13}
            onChange={handleChange}
          />
          <Question
            label="14. ¿Cuáles son mis contactos/bases de datos actuales?"
            name="q14"
            value={formData.q14}
            onChange={handleChange}
          />
          <Question
            label="15. ¿Tengo mensaje de marca principal, slogan o claims previos?"
            name="q15"
            value={formData.q15}
            onChange={handleChange}
          />
          <Question
            label="16. ¿Qué estrategias de marketing utilicé previamente y qué resultados tuve?"
            name="q16"
            value={formData.q16}
            onChange={handleChange}
          />
          <Question
            label="17. ¿Cuáles son mis objetivos de marketing y comunicación a corto y largo plazo?"
            name="q17"
            value={formData.q17}
            onChange={handleChange}
          />
          <Question
            label="18. ¿Cuál es mi presupuesto para marketing y publicidad?"
            name="q18"
            value={formData.q18}
            onChange={handleChange}
          />
          <Question
            label="19. ¿Tengo eventos, lanzamientos o promociones próximas? (próximos 3 meses mín.)."
            name="q19"
            value={formData.q19}
            onChange={handleChange}
          />
          <Question
            label="20. ¿Quién toma decisiones de marketing en mi empresa? (roles y responsabilidades)."
            name="q20"
            value={formData.q20}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

const Question = ({ label, name, value, onChange }) => (
  <div className="field-group full-width">
    <label>{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      placeholder="Desarrollá tu respuesta con el mayor detalle posible."
    />
  </div>
);

export default OnboardingStep1;