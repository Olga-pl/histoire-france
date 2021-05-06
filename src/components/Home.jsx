export const Home = (props) => {
    return (
      <header id='header'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 offset-md-3 intro-text'>
                  <h1>
                    {props.data ? props.data.title : 'Loading'}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.introduction : 'Loading'}</p>
                  <a className="button" href="#periods">Commencer</a>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
  
export default Home