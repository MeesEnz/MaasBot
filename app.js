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
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Ban_Members\"** "
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
          title: "Done",
          color: 3447003,
          description: `${member.user.username} has successfully been banned from ${message.guild.name} `
        }})
      })
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
          title: "Done",
          color: 3447003,
          description: `${member.user.username} has successfully been kicked from ${message.guild.name} `
        }})
      })
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
        url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
        description: "The prefix of this server is \"!\"\n\nMaasBot is a discord bot created by © MaasDev's",
        fields: [{
            name: "MaasDev's website",
            value: "[Website](http://maasdevs.orgfree.com/)"
          },
          {
            name: "Discord",
            value: "[Join our official Discord server](https://discord.gg/bSMV57z)",
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

  //!server
  if (message.content.startsWith(prefix + "server")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "Discord invite link",
      description: "https://discord.gg/jGCWDU6"
    }})
  }
  
   

 


});










// Bot 
client.login(process.env.BOT_TOKEN);  //BOT_TOKEN   
