import React from 'react'
import LoginLayout from '../components/layout/loginLayout'
import { useTranslation } from 'react-i18next';
const Login = () => {
    const { t } = useTranslation()
  return (
    <LoginLayout>

    <div>{t('about')}</div>
    </LoginLayout>
  )
}

export default Login