import { ISendEmail } from "interfaces/ISendMail"
import { Api } from "providers/Api"

const sendEmail = (data: ISendEmail) => Api.post('/api/v1/mails', data)

export const MailsServices = {
  sendEmail
}