let tiradaOrdenador = 0;
export const gettiradaOrdenador = () => tiradaOrdenador;
export const settiradaOrdenador = () =>
  (tiradaOrdenador = Math.floor(Math.random() * 3)); //! nº aleatorio entre 0 y 2
