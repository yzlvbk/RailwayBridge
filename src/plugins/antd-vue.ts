/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Form,
  Input,
  Select
} from 'ant-design-vue'

export default (app: any) => {
  app.use(Button)
  app.use(Form)
  app.use(Input)
  app.use(Select)
}
