// Shit
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



//client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  //if (!message.guild) return;

  /*if (message.content === '/join') { -------------------------------------------------------------------------
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          message.reply('I have successfully connected to the channel!');
        })
        .catch(console.log);
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
  
}); -------------------------------------------------------------------------------------------------------------- */



// Commands
client.on('message', message => {
  msg = message.content.toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith("!")) return;

    let args = message.content.split(" ").slice(1);

  // !unban
  /*if (msg.startsWith(prefix + "unban")){
    if (message.member.hasPermission("BAN_MEMBERS")){
      let member = message.mentions.members.first();
      message.guild.unban(member.user.username)
      message.channel.send({embed: {
        title: "Succesfull",
        color: 3447003,
        description: `${member.user.username} has succesfully be banned from ${message.guild.name}`
      }})
    }
  }*/



  // !botinfo
  //if (msg.startsWith(prefix + "botinfo")){
    //const CoolEmbed = new Discord.RichEmbed()
    //.setTitle("This is your title, it can hold 256 characters")
    //.setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
    /*
    * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
    */
    //.setColor(0x00AE86)
    //.setDescription("This is the main body of text, it can hold 2048 characters.")
    //.setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
    //.setImage("http://i.imgur.com/yVpymuV.png")
    //.setThumbnail("http://i.imgur.com/p2qNFag.png")
    /*
    * Takes a Date object, defaults to current date.
    */
    //.setTimestamp()
    //.setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    //.addField("This is a field title, it can hold 256 characters",
      //"This is a field value, it can hold 2048 characters.")
    /*
    * Inline fields may not display as inline if the thumbnail and/or image is too big.
    */
    //.addField("Inline Field", "They can also be inline.", true)
    /*
    * Blank field, useful to create some space.
    */
    //.addBlankField(true)
    //.addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

   // message.channel.send({embed});
//} 

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


    

  // !ban
  if(msg.startsWith(prefix + "ban")){
    let member = message.mentions.members.first();
    if (message.member.hasPermission("BAN_MEMBERS")){
        member.ban().then((member) => {
        message.channel.send({embed: {
          title: "Successful",
          color: 3447003,
          description: `${member.user.username} has succesfully be banned from ${message.guild.name} `
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
          title: "Succesfull",
          color: 3447003,
          description: `${member.user.username} has succesfully be kicked from ${message.guild.name} `
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
    /*message.channel.send({embed: {
      title: "Game",
      color: 3447003,
      description: `Game of the bot has been changed to "${argument} "!`
    }});*/
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
    message.channel.sendMessage(member.user.avatarURL);
    message.delete();
  }


 



  
  
  // !summon (puts the bot in the channel you're in)


  //if (msg.startsWith(prefix + "summon")){
    //if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
      //messge.channel.sendMessage("Connected");
    //})

  //}




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
        title: "Invite code",
        url: "https://discordapp.com/api/oauth2/authorize?client_id=443053206071934997&permissions=0&scope=bot",
        description: "The prefix of this server is \"!\"\n\nMaasBot is a discord bot created by © MaasDev's",
        fields: [{
            name: "MaasDev's website",
            value: "[Website](http://maasdevs.orgfree.com/)"
          },
          {
            name: "WIP",
            value: "-",
            inline: true
          },
          {
            name: "WIP",
            value: "-",
            inline: true
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

    // !kijken
    /*if (message.content.startsWith("kijken")){
      message.channel.send({embed: {
        title:'Error',
        color: 3447003,
        description: "Pretty sure you mean: \"koenkeloeren \" \n \n Inside joke, don't cry if you don't get it."
      }})
    }*/
});






// Bot 
client.login(process.env.BOT_TOKEN); 
