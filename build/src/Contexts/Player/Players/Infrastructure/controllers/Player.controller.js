"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerController = void 0;
const PlayerCreateUseCase_1 = require("../../Application/PlayerCreateUseCase");
const PlayerFindByIdUseCase_1 = require("../../Application/PlayerFindByIdUseCase");
const PlayerDeactivateUseCase_1 = require("../../Application/PlayerDeactivateUseCase");
const PlayerUpdateLastLoginUseCase_1 = require("../../Application/PlayerUpdateLastLoginUseCase");
const PlayerUpdateAvatarUseCaseUseCase_1 = require("../../Application/PlayerUpdateAvatarUseCaseUseCase");
const PlayerUpdateAvatarBlockUseCase_1 = require("../../Application/PlayerUpdateAvatarBlockUseCase");
const PlayerUpdateIdsUseCase_1 = require("../../Application/PlayerUpdateIdsUseCase");
const PlayerUpdateNamesUseCase_1 = require("../../Application/PlayerUpdateNamesUseCase");
const PlayerUpdateMail_1 = require("../../Application/PlayerUpdateMail");
const PlayerAddCoinsUseCase_1 = require("../../Application/PlayerAddCoinsUseCase");
const playerAddDiamonsUseCase_1 = require("../../Application/playerAddDiamonsUseCase");
const playerAddExperienceUseCase_1 = require("../../Application/playerAddExperienceUseCase");
const playerAddPhraseUseCase_1 = require("../../Application/playerAddPhraseUseCase");
const playerAddBattlePassUseCase_1 = require("../../Application/playerAddBattlePassUseCase");
const playerAddYearPassUseCase_1 = require("../../Application/playerAddYearPassUseCase");
const PlayerAlwaysFindByIdUseCase_1 = require("../../Application/PlayerAlwaysFindByIdUseCase");
const tsoa_1 = require("tsoa");
const PlayerRepositoryPrismaMySQL_1 = require("../PlayerRepositoryPrismaMySQL");
let PlayerController = class PlayerController extends tsoa_1.Controller {
    constructor() {
        super();
        var playerRepository = new PlayerRepositoryPrismaMySQL_1.PlayerRepositoryPrismaMySQL();
        this._playerService = new PlayerCreateUseCase_1.PlayerCreateUseCase(playerRepository);
        this._playerFindById = new PlayerFindByIdUseCase_1.PlayerFindByIdUseCase(playerRepository);
        this._playerDeactivate = new PlayerDeactivateUseCase_1.PlayerDeactivateUseCase(playerRepository);
        this._playerUpdateLastLogin = new PlayerUpdateLastLoginUseCase_1.PlayerUpdateLastLoginUseCase(playerRepository);
        this._playerUpdateAvatar = new PlayerUpdateAvatarUseCaseUseCase_1.PlayerUpdateAvatarUseCase(playerRepository);
        this._playerUpdateAvatarBlock = new PlayerUpdateAvatarBlockUseCase_1.PlayerUpdateAvatarBlockUseCase(playerRepository);
        this._playerUpdateIdsUseCase = new PlayerUpdateIdsUseCase_1.PlayerUpdateIdsUseCase(playerRepository);
        this._playerUpdateNamesUseCase = new PlayerUpdateNamesUseCase_1.PlayerUpdateNamesUseCase(playerRepository);
        this._playerUpdateMail = new PlayerUpdateMail_1.PlayerUpdateMail(playerRepository);
        this._playerAddCoinsUseCase = new PlayerAddCoinsUseCase_1.PlayerAddCoinsUseCase(playerRepository);
        this._playerAddDiamonsUseCase = new playerAddDiamonsUseCase_1.playerAddDiamonsUseCase(playerRepository);
        this._playerAddExperienceUseCase = new playerAddExperienceUseCase_1.playerAddExperienceUseCase(playerRepository);
        this._playerAddPhraseUseCase = new playerAddPhraseUseCase_1.playerAddPhraseUseCase(playerRepository);
        this._playerAddBattlePassUseCase = new playerAddBattlePassUseCase_1.playerAddBattlePassUseCase(playerRepository);
        this._playerAddYearPassUseCase = new playerAddYearPassUseCase_1.playerAddYearPassUseCase(playerRepository);
        this._playerAlwaysFindByIdUseCase = new PlayerAlwaysFindByIdUseCase_1.PlayerAlwaysFindByIdUseCase(playerRepository);
    }
    async addPlayer(requestBody) {
        const { id, googleId, facebookId, appleId, mail, nickname, firstname, lastname, phrase, coins, diamonds, experience, level, avatar, avatarBlock, hasBattlePass, hasYearPass, loginDays, lastLogin, isActive, createdAt } = requestBody;
        return await this._playerService.addPlayer(id, googleId, facebookId, appleId, mail, nickname, firstname, lastname, phrase, coins, diamonds, experience, level, avatar, avatarBlock, hasBattlePass, hasYearPass, loginDays, lastLogin, isActive, createdAt);
    }
    async playerFindById(requestBody) {
        const { id } = requestBody;
        return await this._playerFindById.playerFindById(id);
    }
    async playerAlwaysFindById(requestBody) {
        const { id } = requestBody;
        return await this._playerAlwaysFindByIdUseCase.playerAlwaysFindById(id);
    }
    async playerDeactivate(requestBody) {
        const { id } = requestBody;
        await this._playerDeactivate.playerDeactivate(id);
    }
    async playerUpdateLastLogin(requestBody) {
        const { id } = requestBody;
        await this._playerUpdateLastLogin.playerUpdateLastLogin(id);
    }
    async playerUpdateAvatar(requestBody) {
        const { id, avatar } = requestBody;
        await this._playerUpdateAvatar.playerUpdateAvatar(id, avatar);
    }
    async playerUpdateAvatarBlock(requestBody) {
        const { id, avatarBlock } = requestBody;
        await this._playerUpdateAvatarBlock.playerUpdateAvatarBlock(id, avatarBlock);
    }
    async playerUpdateIds(requestBody) {
        const { id, googleId, facebookId, appleId } = requestBody;
        await this._playerUpdateIdsUseCase.playerUpdateIds(id, googleId, facebookId, appleId);
    }
    async playerUpdateNames(requestBody) {
        const { id, nickName, firstName, lastName } = requestBody;
        await this._playerUpdateNamesUseCase.playerUpdateNames(id, nickName, firstName, lastName);
    }
    async playerUpdateMail(requestBody) {
        const { id, mail } = requestBody;
        await this._playerUpdateMail.playerUpdateMail(id, mail);
    }
    async playerAddCoins(requestBody) {
        const { id, coins } = requestBody;
        await this._playerAddCoinsUseCase.playerAddcoins(id, coins);
    }
    async playerAddDiamons(requestBody) {
        const { id, diamonds } = requestBody;
        await this._playerAddDiamonsUseCase.playerAddDiamonds(id, diamonds);
    }
    async playerAddExperience(requestBody) {
        const { id, experience } = requestBody;
        await this._playerAddExperienceUseCase.playerAddExperience(id, experience);
    }
    async playerAddPhrase(requestBody) {
        const { id, phrase } = requestBody;
        await this._playerAddPhraseUseCase.playerAddPhrase(id, phrase);
    }
    async playerAddBattlePass(requestBody) {
        const { id } = requestBody;
        await this._playerAddBattlePassUseCase.playeraddBatlePass(id);
    }
    async playerYearPass(requestBody) {
        const { id } = requestBody;
        await this._playerAddYearPassUseCase.playerAddYearPass(id);
    }
};
__decorate([
    (0, tsoa_1.Post)('/add'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "addPlayer", null);
__decorate([
    (0, tsoa_1.Post)('/findById'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerFindById", null);
__decorate([
    (0, tsoa_1.Post)('/findAlwaysById'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAlwaysFindById", null);
__decorate([
    (0, tsoa_1.Post)('/deactivate'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerDeactivate", null);
__decorate([
    (0, tsoa_1.Post)('/updateLastLogin'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateLastLogin", null);
__decorate([
    (0, tsoa_1.Post)('/updateAvatar'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateAvatar", null);
__decorate([
    (0, tsoa_1.Post)('/updateAvatarBlock'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateAvatarBlock", null);
__decorate([
    (0, tsoa_1.Post)('/updateIds'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateIds", null);
__decorate([
    (0, tsoa_1.Post)('/updateNames'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateNames", null);
__decorate([
    (0, tsoa_1.Post)('/updateMail'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerUpdateMail", null);
__decorate([
    (0, tsoa_1.Post)('/addCoins'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAddCoins", null);
__decorate([
    (0, tsoa_1.Post)('/addDiamonds'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAddDiamons", null);
__decorate([
    (0, tsoa_1.Post)('/addExperience'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAddExperience", null);
__decorate([
    (0, tsoa_1.Post)('/addPhrase'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAddPhrase", null);
__decorate([
    (0, tsoa_1.Post)('/addBattlePass'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerAddBattlePass", null);
__decorate([
    (0, tsoa_1.Post)('/addYearPass'),
    __param(0, (0, tsoa_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlayerController.prototype, "playerYearPass", null);
PlayerController = __decorate([
    (0, tsoa_1.Route)('player'),
    __metadata("design:paramtypes", [])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=Player.controller.js.map