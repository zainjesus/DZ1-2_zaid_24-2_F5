import './App.css'
import {Routes, Route} from 'react-router-dom'
import MainPage from './pages/mainPage'
import Posts from './pages/posts'
import CreatePost from './pages/createPost'
import NotFound from './pages/notFound'
import Layout from './components/Layout'


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<MainPage />}/>
                    <Route path='posts' element={<Posts />}/>
                    <Route path='posts/create' element={<CreatePost />}/>
                    <Route path='*' element={<NotFound />}/>
                </Route>
            </Routes>
        </>
    )
}

export default App

