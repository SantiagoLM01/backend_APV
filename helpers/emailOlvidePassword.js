import nodemailer from 'nodemailer'


const emailRegistro = async (datos) => {
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const { email, nombre, token } = datos

    const info = await transport.sendMail({
        from: 'APV - Administrador de Paciente de Veterinaria',
        to: email,
        subject: 'Recupera tu Password',
        text: 'Recupera tu Password',
        html: `<p> Hola ${nombre}, Recupera tu Password en APV.</p>
        <p> Sigue el siguiente enlace para generar un nuevo password:<a href="${process.env.FRONTEND_URL}/olvidepassword/${token}">Recuperar Password</a></p>
        
        <p> Si tu no solicitaste un cambio de password, puedes ignorar este mensaje</p>`
    })

    console.log('Mensaje enviado: %s', info.messageId)
    //Enviar el email

}

export default emailRegistro