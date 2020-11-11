require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require("node-fetch");

const domain = process.env.EXTEEL_API_DOMAIN;

client.on('message', async msg => {
  if (msg.content === '!status') {
    const response = await fetch(`${domain}/api/online`);
    const { usersOnlineCount: playerCount, roomCount } = await response.json();
    msg.reply(`The server is online, there is ${playerCount} players online and ${roomCount} active rooms`);
  }
});

client.login(process.env.TOKEN);