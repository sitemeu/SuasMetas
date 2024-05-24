const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Substitua pelos valores da sua conta do Twilio
const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

app.post('/send-sms', (req, res) => {
    const { name, email, message } = req.body;
    const smsBody = `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`;

    client.messages.create({
        body: smsBody,
        from: 'YOUR_TWILIO_PHONE_NUMBER',
        to: 'DESTINATION_PHONE_NUMBER' // Substitua pelo número de telefone de destino
    })
    .then(message => res.status(200).send(`Mensagem enviada com sucesso! ID: ${message.sid}`))
    .catch(error => res.status(500).send(`Erro ao enviar mensagem: ${error.message}`));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
