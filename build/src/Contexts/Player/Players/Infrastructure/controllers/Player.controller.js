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
const PlayerFindById_1 = require("../../Application/PlayerFindById");
const PlayerDeactivate_1 = require("../../Application/PlayerDeactivate");
const PlayerUpdateLastLogin_1 = require("../../Application/PlayerUpdateLastLogin");
const PlayerUpdateAvatar_1 = require("../../Application/PlayerUpdateAvatar");
const PlayerUpdateAvatarBlock_1 = require("../../Application/PlayerUpdateAvatarBlock");
const tsoa_1 = require("tsoa");
const PlayerRepositoryPrismaMySQL_1 = require("../PlayerRepositoryPrismaMySQL");
let PlayerController = class PlayerController extends tsoa_1.Controller {
    constructor() {
        super();
        var playerRepository = new PlayerRepositoryPrismaMySQL_1.PlayerRepositoryPrismaMySQL();
        this._playerService = new PlayerCreateUseCase_1.PlayerCreateUseCase(playerRepository);
        this._playerFindById = new PlayerFindById_1.PlayerFindById(playerRepository);
        this._playerDeactivate = new PlayerDeactivate_1.PlayerDeactivate(playerRepository);
        this._playerUpdateLastLogin = new PlayerUpdateLastLogin_1.PlayerUpdateLastLogin(playerRepository);
        this._playerUpdateAvatar = new PlayerUpdateAvatar_1.PlayerUpdateAvatar(playerRepository);
        this._playerUpdateAvatarBlock = new PlayerUpdateAvatarBlock_1.PlayerUpdateAvatarBlock(playerRepository);
    }
    async addPlayer(requestBody) {
        const { id, googleId, facebookId, appleId, mail, nickname, firstname, lastname, phrase, coins, diamonds, experience, level, avatar, avatarBlock, loginDays, lastLogin, isActive, createdAt } = requestBody;
        return await this._playerService.addPlayer(id, googleId, facebookId, appleId, mail, nickname, firstname, lastname, phrase, coins, diamonds, experience, level, avatar, avatarBlock, loginDays, lastLogin, isActive, createdAt);
    }
    async playerFindById(requestBody) {
        const { id } = requestBody;
        return await this._playerFindById.playerFindById(id);
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
        const { id, avatar } = requestBody;
        await this._playerUpdateAvatarBlock.playerUpdateAvatarBlock(id, avatar);
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
PlayerController = __decorate([
    (0, tsoa_1.Route)('player'),
    __metadata("design:paramtypes", [])
], PlayerController);
exports.PlayerController = PlayerController;
//# sourceMappingURL=Player.controller.js.map