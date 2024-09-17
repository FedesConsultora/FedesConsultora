import React from 'react'

const Founders = () => {
  return (
    <section className='founders'>
      <article className="nombresContainer">
        <div className="nombreContainer">
          <h3>FEDERICO JUAN</h3>
          <p>CoFounder y CMO</p>
          <img
            src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular.svg"
            alt="Recuadro SemiCircular"
            loading="lazy"
          />
        </div>
        <div className="nombreContainer">
          <h3>FEDERICO CHIRONI</h3>
          <p>CoFounder y CEO</p>
          <img
            src="https://fedesagency.com/fedes-consultora/landing/recuadro_semicircular.svg"
            alt="Recuadro SemiCircular"
            loading="lazy"
          />
        </div>
      </article>
      <img
        className="foto_fedes"
        src="https://fedesagency.com/fedes-consultora/landing/foto_fedes.svg"
        alt="Foto de los fundadores de Fedes Consultora"
        loading="lazy"
      />
    </section>
  )
}

export default Founders