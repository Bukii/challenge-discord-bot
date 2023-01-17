require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// TODO: der scheiß funkt net, basically kaunst den bot aun sich schmeißen, moch anfoch neig
client.on('messageCreate', async interaction => {
  console.log("hey");
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.TOKEN);