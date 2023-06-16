/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute, HttpStatusCodeLiteral, TsoaResponse, fetchMiddlewares } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AvailableHeroesController } from './../src/Contexts/AvailableHeroes/Infrastructure/controllers/AvailableHeroes.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HeroController } from './../src/Contexts/Heroes/Hero/Infrastructure/Controller/Hero.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NatureController } from './../src/Contexts/Heroes/Nature/Infrastructure/Controller/Nature.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { RarityController } from './../src/Contexts/Heroes/Rarity/Infrastructure/Controller/Rarity.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StatsController } from './../src/Contexts/Heroes/Stats/Infrastructure/Controller/Stats.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TypeController } from './../src/Contexts/Heroes/Type/Infrastructure/Controller/Type.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PlayerController } from './../src/Contexts/Player/Players/Infrastructure/controllers/Player.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WalletController } from './../src/Contexts/Player/Wallet/Infrastructure/controllers/Wallet.controller';
import type { RequestHandler, Router } from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "AvailableHeroes": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "world": {"dataType":"string","required":true},
            "avatar": {"dataType":"string","required":true},
            "avatarBlock": {"dataType":"string","required":true},
            "rarityId": {"dataType":"double","required":true},
            "natureId": {"dataType":"double","required":true},
            "typeId": {"dataType":"double","required":true},
            "attackMin": {"dataType":"double","required":true},
            "attackMax": {"dataType":"double","required":true},
            "attackBstMin": {"dataType":"double","required":true},
            "attackBstMax": {"dataType":"double","required":true},
            "defenseMin": {"dataType":"double","required":true},
            "defenseMax": {"dataType":"double","required":true},
            "defenseBstMin": {"dataType":"double","required":true},
            "defenseBstMax": {"dataType":"double","required":true},
            "hpMin": {"dataType":"double","required":true},
            "hpMax": {"dataType":"double","required":true},
            "hpBstMin": {"dataType":"double","required":true},
            "hpBstMax": {"dataType":"double","required":true},
            "sp_attackMin": {"dataType":"double","required":true},
            "sp_attackMax": {"dataType":"double","required":true},
            "sp_attackBstMin": {"dataType":"double","required":true},
            "sp_attackBstMax": {"dataType":"double","required":true},
            "sp_defenseMin": {"dataType":"double","required":true},
            "sp_defenseMax": {"dataType":"double","required":true},
            "sp_defenseBstMin": {"dataType":"double","required":true},
            "sp_defenseBstMax": {"dataType":"double","required":true},
            "speedMin": {"dataType":"double","required":true},
            "speedMax": {"dataType":"double","required":true},
            "speedBstMin": {"dataType":"double","required":true},
            "speedBstMax": {"dataType":"double","required":true},
            "farmingMin": {"dataType":"double","required":true},
            "farmingMax": {"dataType":"double","required":true},
            "farmingBstMin": {"dataType":"double","required":true},
            "farmingBstMax": {"dataType":"double","required":true},
            "steelingMin": {"dataType":"double","required":true},
            "steelingMax": {"dataType":"double","required":true},
            "steelingBstMin": {"dataType":"double","required":true},
            "steelingBstMax": {"dataType":"double","required":true},
            "woodingMin": {"dataType":"double","required":true},
            "woodingMax": {"dataType":"double","required":true},
            "woodingBstMin": {"dataType":"double","required":true},
            "woodingBstMax": {"dataType":"double","required":true},
            "catchRate": {"dataType":"double","required":true},
            "created_at": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Nature": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "boost_attack": {"dataType":"double","required":true},
            "boost_defense": {"dataType":"double","required":true},
            "boost_hp": {"dataType":"double","required":true},
            "boost_sp_attack": {"dataType":"double","required":true},
            "boost_sp_defense": {"dataType":"double","required":true},
            "boost_speed": {"dataType":"double","required":true},
            "boost_farming": {"dataType":"double","required":true},
            "boost_steeling": {"dataType":"double","required":true},
            "boost_wooding": {"dataType":"double","required":true},
            "created_at": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Rarity": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "avatar": {"dataType":"string","required":true},
            "created_at": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Type": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Stats": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"double","required":true},
            "heroId": {"dataType":"string","required":true},
            "attack": {"dataType":"double","required":true},
            "defense": {"dataType":"double","required":true},
            "hp": {"dataType":"double","required":true},
            "sp_attack": {"dataType":"double","required":true},
            "sp_defense": {"dataType":"double","required":true},
            "speed": {"dataType":"double","required":true},
            "farming": {"dataType":"double","required":true},
            "steeling": {"dataType":"double","required":true},
            "wooding": {"dataType":"double","required":true},
            "attackBst": {"dataType":"double","required":true},
            "defenseBst": {"dataType":"double","required":true},
            "hpBst": {"dataType":"double","required":true},
            "sp_attackBst": {"dataType":"double","required":true},
            "sp_defenseBst": {"dataType":"double","required":true},
            "speedBst": {"dataType":"double","required":true},
            "farmingBst": {"dataType":"double","required":true},
            "steelingBst": {"dataType":"double","required":true},
            "woodingBst": {"dataType":"double","required":true},
            "created_at": {"dataType":"datetime","required":true},
            "power_points": {"dataType":"double","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Hero": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "playerId": {"dataType":"string","required":true},
            "level": {"dataType":"double","required":true},
            "Experience": {"dataType":"double","required":true},
            "id_placement": {"dataType":"double","required":true},
            "name": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "world": {"dataType":"string","required":true},
            "avatar": {"dataType":"string","required":true},
            "created_at": {"dataType":"datetime","required":true},
            "nature": {"ref":"Nature","required":true},
            "rarity": {"ref":"Rarity","required":true},
            "type": {"ref":"Type","required":true},
            "stats": {"ref":"Stats","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Player": {
        "dataType": "refObject",
        "properties": {
            "id": {"dataType":"string","required":true},
            "googleId": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "facebookId": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "appleId": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "mail": {"dataType":"string","required":true},
            "nickname": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "firstname": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "lastname": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "phrase": {"dataType":"union","subSchemas":[{"dataType":"string"},{"dataType":"enum","enums":[null]}],"required":true},
            "coins": {"dataType":"double","required":true},
            "diamonds": {"dataType":"double","required":true},
            "experience": {"dataType":"double","required":true},
            "level": {"dataType":"double","required":true},
            "avatar": {"dataType":"string","required":true},
            "avatarBlock": {"dataType":"string","required":true},
            "hasBattlePass": {"dataType":"boolean","required":true},
            "hasYearPass": {"dataType":"boolean","required":true},
            "loginDays": {"dataType":"double","required":true},
            "lastLogin": {"dataType":"datetime","required":true},
            "isActive": {"dataType":"boolean","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Wallet": {
        "dataType": "refObject",
        "properties": {
            "exp_rarity": {"dataType":"double","required":true},
            "exp_quantity": {"dataType":"double","required":true},
            "gameId": {"dataType":"double","required":true},
            "playerId": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
        app.post('/availableHeroes/findById',
            ...(fetchMiddlewares<RequestHandler>(AvailableHeroesController)),
            ...(fetchMiddlewares<RequestHandler>(AvailableHeroesController.prototype.playerFindById)),

            function AvailableHeroesController_playerFindById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new AvailableHeroesController();


              const promise = controller.playerFindById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/hero/add',
            ...(fetchMiddlewares<RequestHandler>(HeroController)),
            ...(fetchMiddlewares<RequestHandler>(HeroController.prototype.create)),

            function HeroController_create(request: any, response: any, next: any) {
            const args = {
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new HeroController();


              const promise = controller.create.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/hero/findById',
            ...(fetchMiddlewares<RequestHandler>(HeroController)),
            ...(fetchMiddlewares<RequestHandler>(HeroController.prototype.findById)),

            function HeroController_findById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new HeroController();


              const promise = controller.findById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/hero/numbers',
            ...(fetchMiddlewares<RequestHandler>(HeroController)),
            ...(fetchMiddlewares<RequestHandler>(HeroController.prototype.probabilities)),

            function HeroController_probabilities(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new HeroController();


              const promise = controller.probabilities.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/nature/add',
            ...(fetchMiddlewares<RequestHandler>(NatureController)),
            ...(fetchMiddlewares<RequestHandler>(NatureController.prototype.create)),

            function NatureController_create(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"created_at":{"dataType":"datetime","required":true},"boost_wooding":{"dataType":"double","required":true},"boost_steeling":{"dataType":"double","required":true},"boost_farming":{"dataType":"double","required":true},"boost_speed":{"dataType":"double","required":true},"boost_sp_defense":{"dataType":"double","required":true},"boost_sp_attack":{"dataType":"double","required":true},"boost_hp":{"dataType":"double","required":true},"boost_defense":{"dataType":"double","required":true},"boost_attack":{"dataType":"double","required":true},"description":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new NatureController();


              const promise = controller.create.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/nature/findById',
            ...(fetchMiddlewares<RequestHandler>(NatureController)),
            ...(fetchMiddlewares<RequestHandler>(NatureController.prototype.findById)),

            function NatureController_findById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new NatureController();


              const promise = controller.findById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/rarity/add',
            ...(fetchMiddlewares<RequestHandler>(RarityController)),
            ...(fetchMiddlewares<RequestHandler>(RarityController.prototype.create)),

            function RarityController_create(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"created_at":{"dataType":"datetime","required":true},"avatar":{"dataType":"string","required":true},"description":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RarityController();


              const promise = controller.create.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/rarity/findById',
            ...(fetchMiddlewares<RequestHandler>(RarityController)),
            ...(fetchMiddlewares<RequestHandler>(RarityController.prototype.findById)),

            function RarityController_findById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new RarityController();


              const promise = controller.findById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/stats/add',
            ...(fetchMiddlewares<RequestHandler>(StatsController)),
            ...(fetchMiddlewares<RequestHandler>(StatsController.prototype.create)),

            function StatsController_create(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"power_points":{"dataType":"double","required":true},"created_at":{"dataType":"datetime","required":true},"woodingBst":{"dataType":"double","required":true},"steelingBst":{"dataType":"double","required":true},"farmingBst":{"dataType":"double","required":true},"speedBst":{"dataType":"double","required":true},"sp_defenseBst":{"dataType":"double","required":true},"sp_attackBst":{"dataType":"double","required":true},"hpBst":{"dataType":"double","required":true},"defenseBst":{"dataType":"double","required":true},"attackBst":{"dataType":"double","required":true},"wooding":{"dataType":"double","required":true},"steeling":{"dataType":"double","required":true},"farming":{"dataType":"double","required":true},"speed":{"dataType":"double","required":true},"sp_defense":{"dataType":"double","required":true},"sp_attack":{"dataType":"double","required":true},"hp":{"dataType":"double","required":true},"defense":{"dataType":"double","required":true},"attack":{"dataType":"double","required":true},"heroId":{"dataType":"string","required":true},"_id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StatsController();


              const promise = controller.create.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/stats/findById',
            ...(fetchMiddlewares<RequestHandler>(StatsController)),
            ...(fetchMiddlewares<RequestHandler>(StatsController.prototype.findById)),

            function StatsController_findById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new StatsController();


              const promise = controller.findById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/type/add',
            ...(fetchMiddlewares<RequestHandler>(TypeController)),
            ...(fetchMiddlewares<RequestHandler>(TypeController.prototype.createType)),

            function TypeController_createType(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"description":{"dataType":"string","required":true},"name":{"dataType":"string","required":true},"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TypeController();


              const promise = controller.createType.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/type/findById',
            ...(fetchMiddlewares<RequestHandler>(TypeController)),
            ...(fetchMiddlewares<RequestHandler>(TypeController.prototype.findById)),

            function TypeController_findById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new TypeController();


              const promise = controller.findById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/add',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.addPlayer)),

            function PlayerController_addPlayer(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"hasYearPass":{"dataType":"boolean","required":true},"hasBattlePass":{"dataType":"boolean","required":true},"createdAt":{"dataType":"datetime","required":true},"isActive":{"dataType":"boolean","required":true},"lastLogin":{"dataType":"datetime","required":true},"loginDays":{"dataType":"double","required":true},"avatarBlock":{"dataType":"string","required":true},"avatar":{"dataType":"string","required":true},"level":{"dataType":"double","required":true},"experience":{"dataType":"double","required":true},"diamonds":{"dataType":"double","required":true},"coins":{"dataType":"double","required":true},"phrase":{"dataType":"string","required":true},"lastname":{"dataType":"string","required":true},"firstname":{"dataType":"string","required":true},"nickname":{"dataType":"string","required":true},"mail":{"dataType":"string","required":true},"appleId":{"dataType":"string","required":true},"facebookId":{"dataType":"string","required":true},"googleId":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.addPlayer.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/findById',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerFindById)),

            function PlayerController_playerFindById(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerFindById.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/deactivate',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerDeactivate)),

            function PlayerController_playerDeactivate(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerDeactivate.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateLastLogin',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateLastLogin)),

            function PlayerController_playerUpdateLastLogin(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateLastLogin.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateAvatar',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateAvatar)),

            function PlayerController_playerUpdateAvatar(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"avatar":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateAvatar.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateAvatarBlock',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateAvatarBlock)),

            function PlayerController_playerUpdateAvatarBlock(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"avatarBlock":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateAvatarBlock.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateIds',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateIds)),

            function PlayerController_playerUpdateIds(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"appleId":{"dataType":"string","required":true},"facebookId":{"dataType":"string","required":true},"googleId":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateIds.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateNames',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateNames)),

            function PlayerController_playerUpdateNames(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"lastName":{"dataType":"string","required":true},"firstName":{"dataType":"string","required":true},"nickName":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateNames.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/updateMail',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerUpdateMail)),

            function PlayerController_playerUpdateMail(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"mail":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerUpdateMail.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addCoins',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerAddCoins)),

            function PlayerController_playerAddCoins(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"coins":{"dataType":"double","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerAddCoins.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addDiamonds',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerAddDiamons)),

            function PlayerController_playerAddDiamons(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"diamonds":{"dataType":"double","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerAddDiamons.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addExperience',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerAddExperience)),

            function PlayerController_playerAddExperience(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"experience":{"dataType":"double","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerAddExperience.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addPhrase',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerAddPhrase)),

            function PlayerController_playerAddPhrase(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"phrase":{"dataType":"string","required":true},"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerAddPhrase.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addBattlePass',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerAddBattlePass)),

            function PlayerController_playerAddBattlePass(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerAddBattlePass.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/player/addYearPass',
            ...(fetchMiddlewares<RequestHandler>(PlayerController)),
            ...(fetchMiddlewares<RequestHandler>(PlayerController.prototype.playerYearPass)),

            function PlayerController_playerYearPass(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"id":{"dataType":"string","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new PlayerController();


              const promise = controller.playerYearPass.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/wallet/create',
            ...(fetchMiddlewares<RequestHandler>(WalletController)),
            ...(fetchMiddlewares<RequestHandler>(WalletController.prototype.createWallet)),

            function WalletController_createWallet(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"playerId":{"dataType":"string","required":true},"gameId":{"dataType":"double","required":true},"exp_quantity":{"dataType":"double","required":true},"exp_rarity":{"dataType":"double","required":true},"_id":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new WalletController();


              const promise = controller.createWallet.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/wallet/findByPlayerId',
            ...(fetchMiddlewares<RequestHandler>(WalletController)),
            ...(fetchMiddlewares<RequestHandler>(WalletController.prototype.findWalletsByPlayerId)),

            function WalletController_findWalletsByPlayerId(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"playerId":{"dataType":"string","required":true},"gameId":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new WalletController();


              const promise = controller.findWalletsByPlayerId.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/wallet/findByPlayerIdRarity',
            ...(fetchMiddlewares<RequestHandler>(WalletController)),
            ...(fetchMiddlewares<RequestHandler>(WalletController.prototype.findWalletsByPlayerIdRarity)),

            function WalletController_findWalletsByPlayerIdRarity(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"exp_rarity":{"dataType":"double","required":true},"playerId":{"dataType":"string","required":true},"gameId":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new WalletController();


              const promise = controller.findWalletsByPlayerIdRarity.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        app.post('/wallet/addExperience',
            ...(fetchMiddlewares<RequestHandler>(WalletController)),
            ...(fetchMiddlewares<RequestHandler>(WalletController.prototype.addExperience)),

            function WalletController_addExperience(request: any, response: any, next: any) {
            const args = {
                    requestBody: {"in":"body","name":"requestBody","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"_exp_quantity":{"dataType":"double","required":true},"exp_rarity":{"dataType":"double","required":true},"playerId":{"dataType":"string","required":true},"gameId":{"dataType":"double","required":true}}},
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request, response);

                const controller = new WalletController();


              const promise = controller.addExperience.apply(controller, validatedArgs as any);
              promiseHandler(controller, promise, response, undefined, next);
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, successStatus: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode = successStatus;
                let headers;
                if (isController(controllerObj)) {
                    headers = controllerObj.getHeaders();
                    statusCode = controllerObj.getStatus() || statusCode;
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                returnHandler(response, statusCode, data, headers)
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function returnHandler(response: any, statusCode?: number, data?: any, headers: any = {}) {
        if (response.headersSent) {
            return;
        }
        Object.keys(headers).forEach((name: string) => {
            response.set(name, headers[name]);
        });
        if (data && typeof data.pipe === 'function' && data.readable && typeof data._read === 'function') {
            response.status(statusCode || 200)
            data.pipe(response);
        } else if (data !== null && data !== undefined) {
            response.status(statusCode || 200).json(data);
        } else {
            response.status(statusCode || 204).end();
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function responder(response: any): TsoaResponse<HttpStatusCodeLiteral, unknown>  {
        return function(status, data, headers) {
            returnHandler(response, status, data, headers);
        };
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any, response: any): any[] {
        const fieldErrors: FieldErrors  = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'queries':
                    return validationService.ValidateParam(args[key], request.query, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', {"noImplicitAdditionalProperties":"throw-on-extras"});
                case 'formData':
                    if (args[key].dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.file, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else if (args[key].dataType === 'array' && args[key].array.dataType === 'file') {
                        return validationService.ValidateParam(args[key], request.files, name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    } else {
                        return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, undefined, {"noImplicitAdditionalProperties":"throw-on-extras"});
                    }
                case 'res':
                    return responder(response);
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
