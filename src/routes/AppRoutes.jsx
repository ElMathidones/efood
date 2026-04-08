import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Profile = lazy(() => import('../pages/Profile'))
const Orders = lazy(() => import('../pages/Orders'))

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ padding: '24px' }}>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Profile />} />
          <Route path="/pedidos" element={<Orders />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default AppRoutes
