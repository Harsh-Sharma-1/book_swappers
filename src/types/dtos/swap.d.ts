export type SwapRequestDto = {
    book_id: string;
    book_name: string;
    book_data_id: string;
    sender_name: string;
    reciever_name: string;
    sender_id: string;
    reciever_id: string;
    status: boolean;
    offered_book_id: string;
    offered_book_data: any;
    sender_address: number;
};
