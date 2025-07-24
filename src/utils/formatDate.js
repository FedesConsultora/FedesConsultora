// src/utils/formatDate.js
export const formatDateEs = (fechaIso) => {
  const meses = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];

  const date = new Date(fechaIso);
  const dia = date.getDate();
  const mes = meses[date.getMonth()];
  const anio = date.getFullYear();

  return `${dia} de ${mes} de ${anio}`;
};
