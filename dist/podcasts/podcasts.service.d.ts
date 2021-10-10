import { CreatePodcastDto } from './dto/create-podcast.dto';
import { UpdatePodcastDto } from './dto/update-podcast.dto';
export declare class PodcastsService {
    create(createPodcastDto: CreatePodcastDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePodcastDto: UpdatePodcastDto): string;
    remove(id: number): string;
}
