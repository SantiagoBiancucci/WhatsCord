const twilio = require('twilio');
const accountSid = 'ACccb4ed7bcc3d6eaece71ef377b91aaa6';
const authToken = 'Y06dfe706f26ac6f0e18d74a1719fbeeb';
const client = new twilio(accountSid, authToken);

// Función para enviar mensajes a WhatsApp
function sendToWhatsApp(sender, content) {
  const phoneNumber = '+14155238886';
  const recipient = '+543412637584';

   // Se utiliza el cliente de Twilio para enviar el mensaje de Discord a WhatsApp
  client.messages
    .create({
      body: `[Discord] ${sender}: ${content}`,
      from: phoneNumber,
      to: recipient
    })
    .then(message => console.log(`Message sent to WhatsApp: ${message.sid}`))
    .catch(err => console.error(`Error sending message to WhatsApp: ${err}`));
}
