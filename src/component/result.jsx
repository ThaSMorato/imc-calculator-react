const Result = ({ result: { obesity, value, type } }) => {
  //   const  = result;

  return (
    <div className='white-bg'>
      <div className='row'>
        <p className='layer'>Tipo : </p>
        <p className={`value-${obesity}`}>{type}</p>
      </div>
      <div className='row'>
        <p className='layer'>Grau de Obesidade : </p>
        <p className={`value-${obesity}`}>{obesity}</p>
      </div>
      <div className='row'>
        <p className='layer'>Valor : </p>
        <p className={`value-${obesity}`}>{value.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Result;
