const Variables = () => {
  const nombre = "Monserrath";
  const carrera = "Ingeniería en Tecnologías Computacionales";
  const semestre = 6;

  return (
    <div>
      <h1>Componente con Variables</h1>
      <p>Nombre: {nombre}</p>
      <p>Carrera: {carrera}</p>
      <p>Semestre: {semestre}</p>
    </div>
  );
};

export default Variables;
