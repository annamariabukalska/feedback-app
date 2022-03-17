import Header from './components/Header'

function App() {
    return (
        <>
        <Header bgColor='red' textColor='blue' text={true} />
        <div className='container'>
        <h1>My App</h1>
        </div>
        </>
    )
}

export default App