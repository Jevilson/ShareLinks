import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import config from "../config"

const Input = props => (
  <input {...props} className="w-full bg-transparent p-4 border rounded-xl border-onix text-lg outline-none focus:border-E7E9EA" />
)

const validationSchema = yup.object({
  email: yup.string().required('Digite seu email').email('E-mail inválido'),
  password: yup.string().required('Digite sua senha')
})


export default function Login() {

  const formik = useFormik({
    onSubmit: values => {
      const res = fetch(`${config.URL}/login`, {
        auth: {
          username: values.email,
          password: values.password
        }
      }).then(resposta => resposta.json())
        .then(json => {
          console.log(json);
          return json;
        })
    },
    initialValues: {
      email: '',
      password: ''
    },
    validateOnMount: true,
    validationSchema,
  })

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="bg-364FC7 lg:flex-1"></div>
      <div className="flex-1 flex justify-center items-center p-12 space-y-6">
        <div className="max-w-md flex-1">
          <h1 className="text-3xl mb-6">Acesse sua conta</h1>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>

            <div className="space-y-2">
              <Input
                type="text"
                name="email"
                placeholder="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {(formik.touched.email && formik.errors.email) && (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              )}
            </div>

            <div className="space-y-2">
              <Input
                type="password"
                name="password"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />
              {(formik.touched.password && formik.errors.password) && (
                <div className="text-red-500 text-sm">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-364FC7 py-4 rounded-full disabled:opacity-50 text-lg text-white"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {formik.isSubmitting ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
          <div className="flex justify-center mt-5">
            <span className="text-sm text-silver text-center">
              Não tem conta? <a className="text-364FC7" href="/signup">Inscreva-se</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}