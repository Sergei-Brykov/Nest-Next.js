import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Track, TrackDocument} from "./schema/track.schema";
import {Model, ObjectId} from "mongoose";
import {Comment, CommentDocument} from "./schema/comment.schema";
import {CreateTrackDto} from "./dto/create-track.dto";
import {CreateCommentDto} from "./dto/create-comment.dto";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<TrackDocument>,
                @InjectModel(Comment.name) private commentModel: Model<CommentDocument>) {
    }


    async create(dto: CreateTrackDto, audio, picture): Promise<Track> {
        return await this.trackModel.create({...dto, listens: 0, audio, picture})
    }

    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find({});
        return tracks
    }

    async getOne(id: ObjectId): Promise<Track | null> {
        const track = await this.trackModel.findById(id).populate("comments")
        console.log(track)
        return track
    }

    async delete(id: ObjectId) {
        const track = await this.trackModel.findByIdAndDelete(id)
        return track._id
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        const track = await this.trackModel.findById(dto.trackId)
        const comment = await this.commentModel.create({...dto})
        track.comments.push(comment._id)
        await track.save()
        return comment
    }
}