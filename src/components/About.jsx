export const About = (props) => {
    return (
        <div id='about'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xs-12 col-md-6'>
                        <img src={props.data ? props.data.img : 'loading'} className='img-responsive' alt='' />{' '}
                    </div>
                    <div className='col-xs-12 col-md-6'>
                        <div className='about-text'>
                            <h2>À propos de moi</h2>
                            <p>{props.data ? props.data.presentation : 'loading...'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  
export default About