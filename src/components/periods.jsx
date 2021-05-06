export const Periods = (props) => {

  return (
    <div id='periods' className='text-center'>
        <h2>Époques</h2>
        <div className="period-section">
            <div class="row">
                {props.data 
                ? props.data.map((d, i) => (
                        <div key={`${d.name}-${i}`} className="col-6 col-md-4">
                            <div className="period-desc">
                                <a href="/periods"><img class="rounded-circle" alt="100x100" src={d.img} data-holder-rendered="true"  width="140" height="136"></img></a>
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

export default Periods