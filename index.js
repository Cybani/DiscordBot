const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = '';

const CORRECT_ANSWER_1 = 'B';
const première_étape = '1290355676828274751';
const role2 = '1334099602877714432'; //donne le role du salon suivant

const CORRECT_ANSWER_2 = 'B';
const deuxième_étape = '1316710081127120926';
const role3 = '1334100095708430377';

const CORRECT_ANSWER_3 = 'C';
const troisième_étape = '1316712399587246162';
const role4 = '1334100319399055461';

const CORRECT_ANSWER_4 = 'C';
const quatrième_étape = '1316713192965148673';
const role5 = '1334102472351944770';

const CORRECT_ANSWER_5 = 'D';
const cinquième_étape = '1316713225361948675';
const role6 = '1334100782538293248';

const CORRECT_ANSWER_6 = 'C';
const sixième_étape = '1316713402088947733';
const role7 = '1334101004240687126';

const CORRECT_ANSWER_7 = 'D';
const septième_étape = '1316713442740273215';
const role8 = '1334101164840718377';

const CORRECT_ANSWER_8 = 'A';
const huitième_étape = '1316713490865459241';
const role9 = '1334101404649787402';

const CORRECT_ANSWER_9 = 'B';
const neuvième_étape = '1316713594079019079';
const role10 = '1334101613916454962';

const CORRECT_ANSWER_10 = 'A';
const dixième_étape = '1316713673531719760';
const role11 = '1334101769596309515';

const CORRECT_ANSWER_11 = 'C';
const onzième_étape = '1316718769141448755';
const role12 = '1334102030855311360';

const CORRECT_ANSWER_12 = 'D';
const douzième_étape = '1316718825672020021';
const role13 = '1334102135117447229';

const CORRECT_ANSWER_13 = 'B';
const treizième_étape = '1316718861923520512';
const role14 = '1334102277232918598';

const CORRECT_ANSWER_14 = 'B';
const quatorzième_étape = '1316718901152976896';
const role15 = '1334100560995028996';

const CORRECT_ANSWER_15 = 'B';
const quinzième_étape = '1316718921398747178';
const role16 = '1334102586521026702';

const CORRECT_ANSWER_16 = 'B';
const seizième_étape = '1316718939178270800';
const role17 = '1334102697263239259';

const CORRECT_ANSWER_17 = 'A';
const dixseptième_étape = '1316718960699510805';
const role18 = '1334102982014275595';

const CORRECT_ANSWER_18 = 'A';
const dixhuitième_étape = '1316718987488530482';
const role19 = '1334103111714734133';

const CORRECT_ANSWER_19 = 'B';
const dixneuvième_étape = '1316719009151975444';

client.once('ready', () => {
    console.log(`Bot connecté en tant que ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.channel.id === première_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_1) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role2)) {
                member.roles.add(role2)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
        } else {
            message.author.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === deuxième_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_2) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role3)) {
                member.roles.add(role3)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
        } else {
            message.author.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === troisième_étape && !message.author.bot) {
        if (message.content.trim() === CORRECT_ANSWER_3) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role4)) {
                member.roles.add(role4)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
        } else {
            message.author.send('Mauvaise réponse');
        }
    }
    if (message.channel.id === quatrième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_4) {
       	   message.author.send('Bonne réponse');
	   const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role5)) {
                member.roles.add(role5)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === cinquième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_5) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role6)) {
                member.roles.add(role6)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === sixième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_6) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role7)) {
                member.roles.add(role7)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === septième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_7) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role8)) {
                member.roles.add(role8)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === huitième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_8) {
            message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role9)) {
                member.roles.add(role9)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === neuvième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_9) {
       	    message.author.send('Bonne réponse');
	    const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role10)) {
                member.roles.add(role10)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === dixième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_10) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role11)) {
                member.roles.add(role11)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}	
     }

    if (message.channel.id === onzième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_11) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role12)) {
                member.roles.add(role12)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === douzième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_12) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role13)) {
                member.roles.add(role13)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === treizième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_13) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role14)) {
                member.roles.add(role14)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === quatorzième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_14) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role15)) {
                member.roles.add(role15)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === quinzième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_15) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role16)) {
                member.roles.add(role16)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === seizième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_16) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role17)) {
                member.roles.add(role17)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === dixseptième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_17) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role18)) {
                member.roles.add(role18)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

    if (message.channel.id === dixhuitième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_18) {
        	message.author.send('Bonne réponse');
		const member = message.guild.members.cache.get(message.author.id);
	    if (!member.roles.cache.has(role19)) {
                member.roles.add(role19)
                    .then(() => console.log(`Rôle ajouté à ${message.author.tag}`))
                    .catch(console.error);
            }
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }
    if (message.channel.id === dixneuvième_étape && !message.author.bot) {
    	if (message.content.trim() === CORRECT_ANSWER_19) {
        	message.author.send('Bonne réponse');
    	} else {
        	message.author.send('Mauvaise réponse');
    	}
    }

});

client.login(TOKEN);

