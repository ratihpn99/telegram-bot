// telegram_bot.js
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;

// Inisialisasi bot
const bot = new TelegramBot(token, { polling: true });

// Tangani pesan masuk
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
  
    // Tentukan daftar command dan tanggapan
    const commands = {
      '/start': 'Selamat datang di bot by @jasapremium, untuk harga klik /pricelist',
      '/netflix': 'NETFLIX PREMIUM MURAH⁉\n️UHD 4K | AKUN LAMA |  JARANG ERROR | BISA PERPANJANG |FULLGAR\n ✨28K/bln SHARED 1U1P\n ✨125K/bln PRIVATE 5P4D \nFAST RESPON t.me/voraksstore',
      '/spotify': 'SPOTIFY PREMIUM MURAH\nIndividual plan\n10.000/ 3 bulan\nAkun baru\nFamily plan\n10.000/ 2 bulan\nAkun baru\nInvite Family\n4.000/ 1 bulan\nAkun baru/lama\n❌No Garansi❌\norder klik @voraksstore',
      '/youtube': 'shared 28k.',
      '/disney': 'individual 15k.',
      '/viu': '15k',
      '/vidio': '90k',
      '/canva': '',
      '/kontak': 'Informasi selengkapnya bisa chat @voraksstore',
      '/pricelist': 'Daftar harga yang tersedia:\n' +
               '/netflix\n' +
               '/spotify\n' +
               '/youtube\n' +
               '/disney\n' +
               '/viu\n' +
               '/vidio\n' +
               '/canva\n' +
               '/kontak'
               
    };
  
    // Cek apakah pesan mengandung command
    const command = text.trim();
    if (commands.hasOwnProperty(command)) {
      const response = commands[command];
      bot.sendMessage(chatId, response);
    } else {

      // Jika tidak ada command yang cocok, berikan tanggapan default
      const defaultResponse = 'Maaf, perintah tidak dikenali. Ketik /start untuk memulai kembali.';
      bot.sendMessage(chatId, defaultResponse);
    }
  });
  