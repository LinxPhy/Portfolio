import Shyka from '@/app/images/openAI_image.jpg'
import Stylish from '@/app/images/stylish.avif'

export default function Projects() {

    return (
        <section>
            <h3>My apps</h3>

            <div className='projects'>
                <Project1 />
                <Project2 />
        

                {/* 
                
                    10 Anime to Watch
                    Third year project
                    Vacuum cleaning
                    Processing

                */}

                {/* 
                
                    Redesigns
                    - Facebook
                    - Instagram
                    - Twitter
                    - ???
                    r
                */}



            </div>

        </section>
    )

}

function Project1() {
    return (
        <div className='project'>
            <div className='title'>
                <h5>Shyka</h5>
            </div>
            <div className='description'>
                <p>Aided by artificial intelligence, Shyka consists of chatbots are constructed to ensure a high level of engagement tailored to the user.</p>
            </div>
            <div className='image'>
                <img src={Shyka.src} alt='image'></img>
            </div>
            <div className='languages'>
                <div className='language'>
                    Next JS
                </div>
                <div className='language'>
                    Chat GPT API
                </div>
                <div className='language'>
                    Mongo DB
                </div>
                <div className='language'>
                    Auth0
                </div>
            </div>

        </div>
    )
}

function Project2() {
    return (
        <div className='project'>
            <div className='title'>
                <h5>Stylish</h5>
            </div>
            <div className='description'>
                <p>Developed an high quality e-commerce platform to emulate the functionalities of a shopping websites. Created using intuitive design.</p>
            </div>
            <div className='image'>
                <img src={Stylish.src} alt='image'></img>
            </div>
            <div className='languages'>
                <div className='language'>
                    Node JS
                </div>
                <div className='language'>
                    Express JS
                </div>
                <div className='language'>
                    React JS
                </div>
                <div className='language'>
                    Google Sheets API
                </div>
            </div>
        </div>
    )
}


function Project3() {
    return (
        <div className='project'>
            <div className='title'>
                <h5>10 Anime To Watch</h5>
            </div>
            <div className='description'>
                <p>Packed with </p>
            </div>
            <div className='image'>
                <img src={Stylish.src} alt='image'></img>
            </div>
            <div className='languages'>
                <div className='language'>
                    Node JS
                </div>
                <div className='language'>
                    Express JS
                </div>
                <div className='language'>
                    React JS
                </div>
                <div className='language'>
                    Google Sheets API
                </div>
            </div>
        </div>
    )
}


