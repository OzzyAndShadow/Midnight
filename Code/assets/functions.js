const { MessageMentions: { USERS_PATTERN } } = require('discord.js');

module.exports = {
    getUserFromMention(mention, client) {
    	// The id is the first and only match found by the RegEx.
    	const matches = String(mention).matchAll(USERS_PATTERN).next().value;

    	// If supplied variable was not a mention, matches will be null instead of an array.
    	if (!matches) {
            if(!mention.guild.members.cache.get(mention.content.split(' ')[1]))  return mention.author
            return mention.guild.members.cache.get(mention.content.split(' ')[1])
        }
    	// The first element in the matches array will be the entire mention, not just the ID,
    	// so use index 1.
    	const id = matches[1];

	    return client.users.cache.get(id);
    }
}