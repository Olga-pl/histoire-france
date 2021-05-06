export const Wars = (props) => {

  return (
    <div id='wars' className='text-center'>
        <h2>Guerres et Batailles</h2>
        <div className="wars-section">
            <div class="row">
                {props.data 
                ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-6 col-sm-9 img-desc'>
                    {' '}
                    <img src={d.img} alt='...' className='wars-img' />
                    <div>
                      <h4>{d.name}</h4>
                      <p>{d.date}</p>
                    </div>
                </div>
                ))
            : "loading"}
            </div>
        </div>

    </div>
  )
}

export default Wars