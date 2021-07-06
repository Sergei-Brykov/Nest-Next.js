import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import {Comment} from "./comment.schema";

export type TrackDocument = Track & mongoose.Document;

@Schema()
export class Track {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    artist: string;

    @Prop()
    text: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]})
    comments: Comment[];
}

export const TrackSchema = SchemaFactory.createForClass(Track);