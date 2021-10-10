import { PodcastsService } from './podcasts.service';
import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
export declare class PodcastsController {
    private readonly podcastsService;
    constructor(podcastsService: PodcastsService);
    create(createPodcastDto: CreatePodcastDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePodcastDto: UpdatePodcastDto): string;
    remove(id: string): string;
}
