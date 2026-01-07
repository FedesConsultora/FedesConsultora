// src/components/Onboarding/OnboardingLogin.js
import React, { useState } from 'react';

const OnboardingLogin = ({ onCuitSubmit, isLoading }) => {
    const [cuit, setCuit] = useState('');
    const [error, setError] = useState('');

    const validateCuit = (value) => {
        // Eliminar guiones y espacios
        const cleanCuit = value.replace(/[-\s]/g, '');

        // Verificar que tenga 11 dígitos
        if (cleanCuit.length !== 11) {
            return 'El CUIT debe tener 11 dígitos';
        }

        // Verificar que sean solo números
        if (!/^\d+$/.test(cleanCuit)) {
            return 'El CUIT debe contener solo números';
        }

        return null;
    };

    const formatCuit = (value) => {
        // Eliminar todo excepto números
        const cleaned = value.replace(/\D/g, '');

        // Limitar a 11 dígitos
        const limited = cleaned.slice(0, 11);

        // Formatear como XX-XXXXXXXX-X
        if (limited.length <= 2) {
            return limited;
        } else if (limited.length <= 10) {
            return `${limited.slice(0, 2)}-${limited.slice(2)}`;
        } else {
            return `${limited.slice(0, 2)}-${limited.slice(2, 10)}-${limited.slice(10)}`;
        }
    };

    const handleChange = (e) => {
        const formatted = formatCuit(e.target.value);
        setCuit(formatted);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validateCuit(cuit);
        if (validationError) {
            setError(validationError);
            return;
        }

        // Llamar a la función del padre con el CUIT limpio (solo números)
        const cleanCuit = cuit.replace(/[-\s]/g, '');
        onCuitSubmit(cleanCuit);
    };

    return (
        <div className="step-content">
            <h2 className="step-title">Bienvenido al Onboarding</h2>
            <p className="step-subtitle">
                Para empezar, necesitamos tu CUIT. Esto nos permite guardar tu progreso
                y que puedas continuar desde donde te quedes si necesitás salir.
            </p>

            <div className="onboarding-block">
                <div className="login-container">
                    <form onSubmit={handleSubmit}>
                        <div className="field-group">
                            <label>CUIT *</label>
                            <input
                                type="text"
                                name="cuit"
                                value={cuit}
                                onChange={handleChange}
                                placeholder="XX-XXXXXXXX-X"
                                className={error ? 'has-error' : ''}
                                disabled={isLoading}
                                autoFocus
                            />
                            {error && <span className="error-text">{error}</span>}
                            <small className="field-hint">
                                Ingresá tu CUIT para comenzar o retomar tu onboarding.
                            </small>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={isLoading || !cuit}
                        >
                            {isLoading ? 'Verificando...' : 'Continuar'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OnboardingLogin;
