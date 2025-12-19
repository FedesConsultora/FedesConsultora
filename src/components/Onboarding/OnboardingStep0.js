// src/components/Onboarding/OnboardingStep0.js
import React from 'react';

const OnboardingStep0 = ({ formData, errors, onChange }) => {
  const handleChange = onChange;

  return (
    <div className="step-content">
      <h2 className="step-title">Legajo de cliente</h2>
      <p className="step-subtitle">
        Estos datos nos permiten configurar correctamente tus cuentas y plataformas.
      </p>

      {/* Información general */}
      <div className="onboarding-block">
        <h3>Información general</h3>
        <div className="onboarding-grid">
          <div className="field-group">
            <label>Tipo de contribuyente *</label>
            <select
              name="taxpayerType"
              value={formData.taxpayerType}
              onChange={handleChange}
              className={errors.taxpayerType ? 'has-error' : ''}
            >
              <option value="">Seleccioná una opción</option>
              <option value="consumidor_final">Consumidor final</option>
              <option value="responsable_inscripto">Responsable inscripto</option>
              <option value="responsable_monotributo">Responsable Monotributo</option>
              <option value="iva_exento">IVA exento</option>
            </select>
            {errors.taxpayerType && (
              <span className="error-text">{errors.taxpayerType}</span>
            )}
          </div>
        </div>

        {/* Conditional fields for Responsable Monotributo */}
        {formData.taxpayerType === 'responsable_monotributo' && (
          <>
            {/* Empresa subitem */}
            <div className="sub-block">
              <h4>Empresa</h4>
              <div className="onboarding-grid">
                <div className="field-group">
                  <label>Nombre de Fantasía *</label>
                  <input
                    type="text"
                    name="monotributoFantasyName"
                    value={formData.monotributoFantasyName}
                    onChange={handleChange}
                    className={errors.monotributoFantasyName ? 'has-error' : ''}
                  />
                  {errors.monotributoFantasyName && (
                    <span className="error-text">{errors.monotributoFantasyName}</span>
                  )}
                </div>

                <div className="field-group">
                  <label>CUIT *</label>
                  <input
                    type="text"
                    name="monotributoCuit"
                    value={formData.monotributoCuit}
                    onChange={handleChange}
                    className={errors.monotributoCuit ? 'has-error' : ''}
                  />
                  {errors.monotributoCuit && (
                    <span className="error-text">{errors.monotributoCuit}</span>
                  )}
                </div>

                <div className="field-group">
                  <label>Razón Social *</label>
                  <input
                    type="text"
                    name="monotributoRazonSocial"
                    value={formData.monotributoRazonSocial}
                    onChange={handleChange}
                    className={errors.monotributoRazonSocial ? 'has-error' : ''}
                  />
                  {errors.monotributoRazonSocial && (
                    <span className="error-text">{errors.monotributoRazonSocial}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Contacto subitem */}
            <div className="sub-block">
              <h4>Contacto</h4>
              <div className="onboarding-grid">
                <div className="field-group">
                  <label>Nombre *</label>
                  <input
                    type="text"
                    name="monotributoContactNombre"
                    value={formData.monotributoContactNombre}
                    onChange={handleChange}
                    className={errors.monotributoContactNombre ? 'has-error' : ''}
                  />
                  {errors.monotributoContactNombre && (
                    <span className="error-text">{errors.monotributoContactNombre}</span>
                  )}
                </div>

                <div className="field-group">
                  <label>Apellido *</label>
                  <input
                    type="text"
                    name="monotributoContactApellido"
                    value={formData.monotributoContactApellido}
                    onChange={handleChange}
                    className={errors.monotributoContactApellido ? 'has-error' : ''}
                  />
                  {errors.monotributoContactApellido && (
                    <span className="error-text">{errors.monotributoContactApellido}</span>
                  )}
                </div>

                <div className="field-group">
                  <label>Teléfono *</label>
                  <input
                    type="text"
                    name="monotributoContactTelefono"
                    value={formData.monotributoContactTelefono}
                    onChange={handleChange}
                    className={errors.monotributoContactTelefono ? 'has-error' : ''}
                  />
                  {errors.monotributoContactTelefono && (
                    <span className="error-text">{errors.monotributoContactTelefono}</span>
                  )}
                </div>

                <div className="field-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="monotributoContactEmail"
                    value={formData.monotributoContactEmail}
                    onChange={handleChange}
                    className={errors.monotributoContactEmail ? 'has-error' : ''}
                  />
                  {errors.monotributoContactEmail && (
                    <span className="error-text">{errors.monotributoContactEmail}</span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Standard fields for other taxpayer types */}
        {formData.taxpayerType && formData.taxpayerType !== 'responsable_monotributo' && (
          <div className="onboarding-grid">
            <div className="field-group">
              <label>Nombre de fantasía *</label>
              <input
                type="text"
                name="fantasyName"
                value={formData.fantasyName}
                onChange={handleChange}
                className={errors.fantasyName ? 'has-error' : ''}
              />
              {errors.fantasyName && <span className="error-text">{errors.fantasyName}</span>}
            </div>

            <div className="field-group">
              <label>CUIT *</label>
              <input
                type="text"
                name="cuit"
                value={formData.cuit}
                onChange={handleChange}
                className={errors.cuit ? 'has-error' : ''}
              />
              {errors.cuit && <span className="error-text">{errors.cuit}</span>}
            </div>

            <div className="field-group">
              <label>Apellido y nombre del contacto principal *</label>
              <input
                type="text"
                name="mainContactName"
                value={formData.mainContactName}
                onChange={handleChange}
                className={errors.mainContactName ? 'has-error' : ''}
              />
              {errors.mainContactName && (
                <span className="error-text">{errors.mainContactName}</span>
              )}
            </div>

            <div className="field-group">
              <label>Domicilio fiscal o comercial</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>

            <div className="field-group">
              <label>Correo electrónico *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'has-error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Presencia digital */}
      <div className="onboarding-block">
        <h3>Presencia digital</h3>

        {/* Meta (Facebook + Instagram) */}
        <div className="sub-block">
          <h4 className='metaTag'>Meta</h4>
          <p className="block-description">
            Para que podamos trabajar en tus cuentas de Facebook e Instagram, debés agregarnos como socios en Meta Business Suite.
          </p>
          <div className="info-box">
            <strong>Datos para agregar como socio:</strong>
            <p><strong>Fedes Consultora</strong></p>
            <p>Identificador del portfolio comercial: <strong>629423051411438</strong></p>
          </div>

          {/* Facebook */}
          <div className="nested-sub-block">
            <h5>Facebook</h5>
            <div className="onboarding-grid">
              <div className="field-group">
                <label>URL del perfil / fanpage</label>
                <input
                  type="text"
                  name="facebookUrl"
                  value={formData.facebookUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>Usuario administrador</label>
                <input
                  type="text"
                  name="facebookAdminUser"
                  value={formData.facebookAdminUser}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>Identificador del administrador comercial</label>
                <input
                  type="text"
                  name="facebookBMId"
                  value={formData.facebookBMId}
                  onChange={handleChange}
                />
                <small>Si ya trabajás con otro Business Manager, podés aclararlo aquí.</small>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="nested-sub-block">
            <h5>Instagram</h5>
            <div className="onboarding-grid">
              <div className="field-group">
                <label>Usuario</label>
                <input
                  type="text"
                  name="instagramUser"
                  value={formData.instagramUser}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>Contraseña</label>
                <input
                  type="password"
                  name="instagramPassword"
                  value={formData.instagramPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="field-group">
                <label>Cantidad de seguidores (aprox.)</label>
                <input
                  type="number"
                  name="instagramFollowers"
                  value={formData.instagramFollowers}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sub-block">
          <h4>TikTok</h4>
          <div className="onboarding-grid">
            <div className="field-group">
              <label>Usuario</label>
              <input
                type="text"
                name="tiktokUser"
                value={formData.tiktokUser}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label>Contraseña</label>
              <input
                type="password"
                name="tiktokPassword"
                value={formData.tiktokPassword}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label>Cantidad de seguidores (aprox.)</label>
              <input
                type="number"
                name="tiktokFollowers"
                value={formData.tiktokFollowers}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="sub-block">
          <h4>YouTube</h4>
          <div className="onboarding-grid">
            <div className="field-group">
              <label>URL del canal</label>
              <input
                type="text"
                name="youtubeUrl"
                value={formData.youtubeUrl}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label>¿Nos asignás como administradores?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="youtubeAddAdmin"
                    value="si"
                    checked={formData.youtubeAddAdmin === 'si'}
                    onChange={handleChange}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    name="youtubeAddAdmin"
                    value="no"
                    checked={formData.youtubeAddAdmin === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-block">
          <h4>LinkedIn</h4>
          <div className="onboarding-grid">
            <div className="field-group">
              <label>URL del perfil / página</label>
              <input
                type="text"
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
              />
            </div>
            <div className="field-group">
              <label>¿Podés agregar a Federico Chironi como administrador?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="linkedinAddFede"
                    value="si"
                    checked={formData.linkedinAddFede === 'si'}
                    onChange={handleChange}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    name="linkedinAddFede"
                    value="no"
                    checked={formData.linkedinAddFede === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-block">
          <h4>Otros medios online</h4>
          <div className="onboarding-grid">
            <div className="field-group">
              <label>¿Usás otros canales o redes sociales?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="usesOtherChannels"
                    value="no"
                    checked={formData.usesOtherChannels === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
                <label>
                  <input
                    type="radio"
                    name="usesOtherChannels"
                    value="si"
                    checked={formData.usesOtherChannels === 'si'}
                    onChange={handleChange}
                  />
                  Sí
                </label>
              </div>
            </div>
            {formData.usesOtherChannels === 'si' && (
              <div className="field-group full-width">
                <label>Detalle de otros canales</label>
                <textarea
                  name="otherChannelsDetail"
                  value={formData.otherChannelsDetail}
                  onChange={handleChange}
                  rows={3}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Imagen de marca / Contenido crudo */}
      <div className="onboarding-block">
        <h3>Imagen de marca & contenido crudo</h3>
        <p className="block-description">
          Te vamos a compartir una carpeta en Google Drive asignada a tu marca. Si ya la tenés, podés
          dejar los enlaces acá.
        </p>
        <div className="onboarding-grid">
          <div className="field-group">
            <label>Link a carpeta de marca (logo, manual, piezas institucionales)</label>
            <input
              type="text"
              name="driveBrandFolderUrl"
              value={formData.driveBrandFolderUrl}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
            />
          </div>
          <div className="field-group">
            <label>Link a carpeta de contenido crudo (fotos, videos, etc.)</label>
            <input
              type="text"
              name="driveRawContentFolderUrl"
              value={formData.driveRawContentFolderUrl}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep0;