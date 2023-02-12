process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
const mineflayer = require('mineflayer')
const ProxyAgent = require('proxy-agent')
const socks = require('socks').SocksClient
const readline = require('readline');

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
console.log("")
console.log("EZ APEAL BY FREEMONEYHUB?")
console.log("UBAN THOSE BOTS FAST!")
console.log("")
console.log("━━━━━━━━━━━━━━━v1.0.0━━━━━━━━━━━━━━━━━━━━━━")


//Comes With Free Proxy Because You Only Need 1
const accounts = [ 
{username: 'EMAIL', password: 'PASS', proxy: 'socks5://cshwyxmc:yno34c71rc09@64.137.92.191:6390'},
{username: 'EMAIL', password: 'PASS', proxy: 'socks5://cshwyxmc:yno34c71rc09@64.137.92.191:6390'},
{username: 'EMAIL', password: 'PASS', proxy: 'socks5://cshwyxmc:yno34c71rc09@64.137.92.191:6390'},
];


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const bots = [];
for (const account of accounts) {
  setTimeout(() => {
    sleep(3000)
    const bot = mineflayer.createBot({
      host: 'forum.hypixel.net',
      port: 25565,
      version: "1.8.9",
      username: account.username,
      password: account.password,
      auth: 'microsoft',
      agent: new ProxyAgent(account.proxy),
    }, 3000);
    bots.push(bot);
    
    bot.on("kicked", (reason) => {
      if (typeof reason === "string") {
        const parsedData = JSON.parse(reason);
        if (parsedData.extra) {
          parsedData.extra.forEach((extra) => {
            if (extra.text && extra.text.includes("is")) {
              if (extra.text.includes("code, please contact")) {
                return;
              }
              const verificationCode = extra.text.split("is ")[1].split(".")[0];
              console.log(account.username + "'s Verification Link: https://hypixel.net/link-minecraft/?key="+verificationCode);
            }
          });
        }
      }
    });
  }, 3000);
}

setInterval(() => {}, Number.MAX_SAFE_INTEGER);
