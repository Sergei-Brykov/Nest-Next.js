import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Track} from "./track.schema";

export type CommentDocument = Comment & mongoose.Document;

@Schema()
export class Comment {
    @Prop({ required: true })
    userName: string;

    @Prop({ required: true })
    text: string;

    @Prop({type: mongoose.Schema.Types.ObjectId})
    track: Track;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);