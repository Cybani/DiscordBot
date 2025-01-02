const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'MTMxNjY4NTk3MjAxNjIwMTc4OQ.Glhz11.C2IJqbgLbmDamroPC4mMHHAwFjWV_r3dpBLMUc';
const CORRECT_ANSWER_1 = 'B';
const première_étape = '1290355676828274751';
const CORRECT_ANSWER_2 = 'B';
const deuxième_étape = '1316710081127120926';
const CORRECT_ANSWER_3 = 'C';
const troisième_étape = '1316712399587246162';
const CORRECT_ANSWER_4 = 'C';
const quatrième_étape = '1316713192965148673';
const CORRECT_ANSWER_5 = 'D';
const cinquième_étape = '1316713225361948675';
const CORRECT_ANSWER_6 = 'C';
const sixième_étape = '1316713402088947733';
const CORRECT_ANSWER_7 = 'D';
const septième_étape = '1316713442740273215';
const CORRECT_ANSWER_8 = 'A';
const huitième_étape = '1316713490865459241';
const CORRECT_ANSWER_9 = 'B';
const neuvième_étape = '1316713594079019079';
const CORRECT_ANSWER_10 = 'A';
const dixième_étape = '1316713673531719760';
const CORRECT_ANSWER_11 = 'C';
const onzième_étape = '1316718769141448755';
const CORRECT_ANSWER_12 = 'D';
const douzième_étape = '1316718825672020021';
const CORRECT_ANSWER_13 = 'B';
const treizième_étape = '1316718861923520512';
const CORRECT_ANSWER_14 = 'B';
const quatorzième_étape = '1316718901152976896';
const CORRECT_ANSWER_15 = 'B';
const quinzième_étape = '1316718921398747178';
const CORRECT_ANSWER_16 = 'B';
const seizième_étape = '1316718939178270800';
const CORRECT_ANSWER_17 = 'A';
const dixseptième_étape = '1316718960699510805';
const CORRECT_ANSWER_18 = 'A';
const dixhuitième_étape = '1316718987488530482';
const CORRECT_ANSWER_19 = 'B';
const dixneuvième_étape = '1316719009151975444';

client.once('ready', () => {
    console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.channel.id === première_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_1) {
            message.channel.send('Bonne réponse');
        } else {
            message.channel.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === deuxième_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_2) {
            message.channel.send('Bonne réponse');
        } else {
            message.channel.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === troisième_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_3) {
            message.channel.send('Bonne réponse');
        } else {
            message.channel.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === "quatrième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_4) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "cinquième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_5) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "sixième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_6) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "septième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_7) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "huitième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_8) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "neuvième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_9) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "dixième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_10) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}	
     }

    if (message.channel.id === "onzième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_11) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "douzième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_12) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "treizième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_13) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "quartorzième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_14) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "quinzième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_15) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "seizième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_16) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "dixseptième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_17) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === "dixhuitième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_18) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }
    if (message.channel.id === "dixneuvième_étape" && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_19) {
        	message.channel.send('Bonne réponse');
    	} else {
        	message.channel.send('Mauvaise réponse');
    	}
    }

});

client.login(TOKEN);

