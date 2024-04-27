export interface Message{
    id: string;
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: number;
    updatedAt: number;
}

export interface Conversation{
    id?: string;
    participants: string[];
    messages?: string[];
    createdAt?: number;
    updatedAt?: number;

}