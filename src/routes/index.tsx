import { ContatosPage } from "pages/ContatosPage"
import { DashboardPage } from "pages/DashboardPage"
import { EmailsPage } from "pages/EmailsPage"
import { WriteNowPage } from "pages/WriteNowPage"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/contatos" element={<ContatosPage />} />
        <Route path="/emails" element={<EmailsPage />} />
        <Route path="/escrever-agora" element={<WriteNowPage />} />
      </Routes>
    </BrowserRouter>
  )
}