import React from 'react';

const Card = ({ clientName, clientLogo, clientImage, feedback }) => {
  return (
    <div className="card">
      <article className="cardInfo">
        <div className="cardParrafo">
          <p>{`"${feedback}"`}</p>
        </div>
        <div className="cardClient">
          <p>{clientName}</p>
          <img src={clientLogo} alt="Logo Cliente" loading="lazy" />
        </div>
      </article>
      <article className="imgContainer">
        <img src={clientImage} alt={`Imagen de ${clientName}`} loading="lazy" />
      </article>
    </div>
  );
};

export default Card;
