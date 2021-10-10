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
exports.PodcastsController = void 0;
const common_1 = require("@nestjs/common");
const podcasts_service_1 = require("./podcasts.service");
const create_podcast_dto_1 = require("./dto/create-podcast.dto");
const update_podcast_dto_1 = require("./dto/update-podcast.dto");
let PodcastsController = class PodcastsController {
    constructor(podcastsService) {
        this.podcastsService = podcastsService;
    }
    create(createPodcastDto) {
        return this.podcastsService.create(createPodcastDto);
    }
    findAll() {
        return this.podcastsService.findAll();
    }
    findOne(id) {
        return this.podcastsService.findOne(+id);
    }
    update(id, updatePodcastDto) {
        return this.podcastsService.update(+id, updatePodcastDto);
    }
    remove(id) {
        return this.podcastsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_podcast_dto_1.CreatePodcastDto]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_podcast_dto_1.UpdatePodcastDto]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PodcastsController.prototype, "remove", null);
PodcastsController = __decorate([
    (0, common_1.Controller)('podcasts'),
    __metadata("design:paramtypes", [podcasts_service_1.PodcastsService])
], PodcastsController);
exports.PodcastsController = PodcastsController;
//# sourceMappingURL=podcasts.controller.js.map