const fs = require('fs');
const got = require('got');
const gplay = require('google-play-scraper');
const moment = require('moment')
require('moment/locale/pt-br')

const DEBUG = process.env.NODE_ENV === 'development';
const discordWebhookUrl = process.env.DISCORD_WEBHOOK;

const appId = 'br.gov.sinesp.cidadao.android';
const releaseFile = `${appId}.release`;

async function notifyDiscord(data) {
    const updatedDate = moment(data.updated, 'x').format('DD [de] MMMM [de] YYYY');

    const payload = {
        "username": `Sinesp Watcher`,
        "avatar_url": data.icon,
        "content": `Nova Atualização **${data.version}** em **${updatedDate}**. ${data.recentChanges}`,
        "embeds": [{
            "thumbnail": {
                "url": data.icon
            },
            "fields": [
                { "name": "Data Atualização", "value": updatedDate },
                { "name": "Versão", "value": data.version },
                { "name": "Mudanças", "value": data.recentChanges },
            ],
            "footer": {
                "text": "código-fonte disponível em: https://github.com/gpedro/sinesp-watcher."
            }
        }]
    }

    if (DEBUG) {
        console.log(JSON.stringify(payload, null, 2));
        return;
    }

    await got.post(discordWebhookUrl, {
        body: payload,
        json: true
    });

    return payload;
}

function saveNewVersion(data) {
    fs.writeFileSync(releaseFile, JSON.stringify(data, null, 2))
}

function hasNewerVersion(version) {
    if (DEBUG) {
       return true;
    }

    if (!fs.existsSync(releaseFile)) {
        return true;
    }

    const file = JSON.parse(fs.readFileSync(releaseFile));
    if (file.hasOwnProperty('version')) {
        return file.version != version;
    }

    return true
}

(async () => {
    try {
        const { title, size, androidVersionText, icon, updated, version, recentChanges } = await gplay.app({ appId });
        if (hasNewerVersion(version)) {
            const data = { title, size, androidVersionText, updated, version, recentChanges };
            saveNewVersion(data);
            await notifyDiscord({ icon, ...data });
        }
    } catch (error) {
        console.log(error)
    }
})();