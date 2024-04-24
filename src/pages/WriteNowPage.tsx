import { Nav } from "components";
import { Button } from "components/Button/Button";
import { DateTimePicker } from "components/Form/DateTimePicker";
import { RichInput } from "components/Form/RichInput";
import { IWriteNowForm } from "interfaces/IWriteNowForm";

import { FormProvider, useForm } from "react-hook-form";
import { MailsServices } from "services/MailsService";
import { WriteNowResolver } from "validations/WriteNowValidation";

export function WriteNowPage() {
  //Para manipulação do formulário
  const formMethods = useForm<IWriteNowForm>({ resolver: WriteNowResolver })
  const { formState: { errors }, register, handleSubmit } = formMethods

  async function onSubmit(values: IWriteNowForm) {
    const { status, data } = await MailsServices.sendEmail(values)
    if (status === 201) {
      console.log('data', data);

    }

  }

  return (
    <>
      <Nav />
      <div className="container">
        <h1>Escrever agora</h1>

        <FormProvider {...formMethods}>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="destinationName">Nome completo</label>
            <input type="text" {...register('destinationName')} />
            {
              errors?.destinationName?.message && (<p className="error-text">{errors?.destinationName?.message}</p>)
            }


            <label htmlFor="destinationAddress">E-mail</label>
            <input type="email" {...register('destinationAddress')} />
            {
              errors?.destinationAddress?.message && (<p className="error-text">{errors?.destinationAddress?.message}</p>)
            }

            <label htmlFor="dueDate">Data</label>
            <DateTimePicker name="dueDate" />
            {
              errors?.dueDate?.message && (<p className="error-text">{errors?.dueDate?.message}</p>)
            }

            <label htmlFor="subject">Assunto</label>
            <input type="text" {...register('subject')} />
            {
              errors?.subject?.message && (<p className="error-text">{errors?.subject?.message}</p>)
            }

            <label htmlFor="body">Mensagem</label>
            <RichInput name="body" />
            {
              errors?.body?.message && (<p className="error-text">{errors?.body?.message}</p>)
            }

            <Button type="submit" variant="primary">Enviar</Button>
          </form>

        </FormProvider>

      </div>
    </>
  )
}