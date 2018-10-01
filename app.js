// Master
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`I am ready!`);
});

// Prefix
const prefix = "!";



//client.on("guildCreate", guild => {
  //guild.defaultChannel.sendMessage(`test`);
  
  

//})




// Commands
client.on('message', message => {


  // check if user has that is
  
  msg = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith("!")) return;

    if (message.author.id == 250681287722008576){ // Brinkie#6986
      message.channel.send({embed: {
        title: "Error",
        color: 3447003,
        description: "You are not allowed to use MaasBot. Contact MeesEnz#2770 to lift your ban." 
      }})
      return

    }
    
    let args = message.content.split(" ").slice(1);
    let argsss = message.content.split(" ").slice(2);
    let logchannel = message.guild.channels.find(`name`, "log");


  
  

  // !role
  if (msg.startsWith(prefix + "role")){
    if (message.member.hasPermission("MANAGE_ROLES")){
      let userToModify = message.mentions.users.first();
      let roleToAdd = message.mentions.roles.first();
      userToModify.addRole(roleToAdd);
      message.channel.send({embed: {
        title: "Successful",
        color: 3447003,
        description: `- has successfully recieved the role: -`
      }})
    }
    if (!message.member.hasPermission("MANAGE_ROLES")){
      message.channel.send({embed: {
        title: "Invalid permissions",
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"MANAGE_ROLES\"** "
      }})
    }
  }


  // !bug
  /*if(msg.startsWith(prefix + "bug")){
    let guild = message.channel.guild;
    let channell = client.channels.get(448195321441288203);
    let reason = message.content.split(" ").slice(1).catch
    
    message.channel.send({embed: {
      title: "Bugreport",
      color: 3447003,
      description: args

    }})
    
  }*/


    

  // !ban
  if(msg.startsWith(prefix + "ban")){
    let member = message.mentions.members.first();
    if (message.member.hasPermission("BAN_MEMBERS")){
        member.ban().then((member) => {
        message.channel.send({embed: {
          title: "exorcism completed",
          color: 3447003,
          description: `${member.user.username} has successfully been banned from ${message.guild.name} `
        }})
      })
                if(logchannel){
              logchannel.send("`" + message.author.username + " issued a ban on: `" + "\n" + member)
          }
    }
    if (!message.member.hasPermission("BAN_MEMBERS")){
      message.channel.send({embed: {
        title: "Invalid permissions",
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Ban_Members\"** "
      }})
    }
  }


  // !kick
  if(msg.startsWith(prefix + "kick")){
    let member = message.mentions.members.first();
    if (message.member.hasPermission("KICK_MEMBERS")){      
      member.kick().then((member) => {
        message.channel.send({embed: {
          title: "Execution completed",
          color: 3447003,
          description: `${member.user.username} has successfully been kicked from ${message.guild.name} `
        }})
      })
                if(logchannel){
              logchannel.send("`" + message.author.username + " issued a kick on: `" + "\n" + member)
          }
    }
    if (!message.member.hasPermission("KICK_MEMBERS")){
      message.channel.send({embed: {
        title: "Invalid permissions",
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Kick_Members\"** "
      }})
    if (!kick){
      message.channel.send({embed: {
        title: "Error",
        color: 3447003,
        description: "Not able to kick this member"
      }})
    }
    }
    
  }

  // !game
  if (msg.startsWith(prefix + "game")){
    if (message.member.hasPermission("ADMINISTRATOR")){
    var argument = message.content.substr("game ".length);
    client.user.setPresence({ status:'online', game: {name: argument }});
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        title: "Invalid permissions",
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }})
    }
  }


  // !avatar [mention] (Returns a link to the profile picture of the mentioned user)
  if (msg.startsWith(prefix + "avatar")){
    let member = message.mentions.members.first();
    if (!member){
      message.channel.send({embed: {
        color: 3447003,
        title: "Error",
        description: "Please insert a username."
      }})
    }
    if (member){
      message.channel.sendMessage(member.user.avatarURL);
      message.delete();
    }
  }





  // !roleinfo (gives information about the role)
  if (msg.startsWith(prefix + "roleinfo")){
    let argument = message.mentions.roles.first()
    
    let Role = message.guild.roles.get(argument);
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
    title: "Invite code",
    url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
    description: "Role Information",
    fields: [{
      name: "Role name",
      value: "-"
    }]
    }})
  }
  
  
  // !settings (needs to be further edited, should be the server settings of the bot)
  if (msg.startsWith(prefix + "settings")){
    if (message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
      title: "Invite code",
      url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
      description: "Settings",
      fields: [{
        name: "Verify role",
        value: "to be further edited"

      },
    {
      name: "Verified role",
      value: "To be further edited"
    }],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© MaasBot"
    } 
      } 
      })
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }})
    }
  }
  



    // !botinfo (gives some information about the bot)
    if (msg.startsWith(prefix + "botinfo")){
      message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "MaasBot information",
          icon_url: client.user.avatarURL
        },
        title: "Add MaasBot to your server",
        url: "https://discordapp.com/oauth2/authorize?client_id=465952575154290698&permissions=8&scope=bot",
        description: "The prefix of this server is \"!\"\n\nMaasBot is a discord bot created by © MaasDev's",
        fields: [{
            name: "MaasDev's website",
            value: "[Website](http://maasdevs.orgfree.com/)"
          },
          {
            name: "Discord",
            value: "[Join our official Discord server](https://discord.gg/cJwmExU)",
          },
          {
            name: "Developer's",
            value: "MeesEnz, Septic",
          }
        ],
        timestamp: new Date(),
        footer: {
          text: "© MaasDev's"
        }
      }
    });
    }else


    // !say (replies with the arguments that have been said)
    if (msg.startsWith(prefix + "say")){ 
      message.channel.sendMessage(args.join(" "))
      message.delete().catch(O_o=>{});
    }else


    // !mathplus (adds the two given numbers)
    if (msg.startsWith(prefix + "mathplus")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p+c);
      message.channel.sendMessage(total);
    }else


    // !mathminus (subtracts the given numbers)
    if (msg.startsWith(prefix + "mathminus")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p-c);
      message.channel.sendMessage(total);
    }else


    // !mathmultiply (multiplies the given numbers)
    if (msg.startsWith(prefix + "mathmultiply")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p*c);
      message.channel.sendMessage(total);
    }else


    // !mathdivide (divides the given numbers)
    if (msg.startsWith(prefix + "mathdivide")){
      let numArray = args.map(n=> parseInt(n));
      let total = numArray.reduce( (p, c) => p/c);
      message.channel.sendMessage(total);
    }else
    

    // !ping (replies with "pong")
    if (msg.startsWith(prefix + "ping")) {
      message.channel.send({embed: {
        color: 3447003,
        title: "Client ping",
        description: 'pong' + " " + "***" + client.ping + "***" + "ms"
      }});
  }else


    // !foo (replies with "bar!")
    if (message.content.startsWith(prefix + "foo")) {
    message.channel.sendMessage("Bar");
  }
  
// !septic
      if (message.content.startsWith(prefix + "septic")) {
    message.channel.sendMessage("Septic is one of the main developers of MaasBot, you can find him on the official maasbot discord, which can be found if you type !botinfo");
  }
  
  
// !meesenz
      if (message.content.startsWith(prefix + "meesenz")) {
    message.channel.sendMessage("MeesEnz is one of the main developers of MaasBot, you can find him on the official maasbot discord, which can be found if you type !botinfo");
  }
  
  
  // !pong
    if (message.content.startsWith(prefix + "pong")) {
    message.channel.sendMessage("Ping :)");
  }

  // !branch
  if (message.content.startsWith(prefix + "branch")) {
    if (message.member.hasPermission("ADMINISTRATOR")){
    message.channel.sendMessage("MaasBot is currently running in JavaScript, in the 'Master' branch");
  }
  else {
    message.channel.send('Sorry, You do not have Administrator Permissions')
  }}
  
  // !embed
  if (message.content.startsWith(prefix + 'embed')) {
    if (message.member.hasPermission("ADMINISTRATOR")){
      if (args){
      let said = args.join(" ");
      message.channel.send({embed: {
          color: 3447003,
          description: said
      }})}
    message.delete().catch(O_o=>{});
    }
  else {
    message.channel.send('Sorry, You do not have Administrator Permissions')
  }
  }

  // !userinfo
  /*if ( message.content.startsWith(prefix + "userinfo")) {
    let balzak = message.mentions.members.first();
    
    let joined = balzak.joinedAt
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: balzak.user.username,
        icon_url: balzak.user.avatarURL,
        
      },
      title: `Userinfo of ${balzak.user.username}`,
      url: balzak.user.avatarURL,
      description: "test",
      
      fields: [{
        name: "Username",
        value: "test",
        
      },
      {
        name: "Join Date",
        value: "User joined:",
         
      },
      {
        name: "Highest Role",
        value: balzak.highestRole,
      },
      {
        name: "User ID",
        value: balzak.id,
        
      }],
      timestamp: new Date(),
      footer: {
        text: "MaasDev's"
      } 
    }
  });
  }else*/
  
  
  
  
  //!kijken
  if (message.content.startsWith(prefix + "kijken")) {
    message.reply("You said 'kijken' i think you meant 'koenkeloeren' please correct your mistake.");
  }

  
  
      if(message.content.startsWith(prefix + "restart")){
        if(message.author.id === "244553339864350720"){
        function shutdownaa(){
        message.reply("Restarting...");
        client.destroy();
    }
        function startaa(){
        client.login(process.env.BOT_TOKEN);
        message.channel.send("Back Online.")
        }
        shutdownaa();
        setTimeout(startaa, 2000);

    
    }
    else{
        message.reply("Sorry, you can't do that.")
    }

};
  
  // !emsshutdown
  // !emsshutdown sluit the MaasBot client af in geval van nood weetikveel alleen als je mees of septic bent btw hahah
  if(message.content.startsWith(prefix + "emsshutdown")){
    if(message.author.id === "244553339864350720" || message.author.id === "223838261305540609"){
    message.reply("SHUTTING DOWN...");
    message.author.send("IMPORTANT!, I did an emergency shutdown, MaasBot is down until you restart it in heroku");
    client.destroy();
      while(1){
      client.destroy();
      }
    }
    else {
      message.reply("Sorry, you do not have permission to do that");
    }
  }

  

  
  // !pmme
  // !pmme [text] dm'd je de text
  
  if (message.content.startsWith(prefix + "pmme")){
    message.reply("`I messaged you the following message:` " + message.content.slice(6));
    message.author.send("`You ordered me to pm you this message: `" + '\n' + message.content.slice(6));
}
  
  
  // !report
  
  if(message.content.startsWith(prefix + "report")){

        let rUser = message.guild.member(message.mentions.users.first());
        if(!rUser) return message.channel.send("ERROR: failed to find user.");
        let rReason = message.content.slice(8);

        message.reply("Your report has been submitted.");
        let reportschannel = message.guild.channels.find(`name`, "reports");
        if(!reportschannel) return message.channel.send("couldn't find reports channel.");

        message.delete().catch(O_o=>{});
        reportschannel.send("`New Report` \n `Reported By: `" + message.author + "\n `Reported User: `" + rUser + "\n \n `Reason: `" + rReason + "\n \n" + "`Date/Time: `" + new Date());
    
  }
  
  
  
  
  
  
  // !warn
  // !warn @mention [reden] stuurt de waarschuwing en de reden in het kanaal genaamd "log" en dm'd de persoon die gewaarschuwd is
  if (message.content.startsWith(prefix + "warn")){
    
        if (message.member.hasPermission("ADMINISTRATOR")){
    let wUser = message.guild.member(message.mentions.users.first());
    if(!wUser) return message.channel.send("ERROR: failed to find user.");
    let wreason = message.content.split(" ").slice(2);
    console.log(message.author.username + " has warned " + wUser + "for: " + wreason)
    message.reply("Done.")
    logchannel.send("`" + message.author.username + " issued this warning: `" + '\n' + wUser + '\n' + wreason + '\n' + "`        `")
   wUser.send(message.author.username + " warned you for: " + wreason)
        
        }
else{
    message.reply("Sorry you do not have admin perms")
}
    
  }
  
  
  // !ann
  // !ann [text] stuurt de text in een kanaal genaamt announcements als die bestaat
  if (message.content.startsWith(prefix + "ann")){

        if (message.member.hasPermission("ADMINISTRATOR")) {
 
    message.reply(`Done.`);
    let annchannel = message.guild.channels.find(`name`, "announcements");
    annchannel.send("`ANNOUNCEMENT` \n" + message.content.slice(5) + "\n" + "-" + message.author.username);
    console.log(message.author.username + " Announced: " + message.content.slice(5))
    }
    else{
        message.reply("Sorry, you cannot announce things")
    }
}

  
  //!server
  if (message.content.startsWith(prefix + "server")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "Official MaasDev's Discord Server",
      description: "https://discord.gg/cJwmExU"
    }})
  }
  
  

  
  // !log
  // !log [text] dm'd je de text en stuurt het in het kanaal genaamt "log" als die bestaat
    if (message.content.startsWith(prefix + "log")){
          if (message.member.hasPermission("ADMINISTRATOR")) {
      
          message.reply(`I sent you the log in private messages.`);
          message.author.send("`You told me to log this: `" + `\n` + message.content.slice(5));
    logchannel.send("`" + message.author.username + " logged this: `" + "\n" + message.content.slice(5))
          }
       else{
        message.reply("Sorry, you cannot log things")
    }
      
    }

 


});










// Bot 
client.login(process.env.BOT_TOKEN);  //BOT_TOKEN   
