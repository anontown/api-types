export interface Client {
    id: string;
    name: string;
    url: string;
    user: string | null;
    date: string;
    update: string;
}

export interface History {
    id: string;
    topic: string;
    title: string;
    tags: string[];
    body: string;
    date: string;
    hash: string;
}

export type Res = ResNormal | ResHistory | ResTopic | ResFork | ResDelete;

export interface ResBase<T extends ResType> {
    id: string;
    topic: string;
    date: string;
    user: string | null;
    uv: number;
    dv: number;
    hash: string;
    replyCount: number;
    voteFlag: ResVoteFlag | null;
    type: T;
}



export interface ResNormal extends ResBase<'normal'> {
    name: string | null;
    body: string;
    reply: string | null;
    profile: string | null;
    isReply: boolean | null;
}

export interface ResHistory extends ResBase<'history'> {
    history: string;
}

export interface ResTopic extends ResBase<'topic'> {
}

export interface ResFork extends ResBase<'fork'> {
    fork: string;
}

export interface ResDelete extends ResBase<'delete'> {
    flag: 'self' | 'freeze';
}

export type ResVoteFlag = 'uv' | 'dv' | 'not';
export type ResType = 'normal' | 'history' | 'topic' | 'fork' | 'delete';

export interface Profile {
    id: string;
    user: string | null;
    name: string;
    body: string;
    date: string;
    update: string;
    sn: string;
}

export interface TopicBase<T extends TopicType> {
    id: string;
    title: string;
    update: string;
    date: string;
    resCount: number;
    type: T;
    active: boolean;
}

export interface TopicNormal extends TopicBase<'normal'> {
    tags: string[];
    body: string;
}

export interface TopicOne extends TopicBase<'one'> {
    tags: string[];
    body: string;
}

export interface TopicFork extends TopicBase<'fork'> {
    parent: string;
}

export type TopicType = 'normal' | 'one' | 'fork';
export type Topic = TopicOne | TopicNormal | TopicFork;
export interface Msg {
    id: string;
    receiver: string | null;
    body: string;
    date: string;
}


export type TokenType = 'master' | 'general';
export type Token = TokenGeneral | TokenMaster;

export interface TokenBase<T extends TokenType> {
    id: string;
    key: string;
    user: string;
    date: string;
    type: T;
}

export interface TokenMaster extends TokenBase<'master'> {
}

export interface TokenGeneral extends TokenBase<'general'> {
    client: string;
    active: boolean;
}
export interface User {
    id: string;
    sn: string;
}

export interface TokenReq {
    token: string;
    key: string;
}