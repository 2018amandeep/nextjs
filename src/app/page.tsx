import Dashboard from '@src/components/dashboard';
import Feed from '../components/Feed'
import Form from '../components/Form'

const Home = () =>{
    return (
        <section className="w-full flex-center flex-col">
            {/* <h1 className="head_text text_center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text_center">AI-Powered Prompts</span>
            </h1> */}
            {/* <p className="desc text-center">Prompotial is a AI based Open source tool for modern world to discover, create, and share creative prompts</p> */}
            {/* <Feed /> */}
            {/* <Form/> */}
            <Dashboard />
        </section>
    )
}

export default Home;