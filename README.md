# Raxin
Raxin is a Discord bot that facilitates reaction polls.
![demonstration of Raxin in a Discord server](/demo.gif)

## Commands
| Command               | Purpose                                                                      |
| --------------------- | ---------------------------------------------------------------------------- |
| /poll                 | display commands                                                             |
| /poll Q               | post question **Q** with **yes**/**no** reactions                            |
| /poll Q, A1, A2, etc. | post question **Q** with **A1**, **A2**, etc. (up to 10) as answer reactions |

**Note:** Raxin will delete the post used to interact with Raxin

## Usage
Hosting locally:
1. On the command prompt/terminal, navigate to this folder
2. Run `node .` and a message should appear to signal the Bot is active

To host on the cloud, follow this [tutorial](https://medium.com/@mason.spr/hosting-a-discord-js-bot-for-free-using-heroku-564c3da2d23f)

## Installation Instructions
1. Download and unpack ZIP file
2. Create 'Raxin' as a new application in the [Discord developer portal](http://discord.com/developers/applications/)
3. Add a bot to the application (Settings > Bot > Add Bot) (Optional: use [Raxin.png](/Raxin.png) as the App Icon)
4. Copy the bot token
5. Replace TOKEN in line 12 of poll.js with the copied token
6. Copy the bot client ID (Settings > General Information)
7. Paste client ID into 'Client ID:' in the [Discord permissions calculator](https://discordapi.com/permissions.html#0)
8. Mark the 'Administrator' permission
9. Go to the link next to 'Link:' and choose the server you want to add the bot to!

## Dependencies
Node.js
