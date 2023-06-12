"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const PlayerGoogleId_1 = require("./value-object/PlayerGoogleId");
const PlayerFacebookId_1 = require("./value-object/PlayerFacebookId");
const PlayerAppleId_1 = require("./value-object/PlayerAppleId");
const PlayerMail_1 = require("./value-object/PlayerMail");
const PlayerNickname_1 = require("./value-object/PlayerNickname");
const PlayerFirstName_1 = require("./value-object/PlayerFirstName");
const PlayerLastName_1 = require("./value-object/PlayerLastName");
const PlayerPhrase_1 = require("./value-object/PlayerPhrase");
const PlayerCoins_1 = require("./value-object/PlayerCoins");
const PlayerDiamonds_1 = require("./value-object/PlayerDiamonds");
const PlayerExperience_1 = require("./value-object/PlayerExperience");
const PlayerLevel_1 = require("./value-object/PlayerLevel");
const PlayerAvatar_1 = require("./value-object/PlayerAvatar");
const PlayerAvatarBlock_1 = require("./value-object/PlayerAvatarBlock");
const PlayerLoginDays_1 = require("./value-object/PlayerLoginDays");
const uuid_1 = require("uuid");
class Player {
    constructor(__id, _googleId, _facebookId, _appleId, _mail, _nickname, _firstname, _lastname, _phrase, _coins, _diamonds, _experience, _level, _avatar, _avatarBlock, _loginDays, _lastLogin, _isActive, _createdAt) {
        if (!__id || __id == "0") {
            this.id = (0, uuid_1.v4)(); // Generar un UUID si no se proporciona un ID
        }
        else {
            this.id = __id; // Usar el ID especificado si se proporciona
        }
        this.googleId = new PlayerGoogleId_1.PlayerGoogleId(_googleId).getValue();
        this.facebookId = new PlayerFacebookId_1.PlayerFacebookId(_facebookId).getValue();
        this.appleId = new PlayerAppleId_1.PlayerAppleId(_appleId).getValue();
        this.mail = new PlayerMail_1.PlayerMail(_mail).value;
        this.nickname = new PlayerNickname_1.PlayerNickname(_nickname).getValue();
        this.firstname = new PlayerFirstName_1.PlayerFirstName(_firstname).getValue();
        this.lastname = new PlayerLastName_1.PlayerLastName(_lastname).getValue();
        this.phrase = new PlayerPhrase_1.PlayerPhrase(_phrase).getValue();
        this.coins = new PlayerCoins_1.PlayerCoins(_coins).getValue();
        this.diamonds = new PlayerDiamonds_1.PlayerDiamonds(_diamonds).getValue();
        this.experience = new PlayerExperience_1.PlayerExperience(_experience).getValue();
        this.level = new PlayerLevel_1.PlayerLevel(_level).getValue();
        this.avatar = new PlayerAvatar_1.PlayerAvatar(_avatar).getValue();
        this.avatarBlock = new PlayerAvatarBlock_1.PlayerAvatarBlock(_avatarBlock).getValue();
        this.loginDays = new PlayerLoginDays_1.PlayerLoginDays(_loginDays).getValue();
        this.lastLogin = _lastLogin;
        this.isActive = _isActive;
        this.createdAt = _createdAt;
    }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map