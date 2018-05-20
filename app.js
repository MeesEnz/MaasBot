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
    var argument = message.content.substr("roleinfo ".length);
    
    let Role = message.guild.roles.find("name", argument);
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
      value: `${Role}`
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
  
  
  
  // !test
  if (msg.startsWith(prefix + "test")){
    if (message.member.hasPermission("ADMINISTRATOR")){
      message.channel.sendMessage('Should work');
    }
    if (!message.member.hasPermission("ADMINISTRATOR")){
      message.channel.send({embed: {
        color: 3447003,
        description: "You do not have the required permissions to perform this action \n \n **Permission required: \"Administrator\"** "
      }});
    }
  }else


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
        description: "The prefix of this server is \"!\"\n\nMaasBot is a discord bot created by @MeesEnz#2770\nThe bot is still in major development and a list for all the available commands is being created.",
        fields: [{
            name: "ping",
            value: "Will reply with \"pong\" so you can see if the bot is working."
          },
          {
            name: "mathplus/mathminus/mathmultiply/mathdivide",
            value: "Will either add, subtract, multiply or divide the given numbers. There is no limit to the amount of numbers you can use, discord has a limit of 2000 characters by default."
          },
          {
            name: "say [sentence]",
            value: "Will repeat the given sentence or word(s)"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© MaasBot official"
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
    message.channel.sendMessage("Bar!");
  }

  //message.channel.send({embed: {
    //color: 3447003,
    //title: "Error",
    //description: "That is not a valid command."
  //}})
});

//kankerzooi

const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');


module.exports = function (client, options) {
	// Get all options.
	let PREFIX = (options && options.prefix) || '!';
	let GLOBAL = (options && options.global) || false;
	let MAX_QUEUE_SIZE = (options && options.maxQueueSize) || 20;
	let DEFAULT_VOLUME = (options && options.volume) || 50;
	let ALLOW_ALL_SKIP = (options && options.anyoneCanSkip) || false;
	let CLEAR_INVOKER = (options && options.clearInvoker) || false;
	let CHANNEL = (options && options.channel) || false;

	// Create an object of queues.
	let queues = {};

	// Catch message events.
	client.on('message', msg => {
		const message = msg.content.trim();

		// Check if the message is a command.
		if (message.toLowerCase().startsWith(PREFIX.toLowerCase())) {
			// Get the command and suffix.
			const command = message.substring(PREFIX.length).split(/[ \n]/)[0].toLowerCase().trim();
			const suffix = message.substring(PREFIX.length + command.length).trim();

			// Process the commands.
			switch (command) {
				case 'play':
					return play(msg, suffix);
				case 'skip':
					return skip(msg, suffix);
				case 'queue':
					return queue(msg, suffix);
				case 'pause':
					return pause(msg, suffix);
				case 'resume':
					return resume(msg, suffix);
				case 'volume':
					return volume(msg, suffix);
				case 'leave':
					return leave(msg, suffix);
				case 'clearqueue':
					return clearqueue(msg, suffix);
			}
			if (CLEAR_INVOKER) {
				msg.delete();
			}
		}
	});

	/**
	 * Checks if a user is an admin.
	 *
	 * @param {GuildMember} member - The guild member
	 * @returns {boolean} -
	 */
	function isAdmin(member) {
		return member.hasPermission("ADMINISTRATOR");
	}

	/**
	 * Checks if the user can skip the song.
	 *
	 * @param {GuildMember} member - The guild member
	 * @param {array} queue - The current queue
	 * @returns {boolean} - If the user can skip
	 */
	function canSkip(member, queue) {
		if (ALLOW_ALL_SKIP) return true;
		else if (queue[0].requester === member.id) return true;
		else if (isAdmin(member)) return true;
		else return false;
	}

	/**
	 * Gets the song queue of the server.
	 *
	 * @param {integer} server - The server id.
	 * @returns {object} - The song queue.
	 */
	function getQueue(server) {
		// Check if global queues are enabled.
		if (GLOBAL) server = '_'; // Change to global queue.

		// Return the queue.
		if (!queues[server]) queues[server] = [];
		return queues[server];
	}

	/**
	 * The command for adding a song to the queue.
	 *
	 * @param {Message} msg - Original message.
	 * @param {string} suffix - Command suffix.
	 * @returns {<promise>} - The response edit.
	 */
	function play(msg, suffix) {
		// Make sure the user is in a voice channel.
		if (!CHANNEL && msg.member.voiceChannel === undefined) return msg.channel.send(wrap('You\'re not in a voice channel.'));

		// Make sure the suffix exists.
		if (!suffix) return msg.channel.send(wrap('No video specified!'));

		// Get the queue.
		const queue = getQueue(msg.guild.id);

		// Check if the queue has reached its maximum size.
		if (queue.length >= MAX_QUEUE_SIZE) {
			return msg.channel.send(wrap('Maximum queue size reached!'));
		}

		// Get the video information.
		msg.channel.send(wrap('Searching...')).then(response => {
			var searchstring = suffix
			if (!suffix.toLowerCase().startsWith('http')) {
				searchstring = 'gvsearch1:' + suffix;
			}

			YoutubeDL.getInfo(searchstring, ['-q', '--no-warnings', '--force-ipv4'], (err, info) => {
				// Verify the info.
				if (err || info.format_id === undefined || info.format_id.startsWith('0')) {
					return response.edit(wrap('Invalid video!'));
				}

				info.requester = msg.author.id;

				// Queue the video.
				response.edit(wrap('Queued: ' + info.title)).then(() => {
					queue.push(info);
					// Play if only one element in the queue.
					if (queue.length === 1) executeQueue(msg, queue);
				}).catch(console.log);
			});
		}).catch(console.log);
	}


	/**
	 * The command for skipping a song.
	 *
	 * @param {Message} msg - Original message.
	 * @param {string} suffix - Command suffix.
	 * @returns {<promise>} - The response message.
	 */
	function skip(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) return msg.channel.send(wrap('No music being played.'));

		// Get the queue.
		const queue = getQueue(msg.guild.id);

		if (!canSkip(msg.member, queue)) return msg.channel.send(wrap('You cannot skip this as you didn\'t queue it.')).then((response) => {
			response.delete(5000);
		});

		// Get the number to skip.
		let toSkip = 1; // Default 1.
		if (!isNaN(suffix) && parseInt(suffix) > 0) {
			toSkip = parseInt(suffix);
		}
		toSkip = Math.min(toSkip, queue.length);

		// Skip.
		queue.splice(0, toSkip - 1);

		// Resume and stop playing.
		const dispatcher = voiceConnection.player.dispatcher;
		if (voiceConnection.paused) dispatcher.resume();
		dispatcher.end();

		msg.channel.send(wrap('Skipped ' + toSkip + '!'));
	}

	/**
	 * The command for listing the queue.
	 *
	 * @param {Message} msg - Original message.
	 * @param {string} suffix - Command suffix.
	 */
	function queue(msg, suffix) {
		// Get the queue.
		const queue = getQueue(msg.guild.id);

		// Get the queue text.
		const text = queue.map((video, index) => (
			(index + 1) + ': ' + video.title
		)).join('\n');

		// Get the status of the queue.
		let queueStatus = 'Stopped';
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection !== null) {
			const dispatcher = voiceConnection.player.dispatcher;
			queueStatus = dispatcher.paused ? 'Paused' : 'Playing';
		}

		// Send the queue and status.
		msg.channel.send(wrap('Queue (' + queueStatus + '):\n' + text));
	}

	
	function pause(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) return msg.channel.send(wrap('No music being played.'));

		if (!isAdmin(msg.member))
			return msg.channel.send(wrap('You are not authorized to use this.'));

		// Pause.
		msg.channel.send(wrap('Playback paused.'));
		const dispatcher = voiceConnection.player.dispatcher;
		if (!dispatcher.paused) dispatcher.pause();
	}

	
	function leave(msg, suffix) {
		if (isAdmin(msg.member)) {
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection === null) return msg.channel.send(wrap('I\'m not in any channel!.'));
			// Clear the queue.
			const queue = getQueue(msg.guild.id);
			queue.splice(0, queue.length);

			// End the stream and disconnect.
			voiceConnection.player.dispatcher.end();
			voiceConnection.disconnect();
		} else {
			msg.channel.send(wrap('You don\'t have permission to use that command!'));
		}
	}


	function clearqueue(msg, suffix) {
		if (isAdmin(msg.member)) {
			const queue = getQueue(msg.guild.id);

			queue.splice(0, queue.length);
			msg.channel.send(wrap('Queue cleared!'));
		} else {
			msg.channel.send(wrap('You don\'t have permission to use that command!'));
		}
	}


	function resume(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) return msg.channel.send(wrap('No music being played.'));

		if (!isAdmin(msg.member))
			return msg.channel.send(wrap('You are not authorized to use this.'));

		// Resume.
		msg.channel.send(wrap('Playback resumed.'));
		const dispatcher = voiceConnection.player.dispatcher;
		if (dispatcher.paused) dispatcher.resume();
	}

	
	function volume(msg, suffix) {
		// Get the voice connection.
		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
		if (voiceConnection === null) return msg.channel.send(wrap('No music being played.'));

		if (!isAdmin(msg.member))
			return msg.channel.send(wrap('You are not authorized to use this.'));

		// Get the dispatcher
		const dispatcher = voiceConnection.player.dispatcher;

		if (suffix > 200 || suffix < 0) return msg.channel.send(wrap('Volume out of range!')).then((response) => {
			response.delete(5000);
		});

		msg.channel.send(wrap("Volume set to " + suffix));
		dispatcher.setVolume((suffix/100));
	}

	
	function executeQueue(msg, queue) {
		// If the queue is empty, finish.
		if (queue.length === 0) {
			msg.channel.send(wrap('Playback finished.'));

			// Leave the voice channel.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection !== null) return voiceConnection.disconnect();
		}

		new Promise((resolve, reject) => {
			// Join the voice channel if not already in one.
			const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
			if (voiceConnection === null) {
				if (CHANNEL) {
					msg.guild.channels.find('name', CHANNEL).join().then(connection => {
						resolve(connection);
					}).catch((error) => {
						console.log(error);
					});

				// Check if the user is in a voice channel.
				} else if (msg.member.voiceChannel) {
					msg.member.voiceChannel.join().then(connection => {
						resolve(connection);
					}).catch((error) => {
						console.log(error);
					});
				} else {
					// Otherwise, clear the queue and do nothing.
					queue.splice(0, queue.length);
					reject();
				}
			} else {
				resolve(voiceConnection);
			}
		}).then(connection => {
			// Get the first item in the queue.
			const video = queue[0];

			console.log(video.webpage_url);

			// Play the video.
			msg.channel.send(wrap('Now Playing: ' + video.title)).then(() => {
				let dispatcher = connection.playStream(ytdl(video.webpage_url, {filter: 'audioonly'}), {seek: 0, volume: (DEFAULT_VOLUME/100)});

				connection.on('error', (error) => {
					// Skip to the next song.
					console.log(error);
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on('error', (error) => {
					// Skip to the next song.
					console.log(error);
					queue.shift();
					executeQueue(msg, queue);
				});

				dispatcher.on('end', () => {
					// Wait a second.
					setTimeout(() => {
						if (queue.length > 0) {
							// Remove the song from the queue.
							queue.shift();
							// Play the next song in the queue.
							executeQueue(msg, queue);
						}
					}, 1000);
				});
			}).catch((error) => {
				console.log(error);
			});
		}).catch((error) => {
			console.log(error);
		});
	}
}

function wrap(text) {
	return '```\n' + text.replace(/`/g, '`' + String.fromCharCode(8203)) + '\n```';
}




// Bot 
client.login(process.env.BOT_TOKEN); 
