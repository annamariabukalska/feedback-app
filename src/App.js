import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'

function App() {
    return (
        <>
        <Header bgColor='red' textColor='blue'/>
        <div className='container'>
            <div className='container'>
            <FeedbackItem/>
            </div>

        </div>
        </>
    )
}

export default App