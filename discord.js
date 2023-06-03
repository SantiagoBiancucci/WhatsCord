const Discord = require('discord.js');

// Se crea una instancia del cliente Discord
const client = new Discord.Client();

// Se define el token del bot de Discord
const token = 'MTExNDU1NDM3Nzg3MzY2MjAzNA.GWK8US.reCps6XfDb5rgq_fZDLMU7betisvh0AtYSAVa8';

// Se establece un evento cuando el bot esté listo y conectado
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Se establece un evento para escuchar los mensajes en el servidor de Discord
client.on('message', message => {
  if (message.channel.type === 'text') {
    // Se envía el mensaje a WhatsApp utilizando el proveedor de servicios
    sendToWhatsApp(message.author.username, message.content);
  }
});

// Se inicia sesión en Discord utilizando el token del bot
client.login(token);
